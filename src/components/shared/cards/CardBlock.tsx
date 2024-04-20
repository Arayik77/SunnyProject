import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import RenderTag from "./RenderTag";
import { LucideEye, LucideHeart, LucideMessageCircle } from "lucide-react";

const popularTags: any = [
    {
      id: 1,
      title: "Node.js",
      count: 10,
      url: "/tags/test",
    },
    {
      id: 2,
      title: "Vue.js",
      count: 20,
      url: "/tags/test",
    },
    {
      id: 3,
      title: "Angular",
      count: 1,
      url: "/tags/test",
    }
];

interface Props {
  id: string;
  title: string;
  url: string;
  image: string;
  createdBy: string;
  createdByImg: string;
  createdAt: string;
  views: string;
  votes: string;
  comments: string;
}

const CardBlock = ({ id, url, title, image, createdBy, createdByImg, createdAt, votes, comments, views }: Props) => {
  return (
    <Card className="bg-zinc-100 dark:dark-gradient rounded-[10px] py-9 sm:px-11 px-3 sm:px-3">
        <Link to="/">
            <div className="relative mb-4 h-[200px] w-full overflow-hidden rounded-[10px] sm:h-[250px]">
                <img src={image} alt={image} 
                    className="h-[250px] w-full rounded-[10px] object-cover transition-all duration-500 hover:scale-105"
                />
            </div>
            
            <h3 className="sm:h3-semibold base-semibold flex-1 text-zinc-900 transition-colors hover:text-red-500 dark:text-zinc-500">
                {title}
            </h3>

            <div className="mt-4 flex w-full flex-wrap gap-2">
                {popularTags.map((tag) => (
                    <RenderTag
                        id={tag.id}
                        title={tag.title}
                        url={tag.url}
                        key={tag.id}
                        showCount={false}
                        totalCount={tag.count}
                    />
                ))}
            </div>
        </Link>

        <div className="mt-3">
            <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center gap-1 text-zinc-800 dark:text-zinc-500  transition-colors hover:text-red-400">
                    <img src={createdByImg} alt={createdByImg} className="rounded-[10px]"/>
                    <span>{createdBy}</span>
                    <span className="small-regular line-clamp-1 max-sm:hidden">created {createdAt}</span>
                </Link>
                <span className="flex items-center gap-1 small-regular line-clamp-1 dark:text-zinc-500">
                    <LucideHeart className="w-4 h-4" />
                    {votes}
                    <span>Votes</span>
                </span>
            </div>

            <div className="mt-2 flex justify-between items-center">
                <span className="flex items-center gap-1 small-regular line-clamp-1 dark:text-zinc-500">
                    <LucideMessageCircle className="w-4 h-4" />
                    {comments}
                    <span>Comments</span>
                </span>
                <span className="flex items-center gap-1 small-regular line-clamp-1 dark:text-zinc-500">
                    <LucideEye className="w-4 h-4" />
                    {views}
                    <span>Views</span>
                </span>
            </div>
        </div>
    </Card>
  );
};

export default CardBlock;