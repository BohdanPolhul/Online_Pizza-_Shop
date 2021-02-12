import React,{Component} from 'react';
export default class form extends React.Component {
    state = {
        user: '',
        rememberMe: false
      };
     
      handleChange = (event) => {
        const input = event.target;
        
        const value = input.type === 'checkbox' ? input.checked : input.value;
     
        this.setState({ [input.name]: value });
      };
     
      handleFormSubmit = () => {
        const { user, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('user', rememberMe ? user : '');
      };
    
    add=()=>{
    
            alert(1);
            
            localStorage.setItem('test',Number(localStorage.getItem('test'))+1);
            
        }
    render() {
        
        return (
          <form onSubmit={this.handleFormSubmit}>
              
              <button onClick={this.add}>Onclici</button>
             
              
             
            <label>
              User: <input name="usr" value={this.state.user} onChange={this.handleChange}/>
            </label>
            <label>
              <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
            </label>
            <button type="submit">Sign In</button>
           
          </form>
          
        );
      }
  }