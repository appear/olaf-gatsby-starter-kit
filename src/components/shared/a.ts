import styled from "styled-components"
import { Link } from "gatsby"

export default styled(Link)<{
  fontSize?: number
}>`
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize || 3]};
`
