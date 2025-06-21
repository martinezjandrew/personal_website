import React from 'react';
import Body from '../../components/body.tsx';

function AboutMe() {
  const title = "About Me";
  const body = "I'm a student at St. Edward's University, expecting to graduate in December 2025";

  return (
    < Body title={title} body={body} />
  )
}

export default AboutMe;
