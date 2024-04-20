import CardBlock from "@/components/shared/cards/CardBlock";
import imageLink from "@/components/images/rightside/image.webp";
import userImg from "@/components/images/rightside/user.webp";

const topPosts: any = [
  {
    id: 1,
    title:
      "Mastering Smart Contract Development with Node.js: Tools, Security, and Best Practices",
    image: imageLink,
    url: "/posts/test",
    createdBy: "Poxos Poxosyan",
    createdByImg: userImg,
    createdAt: "1 week ago",
    views: "5.2K",
    votes: 1,
    comments: 3
  },
  {
    id: 2,
    title:
      "Asynchronous Programming in Node.js: Callbacks, Promises, and Async/Await Explained",
    image: imageLink,
    url: "/posts/test",
    createdBy: "Karapet Karapetyan",
    createdByImg: userImg,
    createdAt: "3 months ago",
    views: "7K",
    votes: 10,
    comments: 1
  },
  {
    id: 3,
    title:
      "Node.js vs. Golang: An In-Depth Comparison of the Latest Versions in 2024",
    image: imageLink,
    url: "/posts/test",
    createdBy: "Petros Petrosyan",
    createdByImg: userImg,
    createdAt: "1 day ago",
    views: "3.8K",
    votes: 2,
    comments: 0
  }
];

const MainPage = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
      {topPosts.map((post) => (
        <CardBlock 
          key={post.id}
          id={post.id}
          title={post.title}
          url={post.url}
          image={post.image}
          createdBy={post.createdBy}
          createdByImg={post.createdByImg}
          createdAt={post.createdAt}
          views={post.views}
          votes={post.votes}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default MainPage;
