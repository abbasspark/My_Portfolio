import React from "react";
import { Intro, About, Contact } from "../components/main"; //Projects,  Demo,
import { Header, Footer } from "../components/layout";
import Info from "../components/main/Info";

export default function Main() {
  return (
    <>
      <Header />
      <Intro />
      <div className="main">
        <About />
        <Info />
        {/*<Projects />
				<Demo />*/}
      </div>
      <Contact />

      <Footer />
    </>
  );
}
