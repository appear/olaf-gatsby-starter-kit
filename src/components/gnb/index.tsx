import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Line from "./line"

const GnbFrame = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px 10px;
`

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`

interface GnbProps {
  siteTitle: string
}

function Gnb({ siteTitle }: GnbProps) {
  return (
    <>
      <Line />
      <GnbFrame>
        <Logo to="/">{siteTitle}</Logo>
        <div>ABOUT</div>
        <div>POSTS</div>
      </GnbFrame>
    </>
  )
}

export default Gnb
