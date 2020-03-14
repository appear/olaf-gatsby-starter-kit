import styled from "styled-components"

import {
  margin,
  padding,
  Margin,
  Padding,
  maxWidth,
  MaxWidth,
} from "../../mixins/atom"

import { centered, Centered } from "../../mixins/molecular"

export default styled.div<{
  margin?: Margin
  padding?: Padding
  maxWidth?: MaxWidth
  centered?: Centered
}>`
  ${margin()}
  ${padding()}
  ${maxWidth()}
  ${centered()}
`
