import React, { useState } from 'react'
import { LiaInfinitySolid } from 'react-icons/lia';
import { IoSparkles } from "react-icons/io5";
import { motion } from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import axios from 'axios';
import { ServerUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';
function Auth({isModel = false}) {
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")

    const handleDemoAuth = async () => {
        try {
            setMessage("Using demo mode locally.")
            const result = await axios.post(ServerUrl + "/api/auth/google" , {
                name: "Demo User",
                email: "demo@interviewiq.local"
            } , {withCredentials:true})
            dispatch(setUserData(result.data))
        } catch (error) {
            console.log(error)
            console.error("Google Auth Error:", error);
           console.error("Code:", error.code);
           console.error("Message:", error.message);
            setMessage(error.message);
        }
    }

    const handleGoogleAuth = async () => {
        try {
            if (!auth || !provider) {
                throw new Error("Firebase not configured")
            }

            setMessage("Starting Google sign-in...")

            const response = await signInWithPopup(auth,provider)
            let User = response.user
            let name = User.displayName
            let email = User.email
            const result = await axios.post(ServerUrl + "/api/auth/google" , {name , email} , {withCredentials:true})
            dispatch(setUserData(result.data))
        } catch (error) {
            console.error("Google sign-in failed:", error)
            setMessage(error.code
                ? `Google sign-in failed: ${error.code}`
                : error.message || "Google sign-in failed. Please try again.")
        }
    }
  return (
    <div className={`
      w-full 
      ${isModel ? "py-4" : "min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20"}
    `}>
        <motion.div 
        initial={{opacity:0 , y:-40}} 
        animate={{opacity:1 , y:0}} 
        transition={{duration:1.05}}
        className={`
        w-full 
        ${isModel ? "max-w-md p-8 rounded-3xl" : "max-w-lg p-12 rounded-[32px]"}
        bg-white shadow-2xl border border-gray-200
      `}>
            <div className='flex items-center justify-center gap-1 mb-6'>
                <LiaInfinitySolid size={34} className='text-green-600' />
                <h2 className='font-extrabold text-2xl glow-text'>Oris Ai</h2>
            </div>

            <h1 className='text-2xl md:text-3xl font-semibold text-center leading-snug mb-4'>
                Continue with
                <span className='bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2'>
                    <IoSparkles size={16}/>
                    AI Smart Interview

                </span>
            </h1>

            <p className='text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8'>
                Sign in to start AI-powered mock interviews,
        track your progress, and unlock detailed performance insights.
            </p>


            <motion.button 
            onClick={handleGoogleAuth}
            whileHover={{opacity:0.9 , scale:1.03}}
            whileTap={{opacity:1 , scale:0.98}}
            className='w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md '>
                <FcGoogle size={20}/>
                Continue with Google
            </motion.button>

            <motion.button 
            onClick={handleDemoAuth}
            whileHover={{opacity:0.9 , scale:1.03}}
            whileTap={{opacity:1 , scale:0.98}}
            className='w-full flex items-center justify-center gap-3 py-3 mt-3 border border-gray-300 text-gray-700 rounded-full shadow-sm bg-white'>
                Try Demo Mode
            </motion.button>

            {message ? <p className='text-xs text-gray-600 text-center mt-4'>{message}</p> : null}
        </motion.div>

      
    </div>
  )
}

export default Auth
