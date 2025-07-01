import Blog from './Blog'

interface BlogList {
  blogsList: IBlog[]
}

const BlogsList = ({blogsList}: BlogList) => {
  return (
    <div className='containerBlogsList'>
      {
        blogsList.map((blog: IBlog, index: number) => (
          <Blog blog={blog} key={index}/>
        ))
      }
    </div>
  )
}

export default BlogsList