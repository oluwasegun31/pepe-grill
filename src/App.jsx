import "./App.css";
import logo from "./assets/logo.jpeg";
import Features from "./components/Features";
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
        <Features />
      </main>
    </>
  );
}

export default App;
