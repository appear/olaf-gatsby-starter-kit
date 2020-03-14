import styled from "styled-components"
import { Link } from "gatsby"

import { FontWeight, fontWeight } from "../../mixins/atom"

export default styled(Link)<{
  fontSize?: number
  fontWeight?: FontWeight
}>`
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize || 3]};
  color: ${({ theme }) => theme.colors.text};
  ${fontWeight()}
`
