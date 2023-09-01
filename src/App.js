import React from 'react';
import Main from './components/Main';
import Main2 from './components/Main2';
import Main3 from './components/Main3';

export default function App() {
  const containerRef = React.useRef(null);
  let lastScrollTime = 0;

  const handleScroll = (e) => {
    const currentTime = new Date().getTime();
    
    if (currentTime - lastScrollTime < 500) {
      return;
    }
    
    lastScrollTime = currentTime;
    e.preventDefault();

    if (containerRef.current) {
      let container = containerRef.current;
      let newY = e.deltaY > 0 
        ? container.scrollTop + window.innerHeight 
        : container.scrollTop - window.innerHeight;

      container.scrollTo({ top: newY, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen overflow-y-auto hide-scrollbar"
      ref={containerRef}
      style={{ height: '100vh', overflow: 'hidden',}} 
      onWheel={handleScroll}
    >
      <div style={{ height: '300vh' }}>
        <div style={{ height: '100vh' }}>
          <Main />
        </div>
        <div style={{ height: '100vh' }}>
          <Main2 />
        </div>
        <div style={{ height: '100vh' }}>
          <Main3 />
        </div>
      </div>
    </div>
  );
}