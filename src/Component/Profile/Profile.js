import React,{Component,render} from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { Pizza_Close } from '../../State/State';
import Redux from '../Form/redux';
import All from './Category/All/All';
import Category from './Category/Category';
import Closed from './Category/Closed/Closed';
import Grill from './Category/Grill/Grill';

import Meats from './Category/meat/meats';

import Shar from './Category/Sharp/Shar';


import Veg from './Category/Vegetarible/Veg';
import Form from './fro/Form';
import './Profile.css';

const Profile=(props)=>{


    return(
      
        <div>
          
              <div className="container">
                  <Category/>
                  <div>
                    <Route  path={'/'} exact render={()=><All props={props.prop}/>} />
                    <Route  path={'/Всі'} exact render={()=><All props={props.prop}/>} />
                    <Route  path={"/М'ясні"} exact render={()=><Meats props={props.props.Meat}/>}/>
                    <Route  path={"/Вегетаріанськi"} exact render={()=><Veg props={props.props.Vegetarible}/>}/>
                    <Route  path={"/Гріль"} exact render={()=><Grill props={props.props.Grill}/>}/>
                    <Route  path={"/Гострі"} exact render={()=><Shar props={props.props.Sharp}/>}/>
                    <Route  path={'/Закриті'} exact render={()=><Closed props={props.props.Close}/>}  />
                    
                  </div>
                  
              </div>
        </div>
     
      
      
    )
  }
export default Profile;


