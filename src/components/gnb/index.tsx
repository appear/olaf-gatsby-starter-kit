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
      <Container maxWidth={720}>
        <Link to="/" fontSize={4} fontWeight="bold">
          {siteTitle}
        </Link>
      </Container>
    </>
  )
}

export default Gnb
