import { createBeneficiaryStyles } from '@/styles/beneficiary.styles';
import { useTheme } from '@/theme';
import { useMemo } from 'react';

export const useBeneficiaryStyles = () => {
  const { theme } = useTheme();
  return useMemo(() => createBeneficiaryStyles(theme), [theme]);
};
