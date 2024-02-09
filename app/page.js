import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TopHero from "./components/HeroSection/TopHero";

export default function Home() {
  return (
    <div className="p-0">
      <Navbar />
      <TopHero />
      <h1>Welcome to Khan Bio Tech</h1>
      <Footer />
    </div>
  );
}
