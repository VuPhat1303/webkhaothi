import React, { Component } from 'react';
import logoheader from '../../acesst/images/_wiwn8912WI_logo-vhubnew.png';
import { BiWorld } from "react-icons/bi"; 
import { CgLogIn } from "react-icons/cg";
import {Link} from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <div className="header">
            <div className="container ">
              <div className="row">
                <div className="col-lg-3 col-md-12 text-center"> <img style={{margin: '19px 0 5px 0',  height: '80px', width: '350px'}} src={logoheader} alt="" /></div>
                <div className="col-lg-6 col-md-12 text-center" />
                <div className="col-lg-3 col-md-12 text-center"> 
                <div className="header-top">
                <div className="header-top1">
            
                </div>
                <div className="header-top2">
                  <li style={{color: 'white', textDecoration: 'none'}}> 
                    <i style={{color: 'white', fontSize: '20px'}} className="bx bx-world" />
                    <BiWorld style={{fontSize:'20px', margin:'0 0 5px 0' }} ></BiWorld>
                    <span class="icon-globe icons" /> 
                    
                    <select> 
                      <option value="volvo">VN</option>
                      <option value="saab">EN</option>
                    </select>
                  </li>
                </div>
                <div className="buttonheader ">
                  <i style={{color: 'white', fontSize: '20px'}} className="bx bx-log-in" />
                  <CgLogIn style={{color:'white' , fontSize:'23px' , margin:'0 0 5px 0' }} ></CgLogIn>
                  <span className="icon-globe icons" />
                  <Link to="/Login"><button style={{backgroundColor: 'rgb(180, 78, 78)', border: 'none', height: '25px', width: '80px'}} type="button " className="btn btn-secondary btn-sm">ĐĂNG NHẬP</button></Link>
                </div>  
              </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Header;