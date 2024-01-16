import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import restaurant_logo from './restaurant_logo.png';
import restaurant_cover from './pizza_hero.jpg';
import add_cart from './add_cart.png';
import Navbar from './Navbar';
import meal_data from './meals_data.json';


function App() { 
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState('light');
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [isHidden, setIsHidden] = useState(false);  // New state for controlling visibility
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    console.log(showAlert);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3500);
  };
  const theme_switch = (newData) => {
    setTheme(newData);
};

const addToCart = (item) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      // Item already exists in cart, increase its number
      return prevCart.map(cartItem => 
        cartItem.name === item.name ? { ...cartItem, number: cartItem.number + 1 } : cartItem
      );
    } else {
      // Item not in cart, add it
      return [...prevCart, { ...item, number: 1 }];
    }
  });
};

const removeFromCart = (item) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
    if (existingItem && existingItem.number > 1) {
      // Item exists and its number is more than 1, decrease its number
      return prevCart.map(cartItem => 
        cartItem.name === item.name ? { ...cartItem, number: cartItem.number - 1 } : cartItem
      );
    } else {
      // Item exists and its number is 1 or item doesn't exist, remove it from the cart
      return prevCart.filter(cartItem => cartItem.name !== item.name);
    }
  });
};

  useEffect(() => {
    // Timer for setShow
    const timer1 = setTimeout(() => {
      setShow(false);
    }, 1500);

    // Timer for setShow2
    const timer2 = setTimeout(() => {
      setShow2(false);
    }, 50);

    document.documentElement.setAttribute('data-theme', 'light');

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const onExited = () => {
    setIsHidden(true); // Set the visibility to hidden after the transition
  };

  return (
    <div className="App">
      {showAlert && (
        <div role="alert" className={`left-1/2 transform -translate-x-1/2 mt-[10vh] w-[50vw] fixed alert alert-success z-20 ${showAlert ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Ajoute au panier!</span>
      </div>
      )}
      <CSSTransition in={show} timeout={1000} classNames="fade" onExited={onExited}>
        <div className={`absolute bg-base-100 w-[100vw] h-[100vh] flex justify-center items-center z-10 ${isHidden ? 'hidden' : ''}`}>
          <CSSTransition in={show2} timeout={1450} classNames="fadein">
            <img src={restaurant_logo} className={`opacity-0 w-[60vh]`} alt="Restaurant Logo"/>
          </CSSTransition>
        </div>
      </CSSTransition>

      <div>
        <Navbar removeFromCart={removeFromCart} cart={cart} onChildChange={theme_switch} className='z-1' />
        <div className={'bg-white'}>
          <img src={restaurant_cover} className='top-0 w-full h-[20vh] object-cover' alt="Restaurant Cover"></img>
        </div>

        <div>
      {meal_data.map((section, index) => {
        const sectionName = Object.keys(section)[0];
        const items = section[sectionName];

        return (
          <div key={index}>
            <h2 className={`m-4 text-2xl font-bold ${theme == 'dark'? 'text-white': ''}`} >{sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}</h2>
            <div className='m-2 grid lg:grid-cols-2 xl:grid-cols-4 gap-4'>
        
            {items.map((item, itemIndex) => (
              <div className='relative h-[40vw] sm:h-[30vw] lg:h-[20vw] xl:h-[10vw] card shadow ' key={itemIndex}>
                 <div onClick={() => {addToCart(item); handleClick();}} className='cursor-pointer hover:cursor-pointer bg-white rounded-full border-solid border border-slate-700 w-10 h-10 absolute bottom-0 left-0 m-2 lg:m-3  flex justify-center items-center text-xl'>
                  <img src={add_cart} className='p-1'></img>
                  </div>
                <div className='h-full w-full grid grid-cols-5 gap-2 p-1 lg:p-2'>
                  <div className='rounded h-full w-full col-span-2 bg-red-500 bg-cover bg-center' style={{ backgroundImage: `url(${item.image})` }}/>
                  <div className='col-start-3 col-span-3 content'>
                    <div>
                      <h3 className={`text-[5vw] sm:text-[4vw] lg:text-[3vw] xl:text-[1.5vw] font-bold ${theme == 'dark'? 'text-white': ''}`}>{item.name}</h3>
                      <p className={`text-[5vw] sm:text-[4vw] lg:text-[2.25vw] xl:text-[1vw] ${theme == 'dark'? 'text-white': ''}`} >{item.price} €</p>
                      <p className={`text-[4vw] sm:text-[3vw] lg:text-[1.75vw] xl:text-[1vw] ${theme == 'dark'? 'text-slate-400': 'text-slate-600'}`}>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>  
          
    </div>
        );
      })}

        
          </div>
      </div>
      
    </div>
    );
}

export default App;