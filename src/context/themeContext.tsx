import {
  createContext,
  useState,
  useContext,
  useEffect,
  FC,
  ReactNode,
} from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextProps {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

interface Props {
  children: ReactNode;
  initialTheme?: ThemeMode;
}

const getInitialTheme = (): ThemeMode => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (storedPrefs === 'dark' || storedPrefs === 'light') {
      return storedPrefs;
    }
  }
  const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
  if (userMedia.matches) {
    return 'dark';
  }

  return 'light'; // Set light theme as the default;
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});

export const ThemeProvider: FC<Props> = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme());

  const rawSetTheme = (rawTheme: ThemeMode) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);
    localStorage.setItem('color-theme', rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextProps => useContext(ThemeContext);
