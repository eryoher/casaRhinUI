import React, { Component } from 'react'
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.scss';
import Slider from "react-slick";
import { Link } from 'react-router';
import * as actions from '../actions';

class Category extends Component {

    componentWillMount(){
        this.props.fetchDataCategory( this.props.params.id );
    }

    renderCarousel(){
        var items = ( this.props.category !== undefined )? this.props.category.items:{};
        var show = ( items.length > 3 ) ? 3 : items.length; //Pendiente conexion BD
        var settings = {
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: show,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        arrows: true,
                        centerMode:  true,
                        centerPadding: '60px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode:  true,
                        centerPadding: '20px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        if (items.length){
            return (
                <Slider {...settings}>
                    {this.divItems(items)}
                </Slider>
            );
        }
    }

    divItems(items){
        var rows = [];
        for (var key in items) {
            var category = items[key];
            if(category.active){
                rows.push(
                    <div key={key} className="conten-slide">

                            <div key={key} className="my-slide-content text-center">
                                <Link to={`/item/${category['id']}`}>
                                    <img src={category['picture']} alt="" className="slider-img"/>
                                </Link>
                            </div>
                            <div className="product-content text-center">
                                <div className="title">
                                    {category['name']}
                                </div>
                                <div className="btn btn-rhin">
                                    VER MAS
                                </div>
                            </div>
                    </div>
                );
            }
        }
        return rows;
    }

    render() {
        var imgBackgroundProducts = '../../img/cantina_high.jpg';
        var nameCategory = ( this.props.category !== undefined ) ? this.props.category.name : '';
        return (
          <div className="product-container" style={{backgroundImage: `url(${imgBackgroundProducts})`}}>
            <div className="container">
                <div className="title col text-center">
                    {nameCategory}
                </div>
                {this.renderCarousel()}
            </div>
          </div>
        )
      }
}

function mapStateToProps(state){

    return {
      category : state.data.category
    }
  }

  export default connect (mapStateToProps, actions)(Category);
