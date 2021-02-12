import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { rerendeEntrtree } from '../../render';
import Basket from '../Basket/Basket';
import './pay.css';
const Cart = (props)=>{
    let totalcount=localStorage.close;
    let minus=()=>{
      if(totalcount>1)
      {
        localStorage.setItem('close',Number(totalcount)-1);
        rerendeEntrtree();
      }
    }
    let plus=()=>{
      localStorage.setItem('close',Number(totalcount)+1);
      rerendeEntrtree();
      
    }
    let Close=()=>{
      //alert("hello");
      //localStorage.setItem('close_all',0);
       props.props.map(u=>alert(u.id))
      rerendeEntrtree();
    }
    let ar=['Close.Pizza_Close','Meat.Pizza_Meat']
    let counter=0;
    let count=0;
    let i=0;
    props.props.map(u=> i+=Number(u.name))
    return(
     <div>
            {i>1?(
              <div className="size_cart">
                <div class="button__delimiter"></div>
                    <Basket props={props.props}/>
                    <div className="size_cart_block">
                      {props.props.map(u=> <div>
                      {u.name>0?(
                        <div className="pizza_closed">
                          <img width="10%" src={u.url} alt="Pizza logo" />
                          <span>{u.user}</span>
                            <button>-</button>
                            <h2>{u.name}</h2>
                            <button onClick={u.add}>+</button>
                            <h2 className="H2">{u.name*u.price}</h2>
                            
                            {localStorage.setItem('close',count+=Number(u.name*u.price))}
                            <span className="spn" onClick={()=> localStorage.setItem(u.user,0)}>&times;</span>
                          
                          
                        
                          {localStorage.setItem('useer',counter+=Number(u.name))}
                        </div>
                        ):(
                        <div>
                        </div>
                        )}
                    </div>)}
                    <div className="suma">
                      <span>Всього піц:<strong>{counter}</strong></span>
                      <span className="span1">Cума замовлення:{localStorage.close}</span>
                    </div>
                    </div>
                    <Link to='/' >
                    <span><button >Повернутися назад</button></span>
                    </Link>
                    <span><button className="btn">Оплатити</button></span>
                  </div>
          ):( <div className="pay_center">
              <h1>Корзина пустая 😕</h1>
              <h2>Вероятней всего, вы не заказывали ещё пиццу.</h2>
              <h2>Для того, чтобы заказать пиццу, перейди на главную страницу.</h2>
              <image src="../images/empty-cart.png" alt="No pactures"/>
              <Link to='/'>
                  <a>Повернутися назад</a>
              </Link>
          
       
          
        
           
        
     </div>

          )}
     </div>
     
     
    )
  }
  export default Cart;


