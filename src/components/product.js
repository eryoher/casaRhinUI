import React, { Component } from 'react'
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { Link } from 'react-router';
import * as actions from '../actions';


class Product extends Component {

    componentWillMount(){
        this.props.fetchDataProduct( this.props.params.id );
    }

    renderCarousel(){
        var categories = ( this.props.product !== undefined ) ? this.props.product.categories : {};
        var settings = {
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            arrows: true,
            autoplay: true,
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
        if ( categories !== undefined && categories.length){
            return (
                <Slider {...settings}>
                    {this.divCategories(categories)}
                </Slider>
            );
        }
    }

    divCategories(categories){
        var rows = [];
        for (var key in categories) {
            var category = categories[key];
            if(category.active){
                rows.push(
                    <div key={key} className="conten-slide">

                            <div key={key} className="my-slide-content text-center"  >
                                <Link to={`/category/${category['id']}`}>
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

    var nameProduct = ( this.props.product !== undefined ) ? this.props.product.name : '';
    return (
      <div className="product-container" style={{backgroundImage: `url(${imgBackgroundProducts})`}}>
        <div className="container">
            <div className="title col text-center">
                {nameProduct}
            </div>
            {this.renderCarousel()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
      product : state.data.product,
    }
  }

  export default connect (mapStateToProps, actions)(Product);
