import { css } from "styled-components"

export type Margin = string

export const margin = (value?: Margin) => ({ margin }: { margin?: Margin }) =>
  css`
    margin: ${margin || value};
  `
