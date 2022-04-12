const Footer = () => (
  <footer className="w-full border-t bg-white pb-12">
    <div className="w-full container mx-auto flex flex-col items-center">
      <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
        <button href="#" className="uppercase px-3">
          About Us
        </button>
        <button href="#" className="uppercase px-3">
          Privacy Policy
        </button>
        <button href="#" className="uppercase px-3">
          Terms & Conditions
        </button>
        <button href="#" className="uppercase px-3">
          Contact Us
        </button>
      </div>
      <div className="uppercase pb-6">&copy; myblog.com</div>
    </div>
  </footer>
);

export default Footer;
