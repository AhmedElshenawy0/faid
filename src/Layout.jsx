import { Outlet } from "react-router-dom";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbare";
import "./index.css";
const Layout = () => {
  return (
    <div className="relative">
      {/* WhatsApp Button */}
      {/* <motion.a
        href="https://api.whatsapp.com/send?phone=201555766618"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="fixed bottom-10 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg text-white hover:scale-110 transition-transform"
      >
        <FaWhatsapp size={28} />
      </motion.a>
      <motion.button
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        onClick={handleScrollToTop}
        className="fixed bottom-30 right-6 z-50 bg-black p-4 rounded-full shadow-lg text-white hover:scale-110 transition-transform"
      >
        <GoMoveToTop size={28} />
      </motion.button> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
