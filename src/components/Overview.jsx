export default function Overview() {
  return (
    <section className="border-y border-y-primary md:p-4 px-0 py-4 rounded-3xl flex flex-col justify-start items-start mb-16">
      <p className="text-secondary md:text-5xl sm:text-4xl text-3xl font-semibold mb-12 sm:p-0 px-2">
        Token Overview
      </p>
      <section className="w-full flex sm:flex-row flex-col flex-wrap justify-start items-start gap-6">
        <div className="border-l border-l-primary pl-4 flex flex-col gap-2 justify-start items-start">
          <p className="md:text-5xl text-3xl text-primary font-medium">
            Pepe Grill
          </p>
          <p className="text-secondary md:text-2xl text-xl">Name</p>
        </div>
        <div className="border-l border-l-primary pl-4 flex flex-col gap-2 justify-start items-start">
          <p className="md:text-5xl text-3xl text-primary font-medium">
            PGRILL
          </p>
          <p className="text-secondary md:text-2xl text-xl">Symbol</p>
        </div>
        <div className="border-l border-l-primary pl-4 flex flex-col gap-2 justify-start items-start">
          <p className="md:text-5xl text-3xl text-primary font-medium">
            Solana
          </p>
          <p className="text-secondary md:text-2xl text-xl">Blockchain</p>
        </div>
        <div className="border-l border-l-primary pl-4 flex flex-col gap-2 justify-start items-start">
          <p className="md:text-5xl text-3xl text-primary font-medium">
            Community & Meme Token
          </p>
          <p className="text-secondary md:text-2xl text-xl">Token Type</p>
        </div>
        <div className="border-l border-l-primary pl-4 flex flex-col gap-2 justify-start items-start">
          <p className="md:text-4xl text-2xl  text-primary font-medium">
            At "Pepe Grill," our vision is to harness the power of the
            blockchain to create a decentralized currency that's both fun and
            functional. We believe in the power of community and the shared
            spirit of humor to build a currency that stands out in the crypto
            kitchen.
          </p>
          <p className="text-secondary md:text-2xl text-xl">Vision</p>
        </div>
      </section>
    </section>
  );
}
