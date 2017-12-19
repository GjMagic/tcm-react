import React, { Component } from 'react';

class CarSourceItem extends Component {
  
  render() {

    let { seriesItem } = this.props;

    return (
      <li>
        <img src={seriesItem.imgUrl} alt="" />
        <p className="index-car-name">{seriesItem.name}</p>
        <p className="index-car-price">
          <span>{seriesItem.minPrice}</span>万起
        </p>
        <p className="index-car-count">共
          <i>{seriesItem.saleCars}</i>个车型在售
        </p>
        <p className="index-car-sale">
          最高下降
          <strong>{seriesItem.maxFall}万</strong>
        </p>
      </li>
    )
  }
}
export default CarSourceItem;