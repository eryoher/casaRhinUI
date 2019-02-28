import React, { Component } from 'react'
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.scss';
import Slider from "react-slick";
import * as actions from '../actions';

class Cocktail extends Component {

  componentWillMount(){
    this.props.fetchDataCocktail( this.props.params.id );
  }

  renderCarousel(cocktail){
    var pictures = cocktail.assets;

    var settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay : true,
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
    }

    if (pictures.length){
      return (
          <Slider {...settings}>
              {this.divSlider(pictures)}
          </Slider>
      );
    }
  }

  divSlider(pictures){
    var rows = [];
        for (var key in pictures) {
            var picture = pictures[key];
            rows.push(
              <div key={key} className="conten-slide">
                <div key={key} className="my-slide-content text-center">
                  <img src={picture.path} alt="" className="slider-img"/>
                </div>
              </div>
            );

        }
        return rows;
  }

  renderReceta(receta){
    var text = receta.split("\n");
    var result = [];
    var i = 0;
    text.forEach(element => {
      if(element != ''){
        result.push( <li key={i}>
            {element}
          </li>
        );
        i++
      }

    });
    return result
  }
  render() {
    if( this.props.cocktail !== undefined ){
      var cocktail = this.props.cocktail

      return (
        <div className="cocktail-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12  marco-sombra">
                      <div className="content-marco">
                        {this.renderCarousel(cocktail)}
                      </div>
                    </div>
                    <div className="title col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
                        <div className="title text-center">
                          {cocktail.name}
                        </div>
                          <div className="content-receta pl-5 pt-2 pr-3 pb-2">
                            <div className="title">
                              Receta:
                            </div>
                            <div className="body-receta h-100">
                              <ul>
                                {this.renderReceta(cocktail.receta)}
                              </ul>
                            </div>
                          </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">

                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-2">
                      <div className="definition">
                          <div className="definition-title mb-3">
                            Definición
                          </div>
                          <div className="definition-body">
                            <span>Coctel:</span> La palabra cocktail, en versión
                            inglesa se compone de dos partes “cock” y
                            “tail” que significan gallo y cola, en definitiva,
                            cola de gallo. Existen muchas teorías sobre
                            el origen de esta palabra, pero con los
                            nombres de los cócteles más famosos, no
                            hay confusión alguna; por que por su
                            nombre son reconocidos mundialmente.
                            Entre ellos tenemos: el Martini, que aparece
                            por primera vez en un hotel de San
                            Francisco; el Daiquiri que fue elaborado en
                            la ciudad del mismo nombre en Cuba, el
                            Cuba Libre, entre otros.
                          </div>
                      </div>

                    </div>
                </div>
            </div>

        </div>
      )
    }else{
      return (
        <div></div>
      )
    }
  }
}


function mapStateToProps(state){

    return {
        cocktail: state.data.cocktail
    }
}

export default connect (mapStateToProps, actions)(Cocktail);
