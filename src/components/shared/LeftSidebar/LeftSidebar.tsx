import { cn } from "@/lib/utils";
import { LucideFileQuestion, LucideHome, LucideNewspaper, LucideTags, LucideUsersRound } from "lucide-react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {

    const leftBarSide = [
        {
            id: 0,
            text: "Home",
            url: "/",
            isActive: true,
            icon: <LucideHome className="w-5 h-5" />
        },
        {
            id: 1,
            text: "Posts",
            url: "/",
            isActive: false,
            icon: <LucideNewspaper className="w-5 h-5" />
        },
        {
            id: 2,
            text: "Questions",
            url: "/",
            isActive: false,
            icon: <LucideFileQuestion className="w-5 h-5" />
        },
        {
            id: 3,
            text: "Community",
            url: "/",
            isActive: false,
            icon: <LucideUsersRound className="w-5 h-5" />
        },
        {
            id: 4,
            text: "Tags",
            url: "/",
            isActive: false,
            icon: <LucideTags className="w-5 h-5" />
        }
    ];

    return (
        <section 
            className="sticky top-0 left-0 flex h-screen bg-zinc-50 p-6 pt-36 overflow-y-auto border-r border-zinc-200 
                max-lg:hidden lg:w-[265px] dark:bg-zinc-900 left-bar-scroll"
        >
            <div className="flex flex-1 flex-col gap-6">
                {leftBarSide?.map((item) => {
                    return (
                        <Link 
                            to={item.url}
                            key={item.id}
                            className={cn(
                                "flex items-center justify-start gap-4 p-4 font-bold rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800",
                                item.isActive && "leftbar-item-active text-zinc-100"
                            )}
                        >
                            {item.icon}{" "}
                            <span 
                            className={cn(
                                "max-lg:hidden text-zinc-500 hover:text-zinc-500 dark:text-zinc-100",
                                item.isActive && "text-zinc-100"
                            )}
                        >
                            {item.text}</span>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default LeftSidebar;