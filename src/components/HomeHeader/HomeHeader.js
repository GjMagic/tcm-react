import React, { Component } from 'react';

class HomeHeader extends Component {
  
  render() {
    return (
      <div>
        <header className="index-header">
          <strong className="index-title">淘车猫</strong>
          <div className="index-news news-icon">
            <span>6</span>
          </div>
        </header>
      </div>
    )
  }
}
export default HomeHeader;