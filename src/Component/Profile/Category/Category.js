import React from 'react';
import { NavLink } from 'react-router-dom';
import { rerendeEntrtree } from '../../..';
import { close_1, close_half, store } from '../../../State/State';
import './Category.css';
const butt=['Всі','М\'ясні','Вегетаріанськi','Гріль','Гострі','Закриті'];
const Category = (props) => {
  return (
    <div className='categories'>
                  <ul>
                    {butt.map((choose)=>(
                      <NavLink to={choose}>
                        <button>{choose}</button>
                        
                      </NavLink> 
                    ))}
                    <b>Сортування по:</b>
                    <select name="" className="select" onchange="Fun2()" >
                      <option value="1">Популярності</option>
                      <option value="2">Ціні</option>
                      <option value="3">Алфавіту</option>
                    </select>
                  </ul>
                 
                </div>
  );
};

export default Category;
