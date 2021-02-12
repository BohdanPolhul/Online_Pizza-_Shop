import React,{Component} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Component/Profile/Profile';
import Header from './Component/Header/Header';
import Cart from './Component/Cart/Cart';




const App=(props)=> {
    return(
      <BrowserRouter>
        <div > 
            
          <div className="wrapper">
            <Header props={props.All}/>
            <div> 
              {(<Route  path={"/"} exact render={()=><Profile props={props.state.getState()} prop={props.All}/>}/>)==="/"?(<div>Bla-bla-bla</div>):(<Profile props={props.state.getState()} prop={props.All}/>)}
              <Route  path={'/cart'} exact render={()=><Cart props={props.All}/>}/>
            </div>
          </div>

        </div>
      </BrowserRouter>
     
     
    );
  
}
export default App;


