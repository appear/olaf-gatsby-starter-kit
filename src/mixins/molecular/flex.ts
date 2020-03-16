import CSS from "csstype"
import { css } from "styled-components"

export type Flex = {
  spacing?: string
  justifyContent?: CSS.JustifyContentProperty
  alignItems?: CSS.AlignItemsProperty
  direction?: CSS.DirectionProperty
}

export default (value?: Flex) =>
  css`
    ${({ flex }: { flex?: Flex }) => {
      const { spacing, justifyContent, direction, alignItems } = {
        ...(value || {}),
        ...(flex || {}),
      } as Flex

      return `
        display: flex;
        ${spacing && `flex: ${spacing};`}
        ${justifyContent && `justify-content: ${justifyContent};`}
        ${direction && `flex-direction: ${direction};`}
        ${alignItems && `align-items: ${alignItems}`}
        `
    }}
  `
