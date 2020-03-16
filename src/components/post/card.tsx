import React from "react"
import styled from "styled-components"

import { Post } from "./types"

const CardFrame = styled.div`
  width: 25%;
`

function PostCard({ post }: { post: Post }) {
  console.log("post", post)

  const {
    excerpt,
    frontmatter: { title, category, thumbnail },
  } = post
  return (
    <CardFrame>
      <img src={thumbnail} />
    </CardFrame>
  )
}

export default PostCard
