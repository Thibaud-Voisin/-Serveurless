import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'rc-progress';
import gsap from 'gsap';


function Suivi() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/info_avance', {
                  method: 'GET',
                });
          
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }
                else{
                    let data = await response.json();
                    if (data != status_nb) {
                        setStatus_nb(data);
                        setPercent(percent + 33);
                        updateStatus();
                    }
                }
              } catch (error) {
                console.error('Error during POST request:', error);
              }
        
        };
    
        // Set up the interval to make a request every second
        const intervalId = setInterval(fetchData, 1000);
    
        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, []);


    const [percent, setPercent] = useState(33);
    const [status, setStatus] = useState('Envoyée à la cuisine');
    const [status_nb, setStatus_nb] = useState(1);
    const statusRef = useRef();

    useEffect(() => {
        // Animate the status change
        gsap.fromTo(statusRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5 });
    }, [percent]);



    const getColor = (percent) => {
      if (percent > 75) return '#4caf50'; // Green at 75% - 100%
      if (percent > 50) return '#ffeb3b'; // Yellow at 50% - 74%
      if (percent > 33) return '#ff9800'; // Orange at 25% - 49%
      return '#f44336'; // Red at 0% - 24%
    };
  
    const increase = () => {
        console.log(percent);
      const newPercent = percent >= 99 ? 33 : percent + 33;
      setPercent(newPercent);
      updateStatus();
    };

    const updateStatus = () => {
        switch (percent) {
            case 33:
                setStatus('En cours de préparation');
                break;
            case 66:
                setStatus('Prête');
                break;
            case 99:
                setStatus('');
                break;
            default:
                setStatus('Delivered');
                break;
        }
    };
    return (
<div>
   <div className='h-[90vh] flex items-center justify-center'>
      <div className='w-[80vw] text-center'>
         <h1 className='absolute top-0 left-1/2 transform -translate-x-1/2 text-lg p-3 mb-4'>Table 12</h1>
         <div>
            <Line percent={percent} strokeWidth="6" strokeColor={getColor(percent)} />
            <div className={`text-[5vw] font-bold p-3 mb-4`} ref={statusRef}>{status}</div>
         </div>
      </div>
   </div>
</div>
);
}
export default Suivi;