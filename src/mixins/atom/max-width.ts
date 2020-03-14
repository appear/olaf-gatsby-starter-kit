import { css } from "styled-components"

export type MaxWidth = number

export const maxWidth = (value?: MaxWidth) =>
  css`
    ${({ maxWidth = value }: { maxWidth?: MaxWidth }) =>
      maxWidth && `max-width: ${maxWidth}px;`}
  `
