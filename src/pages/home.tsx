import React from 'react';
import Body from '../components/body.tsx';

function Home() {
  const title = "Welcome";
  const body = "Hello there! Welcome to my website, I'm Andrew Martinez. I'm a programmer and a media enthusiest. On this website, you'll find my personal website and other stuff related to my interests. Enjoy!"

  return (
    < Body title={title} body={body} />
  )
}

export default Home;
