import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import PostEntryMeta from '../../components/PostEntryMeta';
import PostEntryTitle from '../../components/PostEntryTitle';
import PostEntryMedia from '../../components/PostEntryMedia';
import EngagementBar from '../../components/EngagementBar';
import Seo from '../../components/Seo';

const renderTermNodes = (nodes, termType) => (
  <span className="cat-links header-font extra-small medium smooth dark-gray">
    {nodes.map(term => (
      <Link key={term.id} to={`/blog/${termType}/${term.slug}`}>
        {term.name}
      </Link>
    ))}
  </span>
);

const renderTerms = (categoryNodes = [], tagNodes = []) => (
  <>
    {categoryNodes ? renderTermNodes(categoryNodes, 'category') : null}
    {tagNodes && tagNodes.length ? renderTermNodes(tagNodes, 'tag') : null}
  </>
);

const Post = ({ pageContext: post }) => {
  return (
    <Layout>
      <Seo title={`${post.title}`} />
      <div className="post-wrapper">
        <header className="entry-header top-spacer bottom-spacer">
          <PostEntryTitle
            location="single"
            post={post}
            titleClass="entry-title h1"
          />
          <PostEntryMeta post={post} />
        </header>
        {post.featuredImage && <PostEntryMedia post={post} location="single" />}

        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <footer className="entry-footer flex justify-between">
          <div className="flex justify-start items-center">
            <a
              className="comments-trigger button button--mobile-fullwidth center-align"
              id="comments-trigger"
              href={`https://twitter.com/intent/tweet?url=${`${post.link}`}&text=Re%3A%20this%20article%2C%20here%27s%20my%20comment&related=thewpsteward`} 
            >
              <span className="display-none">Close Comments</span>

              <span className="display-inline-block">Comment on Twitter</span>
            </a>
          </div>
          {/* TODO: add taxonomies to a new component */}
          <div className="entry-footer__taxonomy justify-end self-center items-center">
            {post.categories.nodes.length || post.tags.nodes.length
              ? renderTerms(post.categories.nodes, post.tags.nodes)
              : null}
          </div>
        </footer>
      </div>

      <EngagementBar post={post} />
    </Layout>
  );
};

export default Post;
