const PostTemplateFragment = `
  fragment PostTemplateFragment on WPGraphQL_Post {
    id
    postId
    title
    content
    link
    slug
    featuredImage {
      sourceUrl
      title
      altText
    }
    categories {
      nodes {
        name
        slug
        id
      }
    }
    tags {
      nodes {
        slug
        name
        id
      }
    }
    author {
      name
      avatar(size:50) {
        url
      }
      slug
    }
  }
`;

const BlogPreviewFragment = `
  fragment BlogPreviewFragment on WPGraphQL_Post {
    id
    postId
    title
    uri
    date
    slug
    excerpt
    content
    featuredImage {
      sourceUrl
      title
      altText
    }
    author {
      name
      avatar(size:50) {
        url
      }
      slug
    }
  }
`;

module.exports.PostTemplateFragment = PostTemplateFragment;
module.exports.BlogPreviewFragment = BlogPreviewFragment;
