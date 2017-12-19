import React, { Component } from 'react';

import BrandItem from '../BrandItem/BrandItem';

class HomeBrand extends Component {
  
  render() {

    let { brands } = this.props;

    return (
      <div>
        <section className="index-brand">
          <div className="index-brand-in">
            <ul className="index-brand-info clearfix">
              { brands.map((item, i) => {
                return (<BrandItem key={i} brand={item} />)
              }) }
            </ul>
            <p className="index-more-brand">更多品牌
              <i className="yellow-bt"></i>
            </p>
          </div>
        </section>
      </div>
    )
  }
}
export default HomeBrand;