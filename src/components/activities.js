import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.scss';
import Slider from "react-slick";

class Activities extends Component {

  constructor(props){
    super(props);
    this.state = { 'typeSelected' : 1 };
  }

  componentWillMount(){
    this.props.fetchDataTypes();
    this.props.fetchDataActivities();
  }

  setCategory(category){
    this.setState({'typeSelected':category});
  }

  renderTypes(){
    var types = this.props.types
    var rows = []
    types.forEach(type => {
      rows.push(
        <div key={type.id} className={`col-12 menu ${( this.state.typeSelected == type.id ? 'actived' : '' )}`} onClick={ () => this.setCategory(type.id)} >{type.name}</div>
      );
    });

    return rows;
  }

  renderActivities(){
    var activities = this.props.activities

    var settings = {
      dots: true,
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

    if (activities.length){
      return (
          <Slider {...settings}>
              {this.divSlider(activities)}
          </Slider>
      );
    }

}

  divSlider(activities){
    var rows = [];
      for (var key in activities) {
          var activity = activities[key];
          if( activity.type_id == this.state.typeSelected ){
            rows.push(
              <div key={key} className="container conten-slide">
                <div className="col-12">
                  <div className="title text-center mt-2">
                    {activity.name}
                  </div>
                  <div key={key} className="my-slide-content">
                    <img src={activity.picture} alt="" className="slider-img"/>
                  </div>
                  <div className="description mt-4">
                    {activity.description}
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
      <div className="activities-container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 com-md-4 col-lg-4 col-lx-4">
              <div className="menu-activities">
                { (this.props.types !== undefined) ? this.renderTypes() : null }
              </div>
            </div>
            <div className="col-12 col-sm-12 com-md-12 col-lg-8 col-lx-8">
              { (this.props.activities !== undefined ) ? this.renderActivities() : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state){

  return {
    types : state.data.types,
    activities : state.data.activities
  }
}

export default connect (mapStateToProps, actions)(Activities);
