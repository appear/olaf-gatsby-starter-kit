import React from "react"

import { Container, Text, Link } from "../shared"

interface GnbProps {
  siteTitle: string
}

function Gnb({ siteTitle }: GnbProps) {
  return (
    <Container>
      <Link to="/" fontSize={4}>
        {siteTitle}
      </Link>
    </Container>
  )
}

export default Gnb
