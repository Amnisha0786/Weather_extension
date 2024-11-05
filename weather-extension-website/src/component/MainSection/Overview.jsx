import Image from "next/image";
import cloudy from "../../../Images/cloudy.png";
import AboutUs from "./AboutUs";
import Benefits from "./Benefits";
import WorkFlow from "./WorkFlow";
const Overview = () => {
  return (
    <main>
      <section className=" bg-primary flex flex-col lg:flex-row items-center justify-around min-h-[400px] lg:py-4 pt-6  ">
        <div className="animate-fade-in w-[320px] lg:w-[435px] text-center lg:text-left">
          <h2 className="text-[48px] lg:text-[80px] text-white leading-[95.023%] mb-2">Your Live Forecaster</h2>
          <p className="text-white text-[20px]">Together We Forecast: Building Dreams, One Day at a Time!</p>
          <p className="text-[16px]">1million People like you have purchased this product!</p>
          <div className="mt-4 flex flex-col lg:flex-row items-center">
          <button className="rounded-[4.767px] bg-black text-white py-1 px-2 mb-4 lg:mb-0 first-letter mr-2 hidden lg:block">Try Now</button>
          <button className="rounded-[4.767px] bg-yell text-black py-1 px-2 first-letter mb-8 lg:mb-0">Click here for Install</button>
          </div>
        </div>
        <div>
          <Image src={cloudy} width={280} height={280} className="mt-4 lg:mt-0" />
        </div>
      </section>
      <AboutUs/>
      <Benefits/>
      <WorkFlow/>
    </main>
  );
};

export default Overview;
