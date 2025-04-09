import About from "./components/About";
import Header from "./components/Header";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <main className='relative scroll-smooth border border-red-500 w-screen h-screen bg-white'>
      <Header />
      <Homepage />
      <About />

      {/* <div>Home</div> */}
      {/* <div>About</div> */}
      {/* <div>Project</div> */}

      <div>Contact</div>
    </main>
  );
}
