import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state={
      firstName:"",
      lastName:"",
      users:[]
    }
  }

  componentDidMount(){
    axios.get("http://localhost:3000/users").then(response=>{
      this.setState({users:response.data})
    })
  }

  handleChange=(event, value)=>{
    if (value==="firstName") {
      this.setState({firstName:event.target.value})
    }else{
      this.setState({lastName:event.target.value})
    }
  }

  handleSubmit = (event) =>{
    event.preventDefault()    
    const obj={
      "firstName":this.state.firstName,
      "lastName":this.state.lastName
    }    
    axios.post("http://localhost:3000/users",obj).then(response=>{
    if(response){
      alert("User has been added!!")
      window.location.reload(false)
    }
  })
  }

  render(){
    return(
      <div className="App">
        {this.state.users.map((value,index)=>{
          return(<div key ={index}>
            <span>User{index+1} {value.firstName}{"  "}{value.lastName}</span>
          </div>)
        })}
        <div>
        <form onSubmit={this.handleSubmit}>
          First Name : <input type="text" onChange={(event)=>this.handleChange(event, "firstName")}/>
          <div/>
          Last Name : <input type="text" onChange={(event)=>this.handleChange(event, "lastName")} />
          <div/>
          <input type="submit"/>
        </form>
        </div>
      </div>
    )
  }
}

export default App