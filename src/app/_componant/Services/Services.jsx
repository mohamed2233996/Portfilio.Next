import React from 'react';
import ServicesBox from './ServicesBox';
import { BiSolidBrushAlt, BiSupport } from "react-icons/bi";
import { BsFillBarChartFill, BsFillFileEarmarkCodeFill, BsFillClipboardFill , BsFillFileEarmarkTextFill} from "react-icons/bs";

const Services = () => {
    return (
        <div id='Services' className='scetionP'>
            <div className='container m-auto'>
                <h1 className='text-center text-5xl mb-4 font-extrabold'>Services</h1>
                <p className='text-center text-gray-500'>In this section you will learn about the services that I provide</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    <a href="/" className="shadow-xl border-gray-100 rounded-md cursor-pointer services-cont transition  ease-in delay-250">
                        <ServicesBox
                            icon={<BiSolidBrushAlt />}
                            title="Web Design"
                            text="We have the service of designing website interfaces and choosing appropriate colors and shapes"
                        />
                    </a>
                    <a href="/" className="shadow-xl border-gray-100 rounded-md cursor-pointer services-cont transition  ease-in delay-250">
                        <ServicesBox
                            icon={<BsFillBarChartFill />}
                            title="Web Marketing"
                            text="We provide marketing services for websites and social media services"
                        />
                    </a>
                    <a href="/" className="shadow-xl border-gray-100 rounded-md cursor-pointer services-cont transition  ease-in delay-250">
                        <ServicesBox
                            icon={<BsFillFileEarmarkCodeFill />}
                            title="Web Developent"
                            text="We provide a basic service with complete programming for most websites and e-stores"
                        />
                    </a>
                    <a href="/" className="shadow-xl border-gray-100 rounded-md cursor-pointer services-cont transition  ease-in delay-250">
                        <ServicesBox
                            icon={<BsFillClipboardFill />}
                            title="Branding"
                            text="We have a specialist available to help you choose your identity and brand"
                        />
                    </a>
                    <a href="/" className="shadow-xl border-gray-100 rounded-md cursor-pointer services-cont transition  ease-in delay-250">
                        <ServicesBox
                            icon={<BsFillFileEarmarkTextFill />}
                            title="Analytics"
                            text="We have a specialist to analyze site data and statistics"
                        />
                    </a>
                    <a href="/" className="shadow-xl border-gray-100 rounded-md cursor-pointer services-cont transition  ease-in delay-250">
                        <ServicesBox
                            icon={<BiSupport />}
                            title="Support"
                            text="We only have support. Please feel free to call our numbers in the About Us section"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Services;
