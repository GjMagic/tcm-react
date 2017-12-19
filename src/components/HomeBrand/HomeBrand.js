import React, { Component } from 'react';

import BrandItem from '../BrandItem/BrandItem';

class HomeBrand extends Component {
  
  constructor(props) {
    super(props);
    this.moreBrands = this.moreBrands.bind(this);
    this.state = {
      moreBrandsText: '更多品牌'
    }
  }
  
  // 点击更多品牌
  moreBrands(ev) {
    /* ev.target.classList.add('brand-collect');
    this.setState({
      moreBrandsText: '收起'
    }) */
  }

  render() {

    let { moreBrands } = this;

    let { brands } = this.props;

    let { moreBrandsText } = this.state;

    return (
      <section className="index-brand">
        <div className="index-brand-in">
          <ul className="index-brand-info clearfix">
            { brands.map((item, i) => {
              return (<BrandItem key={i} brand={item} />)
            }) }
          </ul>
          <p 
            className="index-more-brand"
            onTouchStart={moreBrands}
          >
            {moreBrandsText}
            <i className="yellow-bt"></i>
          </p>
        </div>
      </section>
    )
  }
}
export default HomeBrand;