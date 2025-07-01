interface IBlogItem {
  blog: IBlog
}

const Blog = ({blog}: IBlogItem) => {
  return (
      <section className="blogItemHome">
      <a className="blogLink" href={blog.link}>
        <div className="contentBlogImageDate">
          <img className='blogImage' src={blog.image} alt='Foto de blog'/>
          <div className='blogDateCreation'>
            {blog.dateCreation}
          </div>
        </div>
        <div className="blogBody">
            <h4 className="bodyBlogTitle">{blog.title}</h4>
            <p className="bodyBlogDescription">{blog.shortDescription}</p>
        </div>
      </a>
    </section>
  )
}

export default Blog