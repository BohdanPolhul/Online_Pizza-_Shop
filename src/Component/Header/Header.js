import React,{Component} from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Button from './Button';


const Header=(props)=>{
    let count=0;
    debugger;
    props.props.map(u=>{localStorage.setItem('user',count+=Number(u.name*u.price))})
    return(
     <div>
       
            <div class="header"> 
            <div class="container">
            <div class="header__logo">
              
                <img width="38" src="data:image/png;base64,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" alt="Pizza logo" />
                <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
                </div>
              
            </div> 
            <div class="header__cart" type="submit"> 
            <Link to="/cart">
            <a className="button--cart">
              <span>{count} ₽</span>
              <div className="button__delimiter"></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>3</span>
            </a>
            </Link>
        </div> 
        </div>
        </div>
     </div>
     
     
    )
}
export default Header;

