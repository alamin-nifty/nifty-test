const getBlogBySlug = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${slug}`);
  const data = await res.json();
  console.log(data);
  return data;
};

const page = async ({ params }: { params: { blog_slug: string } }) => {
  const data = await getBlogBySlug(params.blog_slug);

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
