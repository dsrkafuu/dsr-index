import {
  extendTheme,
  cookieStorageManagerSSR,
  localStorageManager,
  ChakraProvider as RawChakraProvider,
} from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      'html, body': {
        bg: props.colorMode === 'dark' ? '#2f3136' : '#f2f2f2',
      },
    }),
  },
  fonts: {
    heading: `Inter, -apple-system, BlinkMacSystemFont, 'Noto Sans SC', 'Noto Sans JP', sans-serif`,
    body: `Inter, -apple-system, BlinkMacSystemFont, 'Noto Sans SC', 'Noto Sans JP', sans-serif`,
    mono: `'Fira Code', 'Noto Sans SC', 'Noto Sans JP', monospace`,
  },
});

export interface ChakraProviderProps {
  cookies?: string;
  children?: React.ReactNode;
}

/**
 * wrapped ChakraProvider for color mode support of ssr rendering
 */
export function ChakraProvider({ cookies, children }: ChakraProviderProps) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;
  return (
    <RawChakraProvider
      resetCSS
      theme={theme}
      colorModeManager={colorModeManager}
    >
      {children}
    </RawChakraProvider>
  );
}
