import Link from "next/link";
import SubNavbar from "./SubNavbar";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <section className="bg-black py-2.5 text-white ">
        <SubNavbar />
      </section>
      {/* main nav */}
      <section className="container mx-auto py-2.5 flex items-center justify-between">
        {/* logo section */}
        <div className="">
          <h2 className="uppercase text-2xl font-inter font-semibold">
            exclucive
          </h2>
        </div>
        {/* route section */}
        <div className="flex items-center space-x-5">
          <Link href="#" className="text-black">
            Home
          </Link>
          <Link href="#" className="text-black">
            Contact
          </Link>

          <Link href="#" className="text-black">
            About
          </Link>
          <Link href="#" className="text-black">
            Sign Up
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
