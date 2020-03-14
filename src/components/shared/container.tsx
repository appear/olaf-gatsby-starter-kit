import styled from "styled-components"

import {
  margin,
  padding,
  Margin,
  Padding,
  maxWidth,
  MaxWidth,
} from "../../mixins/atom"

export default styled.div<{
  margin?: Margin
  padding?: Padding
  maxWidth?: MaxWidth
}>`
  ${margin()}
  ${padding()}
  ${maxWidth()}
`
