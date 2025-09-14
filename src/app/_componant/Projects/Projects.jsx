import { AiOutlineSelect } from "react-icons/ai";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function Projects() {
    // 🟢 Fetch projects
    const { data: projects, error: projectsError } = await supabase
        .from("projects")
        .select("*");

    // 🟢 Fetch mydone
    const { data: mydone, error: mydoneError } = await supabase
        .from("myDone")
        .select("*");

    if (projectsError) {
        console.error("Projects error:", projectsError.message);
    }
    if (mydoneError) {
        console.error("Mydone error:", mydoneError.message);
    }


    return (
        <div id="Projects" className="scetionP scetionDiv">
            <div className="container m-auto">
                <h1 className="text-center text-5xl font-extrabold mb-4">Projects</h1>
                <p className="text-center text-gray-500">
                    In this section, our previous work and projects will be revealed
                </p>

                {/* 🟢 Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-6">
                    {projects?.toReversed().map((item) => (
                        <a
                            target="_blank"
                            href={item.link}
                            key={item.id}
                            style={{ backgroundImage: `url(${item.imgLink})` }}
                            className="relative transition ease-in-out delay-300 overflow-hidden w-full h-[300px] bg-cover bg-no-repeat bg-center flex justify-center items-center prog-cont"
                        >
                            <div className="hidden over w-full h-full absolute bg-primary opacity-90 transition ease-in-out delay-300"></div>
                            <div className="hidden over-text transition ease-in-out delay-300 z-10 text-center">
                                <h2 className="text-2xl text-white mb-3">{item.name}</h2>
                                <p className="text-white">{item.disc}</p>
                                <span className="text-white text-[30px]">
                                    <AiOutlineSelect className="m-auto mt-6" />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* 🟢 Mydone stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {mydone?.map((item) => (
                        <div
                            key={item.id}
                            className="shadow-lg rounded-lg flex justify-center items-center flex-col p-4"
                        >
                            <h2 className="mb-4 text-3xl font-black text-primary">{item.cont}</h2>
                            <h3 className="text-gray-500">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
