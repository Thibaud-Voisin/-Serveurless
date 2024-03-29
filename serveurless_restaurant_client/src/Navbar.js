import {React, useState, useEffect} from "react";
import paypal from './paypal.png';
import visa from './visa.png';
import apple_pay from './apple_pay.png';
import google_pay from './google_pay.png';
import { useNavigate } from 'react-router-dom';


function Navbar ({removeFromCart, cart, onChildChange}) {
  
  let navigate = useNavigate();

  const get_to_suivi = async () =>
  {
      try {
        const menuItems = cart;

        const formattedData = {
          state: 1,
          timestamp: Math.floor(Date.now() / 1000),
          table: 12,
          data: menuItems.map(item => ({
            number: item.number,
            name: item.name,
            image: item.image,
            ingredients: item.ingredients,
            price: item.price,
            description: item.description,
            type: item.type
          }))
        }
        const response = await fetch('https://serveurlessbackend-ec2a73faa412.herokuapp.com/send_cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formattedData),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        else{
          navigate('/Suivi-commande');
        }
  
      } catch (error) {
        console.error('Error during POST request:', error);
      }

      try {
        const response = await fetch('https://serveurlessbackend-ec2a73faa412.herokuapp.com/send_status', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: '',
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        else{
          navigate('/Suivi-commande');
        }
  
      } catch (error) {
        console.error('Error during POST request:', error);
      }
  }

    const toggleTheme = () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        onChildChange(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    };
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
    <div className="mx-2 flex items-center justify-center">
    <label className="swap swap-rotate">
        <input type="checkbox" onClick={toggleTheme} className="theme-controller" value="synthwave" />
        <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
        <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
    </label>
    </div>
  </div>
  <div className="navbar-center">
    <p className="font-bold text-xl">Francisco's</p>
  </div>
  <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{cart.reduce((total, item) => total + item.number, 0)} </span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        
            {cart.length ? (<div className="card-body">
                <span className="font-bold text-lg">{cart.reduce((total, item) => total + item.number, 0)} Items</span>
          <span className="text-info">Subtotal: {cart.reduce((total, item) => total + (item.price * item.number), 0)} €</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block" onClick={()=>document.getElementById('my_modal_3').showModal()}>View cart</button>
            </div>
            </div>): 
            (<div className="card-body">
            <span className="font-bold text-lg">Empty Cart</span>
            </div>
            )}
      </div>
    </div>
    <p className="text-xl mx-2">Table 12</p>

  </div>
  <dialog id="my_modal_3" className="modal">
  <div className="modal-box ">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Panier</h3>
        {cart.map((item, index) => ( 
            <div className="card shadow w-full" key={index}>
            <div className="card-body p-0">
              <div className="p-2 grid grid-cols-6 gap-4">
                
              <div className='col-span-2 rounded bg-red-500 bg-cover bg-center' style={{ backgroundImage: `url(${item.image})` }}/>
                <div className="col-span-3">
                  <p className="font-bold">{item.number} x {item.name}</p>
                    <p className="hidden lg:block">{item.description}</p>
                </div>
                <div className="col-span-1  justify-center">
                <div  onClick={() => removeFromCart(item)} className='cursor-pointer hover:cursor-pointer bg-white rounded-full border-solid border border-slate-700 w-7 h-7 lg:w-10 lg:h-10 m-2 lg:m-3  flex justify-center items-center text-xl'>
                    <img src='https://icons.veryicon.com/png/o/miscellaneous/flat-wireframe-library/trash-bin-3.png'></img>
                </div>
                <p className="flex justify-center items-center font-bold">{item.price * item.number} €</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-4 flex justify-center">
      <button  onClick={()=>document.getElementById('my_modal_4').showModal()} className="btn btn-active btn-primary">Checkout</button>
      </div>
      <dialog id="my_modal_4" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Select a payment method</h3>

    <div  className="payment-methods grid grid-cols-2 grid gap-4 pt-4">
        <div onClick={() => get_to_suivi()} className="cursor-pointer hover:cursor-pointer col-span-1 card shadow bg-cover bg-center h-[17vh]" style={{ backgroundImage: `url(${paypal})` }}/>
        <div onClick={() => get_to_suivi()} className="cursor-pointer hover:cursor-pointer col-span-1 card shadow bg-cover bg-center h-[17vh]" style={{ backgroundImage: `url(${visa})` }}/>
        <div onClick={() => get_to_suivi()} className="cursor-pointer hover:cursor-pointer col-span-1 card shadow bg-cover bg-center h-[17vh]" style={{ backgroundImage: `url(${google_pay})` }}/>
        <div onClick={() => get_to_suivi()} className="cursor-pointer hover:cursor-pointer col-span-1 card shadow bg-cover bg-center h-[17vh]" style={{ backgroundImage: `url(${apple_pay})` }}/>
        </div>
  </div>
</dialog>
     
  </div>
</dialog>

</div>
    )
}

export default Navbar;