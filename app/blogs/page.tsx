import Blogs from "@/Components/Blogs/Blogs";

const getPosts = async () => {
  const res = await fetch("https://niftyitsolution.com/api/blogs");
  const data = await res.json();
  return data;
};

const page = async (props: any) => {
  const data = await getPosts();
  return (
    <div className="grid grid-cols-2  gap-8 max-w-6xl mx-auto">
      {data.blogs.map((blog: any) => (
        <Blogs key={blog.id} blogs={blog} />
      ))}
    </div>
  );
};

export default page;
