import React from "react"
import { createContext, useState } from "react"
import { ThemeProvider } from "styled-components"

import { COMMON_THEME } from "../theme/common"
import { WHITE_THEME } from "../theme/white"

type Theme = "white" | "dark"

interface ThemeContextProps {
  children: React.ReactNode
  theme: Theme
}

const Context = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({
  theme: "white",
  setTheme: () => {},
})

export function ThemeContextProvider({
  children,
  theme: initialTheme,
}: ThemeContextProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme || "white")

  const values = {
    theme,
    setTheme,
  }

  return (
    <Context.Provider value={values}>
      <ThemeProvider theme={{ ...COMMON_THEME, ...WHITE_THEME }}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  )
}
