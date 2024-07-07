import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  CheckCircleIcon,
  ServerStackIcon,
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row m-5 items-center justify-between h-auto">
      <div className="flex justify-evenly max-w-2xl flex-grow">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TENDING" Icon={BoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckCircleIcon} />
        <HeaderItem title="COLLECTIONS" Icon={ServerStackIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="hulu"
      />
    </div>
  );
};

export default Header;
