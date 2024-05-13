const getBlogById = async (blogSlug: string) => {
  const res = await fetch(`https://niftyitsolution.com/api/blogs/${blogSlug}`);
  const data = await res.json();
  return data;
};

const page = async ({ params }: { params: { blog_slug: string } }) => {
  const data = await getBlogById(params.blog_slug);
  console.log(data);
  return (
    <div>
      <div className="w-80 h-80">
        <img src={data.imgUrl} alt="image" />
      </div>
      <div>
        <h1 className="text-2xl my-5">{data.metaDescription}</h1>
        <p>{data.shortDescription}</p>
      </div>
    </div>
  );
};

export default page;
