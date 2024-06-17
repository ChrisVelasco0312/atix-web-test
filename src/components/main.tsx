import Navbar from "./navbar";
import Section from "./section";

const Main = () => {
  return (
    <main>
      <Section
        heightMode="h-screen"
        contentHeight="100%"
        background="backgrounds/welcome.png"
      >
        <Navbar />
      </Section>
    </main>
  );
};

export default Main;
