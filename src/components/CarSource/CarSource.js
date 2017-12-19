import React, { Component } from 'react';

import CarSourceItem from '../CarSourceItem/CarSourceItem';

class CarSource extends Component {
  
  render() {

    let { series } = this.props;

    return (
      <section className="index-car-source">
        <p className="index-car-title">本地车源</p>
        <ul className="index-car-con">
          { series.map((item, i) => {
            return (<CarSourceItem key={i} seriesItem={item} />)
          }) }
        </ul>
        <p className="index-more-brand">查看更多
          <i className="yellow-bt"></i>
        </p>
      </section>
    )
  }
}
export default CarSource;