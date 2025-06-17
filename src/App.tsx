import React from 'react';
import Body from './components/body.tsx';
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';
import Extra from './components/extra.tsx';
import Navigation from './components/navigation.tsx';
import './style.css';

export function App() {

  return (
    <div className='
      pt-10 
      w-screen h-screen
      flex
      justify-center
      bg-[url(./assets/stars.gif)] bg-center bg-repeat-round
    '>
      <div className='
        grid grid-flow-row auto-rows-max gap-4
        max-w-5/6 min-w-1/3
       '>
        <div className='
          pt-8 
          flex justify-center 
          bg-blue-50
        '>
          <Header />
        </div>
        <div className='grid grid-cols-4 gap-4'>
          <div className='hidden sm:flex justify-center bg-red-50'>
            <Navigation />
          </div>
          <div className='col-span-4 sm:col-span-2 flex justify-center bg-green-50'>
            <Body />
          </div>
          <div className='hidden sm:flex h-0 sm:h-12 justify-center bg-red-50'>
            <Extra />
          </div>
        </div>
        <div className='flex justify-center bg-orange-50'>
          <Footer />
        </div>
      </div>
    </div>
  );

}
