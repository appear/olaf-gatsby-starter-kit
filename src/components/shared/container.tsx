import styled, { css } from "styled-components"

import { margin, padding, Margin, Padding } from "../../mixins/atom"

export default styled.div<{
  margin?: Margin
  padding?: Padding
}>`
  ${margin()}
  ${padding()}
`
