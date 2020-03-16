import React from "react"
import styled from "styled-components"
import { Container } from "../shared"

import { PostIndexQuery } from "../../../graphql-types"
import PostCard from "../post/card"
import { Post } from "../post/types"

function PostSection({ data }: { data: PostIndexQuery }) {
  console.log("data", data)
  return (
    <Container>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostCard post={node as Post} />
      ))}
    </Container>
  )
}

export default PostSection
