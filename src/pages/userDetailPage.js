import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostCard from '../component/customecard';
import { Button } from "react-bootstrap";

const UserDetailsPage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState(null);
  
  const { userId } = useParams();
  
  const handleButtonClick = () => {    
   
  };

  useEffect(() => {
    axios.get(`https://gorest.co.in/public/v2/users/${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get(`https://gorest.co.in/public/v2/posts?userId=${userId}`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
      axios.get(`https://gorest.co.in/public/v2/comments`).then(response=>{setComments(response.data)}).catch(error=>{
        console.log(error)
      });
  }  
  , [userId]);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}'s Details</h1>
          <p>Email: {user.email}</p>
          <Button className="button-styles" onClick={handleButtonClick}>            
            Add New Post         
           </Button> 
          <h2>Posts</h2>
          {posts.length > 0 ? (
            <ul>
              {posts.map(post => (
                <PostCard  post={post} comments={comments} user={user}/>
              ))}
            </ul>
          ) : (
            <p>No posts found.</p>
          )}
       
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetailsPage;
