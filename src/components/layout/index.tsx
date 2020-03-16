import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Gnb from "../gnb"
import { ThemeContextProvider } from "../../contexts/theme"
import ResetStyle from "../reset-style"

const ContentFrame = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Layout = ({ children }: { children: React.ReactNode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ResetStyle />
      <ThemeContextProvider theme="white">
        <Gnb siteTitle={data.site.siteMetadata.title} />
        <ContentFrame>{children}</ContentFrame>
      </ThemeContextProvider>
    </>
  )
}

export default Layout
