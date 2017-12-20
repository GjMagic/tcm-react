import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

@withRouter
class CarSourceItem extends Component {
  
  constructor(props) {
    super(props);
    this.toSerieInfo = this.toSerieInfo.bind(this);
  }
  
  // 跳转到SerieInfo组件并携带相应数据
  toSerieInfo() {
    let { history, seriesItem } = this.props;
    history.push( // 用history.push进行跳转并携带数据
      {
        pathname: `/serie/${seriesItem.id}`, 
        state: { seriesItem } // 携带的数据在对应组件通过location取出
      }
    )
  }

  render() {

    let { toSerieInfo } = this;

    let { seriesItem } = this.props;

    return (
      <li 
        onTouchStart={toSerieInfo}
      >
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