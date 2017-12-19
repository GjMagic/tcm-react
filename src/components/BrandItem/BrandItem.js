import React, { Component } from 'react';

class BrandItem extends Component {
  
  render() {

    let { brand } = this.props;

    return (
      <li>
        <img src={brand.logoUrl} alt="" />
        <span>{brand.name}</span>
      </li>
    )
  }
}
export default BrandItem;