import { css } from "styled-components"

export type Margin = string

export const margin = (value?: Margin) =>
  css`
    ${({ margin = value }: { margin?: Margin }) =>
      margin && `margin: ${margin};`}
  `
