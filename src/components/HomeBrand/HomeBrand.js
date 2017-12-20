import React, { Component } from 'react';

import BrandItem from '../BrandItem/BrandItem';

class HomeBrand extends Component {
  
  constructor(props) {
    super(props);
    this.moreBrands = this.moreBrands.bind(this);
    this.state = {
      moreBrandsText: '更多品牌',
      moreBrandsBool: false,
      brandInfoClass: 'index-brand-info clearfix',
      moreBrandClass: 'index-more-brand'
    }
  }
  
  // 点击更多品牌
  moreBrands(ev) {
    this.setState({
      moreBrandsBool: !this.state.moreBrandsBool
    })
  }

  render() {

    let { moreBrands } = this;

    let { brands } = this.props;

    let { moreBrandsText, moreBrandsBool, brandInfoClass, moreBrandClass } = this.state;

    moreBrandsText = moreBrandsBool ? "收起" : "更多品牌";

    brandInfoClass = moreBrandsBool ? "clearfix" : "clearfix index-brand-info";

    moreBrandClass = moreBrandsBool ? "index-more-brand brand-collect" : "index-more-brand";

    return (
      <section className="index-brand">
        <div className="index-brand-in">
          <ul className={brandInfoClass}>
            { brands.map((item, i) => {
              return (<BrandItem key={i} brand={item} />)
            }) }
          </ul>
          <p 
            className={moreBrandClass}
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