import { css } from "styled-components"

export type MaxWidth = number

export default (value?: MaxWidth) =>
  css`
    ${({ maxWidth = value }: { maxWidth?: MaxWidth }) =>
      maxWidth && `max-width: ${maxWidth}px;`}
  `
