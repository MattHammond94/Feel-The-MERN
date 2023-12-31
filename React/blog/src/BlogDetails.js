import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch'

const BlogDetails = () => {
  const { id } = useParams();
  const { data: post, error, isLoading } = useFetch(`http://localhost:8000/blogs/${id}`)
  const navigate = useNavigate();
  
  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE'
    }).then(() => {
      navigate("/")
    })
  }

  return ( 
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div>}
      { post && (
        <article>
          <h2>{ post.title }</h2>
          <p>Written by { post.author }</p>
          <div>{ post.body }</div>
          <button onClick={handleDelete}>Delete post</button>
        </article>
      ) }
    </div>
   );
}
 
export default BlogDetails;