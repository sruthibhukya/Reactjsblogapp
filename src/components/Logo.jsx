
import React from 'react';
import blogapp from "../images.jpg";

const Logo = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Logo Image */}
      <img 
        src={blogapp} 
        alt="Blog App Logo" 
        // width={width} 
        // height="auto" 
        className="object-contain"
      />
      
      {/* App Name */}
      <span className="text-3xl font-semibold text-gray-800" style={{  fontFamily: 'Lora, serif' }}>
        BlogHere
      </span>
    </div>
  );
};

export default Logo;

