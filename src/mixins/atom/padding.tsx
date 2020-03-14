import { css, ThemedStyledProps } from "styled-components"

export type Padding = string

export const padding = (value?: Padding) => ({
  padding,
}: {
  padding?: string
}) => `padding: ${padding || value}`
