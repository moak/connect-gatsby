import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => (
  <div>
    <h1>Home {data.site.siteMetadata.title}</h1>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </div>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
