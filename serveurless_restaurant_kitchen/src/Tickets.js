import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import restaurant_logo from './restaurant_logo.png';
import prepa from './prepa.png';
import en_attente from './en attente.png';
import ready from './ready.png';

function Tickets() {

  const send_suivi = async () =>
  {
    setStatuss(statuss + 1);
      try {
        const response = await fetch('http://localhost:3000/update_status', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({'valuee':statuss}),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
      } catch (error) {
        console.error('Error during POST request:', error);
      }
    }

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/get_cart', {
              method: 'GET',
            });
            
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            else{
                let data = await response.json();
                if (data_r != data)
                {
                  settickets_data([...tickets_data, data]);
                  setdata_r(data);
                }
                else
                {
                  console.log(data_r);
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

    const [statuss, setStatuss] = useState(1);
    const [data_r , setdata_r] = useState({});
    const [tickets_data, settickets_data] = useState( 
    [
        {
            "state":1,
            "timestamp": "170540535",
            "table": 12,
            "data":       [ {
                "number": 1,
                "name": "Bruschetta",
                "image": "https://www.healthyfoodcreation.fr/wp-content/uploads/2023/07/brus-2.jpg",
                "ingredients": [
                  "toasted bread",
                  "tomatoes",
                  "garlic",
                  "basil",
                  "olive oil"
                ],
                "price": 6.5,
                "description": "Toasted bread topped with fresh tomatoes, garlic, and basil, drizzled with olive oil.",
                "type": "Appetizers"
              },
              {
                "number": 1,
                "name": "hhgsfgdsg",
                "image": "https://www.healthyfoodcreation.fr/wp-content/uploads/2023/07/brus-2.jpg",
                "ingredients": [
                  "toasted bread",
                  "tomatoes",
                  "garlic",
                  "basil",
                  "olive oil"
                ],
                "price": 6.5,
                "description": "Toasted bread topped with fresh tomatoes, garlic, and basil, drizzled with olive oil.",
                "type": "Appetizers"
              },
              {
                "number": 2,
                "name": "Spaghetti Carbo",
                "image": "https://www.twopeasandtheirpod.com/wp-content/uploads/2023/01/Spaghetti-Carbonara168766.jpg",
                "ingredients": [
                  "spaghetti",
                  "egg yolks",
                  "pancetta",
                  "parmesan cheese",
                  "black pepper"
                ],
                "price": 14,
                "description": "Classic Roman pasta dish with egg, pancetta, parmesan, and a touch of black pepper.",
                "type": "Main Courses"
              }]
            },
            {
                "state":2,
                "timestamp": "1705511635",
                "table":7,
                "data":       [ {
                    "number": 1,
                    "name": "Bruschetta",
                    "image": "https://www.healthyfoodcreation.fr/wp-content/uploads/2023/07/brus-2.jpg",
                    "ingredients": [
                      "toasted bread",
                      "tomatoes",
                      "garlic",
                      "basil",
                      "olive oil"
                    ],
                    "price": 6.5,
                    "description": "Toasted bread topped with fresh tomatoes, garlic, and basil, drizzled with olive oil.",
                    "type": "Appetizers"
                  },
                  {
                    "number": 2,
                    "name": "Spaghetti Carbo",
                    "image": "https://www.twopeasandtheirpod.com/wp-content/uploads/2023/01/Spaghetti-Carbonara168766.jpg",
                    "ingredients": [
                      "spaghetti",
                      "egg yolks",
                      "pancetta",
                      "parmesan cheese",
                      "black pepper"
                    ],
                    "price": 14,
                    "description": "Classic Roman pasta dish with egg, pancetta, parmesan, and a touch of black pepper.",
                    "type": "Main Courses"
                  }]
                }
    ]);
    document.documentElement.setAttribute('data-theme', 'light');

    const [items, setItems] = useState(tickets_data);
    const scrollContainer = useRef(null);

    const add_elt = () => {
        setItems([...items, items.length]);
    }

    return (
<div>
    <div className='flex justify-between items-center w-full'>


        <h1 className="flex-1 text-left text-3xl font-bold m-4">Fransisco - Cuisine</h1>


        <div className='flex-1 text-center'>

            <div className="mt-2 shadow menu menu-horizontal bg-base-200 rounded-box">
                <div className="h-full flex items-center justify-center p-4">
                    <img src={en_attente} className='w-[60px]'></img>
                <p className="text-xl font-bold block h-full">{tickets_data.filter(item => item.state === 1).length}&nbsp;</p>
                    <p className="text-xl block h-full">En attente</p>
                </div>
                <div className="divider divider-horizontal  m-0"/>

                <div className="h-full flex items-center justify-center p-4 ">
                <img src={prepa} className='w-[60px]'></img>
                    <p className="text-xl font-bold block h-full">{tickets_data.filter(item => item.state === 2).length}&nbsp;</p>
                    <p className="text-xl block h-full"> En cours</p>
                </div>
                <div className=" divider divider-horizontal m-0"/>
                <div className="h-full flex items-center justify-center p-4 ">
                <img src={ready} className='w-[60px]'></img>
                <p className="text-xl font-bold block h-full">{tickets_data.filter(item => item.state === 3).length}&nbsp;</p>
                    <p className="text-xl block h-full">Prets</p>
                </div>
            </div>
        </div>
        <div className="flex-1 flex justify-end">
            <img src={restaurant_logo} className='p-2 w-[110px] h-[110px] rounded-full' alt="Restaurant Logo"/>
        </div>
    </div>

    <div ref={scrollContainer} className="flex items-center overflow-x-auto whitespace-nowrap scroll-smooth h-[90vh] p-4">
            {tickets_data.map((order, index) => (
                <div className="card card-compact w-96 bg-base-100 shadow-xl inline-block min-w-[20vw] h-[80vh] mr-4 rounded-xl font-black" key={index}>
                    <div className={`flex rounded-t-xl h-[7vh] bg-yellow-200 ${statuss  == 1 ? 'bg-red-400' : statuss  == 2 ? 'bg-yellow-300' : 'bg-green-500'} `}>
                    <h2 className='flex-1 text-left text-2xl font-bold m-4'>Table {order.table}</h2>
                    <p className='flex-1 text-end text-2xl font-bold m-4'>{new Date(order.timestamp * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }).replace(':', ':')}</p>
                    </div>
                    <div className='h-[63vh]'>
                    {

        order.data && Object.values(order.data.reduce((acc, item) => {
          // Group items by type
          acc[item.type] = acc[item.type] || [];
          acc[item.type].push(item);
          return acc;
        }, {}))
        // Then, map over each group to render the divs
        .map((group, index) => (
          <div key={index}>
            <div className='bg-slate-300 p-2 flex'>
            {group[0].type === 'Appetizers' && <img className='w-[33px] p-[2px] justify-left ' src="https://cdn-icons-png.flaticon.com/512/1853/1853453.png"/>}
            {group[0].type === 'Main Courses' && <img className='w-[35px] justify-left ' src="https://cdn.icon-icons.com/icons2/2095/PNG/512/dish_icon_128626.png"/>}
            <p className='font-medium text-xl ml-2'> {group[0].type}</p>
            </div>
            {group.map((item, itemIndex) => (
                <div className='flex p-2 bg-white'>
                    
              <p className='font-medium' key={itemIndex}>{item.number}</p>
              <p className='ml-2 font-medium' key={itemIndex}>-</p>
              <p className='ml-2 font-medium' key={itemIndex}>{item.name}</p>
              </div>
            ))}
          </div>
        ))
      }


                    </div>
                    {order.state < 3 &&
                <div className='flex items-center justify-center h-[10vh]'>
                    <button onClick={() => send_suivi()} className='flex btn w-[18vw] h-[7vh] bg-green-700 text-white hover:bg-green-900 text-lg font-medium'> 
                        <img src="https://www.pngkey.com/png/full/297-2979687_icon-check-white-check-mark-png-white-check.png" className='w-[20px] h-[20px]' ></img>
                        <p> {statuss  == 1 ? 'Commencer la preparation' : 'Terminer' }</p>
                    </button>
                    </div>
                    }
                </div>
            ))}
    </div>
</div>

);
    };
export default Tickets;