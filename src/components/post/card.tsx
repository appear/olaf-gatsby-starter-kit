import React from "react"
import styled from "styled-components"

import { Post } from "./types"
import { Container } from "../shared"

const CardFrame = styled(Container)``

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
