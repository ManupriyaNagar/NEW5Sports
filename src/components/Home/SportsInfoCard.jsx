'use client';
import React from "react";

const InfoCard = ({ bgColor, children }) => {
  return (
    <div className={`flex flex-col grow py-11 px-10 w-full text-black ${bgColor} border border-white border-solid rounded-[32px] max-md:px-5 max-md:mt-7 max-md:max-w-full`}>
      {children}
    </div>
  );
};

const SportsInfoCards = () => {
  return (
    <section className="w-full max-w-[1440px] max-md:max-w-full mt-0">
      <div className="flex gap-5 max-md:flex-col">
        {/* Card 1 - Custom structure */}
        <div className="w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col pt-px pr-px pb-12 pl-12 mx-auto w-full bg-green-600 border border-white border-solid rounded-[32px] max-md:pl-5 max-md:mt-7 max-md:max-w-full">
            <div className="self-start">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[73%] max-md:ml-0 max-md:w-full">
                  <h3 className="mt-8 text-4xl font-bold text-black leading-[56px] max-md:mt-10">
                    It's Not Just <br />
                    About Skills
                  </h3>
                </div>
                <div className="ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                  <div className="flex shrink-0 mx-auto bg-black rounded-none h-[75px] w-[92px] max-md:mt-10" />
                </div>
              </div>
            </div>
            <p className="mr-9 text-xl leading-7 text-black max-md:mr-2.5">
              Modern sports are demanding. <br />
              Without building strength, speed, <br />
              and resilience, you risk falling behind.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <InfoCard bgColor="bg-lime-400">
            <h3 className="self-start text-4xl font-bold leading-[56px]">
              It's Not Just <br />
              About Skills
            </h3>
            <p className="text-xl leading-7">
              Modern sports are demanding. <br />
              Without building strength, speed, <br />
              and resilience, you risk falling behind.
            </p>
          </InfoCard>
        </div>

        {/* Card 3 */}
        <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <InfoCard bgColor="bg-sky-400">
            <h3 className="self-start text-4xl font-bold leading-[56px]">
              It's Not Just <br />
              About Skills
            </h3>
            <p className="text-xl leading-7">
              Modern sports are demanding. <br />
              Without building strength, speed, <br />
              and resilience, you risk falling behind.
            </p>
          </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default SportsInfoCards;
