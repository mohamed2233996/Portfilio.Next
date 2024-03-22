import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Links = () => {
    return (
        <div className="my-10">
            <div className="container m-auto">
                <div className='grid grid-cols-1 sm:grid-cols-3  justify-items-center items-center lg:grid-cols-5 gap-2'>
                    <div>
                        <Link href="/">
                            <Image className='brightness-0 hover:brightness-100 transition ease-in delay-100'src={"/1.png"} width={120} height={50} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <Image className='brightness-0 hover:brightness-100 transition ease-in delay-100'src={"/2.png"} width={120} height={50} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <Image className='brightness-0 hover:brightness-100 transition ease-in delay-100'src={"/3.png"} width={120} height={50} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <Image className='brightness-0 hover:brightness-100 transition ease-in delay-100'src={"/4.png"} width={120} height={50} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <Image className='brightness-0 hover:brightness-100 transition ease-in delay-100'src={"/5.png"} width={120} height={50} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Links;
