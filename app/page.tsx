import AboutPage from "./components/AboutPage";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <main className='relative scroll-smooth'>
      <Homepage />
      <AboutPage />
    </main>
  );
}
