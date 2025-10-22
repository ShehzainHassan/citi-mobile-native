import React from 'react';
import { BaseModal } from '@/components/ui/Modal';
import { useCurrencySymbols } from '@/hooks/queries/useCurrencySymbols';
import { CurrencyModalProps } from './CurrencyModal.types';

export const CurrencyModal: React.FC<CurrencyModalProps> = ({
  visible,
  selectedCurrency,
  onClose,
  onSelect,
}) => {
  const { currencyOptions, loadingSymbols, getSelectedLabel } =
    useCurrencySymbols();
  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      header="Select Currency"
      contents={loadingSymbols ? ['Loading currencies...'] : currencyOptions}
      selectedItem={getSelectedLabel(selectedCurrency)}
      onSelect={onSelect}
    />
  );
};
