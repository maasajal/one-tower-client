import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="text-white">
        <div className="flex flex-col md:flex-row text-center mt-10">
          <div className="bg-[#d58c59] py-14 flex-1">
            <h6 className="text-2xl font-semibold mb-5">Location</h6>
            <address className="leading-8">
              Pellervonkatu 9, 33540 Tampere, Finland
            </address>
          </div>
          <div className="bg-[#c3a18c] py-14 flex-1">
            <h6 className="text-2xl font-semibold mb-5">Contact Us</h6>
            <p className="leading-8">
              Email: <a href="mailto:one@tower.com">one@tower.com</a> <br />
              Phone: <a href="tel:+358123456789">+358123456789</a> <br />
            </p>
          </div>
          <div className="bg-[#b1b6c0] py-14 space-y-5 flex-1">
            <h6 className="text-2xl font-semibold">Follow US</h6>
            <p>Join us on social media</p>
            <div className="flex justify-center gap-6">
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <footer className="footer footer-center bg-[#3d5cab] p-4">
          <aside>
            <p>
              Copyright © 2024 - All right reserved by
              <a href="/"> One Tower </a>
            </p>
          </aside>
        </footer>
      </footer>
    </>
  );
};
export default Footer;
