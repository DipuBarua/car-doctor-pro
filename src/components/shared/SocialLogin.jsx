'use client'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const router = useRouter();
    const session = useSession();

    const handleSocialLogin = (provider) => {

        const res = signIn(provider,);
        console.log('social', res);

    }
    if (session.status === "authenticated") {
        router.push('/');
    }

    return (
        <div className='flex items-center justify-center gap-2 text-xl'>
            <button onClick={() => handleSocialLogin('google')} className='btn rounded-full'>
                <FcGoogle />
            </button>
            <button onClick={() => handleSocialLogin('github')} className='btn rounded-full text-primary'>
                <FaGithub />
            </button>
            {/* todo: facebook  */}
            <button className='btn rounded-full text-primary'>
                <FaFacebook />
            </button>

        </div>
    );
};

export default SocialLogin;