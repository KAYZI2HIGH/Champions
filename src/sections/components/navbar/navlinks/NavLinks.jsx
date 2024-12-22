import { Link } from "react-scroll";

import { navLinks } from "../../../../lib/constants";

const NavLinks = ({ mobile, setMenu }) => {
  return (
    <div className={`flex gap-10 ${mobile && "flex-col"}`}>
      {navLinks.map((link, index) => (
        <Link
          to={link.title}
          key={index}
          onClick={() => {
            if (mobile) setMenu((prev) => !prev);
          }}
          activeClass="text-[#BC986B] under"
          className="font-semibold text-black hover:text-[#BC986B] uppercase text-sm tracking-wider cursor-pointer"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
