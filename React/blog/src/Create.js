import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Matt');

  return ( 
    <div className="create">
      <h2>Add a new post</h2>
      <form>
        <label>Blog title:</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Matt">Matt</option>
          <option value="Hayley">Hayley</option>
          <option value="Rick Ross">Rick Ross</option>
        </select>
        <button>Add Blog</button>
        <p>{ title }</p>
        <p>{ body }</p>
        <p>{ author }</p>
      </form>
    </div>
   );
}
 
export default Create;