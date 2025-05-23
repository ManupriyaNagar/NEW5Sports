import Image from "next/image";

export default function AthletesRecoveryProgram() {
  return (
    <section className="bg-black rounded-t-3xl text-center px-4 py-12 relative ">
      {/* Side cutouts */}

      {/* Header */}
      <section className="flex  w-full text-black px-20 max-md:flex-col">
      {/* Main Article with notches */}
      <article className="relative flex flex-col py-10 w-full   bg-white border border-lime-400 border-solid rounded-[32px] overflow-visible ">
        {/* Left notch */}
        <div
          className="absolute -left-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full 
                     transform -translate-y-1/2"
        />
        {/* Right notch */}
        <div
          className="absolute -right-8 top-1/2 w-[60px] h-[60px] bg-black rounded-full 
                     transform -translate-y-1/2"
        />

        <h2 className="self-center text-6xl font-bold leading-none max-md:text-4xl">
      Athletes Recovery Program
        </h2>

        <div className="flex flex-wrap gap-5 justify-center mt-6 w-full text-2xl text-center">
  <p className="max-w-3xl">
    Learn more about our mission to redefine sports medicine and athlete care.
  </p>
</div>

      </article>
    </section>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto text-left mt-10">
        {/* Block 1 */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-white">
            01. A Personal Recovery Specialist Who Designs Your Journey Every Week
          </h3>
          <p className="text-gray-300">
            When you have a dedicated team that understands your unique needs,
            every step of your recovery becomes purposeful. We’re here to guide
            you, offering a plan tailored specifically to your goals, pushing
            you to reach new milestones without compromising your health.
          </p>
        </div>
        <div>
          <div className="rounded-xl overflow-hidden border border-blue-400 p-1">
            <Image
              src="/pp5.png" // replace with actual image path
              alt="Recovery Specialist"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>

        {/* Block 2 */}
        <div>
          <div className="rounded-xl overflow-hidden border border-lime-400 p-1">
            <Image
              src="/pp4.png" // replace with actual image path
              alt="Recovery Insights"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-white">
            02 Recovery Driven by Insights and Real Data
          </h3>
          <p className="text-gray-300">
            We don’t guess; we measure. With the latest recovery technology,
            we’re able to assess your individual needs, tailor treatments, and
            help you recover faster and safer.
          </p>
        </div>

        
      {/*  block 3*/}


          <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-white">
            03. Strength That Translates Directly to the Field.
          </h3>
          <p className="text-gray-300">
           Our Goal isn't to help you heal - it's to make you stronger than before.
           Every recovery session is designed with performance in mind, so when you step back into your sport, you'll feel the difference where it counts-on the field.
          </p>
        </div>
        <div>
          <div className="rounded-xl overflow-hidden border border-blue-400 p-1">
            <Image
              src="/pp2.png" 
              alt="Recovery Specialist"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>

          <div>
          <div className="rounded-xl overflow-hidden border border-lime-400 p-1">
            <Image
              src="/pp1.png" 
              alt="Recovery Insights"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-white">
           04 React Faster and Move with More Power When It
          </h3>
          <p className="text-gray-300">
            In those high-pressure momenets, milliseconds count. that's why our recovery program includes methods to enhance your reaction time and build expolsive power,helping you stay sharp and make the game-changing move when it matters.
          </p>
        </div>

         <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-white">
           05 Speed That Shifts the Momentum of the Game
          </h3>
          <p className="text-gray-300">
            when it comes to sports, speed can be the ultimate game-changer.Through our specialized recovery and conditioning program,we focus on improving your agility and overall speed-giving you that advantage in every sprint and play.
          </p>
        </div>
        <div>
          <div className="rounded-xl overflow-hidden border border-blue-400 p-1">
            <Image
              src="/pp5.png" // replace with actual image path
              alt="Recovery Specialist"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </div>

      {/*  block 3*/}


      
    </section>
  );
}
