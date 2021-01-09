import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './mainnav.css';

class MainNav extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
      //   <FontAwesomeIcon className="bar" icon={faBars} onClick={this.toggleHidden.bind(this)} />
  render() {

    return(
      <nav className="main-nav">

      <div className="show-menu">
      <Link to={'/home'}>
        <p className='active'>Logo</p>
      </Link>

      <Link to={'/home'}>
        <p className='active'>Home</p>
      </Link>
    
      <Link to={'/contact'}>
         <p>contacts us</p>
      </Link>
    
      <Link to={'/about'}>
         <p>About</p>
      </Link>
    
    
    </div>
      {!this.state.isHidden && <Child />}
      </nav>
    );
  }
}


const Child = () => (
  <div className="min-show">
  <Link to={'/home'}>
    <p className='active'>Home</p>
  </Link>

  <Link to={'/contact'}>
     <p>contacts us</p>
  </Link>

  <Link to={'/about'}>
     <p>About</p>
  </Link>


</div>
  )


export default MainNav;