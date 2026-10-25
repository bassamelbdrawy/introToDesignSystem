import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { theme } from './tokens';

export type ThemeMode = keyof typeof theme;

type ThemeContextValue = {
  mode: ThemeMode;
  colors: (typeof theme)[ThemeMode];
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');
  const toggleTheme = useCallback(() => {
    setMode(current => (current === 'light' ? 'dark' : 'light'));
  }, []);
  const value = useMemo(
    () => ({
      mode,
      colors: theme[mode],
      toggleTheme,
    }),
    [mode, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) {
    return {
      mode: 'light' as const,
      colors: theme.light,
      toggleTheme: () => {},
    };
  }
  return value;
}
