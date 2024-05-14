// const getBlogBySlug = async (slug: string) => {
//   const res = await fetch(`${process.env.PRODUCTION_URL}/api/blogs/${slug}`, {
//     cache: "force-cache",
//   });
//   const data = await res.json();
//   console.log(data);
//   return data;
// };

const getBlogBySlug = async (slug: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${slug}`,
    {
      cache: "force-cache",
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
};

const page = async ({ params }: { params: { blog_slug: string } }) => {
  const data = await getBlogBySlug(params.blog_slug);

  return (
    // <div>
    //   <div className="w-80 h-80">
    //     <img src={data.imgUrl} alt="image" />
    //   </div>
    //   <div>
    //     <h1 className="text-2xl my-5">
    //       {data.metaDescription}
    //       {Math.random().toFixed(2) + 1}
    //     </h1>
    //     <p>{data.shortDescription}</p>
    //   </div>
    // </div>
    <div>
      {/* <div className="w-80 h-80">
        <img src={data.imgUrl} alt="image" />
      </div> */}
      <div>
        <h1 className="text-2xl my-5">{data.name}</h1>
        <p>{data.email}</p>
      </div>
    </div>
  );
};

export default page;
