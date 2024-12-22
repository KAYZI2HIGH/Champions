import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavLinks from "./navlinks/NavLinks";
import { Link } from "react-scroll";
import { Backdrop } from "@mui/material";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { easeInOut } from "motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.div
      variants={{ hidden: { y: "-120%" }, visible: { y: 0 } }}
      animate={`${hidden ? "hidden" : "visible"}`}
      transition={{ duration: 0.33, ease: easeInOut }}
      className="flex justify-between items-center py-5 border-b shadow-lg px-3 md:px-10 bg-white sticky top-0 z-50"
    >
      <Link
        to="home"
        className="text-3xl font-extrabold text-sky-950 hover:text-[#BC986B] tracking-wide flex capitalize cursor-pointer"
      >
        <img
          src="images/church-logo.png"
          alt=""
          width={"40px"}
          className="mr-2"
        />
         champions
      </Link>
      <div className="hidden md:flex">
        <NavLinks />
      </div>
      <div
        className="md:hidden relative z-50 text-black"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <X /> : <Menu />}
      </div>

      <AnimatePresence>
        {menu && (
          <Backdrop
            open={menu}
            onClick={() => setMenu(!menu)}
            className="z-10 w-screen min-h-svh"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="w-1/2 h-full absolute top-0 right-0 bottom-0 md:hidden bg-white py-20 px-10"
            >
              {
                <NavLinks
                  mobile={true}
                  setMenu={setMenu}
                />
              }
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
