import steyld from "styled-components"

export default steyld.div<{
  fontSize?: number
}>`
 font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize || 3]};   
 color: ${({ theme }) => theme.colors.text};   
`
