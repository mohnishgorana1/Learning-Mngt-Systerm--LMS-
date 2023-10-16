import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

  return (
    <>
      <footer className="relative left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20">
        <section className="text-lg">
            Copyright {year} | All rights reserved
        </section>
        <section className="flex items-center justify-center gap-x-5 text-2xl text-white">
            <a className="hover:text-yellow-500 transition-all ease-in-out duration-150">
                <BsFacebook />
            </a>
            <a className="hover:text-yellow-500 transition-all ease-in-out duration-150">
                <BsTwitter />
            </a>
            <a className="hover:text-yellow-500 transition-all ease-in-out duration-150">
                <BsInstagram />
            </a>
            <a className="hover:text-yellow-500 transition-all ease-in-out duration-150">
                <BsLinkedin />
            </a>
            
        </section>
      </footer>
    </>
  );
}

export default Footer;
