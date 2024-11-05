import Image from "next/image";

import small1 from "../../../Images/SmallClouds.svg"
import small2 from "../../../Images/SmallClouds-2.svg"


const Footer = () => {
  return (
    <footer className="bg-primary text-white ">
      <div className="px-6 flex justify-between w-full">
        <Image src={small1} width={50} height={50}/>
        <Image src={small2} width={50} height={50}/>
      </div>
      <div className="lg:min-h-52 bg-cover bg-[url('../../Images/FoldFooter.svg')] md:bg-[url('../../Images/MobileFooter.svg')] lg:bg-[url('../../Images/TabFooter.svg')] xl:bg-[url('../../Images/FooterCurve.svg')] bg-no-repeat xs:bg-center">
        <p className="mx-auto lg:pt-[150px] text-center font[16px] pt-[50px] px-[10px] pb-[20px] md:px-0 md:pb-0 lg:px-0 lg:pb-0">Designed and Developed By @Diligentic Infotech Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
