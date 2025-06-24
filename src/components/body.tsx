import React from 'react';

interface BodyProps {
  title: string,
  body: string
}

const Body: React.FC<BodyProps> = ({ title, body }) => {
  return (
    <div className='p-6 min-w-full'>
      <h1 className='font-jacquard-12 text-6xl'>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default Body;
