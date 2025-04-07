import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import InputField from '../../Components/InputField/InputField.jsx';
import DesignElements from "../../Components/DesignElements/DesignElements.jsx";
import GDGLogo from "../../Components/GDGLogo/GDGLogo.jsx"; 
import { checkZoom } from "../../Components/CheckZoom/CheckZoom.js";



function SignupwithVerify(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  
 {/* Zoom in and out function imported from CheckZoom file from components */}
checkZoom();


  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="bg-white rounded-xl overflow-hidden max-w-4xl border-black border-2 w-full flex flex-col md:flex-row">
        
        {/* Signup Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-left text-black mb-5">Sign Up</h2>

          <InputField 
            label="Username" 
            id="username" 
            placeholder="John" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />

          <InputField 
            label="Email" 
            id="email" 
            placeholder="gdg@gmail.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />

          {/* Verify Account Button */}
          <div className="mb-4">
            <button className="bg-blue-500 text-black border-2 border-black px-12 py-2 rounded-full 
                      hover:bg-blue-600 transition-all w-full">
              Verify Our Account
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <NavLink to="/" className="text-blue-500 underline hover:text-blue-700 text-sm">
              Already have an account? Login here
            </NavLink>
          </div>
        </div>

        {/* Design Elements present in left and right side */}
        <DesignElements />

        {/* GDG Logo */}
        <GDGLogo />
      </div>
    </div>
  );
}

export default SignupwithVerify;
