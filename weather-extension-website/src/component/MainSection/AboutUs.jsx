import Image from "next/image";

import personalized from "../../../Images/Personalized.svg";
import code from "../../../Images/Code.svg";
import goal from "../../../Images/Goal.svg";
import moon from "../../../Images/moon.png";
import shot from "../../../Images/screenshot.png";
import tick from "../../../Images/List.svg";

const AboutUs = () => {
  return (
    <section className="bg-primary min-h-[400px] ">
      <div className="min-h-52 bg-cover bg-[url('../../Images/FoldAbout.svg')] md:bg-[url('../../Images/MobileAbout.svg')] lg:bg-[url('../../Images/TabAbout.svg')] xl:bg-[url('../../Images/AboutCurve.svg')] bg-no-repeat xs:bg-center mt-[-1px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white text-center lg:text-justify items-start auto-cols-fr pt-5 px-2 lg:px-12">
          <div className="mt-14 max-sm:mt-40">
            <div className="flex items-center justify-center lg:justify-start">
              <Image src={personalized} width={35} height={35} />
              <h4 className="text-[20px] font-bold">Personalized</h4>
            </div>
            Welcome to Weather Chrome Extension! We are a web developer
            dedicated to design various website with the goal to collect
            information with some easiest ways. Our commitment to excellence and
            customer satisfaction drives everything we do.
          </div>

          <div className="mt-14">
            <div className="flex items-center justify-center lg:justify-start">
              <Image src={code} width={35} height={35} />
              <h4 className="text-[20px] font-bold">Coding</h4>
            </div>
            We are used various JavaScript (JS) and ReactJS libraries. These
            technologies are known for their flexibility and performance
            benefits, making them popular choices in the web development
            community.
          </div>
          <div className="lg:mt-14 mt-4 md:row-span-2">
            <div className="flex items-center justify-center lg:justify-start">
              <Image src={goal} width={35} height={35} />
              <h4 className="text-[20px] font-bold">Goal</h4>
            </div>
            The utilization of these tools showcases a commitment to modern and
            effective web development practices, ensuring that their projects
            meet high standards of functionality, responsiveness, and user
            engagement.
          </div>
        </div>
      </div>
      <div className="mt-[-2px] px-12 hidden lg:bg-gd lg:flex  lg:flex-row items-center justify-around py-10 pt-20 min-h-[300px]">
        
          <Image
          className="shadow-db rounded-md"
          src={shot}
          width={350}
          height={350}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="153"
          height="12"
          viewBox="0 0 153 12"
          fill="none"
        >
          <path
            d="M0.70636 6.13672C0.70636 8.34586 2.49722 10.1367 4.70636 10.1367C6.9155 10.1367 8.70636 8.34586 8.70636 6.13672C8.70636 3.92758 6.9155 2.13672 4.70636 2.13672C2.49722 2.13672 0.70636 3.92758 0.70636 6.13672ZM152.543 6.66705C152.836 6.37416 152.836 5.89928 152.543 5.60639L147.77 0.833418C147.477 0.540524 147.002 0.540524 146.709 0.833418C146.416 1.12631 146.416 1.60118 146.709 1.89408L150.952 6.13672L146.709 10.3794C146.416 10.6723 146.416 11.1471 146.709 11.44C147.002 11.7329 147.477 11.7329 147.77 11.44L152.543 6.66705ZM4.70636 6.88672H152.013V5.38672H4.70636V6.88672Z"
            fill="white"
          />
        </svg>
        <div className="lg:w-[480px] w-[360px]">
          <h1 className="text-white text-[34px] font-600">
            Plan Your Outdoor Activities with Ease
          </h1>
          <p className="font-semibold">
            Get notified before rain stops. Plan your outdoor activities
          </p>
          <ul className="">
          <li className="flex">
              {" "}
              <Image src={tick} width={15} height={15} className="mr-2" />
              Display temperature of cities based on user input.
            </li>
            <li className="flex">
              {" "}
              <Image src={tick} width={15} height={15} className="mr-2" /> Share
              Switching between metric & imperial temp. units.
            </li>
            <li className="flex">
              {" "}
              <Image src={tick} width={15} height={15} className="mr-2" />
              Display Weather overlay on webpage as user is browsing.
            </li>
            <li className="flex">
              {" "}
              <Image src={tick} width={15} height={15} className="mr-2" />
              BadgeIcon, updates hourly with weather of user's home city.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
