import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';
import {useNavigate} from  "react-router-dom"
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [toggle , setToggle] = useState(false);
  const navigate = useNavigate();

  const clickOn = ()=>{
    setToggle(true);
    navigate(`/all-posts`);
  }

  useEffect(() => {
    appwriteService.getPosts()
      .then((posts) => {
        setPosts(posts?.documents || []); // Use optional chaining to safely access `documents`
      })
      .catch((err) => {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts');
      });
  }, []);

  // Check if there was an error

  // Use optional chaining to check the length safely
  
    return (
      <div className="w-full py-12 bg-gray-50 mt-4 text-center">
         <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      {/* Splash Line */}
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-8">
        <span className="text-blue-600">Discover</span>,{' '}
        <span className="text-green-600">Share</span>, and{' '}
        <span className="text-purple-600">Engage</span> with Stories that Matter.
      </h1>

     
      <button onClick={clickOn} className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out">
        Start Reading
      </button>
{/* 
      {toggle ? <div className='flex flex-wrap -mx-2'>
          {posts?.map((post) => (
            <div key={post.$id} className='p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
              <div className="h-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <PostCard {...post} />
              </div>
            </div>
          ))}
        </div> : null } */}
      
      

      
    </div>
        
       
      </div>
    );
  

  // return (
  //   <div className='w-full py-12 bg-gray-50'>
  //     <Container>
  //       {toggle ? <div className='flex flex-wrap -mx-2'>
  //         {posts?.map((post) => (
  //           <div key={post.$id} className='p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
  //             <div className="h-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
  //               <PostCard {...post} />
  //             </div>
  //           </div>
  //         ))}
  //       </div> : null }
  //     </Container>
  //   </div>
  // );
};

export default Home;
