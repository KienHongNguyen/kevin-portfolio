// import About from "./components/About";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <main className='relative scroll-smooth w-screen h-screen'>
      <Header />

      <AboutPage />

      {/* <Homepage /> */}
      {/* <About /> */}

      {/* <div>Home</div> */}
      {/* <div>About</div> */}
      {/* <div>Project</div> */}

      <Footer />
    </main>
  );
}
