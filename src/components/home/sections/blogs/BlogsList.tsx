import Blog from './Blog'

interface BlogList {
  blogsList: IBlog[]
}

const BlogsList = ({blogsList}: BlogList) => {
  return (
    <div className='containerBlogsList'>
      {
        blogsList.map((blog: IBlog) => (
          <Blog blog={blog} />
        ))
      }
    </div>
  )
}

export default BlogsList