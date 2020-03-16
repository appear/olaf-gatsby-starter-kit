import React from "react"
import styled from "styled-components"

import { PostIndexQuery } from "../../../graphql-types"
import PostCard from "../post/card"
import { Post } from "../post/types"

const PostFrame = styled.div`
  display: flex;
`

function PostSection({ data }: { data: PostIndexQuery }) {
  return (
    <PostFrame>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostCard post={node as Post} />
      ))}
    </PostFrame>
  )
}

export default PostSection
