"use client";
import About from "./components/About";
import AboutPage from "./components/AboutPage";
import Homepage from "./components/Homepage";
import DarkModeToggle from "./components/DarkModeToggle";

export default function Home() {
  return (
    <main className='relative scroll-smooth'>
      <AboutPage />
      {/* <Homepage /> */}
      {/* <About /> */}
    </main>
  );
}
