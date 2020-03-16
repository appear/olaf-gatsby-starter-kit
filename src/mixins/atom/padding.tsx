import { css, ThemedStyledProps } from "styled-components"

export type Padding = string

export default (value?: Padding) => ({
  padding = value,
}: {
  padding?: string
}) => padding && `padding: ${padding};`
