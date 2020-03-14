import CSS from "csstype"
import { css } from "styled-components"

export type FontWeight = CSS.FontWeightProperty

export const fontWeight = (value?: FontWeight) =>
  css`
    ${({ fontWeight = value }: { fontWeight?: FontWeight }) =>
      fontWeight && `font-weight: ${fontWeight};`}
  `
