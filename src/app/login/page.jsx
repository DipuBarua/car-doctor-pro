"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import SocialLogin from '@/components/shared/SocialLogin';

const LogIn = () => {
    const router = useRouter();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        const resp = await signIn('credentials',
            {
                email,
                password,
                redirect: false
            }
        )
        console.log('user:', resp);

        if (resp.status === 200) {
            router.push('/')
        }
    }

    return (
        <div className=' flex items-center justify-around h-screen'>
            <div>
                <Image
                    src={`/assets/images/login/login.svg`}
                    alt='image'
                    width={510}
                    height={410}></Image>
            </div>

            <div className='w-1/3 p-12 flex flex-col gap-2 border border-slate-400 rounded-xl shadow-xl shadow-slate-600 '>
                <h1 className=' text-center text-4xl font-bold'>Log In</h1>

                <form onSubmit={handleSignIn}
                    className='space-y-2 bg-lime-200'>

                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            type="email"
                            name='email'
                            placeholder='Your Email'
                            className='w-full p-2 text-slate-600 border border-slate-600 rounded-xl'
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

                    <button type='submit' className='w-full btn btn-primary'>Sign In</button>
                </form>

                <div className=' space-y-1'>
                    <h1 className=' text-slate-400 text-center'>Or Sign In with</h1>

                    <SocialLogin></SocialLogin>

                    <div className=' text-center'>
                        <span>Have an account? </span>
                        <Link href={'/signup'} className=' text-primary underline'>Sign Up</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LogIn;