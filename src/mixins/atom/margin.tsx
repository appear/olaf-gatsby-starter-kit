import { css } from "styled-components"

export type Margin = string

export const margin = (value?: Margin) =>
  css`
    ${({ margin }: { margin?: Margin }) => `margin: ${margin || value};`}
  `
