import React from 'react'
import { Post } from '@elements'

export const RecentPosts = ({ posts }) => {
  return (
    <section className="-mb-12 mt-44">
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="ml-5 text-4xl font-bold leading-tight text-gray-900">
          Recent Posts
        </h2>
        <div className="grid grid-cols-1 gap-10 mt-5 xl:gap-15 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Post
              to={`/blog/${post.slug.current}/`}
              fluid={post.thumbnailImage.asset.fluid}
            >
              <Post.Tag category={post.category}>{post.category}</Post.Tag>
              <Post.Title>{post.title}</Post.Title>
              <Post.Excerpt>{post.excerpt}</Post.Excerpt>
              <Post.PostedDate className="mt-7">
                {post.postedDate}
              </Post.PostedDate>
            </Post>
          ))}
        </div>
      </div>
    </section>
  )
}
