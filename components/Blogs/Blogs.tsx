import Link from "next/link";

type Props = {};

const Blogs = ({ blogs }: any) => {
  return (
    // <Link href={`/blogs/${blogs.slugUrl}`}>
    //   <div className="w-96 h-full border border-gray-500 rounded-md p-2 cursor-pointer ">
    //     <div className="w-80 h-80 mx-auto">
    //       <img src={blogs.imgUrl} alt="image" className="w-80 h-80" />
    //     </div>
    //     <div className="px-5">
    //       <h4 className="py-4 text-xl">{blogs.metaDescription}</h4>
    //       <p>{blogs.shortDescription}</p>
    //     </div>
    //   </div>
    // </Link>

    <Link href={`/blogs/${blogs.id}`}>
      <div className="w-96 h-full border border-gray-500 rounded-md p-2 cursor-pointer ">
        {/* <div className="w-80 h-80 mx-auto">
          <img src={blogs.imgUrl} alt="image" className="w-80 h-80" />
        </div> */}
        <div className="px-5">
          <h4 className="py-4 text-xl">{blogs.name}</h4>
          <p>{blogs.username}</p>
          <p>{blogs.email}</p>
        </div>
      </div>
    </Link>
  );
};

export default Blogs;
