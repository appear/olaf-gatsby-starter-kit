import steyld from "styled-components"

import fontWeight, { FontWeight } from "../../mixins/atom/font-weight"

export default steyld.div<{
  fontSize?: number
  fontWeight?: FontWeight
}>`
 font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize || 3]};   
 color: ${({ theme }) => theme.colors.text};   
 ${fontWeight()}
`
