import React, { useState } from 'react';
import { createComment } from '../service/api-service';

const PostCard = ({ post, comments,user }) => {
    const [newComment, setNewComment] = useState('');
    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
      };
    
      const handleCommentSubmit = async (commentData) => {
        try {
          
          let newcommentagrs=[...comments,newComment]
          const createdComment = await createComment(newcommentagrs);
          console.log('Created Comment:', createdComment);
      
          // Handle success or perform any other necessary actions
        } catch (error) {
          console.error('Comment Creation Error:', error.message);
          // Handle error or display an error message
        }
      };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
      <h6 className="card-subtitle mb-2 text-muted comment-title">Add Comment:</h6>
        <form onSubmit={handleCommentSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control comment-box-size"
              placeholder="Enter your comment"
              value={newComment}
              onChange={handleCommentChange}
            />
          </div>
          <button type="submit" className='comment-title'>
            Add Comment
          </button>
        </form>
    </div>
  );
};

export default PostCard;
