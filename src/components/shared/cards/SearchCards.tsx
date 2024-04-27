import { LucideArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  type: string;
  url: string;
  image: string;
  icon: string;
}

const SearchCards = ({ id, url, title, type, image, icon }: Props) => {
  return (
    <Link
      to={url}
      className="flex w-full items-center gap-3 px-1 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"
    >
    {icon === null ?
      <img
        src={image}
        alt={title}
        className="h-[50px] w-[50px] rounded-[10px] object-cover transition-all duration-500 hover:scale-105"
      />
    :   icon
    }

      <div>
        <p className="body-medium text-zinc-700 dark:text-zinc-400">
            {title}
        </p>
        <p className="small-semibold mt-1 text-zinc-700 dark:text-zinc-400 ">
            {type}
        </p>
      </div>
    </Link>
  );
};

export default SearchCards;
