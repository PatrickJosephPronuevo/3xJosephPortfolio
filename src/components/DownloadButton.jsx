import Resume from "../assets/docs/Patrick Joseph Pronuevo - CV NO PIC.pdf";

const DownloadButton = () => {
  const buttonStyle =
    "bg-accent text-white w-[175px] py-[6px] rounded-[5px] hover:bg-hoveredButton  transform hover:-translate-y-[2px] shadow-md shadow-[rgba(48,18,17,.50)] transition-all duration-200 mx-auto lg:mx-0";

  return (
    <>
      <button className={buttonStyle}>
        <a
          href={Resume}
          className="tracking-wider font-medium text-[15px] md:text-[16px]"
          download
        >
          Download CV
        </a>
      </button>
    </>
  );
};

export default DownloadButton;
