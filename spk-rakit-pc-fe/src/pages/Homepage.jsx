import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Build from '../components/Build';
import Footer from "../components/Footer";

export default function Homepage() {
  const heroRef = useRef(null);
  const buildRef = useRef(null);

  const handleHeroClick = () => {
    heroRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBuildClick = () => {
    buildRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar onHeroClick={handleHeroClick} onBuildClick={handleBuildClick} />
      <Hero />
      <Footer />
      <Build />
    </>
  );
}
