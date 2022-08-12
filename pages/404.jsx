import Layout from "../components/Layout";
import Link from "next/link";
import ImageError from '../public/static/images/404-error-not-found.png'
import Image from "next/image";
const Error = () => {
    return (
        <Layout>
            <div className='w-[94%] mx-auto my-10'>
                <Link href='/'>
                    <a className='dark:bg-[#2b3945] shadow-custze-2 border border-[#10141785] px-8 py-3'>← Back</a>
                </Link>
            </div>
            <div className="flex justify-center">
                <Image src={ImageError} width={700} height={550}/>
            </div>
        </Layout>
    )
}

export default Error