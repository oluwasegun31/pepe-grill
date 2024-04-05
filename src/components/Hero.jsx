export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-center items-center text-center gap-6 pepeImg">
      <section className="absolute top-0 left-0 w-full h-full bg-main/85 z-10"></section>
      <p className="text-secondary md:text-7xl text-5xl font-semibold z-20">
        Welcome to "Pepe-Grill,"
      </p>
      <p className="w-[90%] text-primary font-normal md:text-xl text-lg z-20">
        where we're cooking up the freshest approach to cryptocurrency. Inspired
        by the vibrant and ever-evolving meme culture, "Pepe Grill" isn't just
        another digital asset—it's a community token that brings people together
        with the sizzle of blockchain technology.
      </p>
    </section>
  );
}
