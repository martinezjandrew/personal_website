import React from 'react';

interface BodyProps {
  title: string,
  body: string
}

const Body: React.FC<BodyProps> = ({ title, body }) => {
  return (
    <div className='p-6'>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default Body;
