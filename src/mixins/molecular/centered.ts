import { css } from "styled-components"

export type Centered = boolean

export default (value?: Centered) =>
  css`
    ${({ centered = value }: { centered?: Centered }) =>
      centered && `margin: 0 auto;`}
  `
