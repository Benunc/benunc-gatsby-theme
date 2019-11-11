import React from "react"
import Layout from "../../components/Layout"
import PostEntry from "../../components/PostEntry"
import Pagination from "../../components/Pagination"
import Seo from '../../components/Seo';


const BlogArchive = props => {
  const {
    pageContext: { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts },
  } = props
  return (
    <Layout>
      <Seo/>
      {nodes && nodes.map(post => <PostEntry key={post.postId} post={post} />)}
      <Pagination
        pageNumber={pageNumber}
        hasNextPage={hasNextPage}
        allPosts={allPosts}
        itemsPerPage={itemsPerPage}
      />
    </Layout>
  )
}

export default BlogArchive
