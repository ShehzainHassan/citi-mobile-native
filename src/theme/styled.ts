// Styled components with theme support
// Use this for creating styled components that access theme
// Example: const StyledButton = styled.TouchableOpacity`background: ${props => props.theme.colors.primary};`

// Note: This file structure is ready for styled-components or emotion
// Choose your preferred styling solution:

// Option 1: styled-components/native
// import styled from 'styled-components/native';
// export { styled };

// Option 2: emotion/native
// import styled from '@emotion/native';
// export { styled };

// Option 3: Custom styled function with theme access
export const createStyledComponent = (Component: any) => {
  // Custom implementation for theme-aware styled components
  // This allows: theme.colors.primary, theme.spacing.md, etc.
  return Component;
};

// Theme-aware style helpers
export const getThemeValue = (path: string, theme: any) => {
  return path.split('.').reduce((obj, key) => obj?.[key], theme);
};
