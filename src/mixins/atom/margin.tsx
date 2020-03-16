import { css } from "styled-components"

export type Margin = string

export default (value?: Margin) =>
  css`
    ${({ margin = value }: { margin?: Margin }) =>
      margin && `margin: ${margin};`}
  `
