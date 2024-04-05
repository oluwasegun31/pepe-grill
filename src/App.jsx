import "./App.css";
import logo from "./assets/logo.jpeg";
import Hero from "./components/Hero";
import Overview from "./components/Overview";

function App() {
  return (
    <>
      <header className="w-full font-primary py-1">
        <nav className="w-[95%] mx-auto flex justify-between items-center border-y border-primary">
          <p className="text-primary text-xl font-semibold">PGRILL</p>
          <img src={logo} alt="logo" className="w-16 h-16" />
          <section className="flex justify-center items-center gap-4">
            <svg
              className="w-6 h-6 cursor-pointer text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
            </svg>
            <svg
              className="w-7 h-7 text-primary cursor-pointer rotate-45"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"
              />
            </svg>
          </section>
        </nav>
      </header>
      <main className="font-primary px-4">
        <Hero />
        <Overview />
        <section className="w-full flex flex-col justify-start items-start py-6">
          <p className="text-secondary md:text-6xl sm:text-4xl text-3xl font-semibold mb-12 sm:p-0 px-2">
            Features
          </p>
          <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 max-w-[1240px] mx-auto mb-12">
            <div className="bg-primary flex flex-col gap-4 justify-center items-center sm:h-[350px] h-[300px] p-4 text-center text-main hover:text-primary hover:bg-secondary transition-all duration-300 shadow-md">
              <p className="sm:text-4xl text-3xl font-semibold">
                Sizzling Speed
              </p>
              <p className="sm:text-lg text-base font-medium leading-tight">
                Built on Solana for unparalleled transaction speeds and
                grill-like heat
              </p>
            </div>
            <div className="bg-primary flex flex-col gap-4 justify-center items-center sm:h-[350px] h-[300px] p-4 text-center text-main hover:text-primary hover:bg-secondary transition-all duration-300 shadow-md">
              <p className="sm:text-4xl text-3xl font-semibold">
                Community-Centric
              </p>
              <p className="sm:text-lg text-base font-medium leading-tight">
                Decisions made through community governance. Your voice, your
                token.
              </p>
            </div>
            <div className="bg-primary flex flex-col gap-4 justify-center items-center sm:h-[350px] h-[300px] p-4 text-center text-main hover:text-primary hover:bg-secondary transition-all duration-300 shadow-md">
              <p className="sm:text-4xl text-3xl font-semibold">
                Limited Supply
              </p>
              <p className="sm:text-lg text-base font-medium leading-tight">
                With a capped token supply, we're keeping it exclusive to the
                grill circle.
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
                We're committed to sustainable practices, ensuring a green
                approach to our grilling.
              </p>
            </div>
          </section>
          <section className="w-full flex flex-col justify-center items-center text-center divide-primary divide-y-2">
            <p className="text-secondary md:text-3xl text-2xl leading-tight font-medium py-2">
              Join the "Pepe Grill" Community
            </p>
            <p className="py-2 text-primary sm:text-xl text-lg font-normal md:w-[700px] w-full">
              Be a part of our grill community! Hold, trade, and participate in
              the "Pepe Grill" ecosystem. Follow us for updates, community
              events, and the latest grill gossip.
            </p>
          </section>
          <section className="bg-secondary sm:p-4 p-2 md:rounded-3xl rounded-xl mt-12">
            <p className="text-main sm:text-xl text-lg leading-tight font-medium text-center">
              Pepe Grill" isn't just a token; it's a movement. A celebration of
              crypto culture, communal strength, and, of course, a good grill.
              So grab your apron, and let's get grilling!
            </p>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
