import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block tracking-wider text-black text-[30px] font-black" href="#">
                        <span className="text-white relative z-10
                        after:content['*']
                        after:absolute
                        after:w-12
                        after:h-12
                        after:-z-10
                        after:right-[-2px]
                        after:rounded-full
                        after:bg-primary">M</span>edo
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-500 transition hover:border-b-primary hover:border-b-[3px]" href="#About"> About </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:border-b-primary hover:border-b-[3px]" href="#Resume"> Resume </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:border-b-primary hover:border-b-[3px]" href="#Services"> Services </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:border-b-primary hover:border-b-[3px]" href="#Projects"> Projects </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:border-b-primary hover:border-b-[3px]" href="#MyBlog"> My Blog </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:border-b-primary hover:border-b-[3px]" href="#Contact"> Contact </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
