import React, {component} from "react";


const style = {

    blue :{
        backgroundColor : 'blue'
    }
}


const Navbar = props => (
<header style={style.blue} className=" w-100 ph3 pv3 pv2-ns ph4-m ph5-l tc">
    <nav className="navbar">
      <a className="link dim white dib mr3"  title="Home">Cliky Game</a>
      <p className="link dim white dib mr3" >Status: {props.status}</p>
      <a className="link dim white dib mr3" title="Store">Score: {props.currentScore}</a>
      <a className="link dim white dib" title="Contact">Top Score: {props.topScore}</a>
    </nav>
  </header>
)




export default Navbar