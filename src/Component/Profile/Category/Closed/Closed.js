import React,{Component, useState} from 'react';
import { Link } from 'react-router-dom';
import { rerendeEntrtree } from '../../../../render';
import { state } from '../../../../State/State';

function Closed(props){
    const count=localStorage.getItem('close_half');
    return(
        <div>
        
        <h1>Закриті</h1>
        
            <div className="basic_container">
              <div className="b_container">
              {props.props.Pizza_Close.map(value=><div>
                <div className="b_c_block_1">
                   <img className="img_height" width="100%" src={value.url} alt="Pizza logo" />
                   <h2 className="h2_center">Чизбургер-пицца</h2>
                   <div class="pizza-block__selector">
                    <ul>
                      <li class="active">тонкое</li>
                      <li>традиционное</li>
                    </ul>
                    <ul>
                      <li class="active">26 см.</li>
                      <li>30 см.</li>
                      <li>40 см.</li>
                    </ul>
                  </div>
                   <div className="cought">
                        <h2>Від {value.price}</h2>
                        <button type="submit" onClick={value.add} className="add_pay" >
                            <h3>+Добавити</h3>
                            <i id="i">{value.name}</i>
                        </button>
                        
                    </div>
                    
                </div>
              </div>
              
              )}
                
                </div>
            </div>
        
    </div>
     
     
    )
  }


export default Closed;
