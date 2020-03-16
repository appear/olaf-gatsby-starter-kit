import React from "react"

import { Container, Text, Link } from "../shared"
import Line from "./line"

interface GnbProps {
  siteTitle: string
}

function Gnb({ siteTitle }: GnbProps) {
  return (
    <>
      <Line />
      <Container maxWidth={720} centered padding="20px 10px">
        <Link to="/" fontSize={4} fontWeight="bold">
          {siteTitle}
        </Link>
        <div>ABOUT</div>
        <div>POSTS</div>
      </Container>
    </>
  )
}

export default Gnb
