import { Component } from 'react'
import './App.css'
import { APIURL, callApi } from '../lib.js'

export default class App extends Component{
constructor() {
  super();
  this.state = {data:[]};
  this.getData=this.getData.bind(this);
  this.showUserInfo=this.showUserInfo.bind(this);
  this.closeUserInfo=this.closeUserInfo.bind(this);
}
componentDidMount()
{
  callApi("GET",APIURL,"",this.getData);
}
getData(res)
{
  this.setState({data:res});
}
showUserInfo(user){
  this.setState({showpopup:true,userdata:user});
}
closeUserInfo(){
  this.setState({showpopup:null});
}
render(){
  const {data,showpopup,userdata} = this.state;
  const IMGURL = import.meta.env.BASE_URL;
  return (
    <div className='app'>
      <div className='header'>Example for APLIs,Fetch Function,Conditional Rendering</div>
      <div className='section'>
        <h1>Welcome</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} onClick={()=>this.showUserInfo(user)}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className = 'footer'>Copyright@2026. All Rights Reserved-Bilvanth Ram KLU </div>
        {showpopup && <div className='overlay'>
          <div className='popup'>
            <div className='popupHeader'>
              <button onClick={()=>this.closeUserInfo()}>X</button>
            </div>
            <div className='popupSection'>
              <p>
                <span>ID</span>
                <span>{userdata.id}</span>
              </p>
              <p>
                <span>Name</span>
                <span>{userdata.name}</span>
              </p>
              <p>
                <span>Username</span>
                <span>{userdata.username}</span>
              </p>
              <p>
                <span>Email ID</span>
                <span>{userdata.email}</span>
              </p>
              <p>
                <span>Address</span>
                <span>{userdata.address.street}, {userdata.address.city} - {userdata.address.zipcode}</span>
              </p>
              <p>
                <span>Phone</span>
                <span>{userdata.phone}</span>
              </p>
              <p>
                <span>Website</span>
                <span>{userdata.website}</span>
              </p>
              <p>
                <span>Company</span>
                <span>{userdata.company.name}<br/>{userdata.company.bs}</span>
              </p>
            </div>
            <div className='popupFooter'></div>
          </div>
          </div>}
      </div>

    </div>
  );
}
}