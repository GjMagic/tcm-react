import React, { Component } from 'react';

class CarSearch extends Component {
  
  render() {
    
    return (
      <section className="index-search">
        <div className="index-search-in">
          <p className="index-search-title">急需要什么车型？告诉我</p>
          <div className="index-search-condition">
            <div className="index-serach-type">
              <label>选择车型</label>
              <p></p>
              <i className="white-rt"></i>
            </div>
            <div className="index-search-price">
              <label>期望价格：</label>
              <input type="text" />
              <span>万元</span>
            </div>
          </div>
          <input type="submit" name="提交" value="提交" />
        </div>
      </section>
    )
  }
}
export default CarSearch;