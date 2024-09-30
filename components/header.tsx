import Image from "next/image";
import Navbar from "./ui/navbar";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full py-3 px-[74px]">
      <div>
        <Image
          src={"/white-logo-64.svg"}
          alt="company logo"
          width={32}
          height={32}
        />
      </div>
      <Navbar />
      <div>
        <Button variant={"default"}>Request a quote</Button>
      </div>
    </header>
  );
};

export default Header;
