'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
    const handleSignUp = async (event) => {
        event.preventDefault();
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }
        console.log(newUser);
    }

    return (
        <div>
            <div className=' flex items-center justify-around h-screen'>
                <div>
                    <Image src={`/assets/images/login/login.svg`} alt='image' width={510} height={410}></Image>
                </div>


                <form onSubmit={handleSignUp} className=' w-1/3 p-12 flex flex-col gap-2 border border-slate-400 rounded-xl shadow-xl shadow-slate-600 space-y-2'>

                    <h1 className=' text-center text-4xl font-bold'>LogIn</h1>

                    <div>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                            type="text"
                            name='name'
                            placeholder='Your Name'
                            className='w-full p-2 text-slate-600 border border-slate-600 rounded-xl'
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            type="email"
                            name='email'
                            placeholder='Your Email'
                            className='w-full p-2 text-slate-600 border border-slate-600 rounded-xl'
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Confirm Password</label>
                        <br />
                        <input
                            type="text"
                            name='password'
                            placeholder='Your Password'
                            className='w-full p-2 text-slate-600 border border-slate-600 rounded-xl'
                            required
                        />
                    </div>

                    <button type='submit' className=' btn btn-primary'>Sign Up</button>

                    <div className=' space-y-2'>
                        <h1 className=' text-slate-400 text-center'>Or Sign Up with</h1>

                        <div className='flex items-center justify-center gap-2 text-xl'>
                            <button className='btn rounded-full'>
                                <FcGoogle />
                            </button>
                            <button className='btn rounded-full text-primary'>
                                <FaGithub />
                            </button>
                            <button className='btn rounded-full text-primary'>
                                <FaFacebook />
                            </button>
                        </div>

                        <div className=' text-center'>
                            <span>Have an account? </span>
                            <Link href={'/login'} className=' text-primary'>Log In</Link>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default SignUp;