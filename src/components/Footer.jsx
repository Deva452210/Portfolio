import SocialIcons from "./SocialIcons";
import logo from "/assets/logoBlack.png";

const Footer = () => {
  return (
    <footer
      className="py-10 px-6 text-center flex flex-col items-center gap-4"
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      {/* Logo */}
      <img src={logo} alt="" className=" w-[50px] object-cover" />

      {/* Copyright */}
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Devakarun</span>
      </p>

      {/* Social Icons */}
      <SocialIcons />
    </footer>
  );
};

export default Footer;
