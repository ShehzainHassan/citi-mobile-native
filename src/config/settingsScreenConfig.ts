import { MainTabWithAuthAndSettingsParamList } from '@/navigation/types';

export interface SettingOptionConfig {
  id: string;
  labelKey: string;
  route?: keyof MainTabWithAuthAndSettingsParamList;
  hasChevron?: boolean;
  isAction?: boolean;
  type?: string;
}

export const SETTINGS_OPTIONS: SettingOptionConfig[] = [
  {
    id: 'password',
    labelKey: 'Password',
    route: 'ChangePassword',
  },
  {
    id: 'touchId',
    labelKey: 'Touch ID',
  },
  {
    id: 'languages',
    labelKey: 'Languages',
    route: 'Language',
  },
  {
    id: 'currency',
    labelKey: 'Change Currency',
    isAction: true,
    type: 'currency',
  },
  {
    id: 'appInfo',
    labelKey: 'App Information',
    route: 'AppInformation',
  },
  {
    id: 'customerCare',
    labelKey: 'Customer Care',
  },
  {
    id: 'theme',
    labelKey: 'Theme',
    route: 'ThemeSelector',
  },
];
