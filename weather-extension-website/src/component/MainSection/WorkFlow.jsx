const WorkFlow = () => {
  return (
    <section className="min-h-[400px] bg-primary pt-16 px-4 lg:px-0">
      <div className="m-auto lg:max-w-[700px] text-center">
        <h1 className="text-white lg:text-[48px] leading-normal text-[30px]">
          The Weather Extension That Brings You Wonder
        </h1>
        <p>
          We care about your happiness and well-being, no matter the weather.
        </p>
        <ul className="mt-4 text-left mx-auto max-w-[630px] space-y-1 text-white dark:text-white gap-4">
          <li className="text-left px-6 py-4 flex flex-row items-center rounded-full border-solid border-gray border-[1px]">
            <div class="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white rotate-90 mr-2 "></div>
            Input the name of city in input box and click enter after filling
            name.
          </li>
          <li className="scroll-smooth text-left px-6 py-4 flex flex-row items-center rounded-full border-solid border-gray border-[1px] ">
            <div class="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white rotate-90 mr-2 "></div>
            The weather result will displayed on extension screen.
          </li>
          <li className="text-left px-6 py-4 flex flex-row items-center rounded-full border-solid border-gray border-[1px]">
            <div class="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white rotate-90 mr-2 "></div>
            For adding popup on every page load, click settings icon on the top
            right.
          </li>
          <li className="text-left px-6 py-4 flex flex-row items-center rounded-full border-solid border-gray border-[1px]">
            <div class="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white rotate-90 mr-2 "></div>
            Then add custom city , you want to track and enable toggle.
          </li>
          <li className="text-left px-6 py-4 flex flex-row items-center rounded-full border-solid border-gray border-[1px]">
            <div class="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white rotate-90 mr-2 "></div>
            Also , anytime you can disable it in settings options.{" "}
          </li>
        </ul>

        <div className="mt-24 pb-28">
          <p className="text-yell text-[24px] font-500">
            Experience the weather like never before
          </p>
          <h2 className="text-white lg:text-[36px] text-[22px] font-600 mt-4 mb-2">
            The Only Weather App You Need to Stay Connected with Nature and Each
            Other
          </h2>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
