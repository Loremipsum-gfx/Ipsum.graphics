"use client";
import Hero from "./hero";
import CallToAction from "./call-to-action";
import Skills from "./skills";
import References from "./references";
import Stats from "./stats";
import Work from "./work";
import AboutMe from "./about-me";
import GetInTouch from "./get-in-touch";

export default function HomeSections() {
  return (
    <>
      <Hero />
      <CallToAction />
      <Skills />
      <References />
      <Stats />
      <Work />
      <AboutMe />
      <GetInTouch />
    </>
  );
}
