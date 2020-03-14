import { css, ThemedStyledProps } from "styled-components"

export type Padding = string

export const padding = (value?: Padding) => ({
  padding = value,
}: {
  padding?: string
}) => padding && `padding: ${padding || value}`
