import MainList from "./_componant/InfoLIst/mainList";
import About from "./_componant/about";
import Header from "./_componant/header";
import Intro from "./_componant/intro";
import Links from "./_componant/links";

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Links />
      <MainList />
    </div>
  );
}
