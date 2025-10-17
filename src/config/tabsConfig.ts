import { HomeIcon, MessageIcon, SearchIcon, SettingsIcon } from '@/components';
import { TabKey } from '@/components/navigation/Tabs/Tabs.types';
import { TranslationKeys } from '@/i18n';

export const tabConfig: {
  key: TabKey;
  icon: React.FC<{ selected: boolean }>;
  labelKey: string;
}[] = [
  { key: 'Home', icon: HomeIcon, labelKey: TranslationKeys.tabs.home },
  { key: 'Search', icon: SearchIcon, labelKey: TranslationKeys.tabs.search },
  {
    key: 'Messages',
    icon: MessageIcon,
    labelKey: TranslationKeys.tabs.messages,
  },
  {
    key: 'Settings',
    icon: SettingsIcon,
    labelKey: TranslationKeys.tabs.settings,
  },
];
