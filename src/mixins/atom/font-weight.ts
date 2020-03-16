import CSS from "csstype"
import { css } from "styled-components"

export type FontWeight = CSS.FontWeightProperty

export default (value?: FontWeight) =>
  css`
    ${({ fontWeight = value }: { fontWeight?: FontWeight }) =>
      fontWeight && `font-weight: ${fontWeight};`}
  `
