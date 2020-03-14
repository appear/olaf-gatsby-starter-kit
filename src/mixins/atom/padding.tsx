import { css } from "styled-components"

export type Padding = string

export const padding = (value?: Padding) => ({
  padding,
}: {
  padding?: string
}) =>
  css`
    padding: ${padding || value};
  `
