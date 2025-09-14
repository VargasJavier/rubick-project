import Blog from './Blog'

interface BlogList {
  blogsList: IBlog[]
}

const BlogsList = ({blogsList}: BlogList) => {
  return (
    <div className='containerBlogsList'>
      <div className='contentBlogsList'>
      {
        blogsList.map((blog: IBlog, index: number) => (
          <Blog blog={blog} key={index}/>
        ))
      } 
      </div>
    </div>
  )
}

export default BlogsList