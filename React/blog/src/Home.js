import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Pizza Party", body: "There was plenty of pizza", author: "Matt", id: 1 },
    { title: "Sunflower picking", body: "We picked em", author: "Hayley", id: 2},
    { title: "Another blog entry", body: "Another one", author: "Dj Khaled", id: 3}
  ]);

  return ( 
    <div className="home">
      {blogs.map((post) => ( 
        <div className="blog-preview" key={post.id}>
          <h2>{ post.title }</h2>
          <p>written by { post.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default Home;