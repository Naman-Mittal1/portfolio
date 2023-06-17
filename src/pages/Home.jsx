import React from 'react';
import HeadInfo from '../components/HeadInfo/HeadInfo';
import Projects from '../components/Projects/Projects';
import Timeline from '../components/Timeline/Timeline';
import Skillset from '../components/Skillset/Skillset';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <HeadInfo />
      <Skillset />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
