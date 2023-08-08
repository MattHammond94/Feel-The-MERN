const BlogList = ({ title, blogs, handleDelete }) => {
  // const blogs = props.blogs;
  // const title = props.title

  return ( 
    <div className="blog-list">
      <h1>{ title }</h1>
      {blogs.map((post) => ( 
        <div className="blog-preview" key={post.id}>
          <h2>{ post.title }</h2>
          <p>written by { post.author }</p>
          <button onClick={() => handleDelete(post.id)}>Delete post</button>
        </div>
      ))}
    </div>
   );
}
 
export default BlogList;