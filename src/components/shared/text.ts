import steyld from "styled-components"

import { FontWeight, fontWeight } from "../../mixins/atom"

export default steyld.div<{
  fontSize?: number
  fontWeight?: FontWeight
}>`
 font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize || 3]};   
 color: ${({ theme }) => theme.colors.text};   
 ${fontWeight()}
`
