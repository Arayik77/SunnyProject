import { Link } from "react-router-dom"
import image from "@/components/images/rightside/image.webp";
import { LucideArrowRight } from "lucide-react";

const topPosts = [
    {
        id: 1,
        img: image,
        url: "/",
        text: "Mastering Smart Contract Development with Node.js: Tools, Security, and Best Practices",
    },
    {
        id: 2,
        img: image,
        url: "/",
        text: "Mastering Smart Contract Development with Node.js: Tools, Security, and Best Practices",
    },
    {
        id: 3,
        img: image,
        url: "/",
        text: "Mastering Smart Contract Development with Node.js: Tools, Security, and Best Practices",
    },
    {
        id: 4,
        img: image,
        url: "/",
        text: "Mastering Smart Contract Development with Node.js: Tools, Security, and Best Practices",
    },
    {
        id: 5,
        img: image,
        url: "/",
        text: "Mastering Smart Contract Development with Node.js: Tools, Security, and Best Practices",
    },
];

const topQuestions = [
    {
        id: 1,
        url: "/",
        text: "Mastering Smart Contract Development with Node.js: Tools, Security, and Best Practices",
    },
    {
        id: 2,
        url: "/",
        text: "Mastering Smart Contract Development with Node.js: Tools, Security, and Best Practices",
    },
    {
        id: 3,
        url: "/",
        text: "Mastering Smart Contract Development with Node.js: Tools, Security, and Best Practices",
    }
];

const topTags = [
    {
        id: 1,
        url: "/",
        title: "NODE JS",
        quantity: 5,
    },
    {
        id: 2,
        url: "/",
        title: "GO (GOLANG)",
        quantity: 19,
    },
    {
        id: 3,
        url: "/",
        title: "FASTIFY",
        quantity: 1,
    },
    {
        id: 4,
        url: "/",
        title: "NODE JS",
        quantity: 40,
    },
    {
        id: 5,
        url: "/",
        title: "GO",
        quantity: 6,
    }
];

const RightSidebar = () => {
    return (
        <section className="w-[350px] custom-scrollbar sticky right-0 top-0 flex h-screen flex-col justify-between overflow-y-auto 
        shadow-light-300
        border-l border-zinc-200 bg-zinc-50 p-6 pt-36 max-xl:hidden lg:w-[350px] dark:border-zinc-900 dark:bg-zinc-900">
            <div>
                <h3 className="h3-bold text-zinc-900 dark:text-zinc-200">Top posts</h3>
                <div className="flex flex-col mt-5 w-full gap-[30px]">
                    {topPosts?.map((item) => {
                        return (
                            <Link to={item.url} className="flex gap-3 items-center justify-between" key={item.id}>
                                <img src={item.img} alt={item.img} className="h-[50px] w-[50px] rounded-[10px] object-cover" />
                                <span className="small-text text-zinc-700 hover:text-red-500 dark:text-zinc-400">{item.text}</span>
                                <span><LucideArrowRight className="w-5 h-5"/></span>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="mt-16">
                <h3 className="h3-bold text-zinc-900 dark:text-zinc-200">Top Questions</h3>
                <div className="flex flex-col mt-5 w-full gap-[30px]">
                    {topQuestions?.map((item) => {
                        return (
                            <Link to={item.url} className="flex gap-5 items-center justify-between" key={item.id}>
                                <span className="small-text text-zinc-700 hover:text-red-500 dark:text-zinc-400">{item.text}</span>
                                <span><LucideArrowRight className="w-5 h-5"/></span>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="mt-16">
                <h3 className="h3-bold text-zinc-900 dark:text-zinc-200">Top Tags</h3>
                <div className="flex flex-col mt-5 w-full gap-[15px]">
                    {topTags?.map((item) => {
                        return (
                            <Link to={item.url} className="flex gap-2 items-center justify-between" key={item.id}>
                                <div className="bg-slate-300 px-4 py-2 uppercase text-zinc-500 hover:bg-indigo-400
                                    hover:bg-indigo-400 hover:text-zinc-100 dark:bg-slate-800 
                                    dark:text-zinc-100 hover:dark:bg-indigo-400 items-center border text-xs rounded-md">
                                    {item.title}
                                </div>
                                <span className="small-medium text-zinc-700 dark:text-zinc-400">{item.quantity}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default RightSidebar