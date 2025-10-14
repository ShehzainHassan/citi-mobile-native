import { useEffect, useState } from 'react';
import { getCurrencySymbols, getConversionRate } from '@/services';
import { formatCurrencyLabel } from '@/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RATE_CACHE_KEY = 'currency_rate_cache_v1';
const SYMBOLS_CACHE_KEY = 'currency_symbols_cache_v1';
const RATE_TTL = 1000 * 60 * 60;
const SYMBOLS_TTL = 1000 * 60 * 60 * 24;

type RateRecord = {
  value: number;
  ts: number;
};

let inMemoryRateCache: Record<string, RateRecord> = {};
let inMemorySymbolsCache: { map: Record<string, string> | null; ts: number } = {
  map: null,
  ts: 0,
};

export const useCurrencySelector = () => {
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [currencyMap, setCurrencyMap] = useState<Record<string, string>>({});
  const [loadingSymbols, setLoadingSymbols] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(SYMBOLS_CACHE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as {
            map: Record<string, string>;
            ts: number;
          };
          if (
            parsed?.map &&
            parsed?.ts &&
            Date.now() - parsed.ts < SYMBOLS_TTL
          ) {
            inMemorySymbolsCache.map = parsed.map;
            inMemorySymbolsCache.ts = parsed.ts;
            setCurrencyMap(parsed.map);
            const formatted = Object.entries(parsed.map).map(([code, name]) =>
              formatCurrencyLabel(code, name),
            );
            setCurrencyOptions(formatted);
            return;
          } else if (parsed?.map) {
            inMemorySymbolsCache.map = parsed.map;
            inMemorySymbolsCache.ts = parsed.ts;
            setCurrencyMap(parsed.map);
            const formatted = Object.entries(parsed.map).map(([code, name]) =>
              formatCurrencyLabel(code, name),
            );
            setCurrencyOptions(formatted);
          }
        }
      } catch (e) {}

      await refreshSymbols();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(RATE_CACHE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as Record<string, RateRecord>;
          inMemoryRateCache = parsed || {};
        }
      } catch (e) {}
    })();
  }, []);

  const refreshSymbols = async (): Promise<void> => {
    try {
      setLoadingSymbols(true);
      const symbols = (await getCurrencySymbols()) as Record<string, string>;
      if (symbols) {
        inMemorySymbolsCache.map = symbols;
        inMemorySymbolsCache.ts = Date.now();
        setCurrencyMap(symbols);
        const formatted = Object.entries(symbols).map(([code, name]) =>
          formatCurrencyLabel(code, name),
        );
        setCurrencyOptions(formatted);
        await AsyncStorage.setItem(
          SYMBOLS_CACHE_KEY,
          JSON.stringify({ map: symbols, ts: inMemorySymbolsCache.ts }),
        );
      }
    } catch (err) {
    } finally {
      setLoadingSymbols(false);
    }
  };

  const getRate = async (
    from: string,
    to: string,
    force = false,
  ): Promise<number | null> => {
    if (!from || !to) return null;
    const key = `${from}_${to}`;
    const cached = inMemoryRateCache[key];
    if (!force && cached && Date.now() - cached.ts < RATE_TTL) {
      return cached.value;
    }
    try {
      const rate = await getConversionRate(from, to);
      if (rate != null && !Number.isNaN(rate)) {
        inMemoryRateCache[key] = { value: rate, ts: Date.now() };
        try {
          await AsyncStorage.setItem(
            RATE_CACHE_KEY,
            JSON.stringify(inMemoryRateCache),
          );
        } catch (e) {}
        return rate;
      }
      return null;
    } catch (err) {
      if (cached) return cached.value;
      return null;
    }
  };

  const getSelectedLabel = (code: string) =>
    inMemorySymbolsCache.map && inMemorySymbolsCache.map[code]
      ? formatCurrencyLabel(code, inMemorySymbolsCache.map[code])
      : currencyMap[code]
      ? formatCurrencyLabel(code, currencyMap[code])
      : null;

  return {
    currencyOptions,
    loadingSymbols,
    getSelectedLabel,
    getRate,
    refreshSymbols,
    currencyMap,
  };
};
