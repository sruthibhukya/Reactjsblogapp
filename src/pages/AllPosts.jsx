import React, { useState, useEffect } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';

const AllPosts = () => {
    const [posts, setPosts] = useState([]); // State to store posts
    const [error, setError] = useState(null);

    // Fetch posts when the component mounts
    useEffect(() => {
        appwriteService.getPosts()
            .then((posts) => {
                console.log("Fetched posts:", posts);
                setPosts(posts?.documents || []); // Use optional chaining to safely access `documents`
            })
            .catch((err) => {
                console.error('Error fetching posts:', err);
                setError('Failed to load posts');
            });
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="w-full py-8">
            <Container>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {posts?.map((post) => (
                        <div key={post.$id} className="p-2">
                            <div className="h-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <PostCard {...post} />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default AllPosts;
