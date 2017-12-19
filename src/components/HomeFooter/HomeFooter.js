import React, { Component } from 'react';

class HomeFooter extends Component {
  
  render() {

    return (
      <div>
        <p className="footer-bt"></p>
        <footer className="index-fooer">
          <ul className="clearfix">
            <li className="index-order-car active">
              <i></i>
              <span>订车</span>
            </li>
            <li className="index-my">
              <i></i>
              <span>我的</span>
            </li>
          </ul>
        </footer>
      </div>
    )
  }
}
export default HomeFooter;