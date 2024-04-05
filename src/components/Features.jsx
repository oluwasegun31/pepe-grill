export default function Features() {
  return (
    <section className="w-full flex flex-col justify-start items-start py-6">
      <p className="text-secondary md:text-6xl sm:text-4xl text-3xl font-semibold mb-12 sm:p-0 px-2">
        Features
      </p>
      <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 max-w-[1240px] mx-auto mb-12">
        <div className="bg-primary flex flex-col gap-4 justify-center items-center sm:h-[350px] h-[300px] p-4 text-center text-main hover:text-primary hover:bg-secondary transition-all duration-300 shadow-md">
          <p className="sm:text-4xl text-3xl font-semibold">Sizzling Speed</p>
          <p className="sm:text-lg text-base font-medium leading-tight">
            Built on Solana for unparalleled transaction speeds and grill-like
            heat
          </p>
        </div>
        <div className="bg-primary flex flex-col gap-4 justify-center items-center sm:h-[350px] h-[300px] p-4 text-center text-main hover:text-primary hover:bg-secondary transition-all duration-300 shadow-md">
          <p className="sm:text-4xl text-3xl font-semibold">
            Community-Centric
          </p>
          <p className="sm:text-lg text-base font-medium leading-tight">
            Decisions made through community governance. Your voice, your token.
          </p>
        </div>
        <div className="bg-primary flex flex-col gap-4 justify-center items-center sm:h-[350px] h-[300px] p-4 text-center text-main hover:text-primary hover:bg-secondary transition-all duration-300 shadow-md">
          <p className="sm:text-4xl text-3xl font-semibold">Limited Supply</p>
          <p className="sm:text-lg text-base font-medium leading-tight">
            With a capped token supply, we're keeping it exclusive to the grill
            circle.
          </p>
        </div>
        <div className="bg-primary flex flex-col gap-4 justify-center items-center sm:h-[350px] h-[300px] p-4 text-center text-main hover:text-primary hover:bg-secondary transition-all duration-300 shadow-md">
          <p className="sm:text-4xl text-3xl font-semibold">
            Engagement Rewards
          </p>
          <p className="sm:text-lg text-base font-medium leading-tight">
            Holders can earn rewards through engagement, grilling up some
            delicious token benefits.
          </p>
        </div>
        <div className="bg-primary flex flex-col gap-4 justify-center items-center sm:h-[350px] h-[300px] p-4 text-center text-main hover:text-primary hover:bg-secondary transition-all duration-300 shadow-md">
          <p className="sm:text-4xl text-3xl font-semibold">
            Eco-Friendly Gril
          </p>
          <p className="sm:text-lg text-base font-medium leading-tight">
            We're committed to sustainable practices, ensuring a green approach
            to our grilling.
          </p>
        </div>
        <div className="bg-primary flex flex-col gap-4 justify-center items-center sm:h-[350px] h-[300px] p-4 text-center text-main hover:text-primary hover:bg-secondary transition-all duration-300 shadow-md">
          <p className="sm:text-4xl text-3xl font-semibold">
            Chess Board gamble game
          </p>
        </div>
      </section>
      <section className="w-full flex justify-center items-center my-12">
        <a href="">
          <button className="capitalize p-4 bg-secondary text-main sm:text-4xl text-2xl font-semibold -skew-x-12 outline-none">
            come gamble
          </button>
        </a>
      </section>
      <section className="w-full flex flex-col justify-center items-center text-center divide-primary divide-y-2">
        <p className="text-secondary md:text-3xl text-2xl leading-tight font-medium py-2">
          Join the "Pepe Grill" Community
        </p>
        <p className="py-2 text-primary sm:text-xl text-lg font-normal md:w-[700px] w-full">
          Be a part of our grill community! Hold, trade, and participate in the
          "Pepe Grill" ecosystem. Follow us for updates, community events, and
          the latest grill gossip.
        </p>
      </section>
      <section className="bg-secondary sm:p-4 p-2 md:rounded-3xl rounded-xl mt-12 mx-auto">
        <p className="text-main sm:text-xl text-lg leading-tight font-medium text-center">
          Pepe Grill" isn't just a token; it's a movement. A celebration of
          crypto culture, communal strength, and, of course, a good grill. So
          grab your apron, and let's get grilling!
        </p>
      </section>
    </section>
  );
}
