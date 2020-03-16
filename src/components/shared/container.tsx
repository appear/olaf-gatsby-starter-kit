import styled from "styled-components"

import margin, { Margin } from "../../mixins/atom/margin"
import padding, { Padding } from "../../mixins/atom/padding"
import maxWidth, { MaxWidth } from "../../mixins/atom/max-width"
import centered, { Centered } from "../../mixins/molecular/centered"

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
