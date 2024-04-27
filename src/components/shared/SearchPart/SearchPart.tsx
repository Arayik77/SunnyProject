import SearchCards from "@/components/shared/cards/SearchCards";
import { Badge } from "@/components/ui/badge";
import { LucideHelpCircle, LucideTag } from "lucide-react";
import { useState } from "react";

const tags = [
    {
      id: "1",
      name: "Post",
      url: "/tags/1",
    },
    {
      id: "2",
      name: "Question",
      url: "/tags/2",
    },
    {
      id: "3",
      name: "User",
      url: "/tags/1",
    },
    {
      id: "4",
      name: "Tag",
      url: "/tags/2",
    },
];

const topPosts: any = [
    {
      id: 1,
      title:
        "Mastering Smart Contract Development with Node.js: Tools, Security, and Best Practices",
        type: "Post",
      image:
        "https://www.plusdev.net/_next/image?url=https%3A%2F%2Fplusdev-net.s3.eu-central-1.amazonaws.com%2Fbd1c1480201129be867adf88effb1458_nodejs-smart-contracts.jpg&w=640&q=60",
      icon: null,
      url: "/posts/test",
    },
    {
      id: 2,
      title:
        "Asynchronous Programming in Node.js: Callbacks, Promises, and Async/Await Explained",
        type: "Post",
      image:
        "https://www.plusdev.net/_next/image?url=https%3A%2F%2Fplusdev-net.s3.eu-central-1.amazonaws.com%2Fbd1c1480201129be867adf88effb1458_nodejs-smart-contracts.jpg&w=640&q=60",
      icon: null,
      url: "/posts/test",
    },
    {
      id: 3,
      title:
        "Node.js vs. Golang: An In-Depth Comparison of the Latest Versions in 2024",
        type: "Question",
      image: null,
      icon: <LucideHelpCircle className="w-6 h-6" />,
      url: "/posts/test",
    },
    {
      id: 4,
      title:
        "Mastering Concurrency in Go: A Comprehensive Guide to Goroutines and Channels",
        type: "Question",
      image: null,
      icon: <LucideHelpCircle className="w-6 h-6" />,
      url: "/posts/test",
    },
    {
        id: 7,
        title: "Lokesh SK",
        type: "User",
        image: "https://www.plusdev.net/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F145984906%3Fv%3D4&w=64&q=20",
        icon: null,
        url: "/posts/test",
    },
    {
        id: 8,
        title: "Gor Lalayan",
        type: "User",
        image: "https://www.plusdev.net/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLRxzRYsI-ePH8kQ0e9ixO7glR_39sCHg4BdMjFb-RPQrV5n2IU%3Ds96-c&w=64&q=20",
        icon: null,
        url: "/posts/test",
    },
    {
        id: 5,
        title:
          "Node.js vs. Golang: An In-Depth Comparison of the Latest Versions in 2024",
        type: "Tag",
        image: null,
        icon: <LucideTag className="w-6 h-6" />,
        url: "/posts/test",
    },
    {
        id: 6,
        title:
          "Mastering Concurrency in Go: A Comprehensive Guide to Goroutines and Channels",
        type: "Tag",
        image: null,
        icon: <LucideTag className="w-6 h-6" />,
        url: "/posts/test",
    },
  ];


const SearchPart = () => {
    const [search, setSearch] = useState(topPosts)

    const getPost = (name) => {
        const filtered = topPosts.filter(searchType => searchType.type.includes(name));
        setSearch(filtered);
      }

  return (
    <div>
        <div className="w-full flex gap-3 px-5 items-center pb-5">
            <p className="body-medium text-zinc-900 dark:text-zinc-400">Type: </p>
            {tags.map((tag) => (
                <Badge
                    className="cursor-pointer subtle-medium rounded-md bg-slate-300 px-4 py-2 uppercase
                        text-zinc-500 hover:bg-indigo-400 hover:text-zinc-100 dark:bg-slate-800 dark:text-zinc-100 hover:dark:bg-indigo-400 "
                    onClick={() => getPost(tag.name)}
                >
                    {tag.name}
                </Badge>
            ))}
        </div>
        <div className="h-[1px] bg-slate-400/50 dark:bg-slate-500/50"></div>
        <div className="pt-5">
            <p className="px-5 paragraph-semibold mb-4 text-zinc-800 dark:text-zinc-300">Top Matches</p>

            {search.map((post) => (
                <SearchCards
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    type={post.type}
                    url={post.url}
                    image={post.image}
                    icon={post.icon}
                />
            ))}
        </div>
    </div>
  );
};

export default SearchPart;
