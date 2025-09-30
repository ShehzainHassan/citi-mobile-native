import { Text, View } from 'react-native';
import { Button } from './src/components/ui/Button/Button';
import { useStyles } from './src/hooks/useStyles';
import { ThemeProvider } from './src/theme/ThemeProvider';

function AppContent() {
  const { theme, globalStyles, isDark, toggleTheme } = useStyles();

  return (
    <View style={globalStyles.paddedContainer}>
      <Text style={globalStyles.heading1}>
        Citi Mobile Banking
      </Text>
      <Text style={globalStyles.bodyText}>
        Style System
      </Text>
      
      {/* Using custom Button component */}
      <Button
        title={`Switch to ${isDark ? 'Light' : 'Dark'} Theme`}
        onPress={toggleTheme}
        style={{ marginTop: theme.spacing.lg }}
      />

      {/* Banking-style balance card */}
      <View style={globalStyles.balanceCard}>
        <Text style={globalStyles.balanceAmount}>$12,345.67</Text>
        <Text style={[globalStyles.caption, { color: '#FFFFFF', opacity: 0.8 }]}>
          Available Balance
        </Text>
      </View>

      {/* Theme info card */}
      <View style={globalStyles.card}>
        <Text style={globalStyles.heading2}>Theme Information</Text>
        <Text style={globalStyles.bodyText}>
          Current Theme: {isDark ? 'Dark' : 'Light'}
        </Text>
        <Text style={globalStyles.caption}>
          Primary Color: {theme.colors.primary}
        </Text>
        <Text style={globalStyles.caption}>
          Spacing System: {theme.spacing.md}px base unit
        </Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

