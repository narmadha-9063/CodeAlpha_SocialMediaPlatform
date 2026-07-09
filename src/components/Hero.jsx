import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <h1>Connect • Share • Inspire</h1>
      <p>Share your memories with friends around the world.</p>

      <button>Start Sharing</button>
    </div>
  );
}

export default Hero;