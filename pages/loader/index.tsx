
import { useEffect, useState } from 'react';
import CircularProgressWithLabel from '@src/pages/loader';

const Loader = () => {
const [progress, setProgress] =useState<number>(10)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress:number) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
};


export default Loader;
