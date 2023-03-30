import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { BsLayoutTextSidebar } from "react-icons/bs";
class Menu extends Component {
    render() {
        return (
            <div className="menu">
      <div className="container bg-danger">
        <div className="row">
          <div className="menu">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand d-none  " href="#" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="s">
                  <BsLayoutTextSidebar style={{fontSize:'24px', color:'white' , outline:'none' ,border:'none' }} ></BsLayoutTextSidebar>
                </button>
                <div className="seach-menu" role="search">
                  <a href="#"><i style={{margin: '3px 5px', fontSize: '20px', color: 'aliceblue'}} className="bx bx-search" /></a>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className=" list-nav navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" ><Link style={{textDecoration:'none',color: 'white' }} to="/Home" >TRANG CHỦ</Link></a>
                     
                    </li>
                    <li className="nav-item dropdown ">
                    <a className="nav-link active text-white" aria-current="page" ><Link style={{textDecoration:'none',color: 'white' }} to="/Introduce" >GIỚI THIỆU</Link></a>   
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link active text-white" aria-current="page" href="#">HƯỚNG DẪN</a>
                      
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle  text-white " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">KỲ THI</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Đánh Giá NLTA Đầu Ra 26/3</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link active text-white" aria-current="page" ><Link style={{textDecoration:'none',color: 'white' }} to="/Tracuu" >TRA CỨU</Link></a>                 
                    </li>
                  </ul>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button style={{color:'white' , borderColor:'white' }} className="btn btn-outline-success" type="submit">Search</button> 
                    
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      </div>



        );
    }
}

export default Menu;