import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import * as actions from '../actions';


class HomePage extends Component {


  componentWillMount(){
    this.props.fetchCarouselData();
  }


  renderCarousel(){
    var gallerie = this.props.carousel;

    if ( gallerie !== undefined && gallerie.length){
      return (
          <Carousel
            emulateTouch
            showArrows={true}
            width = "100%"
            autoPlay={true}
            interval={5000}
            infiniteLoop={true}
            showStatus={false}
            showArrows={true}
            showThumbs={false}
            dynamicHeight={true}
            className="presentation-mode"
          >
            {this.divgallerie(gallerie)}
          </Carousel>
        );
    }
  }

  divgallerie(gallerie){
    var rows = [];
    for (var key in gallerie) {
      var picture = gallerie[key];
      if(picture.active){
        rows.push(
          <div key={key} className="conten-slide">
            <div key={key} className="my-slide-content" style={{backgroundImage: `url(${picture['pathImg']})`}}>
              <div className="d-flex align-items-center justify-content-center slogan-content">
                  <div className="slogan">
                    <div className="title">
                      {picture['slogan']}
                    </div>
                    <div className="d-flex bd-highlight">
                      <div className="p-2 flex-fill bd-highlight bottom-slogan"></div>
                      <div className="p-2 flex-fill bd-highlight bottom-slogan"></div>
                      <div className="p-2 flex-fill bd-highlight bottom-slogan"></div>
                      <div className="p-2 flex-fill bd-highlight bottom-slogan"></div>
                      <div className="p-2 flex-fill bd-highlight "></div>
                    </div>
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
    return (
      <div className="homepage-container">
        {this.renderCarousel()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    carousel : state.data.carousels
  }
}

export default connect (mapStateToProps, actions)(HomePage);
