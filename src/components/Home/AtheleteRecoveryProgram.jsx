import Image from "next/image";

export default function AthletesRecoveryProgram() {
  return (
    <section className="bg-black rounded-t-3xl text-center px-4 py-12 relative">
      {/* Side cutouts */}
      <div className="absolute top-1/2 -left-2 w-4 h-10 bg-black rounded-full -translate-y-1/2" />
      <div className="absolute top-1/2 -right-2 w-4 h-10 bg-black rounded-full -translate-y-1/2" />

      {/* Header */}
       <section className="relative bg-gray-100 rounded-2xl px-6 py-6 max-w-4xl mx-auto text-center">
      {/* Left circle cutout */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-black rounded-r-full" />
      {/* Right circle cutout */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-black rounded-l-full" />

      <h2 className="text-xl md:text-2xl font-bold text-black">
        Athletes Recovery Program
      </h2>
      <p className="text-gray-700 mt-2 text-sm md:text-base">
        5 Sports Hospital | Your Personal Recovery Specialist,<br />
        Tailoring Your Path to Full Recovery Each Week
      </p>
    </section>
   

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto text-left">
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
              src="/images/recovery1.jpg" // replace with actual image path
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
              src="/images/recovery2.jpg" // replace with actual image path
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
              src="/images/recovery1.jpg" // replace with actual image path
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
              src="/images/recovery2.jpg" // replace with actual image path
              alt="Recovery Insights"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-white">
           04 React Faster and Move with More Power When It Matters Most
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
              src="/images/recovery1.jpg" // replace with actual image path
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
