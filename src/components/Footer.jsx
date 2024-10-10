import { MdEmail, MdLocalPhone } from "react-icons/md";
import DownloadButton from "./DownloadButton";
import Links from "./Links";

const Footer = () => {
  const contacts = [
    { data: "pronuevopatrickjoseph@gmail.com", Icon: MdEmail },
    { data: "+639764127324", Icon: MdLocalPhone },
  ];
  return (
    <>
      <footer className="mt-14 sm:mt-20 bg-[#D9D9D9] text-primary">
        <div className="mx-[120px]">
          <div className="container mx-auto py-14">
            <div className="flex flex-wrap gap-6 items-center justify-center xl:justify-between">
              <div className="flex flex-wrap justify-center xl:justify-start items-center gap-y-5 gap-x-8 xl:gap-10">
                {contacts.map((item, index) => (
                  <p
                    key={index}
                    className="text-[15px] xs:text-[16px] tracking-wide flex items-center gap-2"
                  >
                    <item.Icon className="text-[25px]" />
                    {item.data}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-5">
                <DownloadButton />
                <div className="flex items-center gap-x-[15px]">
                  <Links />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
