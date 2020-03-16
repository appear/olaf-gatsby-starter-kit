import styled from "styled-components"
import Container from "./container"

import flex, { Flex } from "../../mixins/molecular/flex"

export default styled(Container)<Flex>`
  ${flex}
`
