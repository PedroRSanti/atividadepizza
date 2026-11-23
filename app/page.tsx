import type { JSX } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Menu from "@/components/menu";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home(): JSX.Element {
  return (
    <main>
      <Header />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}