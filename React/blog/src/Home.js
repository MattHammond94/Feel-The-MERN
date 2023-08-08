import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Pizza Party", body: "There was plenty of pizza", author: "Matt", id: 1 },
    { title: "Sunflower picking", body: "We picked em", author: "Hayley", id: 2},
    { title: "Another blog entry", body: "Another one", author: "Dj Khaled", id: 3}
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(post => post.id !== id)
    setBlogs(newBlogs);
  }

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All posts!" handleDelete={handleDelete}/>
    </div>
  );
}
 
export default Home;