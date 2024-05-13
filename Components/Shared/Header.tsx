import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full h-24 bg-gray-700">
      <div className="flex gap-10 text-white py-8 px-10">
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
      </div>
    </div>
  );
};

export default Header;
