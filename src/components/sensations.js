import React, { Component } from 'react'
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.scss';
import Slider from "react-slick";
import { Link } from 'react-router';
import * as actions from '../actions';

class Sensations extends Component {
    componentWillMount(){
        this.props.fetchDataCocktails();
    }
    renderCarousel(){
        var cocktails = this.props.cocktails;
        var show = ( cocktails !== undefined &&  cocktails.length < 3 ) ?  cocktails.length : 3;
        var settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay : true,
            appendDots: dots => (
                <div
                  style={{
                    borderRadius: "10px",
                    padding: "10px"
                  }}
                >
                  <ul style={{ margin: "0px auto" }}> {dots} </ul>
                </div>
              ),
            customPaging: i => (
                <div className="dot-slick"
                    style={{
                        width: "10px",
                        height: "10px",
                        background: "#bbb",
                        borderRadius: "50%",
                        display: "inline-block",
                    }}
                />

            ),
            responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows : false,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
        };
        if ( cocktails !== undefined && cocktails.length){
            return (
                <Slider {...settings}>
                    {this.divItems(cocktails)}
                </Slider>
            );
        }
    }

    divItems(cocktails){
        var rows = [];
        for (var key in cocktails) {
            var cocktail = cocktails[key];
            var imgUrl = (typeof cocktail.assets[0] !== 'undefined') ? cocktail.assets[0].path : 'http://localhost/casaRhinApi/img/siteImgs/No-image-available.png';

            if(cocktail.active){
                rows.push(
                    <div key={key} className="content-slide">
                            <div className="content-img">
                                <div key={key} className="my-slide-content text-center" style={{backgroundImage: `url(${imgUrl})`}} >
                                    <div className="cocktail-content">
                                        <div className="description">
                                            {cocktail.description + '...'}
                                        </div>
                                        <div className="title">
                                            {cocktail.name}
                                        </div>
                                        <Link to={`cocktail/${cocktail.id}`}>
                                            <div className="btn cocktail-mas">
                                                VER MAS
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>
                );
            }
        }
        return rows;
    }

    render() {
        var backgroundImage = "../../img/background_sensations.jpg"; //
        return (
        <div className="sensations-container" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="container">
                <div className="title">
                    <p>Sensaciones</p>
                    <p>del Rhin</p>
                </div>
                <div className="carousel-sensations">
                    {this.renderCarousel()}
                </div>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        cocktails : state.data.cocktails
    }
}

export default connect (mapStateToProps, actions)(Sensations);
