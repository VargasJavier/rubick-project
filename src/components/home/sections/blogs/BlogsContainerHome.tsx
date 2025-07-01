import { blogsList } from "../../../../data/blogsHome"
import BlogsList from "./BlogsList"

const BlogsContainerHome = () => {
  return (
    <section className="containerBlogs">
      <div className='containerHeaderBlogs'>
        <h3 className='titleHeaderBlog'>Nuestro blog</h3>
        <p className='subtitleHeaderBlog'>Un escaparate seleccionado de nuestro trabajo más impactante, que combina estrategia, narración de historias e imágenes destacadas.</p>
      </div>
      <section>
        <BlogsList blogsList={blogsList}/>
      </section>
    </section>
  )
}

export default BlogsContainerHome