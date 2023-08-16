import { HopeThemeConfig } from '@hope-ui/solid';

// TODO: update primary colors to closer align with #24FF6F

export const config: HopeThemeConfig = {
  initialColorMode: 'system',
  lightTheme: {
    colors: {
      primary1: 'hsl(116, 50.0%, 98.9%)',
      primary2: 'hsl(120, 60.0%, 97.1%)',
      primary3: 'hsl(120, 53.6%, 94.8%)',
      primary4: 'hsl(121, 47.5%, 91.4%)',
      primary5: 'hsl(122, 42.6%, 86.5%)',
      primary6: 'hsl(124, 39.0%, 79.7%)',
      primary7: 'hsl(126, 37.1%, 70.2%)',
      primary8: 'hsl(131, 38.1%, 56.3%)',
      primary9: 'hsl(131, 41.0%, 46.5%)',
      primary10: 'hsl(132, 43.1%, 42.2%)',
      primary11: 'hsl(133, 50.0%, 32.5%)',
      primary12: 'hsl(130, 30.0%, 14.9%)',
      // Content
      contentNeutral: '$neutral1',
      contentNeutralSecondary: '$neutral3',
      // Border
      borderNeutral: '$neutral5',
      // Typography
      textSecondary: '$neutral10',
      // Focus
      focusRing: '#24FF6F', // TODO: update
    },
  },
  darkTheme: {
    colors: {
      primary1: 'hsl(146, 30.0%, 7.4%)',
      primary2: 'hsl(136, 33.3%, 8.8%)',
      primary3: 'hsl(137, 36.0%, 11.4%)',
      primary4: 'hsl(137, 37.6%, 13.7%)',
      primary5: 'hsl(136, 38.7%, 16.0%)',
      primary6: 'hsl(135, 39.6%, 19.1%)',
      primary7: 'hsl(134, 40.3%, 23.8%)',
      primary8: 'hsl(131, 40.1%, 30.8%)',
      primary9: 'hsl(131, 41.0%, 46.5%)',
      primary10: 'hsl(131, 39.0%, 52.1%)',
      primary11: 'hsl(131, 43.0%, 57.2%)',
      primary12: 'hsl(137, 72.0%, 94.0%)',
      // Content
      contentNeutral: '$neutral1',
      contentNeutralSecondary: '$neutral3',
      // Border
      borderNeutral: '$neutral5',
      // Typography
      textSecondary: '$neutral10',
      // Focus
      focusRing: '#24FF6F',
    },
  },
  components: {
    Anchor: {
      baseStyle: {
        borderRadius: '$sm',
        transition: 'color 0.25s ease-in-out, background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
      },
    },
  },
};
