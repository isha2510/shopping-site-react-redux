import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCars, addToCart } from '../actions';
import './CarList.css';
import carImage from './car.jpg';


class CarList extends Component {

    componentDidMount() {
        this.props.fetchCars();//action creator
    }
    handleClick = (car) => {
      this.props.addToCart(car);
    }
    renderCar = () => {

        return this.props.cars.map(car => {
            return (
                <div className="car-card" key={car.carId}>
                    <div className="card card-width" >
                        <img className="card-img-top" src={carImage} alt="Cars" />
                        <div className="card-body">
                            <p className="card-text">{car.make} - {car.model}</p>
                            <div> ${car.price} <button className="btn btn-primary" onClick={() => { this.handleClick(car) }}>Add to Cart</button></div>
                        </div>
                    </div>
                </div>
            )

        })
    }
    render() {
        console.log(this.props.cars);
        return (
            <div className="image-list">
                {this.renderCar()}</div>
        );
    }

}

const mapStateToProps = (state) => {
    

    return { cars: state.cars };



}



export default connect(mapStateToProps, { fetchCars ,addToCart })(CarList);