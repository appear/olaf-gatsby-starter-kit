import { css } from "styled-components"

export type Centered = boolean

export const centered = (value?: Centered) =>
  css`
    ${({ centered = value }: { centered?: Centered }) =>
      centered && `margin: 0 auto;`}
  `
