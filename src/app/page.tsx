import Image from "next/image";
import LeftMenu from "./components/LeftMenu";
import Stories from "./components/Stories";
import AddPost from "./components/AddPost";
import Feed from "./components/Feed";
import RightMenu from "./components/RightMenu";

export default function Home() {
  return (
    <div className='flex gap-6 p-6'>
      <div className='hidden xl:block'>
        <LeftMenu />
      </div>
      <div className='w-full lg:w-[70%] xl:w-[50%]'>
        <div className='flex flex-col gap-6'>
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className='hidden lg:block w-[30%]'>
        <RightMenu />
      </div>
    </div>
  );
}
