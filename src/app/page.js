import Contact from "./_componant/Contact";
import Hire from "./_componant/Hire";
import MainList from "./_componant/InfoLIst/mainList";
import Projects from "./_componant/Projects/Projects";
import Services from "./_componant/Services/Services";
import About from "./_componant/about";
import Footer from "./_componant/footer";
import Header from "./_componant/header";
import Intro from "./_componant/intro";
import Links from "./_componant/links";
import { ThemeProvider } from "next-themes"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div>
        <Header />
        <Intro />
        <About />
        <Links />
        <MainList />
        <Services />
        <Projects />
        <Hire />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
