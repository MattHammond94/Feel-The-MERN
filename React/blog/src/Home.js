import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Pizza Party", body: "There was plenty of pizza", author: "Matt", id: 1 },
    { title: "Sunflower picking", body: "We picked em", author: "Hayley", id: 2},
    { title: "Another blog entry", body: "Another one", author: "Dj Khaled", id: 3}
  ]);

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All posts!"/>
    </div>
  );
}
 
export default Home;