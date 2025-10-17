import { View } from 'react-native';
import { Input, Button } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { OtpInputRowProps } from './OtpInput.types';
import { useTheme } from '@/theme';
import { createOtpStyles } from './OtpInput.styles';

export const OtpInput = ({
  otp,
  onChangeOtp,
  disabled = false,
  onGetOtp,
}: OtpInputRowProps) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const styles = createOtpStyles(theme);
  return (
    <View style={[globalStyles.inputRow, globalStyles.noPadding]}>
      <View style={globalStyles.fillAll}>
        <Input
          value={otp}
          onChangeText={onChangeOtp}
          label="Get OTP to verify transaction"
          placeholder="OTP"
          keyboardType="phone-pad"
        />
      </View>
      <Button
        disabled={disabled}
        title="Get OTP"
        style={styles.marginTop}
        onPress={onGetOtp}
      />
    </View>
  );
};
