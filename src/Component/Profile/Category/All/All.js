import React,{Component} from 'react';
import App from '../../../../App';
import { rerendeEntrtree } from '../../../../render';
import './All.css';

const All=(props)=> {
   
    return (
        <div>
          <h1>Всі</h1>
        
        <div className="basic_containe">
          <div className="b_container">
          {props.props.map(value=><div>
            <div className="b_c_block_1">
               <img className="img_height" width="100%" src={value.url} alt="Pizza logo" />
               <h2 className="h2_center">{value.user}</h2>
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
                    <h2> Від {value.price}</h2>
                    <button onClick={value.add}  className="add_pay" >
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
export default All;