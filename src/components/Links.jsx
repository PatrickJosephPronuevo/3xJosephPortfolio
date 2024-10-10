import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Links = () => {
  const socialLinks = [
    { link: "https://github.com/PatrickJosephPronuevo", Icon: FaGithub },
    {
      link: "https://www.facebook.com/3xj0seph",
      Icon: FaFacebook,
    },
    {
      link: "https://www.linkedin.com/in/patrick-joseph-pronuevo-653a30278/",
      Icon: FaLinkedin,
    },
    {
      link: "https://www.instagram.com/3x.joseph/",
      Icon: FaInstagram,
    },
  ];

  return (
    <>
      {socialLinks.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          target="_blank"
          className="hover:text-accent hover:scale-110 transition-all duration-150"
        >
          <item.Icon className="w-[27px] sm:w-[30px] h-[27px] sm:h-[30px]" />
        </Link>
      ))}
    </>
  );
};

export default Links;
