import { Button } from "@/components/ui/button";
import {
  LucideFileQuestion,
  LucideHome,
  LucideNewspaper,
  LucideTags,
  LucideUsers2,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BurgerSidebar = () => {
  const location = useLocation();

  const isActive = (route: string): boolean => {
    return location.pathname === route;
  };

  return (
    <section
      className="flex h-full flex-col gap-6 pt-14"
    >
      <div className="flex flex-1 flex-col gap-6">
        <Link
          to="/"
          className={`flex items-center justify-start gap-4 p-4 rounded-lg ${
            isActive("/")
              ? "primary-gradient base-bold text-zinc-50"
              : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
          }`}
        >
          <LucideHome className="h-5 w-5" />
          <span>Home</span>
        </Link>

        <Link
          to="/posts"
          className={`flex items-center justify-start gap-4 p-4 rounded-lg ${
            isActive("/posts")
              ? "primary-gradient base-bold text-zinc-50"
              : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
          }`}
        >
          <LucideNewspaper className="h-5 w-5" />
          <span>Posts</span>
        </Link>

        <Link
          to="/questions"
          className={`flex items-center justify-start gap-4 p-4 rounded-lg ${
            isActive("/questions")
              ? "primary-gradient base-bold text-zinc-50"
              : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
          }`}
        >
          <LucideFileQuestion className="h-5 w-5" />
          <span>Questions</span>
        </Link>

        <Link
          to="/community"
          className={`flex items-center justify-start gap-4 p-4 rounded-lg ${
            isActive("/community")
              ? "primary-gradient base-bold text-zinc-50"
              : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
          }`}
        >
          <LucideUsers2 className="h-5 w-5" />
          <span>Community</span>
        </Link>

        <Link
          to="/tags"
          className={`flex items-center justify-start gap-4 p-4 pb-0 rounded-lg ${
            isActive("/tags")
              ? "primary-gradient base-bold text-zinc-50"
              : "base-medium text-zinc-900 dark:text-zinc-100 hover:bg-slate-200 dark:hover:bg-slate-800"
          }`}
        >
          <LucideTags className="h-5 w-5" />
          <span>Tags</span>
        </Link>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <Link to="/sign-in">
          <Button className="body-semibold btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 text-zinc-50">
            <span>Sign In</span>
          </Button>
        </Link>

        <Link to="/sign-up">
          <Button className="body-semibold btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 text-zinc-50">
            <span>Sign Up</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BurgerSidebar;
