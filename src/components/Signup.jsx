import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  // UseForm hook from react-hook-form
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError('');
    try {
      // Using the authService to create account
      const userData = await authService.createAccount(data);
      if (userData) {
        // Get the current logged-in user
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          // Dispatch the login action to store user data
          dispatch(login(currentUser));
          navigate('/'); // Redirect to home page after successful login
        }
      }
    } catch (error) {
      setError(error.message); // Catch any errors and display them
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-lg bg-white rounded-xl p-10 shadow-lg border border-black/10">
        {/* Logo Section */}
        <div className="mb-6 flex justify-center">
          <Logo width="100%" />
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-gray-800">Sign up to create an account</h2>
        <p className="mt-2 text-center text-base text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>

        {/* Error Message */}
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        {/* Signup Form */}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              {...register('name', { required: true })}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Email address must be a valid address',
                },
              })}
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="password"
              {...register('password', { required: true })}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
