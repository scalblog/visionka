"use client"

import { type ThemeProviderProps, useTheme as useNextTheme, ThemeProvider as NextThemesProvider } from "next-themes";

export function useTheme() {
  return useNextTheme();
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>
    {children}
  </NextThemesProvider>;
}