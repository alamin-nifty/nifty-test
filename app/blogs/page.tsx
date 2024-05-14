import Blogs from "@/components/Blogs/Blogs";

const getPosts = async () => {
  try {
    const res = await fetch(`${process.env.PRODUCTION_URL}/api/blogs`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

const page = async (props: any) => {
  const data = await getPosts();
  return (
    <div className="grid grid-cols-2  gap-8 max-w-6xl mx-auto">
      {data?.blogs.map((blog: any) => (
        <Blogs key={blog.id} blogs={blog} />
      ))}
    </div>
  );
};

export default page;
