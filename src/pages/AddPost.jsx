import React from 'react';
import { Container, PostForm } from '../components';

const Addpost = () => {
  return (
    <div className="py-8 bg-gray-50">
      <Container>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Lora, serif' }}>
            Create Your Post
          </h1>
          <p className="text-xl text-gray-600">
            Share your thoughts and ideas with the world. Fill out the form below to add your post.
          </p>
        </div>

       
        <PostForm />
      </Container>
    </div>
  );
};

export default Addpost;
