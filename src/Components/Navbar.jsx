import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
        <div className="container mx-auto">
          <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
            {[
              { to: "home", icon: <BiHomeAlt /> },
              { to: "about", icon: <BiUser /> },
              { to: "services", icon: <BsClipboardData /> },
              { to: "work", icon: <BsBriefcase /> },
              { to: "contact", icon: <BsChatSquare /> },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 15, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)" }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                <Link
                  to={item.to}
                  className="text-white/50 hover:text-white"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  offset={-96} // Adjust this value based on the height of your navbar
                  duration={500} // Optional: Duration for smooth scroll
                >
                  {item.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
