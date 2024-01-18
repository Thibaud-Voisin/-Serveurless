import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import restaurant_logo from './restaurant_logo.png';
import prepa from './prepa.png';
import en_attente from './en attente.png';
import ready from './ready.png';

function Tickets() {
  const latestDataRef = useRef();
  const [tickets_data, settickets_data] = useState( 
    [{
      "state": 3,
      "timestamp": "1705515000",
      "table": 8,
      "data": [
          {
              "number": 1,
              "name": "Caesar Salad",
              "image": "https://www.example.com/caesar-salad.jpg",
              "ingredients": [
                  "romaine lettuce",
                  "croutons",
                  "parmesan cheese",
                  "Caesar dressing"
              ],
              "price": 9,
              "description": "Classic Caesar salad with crisp romaine lettuce, croutons, and parmesan cheese.",
              "type": "Appetizers"
          },
          {
              "number": 2,
              "name": "Chicken Alfredo",
              "image": "https://www.example.com/chicken-alfredo.jpg",
              "ingredients": [
                  "fettuccine",
                  "grilled chicken",
                  "alfredo sauce",
                  "parmesan cheese"
              ],
              "price": 16,
              "description": "Creamy Alfredo pasta with grilled chicken and parmesan cheese.",
              "type": "Main Courses"
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
          },
          {
            "number": 4,
            "name": "Black Coffee",
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
            "type": "Beverages"
          }
      ]
  },

  // Additional element 2
  {
      "state": 3,
      "timestamp": "1705516000",
      "table": 6,
      "data": [
        {
          "number": 2,
          "name": "Tomato Salad",
          "image": "https://www.example.com/mushroom-risotto.jpg",
          "ingredients": [
              "Arborio rice",
              "mushrooms",
              "onions",
              "parmesan cheese"
          ],
          "price": 15,
          "description": "Creamy risotto with mushrooms, onions, and parmesan cheese.",
          "type": "Appetizers"
      },
      {
        "number": 1,
        "name": "Pesto Pasta",
        "image": "https://www.example.com/mushroom-risotto.jpg",
        "ingredients": [
            "Arborio rice",
            "mushrooms",
            "onions",
            "parmesan cheese"
        ],
        "price": 15,
        "description": "Creamy risotto with mushrooms, onions, and parmesan cheese.",
        "type": "Appetizers"
    },
          {
              "number": 1,
              "name": "Mushroom Risotto",
              "image": "https://www.example.com/mushroom-risotto.jpg",
              "ingredients": [
                  "Arborio rice",
                  "mushrooms",
                  "onions",
                  "parmesan cheese"
              ],
              "price": 15,
              "description": "Creamy risotto with mushrooms, onions, and parmesan cheese.",
              "type": "Main Courses"
          },
          {
            "number": 3,
            "name": "Pizza reine",
            "image": "https://www.example.com/mushroom-risotto.jpg",
            "ingredients": [
                "Arborio rice",
                "mushrooms",
                "onions",
                "parmesan cheese"
            ],
            "price": 15,
            "description": "Creamy risotto with mushrooms, onions, and parmesan cheese.",
            "type": "Main Courses"
        },
        {
          "number": 1,
          "name": "Tiramisu",
          "image": "https://www.example.com/mushroom-risotto.jpg",
          "ingredients": [
              "Arborio rice",
              "mushrooms",
              "onions",
              "parmesan cheese"
          ],
          "price": 15,
          "description": "Creamy risotto with mushrooms, onions, and parmesan cheese.",
          "type": "Desserts"
      },
      {
        "number": 1,
        "name": "Gelato (Chocolate)",
        "image": "https://www.example.com/mushroom-risotto.jpg",
        "ingredients": [
            "Arborio rice",
            "mushrooms",
            "onions",
            "parmesan cheese"
        ],
        "price": 15,
        "description": "Creamy risotto with mushrooms, onions, and parmesan cheese.",
        "type": "Desserts"
    },
    {
      "number": 1,
      "name": "Panna Cotta",
      "image": "https://www.example.com/mushroom-risotto.jpg",
      "ingredients": [
          "Arborio rice",
          "mushrooms",
          "onions",
          "parmesan cheese"
      ],
      "price": 15,
      "description": "Creamy risotto with mushrooms, onions, and parmesan cheese.",
      "type": "Desserts"
  },
  {
    "number": 1,
    "name": "Chianti (75cl)",
    "image": "https://www.example.com/mushroom-risotto.jpg",
    "ingredients": [
        "Arborio rice",
        "mushrooms",
        "onions",
        "parmesan cheese"
    ],
    "price": 15,
    "description": "Creamy risotto with mushrooms, onions, and parmesan cheese.",
    "type": "Beverages"
}
      ]
  },
      {
        "state": 2,
        "timestamp": "1705516400",
        "table": 5,
        "data": [
          {
            "number": 1,
            "name": "Bruschetta",
            "image": "https://www.cookinwithmima.com/wp-content/uploads/2021/08/Caprese-Salad-3.jpg",
            "ingredients": [
              "mozzarella cheese",
              "tomatoes",
              "basil",
              "balsamic glaze"
            ],
            "price": 8,
            "description": "Fresh mozzarella and ripe tomatoes with basil leaves and a balsamic reduction.",
            "type": "Appetizers"
          },
          {
            "number": 2,
            "name": "Caprese Salad",
            "image": "https://www.cookinwithmima.com/wp-content/uploads/2021/08/Caprese-Salad-3.jpg",
            "ingredients": [
              "mozzarella cheese",
              "tomatoes",
              "basil",
              "balsamic glaze"
            ],
            "price": 8,
            "description": "Fresh mozzarella and ripe tomatoes with basil leaves and a balsamic reduction.",
            "type": "Appetizers"
          },
          {
            "number": 2,
            "name": "Margherita Pizza",
            "image": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg",
            "ingredients": [
              "pizza dough",
              "tomato sauce",
              "mozzarella cheese",
              "basil"
            ],
            "price": 12.5,
            "description": "Traditional Neapolitan pizza with tomato sauce, fresh mozzarella, and basil.",
            "type": "Main Courses"
          },
          {
            "number": 1,
            "name": "Gelato (Vanilla)",
            "image": "https://www.cookinwithmima.com/wp-content/uploads/2021/08/Caprese-Salad-3.jpg",
            "ingredients": [
              "mozzarella cheese",
              "tomatoes",
              "basil",
              "balsamic glaze"
            ],
            "price": 8,
            "description": "Fresh mozzarella and ripe tomatoes with basil leaves and a balsamic reduction.",
            "type": "Desserts"
          }
        ]
      },
        {
            "state":1,
            "timestamp": "1705516900",
            "table": 3,
            "data":       [ 
              {
                "number": 1,
                "name": "Grilled Fish",
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
                "name": "Lasagna",
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
                "type": "Main Courses"
              },
              {
                "number": 1,
                "name": "Pesto Pasta",
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
                "type": "Main Courses"
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
                "timestamp": "1705517000",
                "table":7,
                "data":       [ 
                  {
                    "number": 1,
                    "name": "Fish Soup",
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
                    "number": 3,
                    "name": "Pizza reine",
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
                    "type": "Main Courses"
                  },

                  {
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
                    "name": "Lasagna",
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
                    "type": "Main Courses"
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
                  },
                  {
                    "number": 2,
                    "name": "Panna Cotta",
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
                  "type": "Desserts"
                  },

                  {
                    "number": 1,
                    "name": "Brownie",
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
                  "type": "Desserts"
                  },
                ]
                }
    ]);

    const increaseOrderStateByTimestamp = (timestamp) => {
      settickets_data(prevData => {
        // Find the index of the order with the specified timestamp
        const orderIndex = prevData.findIndex(order => order.timestamp === timestamp);
    
        // If the order is found, increase its state
        if (orderIndex !== -1) {
          const updatedData = [...prevData];
          updatedData[orderIndex] = {
            ...updatedData[orderIndex],
            state: updatedData[orderIndex].state + 1
          };
          return updatedData;
        }
    
        // If the order is not found, return the original state
        return prevData;
      });
    };
  const send_suivi = async (timestamp, state) =>
  {
    increaseOrderStateByTimestamp(timestamp);
      try {
        const response = await fetch('https://serveurlessbackend-ec2a73faa412.herokuapp.com/update_status', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({'valuee':state + 1}),
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
          const response = await fetch('https://serveurlessbackend-ec2a73faa412.herokuapp.com/get_cart', {
            method: 'GET',
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          } else {
            const data = await response.json();
            latestDataRef.current = data;
  
            const timestampExists = tickets_data.some(item => item.timestamp === data.timestamp);
  
            if (!timestampExists) {
              console.log(data);
              console.log(tickets_data);
              console.log(typeof(data));
              console.log(typeof(tickets_data));
              settickets_data(prevTicketsData => [...prevTicketsData, latestDataRef.current]);
              console.log("Element added successfully!");
            } else {
              console.log("Element not added. Timestamp already exists.");
            }
          }
        } catch (error) {
          console.error('Error during GET request:', error);
        }
      };
  
      // Set up the interval to make a request every second
      const intervalId = setInterval(fetchData, 1000);
  
      // Cleanup the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }, [tickets_data]);
    

    const [statuss, setStatuss] = useState(1);
    const [data_r , setdata_r] = useState({});
    
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
                    <div className={`flex rounded-t-xl h-[7vh] bg-yellow-200 ${order.state  == 1 ? 'bg-red-500' : order.state  == 2 ? 'bg-yellow-300' : 'bg-green-600'} `}>
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
            {group[0].type === 'Desserts' && <img className='w-[20px] justify-left ' src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/dessert-icon.png"/>}
            {group[0].type === 'Beverages' && <img className='w-[25px] justify-left ' src="https://static.thenounproject.com/png/1374068-200.png"/>}
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
                    <button onClick={() => send_suivi(order.timestamp, order.state)} className='flex btn w-[18vw] h-[7vh] bg-green-700 text-white hover:bg-green-900 text-lg font-medium'> 
                        <img src="https://www.pngkey.com/png/full/297-2979687_icon-check-white-check-mark-png-white-check.png" className='w-[20px] h-[20px]' ></img>
                        <p> {order.state  == 1 ? 'Commencer la preparation' : 'Terminer' }</p>
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