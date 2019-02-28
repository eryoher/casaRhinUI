import React from 'react';
import { Link } from 'react-router'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';


import MediaQuery from 'react-responsive';

import logoURL from '../../../img/logo_header.png';

export default class Example extends React.Component {

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false,
      collapsed : true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    var iconInstagram ="../../../img/instagram_icon_white.png";
    var iconFacebook = "../../../img/facebook_icon_white.png";
    var iconSearch = "../../../img/search_icon_white_md.png";

    return (
        <div className="row">
            <MediaQuery query="(min-device-width: 768px)">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex align-items-end text-right">
                    <div className="logo">
                        <img src={logoURL}/>
                    </div>
                    <div className="d-flex justify-content-end w-100 mb-3">
                        <Link to="/" >
                            <div className="menu ">HOME</div>
                        </Link>
                        <Link to="/nosotros" >
                            <div className="menu">NOSOTROS</div>
                        </Link>
                        <Link to="/sensations" >
                            <div className="menu">SENSACIONES</div>
                        </Link>
                        <Link to="/dealers" >
                            <div className="menu">DISTRIBUIDORES</div>
                        </Link>
                        <Link to="/activities" >
                            <div className="menu">ACTUALIDAD</div>
                        </Link>
                        <Link to="/contact" >
                            <div className="menu">CONTACTO</div>
                        </Link>
                        <MediaQuery query="(min-device-width: 972px)">
                            <div className="social-media">
                                <Link to={{ pathname: 'https://www.facebook.com' }}  target="_blank" disable="true">
                                    <div className="icon facebook" style={{backgroundImage: `url(${iconFacebook})`}} ></div>
                                </Link>
                                <Link to={{ pathname: 'https://www.instagram.com' }}  target="_blank" disable="true">
                                    <div className="icon instagram" style={{backgroundImage: `url(${iconInstagram})`}} ></div>
                                </Link>
                                <div className="icon search" style={{backgroundImage: `url(${iconSearch})`}} ></div>
                            </div>
                        </MediaQuery>
                    </div>


                </div>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 767px)">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                    <Navbar color="faded" light >
                        <NavbarBrand>
                            <img src={logoURL} className="logo-header" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="" />
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav navbar>
                               <NavItem>
                                    <Link to="/" >
                                        <div className="menu ">HOME</div>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/nosotros" >
                                        <div className="menu">NOSOTROS</div>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/sensations" >
                                        <div className="menu">SENSACIONES</div>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/dealers" >
                                        <div className="menu">DISTRIBUIDORES</div>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/activities" >
                                        <div className="menu">ACTUALIDAD</div>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contact" >
                                        <div className="menu">CONTACTO</div>
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </MediaQuery>
      </div>
    );
  }
}
