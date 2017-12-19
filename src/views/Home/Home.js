import React, { Component } from 'react';
import axios from 'axios';

import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeBrand from '../../components/HomeBrand/HomeBrand';
import { Carousel } from 'antd-mobile';

import './css/style.css';
class Home extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      circular: [], // 轮播
      imgHeight: 342,
      brands: [],
      series: []
    }
  }
  
  componentDidMount() {
    localStorage.setItem('token', 'ad901cee763571e6085b657648589bb9') // 设置token
    axios
      .get(
        'https://tcmapi.emao.com/index',
        {params: { 
          token: localStorage.token,
          ltime: 0,
          offset: 0,
          len: 10
        }}
      )
      .then(res => {
        console.log(res.data)
        let { circular, brands, series } = res.data.data;
        if( res.status === 200 && res.data.code === 200) {
          this.setState({
            circular,
            brands,
            series
          })
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    let { circular, brands } = this.state;

    return (
      <div>
        <HomeHeader />
        <Carousel
          className="index-slider"
          autoplay
          infinite
          dotStyle={{ 
            float: 'left',
            width: '.1333rem',
            height: '.1333rem',
            backgroundColor: '#fff',
            marginRight: '.1333rem',
            borderRadius: '0.0666rem',
          }}
          dotActiveStyle={{
            width: '.2666rem',
            height: '.1333rem',
            backgroundColor: '#d6ab55',
            borderRadius: '0.0666rem',
          }}
        >
          { circular.map( (item, i) => {
            return (
              <img
                key={i}
                src={item.imgUrl} 
                alt=""
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            )
          } ) }
        </Carousel>
        
        <HomeBrand brands={brands} />

        <section className="index-car-source">
          <p className="index-car-title">本地车源</p>
          <ul className="index-car-con">
            <li>
              <img src={require('./images/pic-1.jpg')} alt="" />
              <p className="index-car-name">上海大众-途昂</p>
              <p className="index-car-price">
                <span>9.99</span>万起</p>
              <p className="index-car-count">共
                <i>1</i>个车型在售</p>
              <p className="index-car-sale">最高下降
                <strong>2.8万</strong>
              </p>
            </li>
            <li>
              <img src={require('./images/pic-1.jpg')} alt="" />
              <p className="index-car-name">上海大众-途昂</p>
              <p className="index-car-price">
                <span>9.99</span>万起</p>
              <p className="index-car-count">共
                <i>1</i>个车型在售</p>
              <p className="index-car-sale">最高下降
                <strong>2.8万</strong>
              </p>
            </li>
            <li>
              <img src={require('./images/pic-1.jpg')} alt="" />
              <p className="index-car-name">上海大众-途昂</p>
              <p className="index-car-price">
                <span>9.99</span>万起</p>
              <p className="index-car-count">共
                <i>1</i>个车型在售</p>
              <p className="index-car-sale">最高下降
                <strong>2.8万</strong>
              </p>
            </li>
            <li>
              <img src={require('./images/pic-1.jpg')} alt="" />
              <p className="index-car-name">上海大众-途昂</p>
              <p className="index-car-price">
                <span>9.99</span>万起</p>
              <p className="index-car-count">共
                <i>1</i>个车型在售</p>
              <p className="index-car-sale">最高下降
                <strong>2.8万</strong>
              </p>
            </li>
            <li>
              <img src={require('./images/pic-1.jpg')} alt="" />
              <p className="index-car-name">上海大众-途昂</p>
              <p className="index-car-price">
                <span>9.99</span>万起</p>
              <p className="index-car-count">共
                <i>1</i>个车型在售</p>
              <p className="index-car-sale">最高下降
                <strong>2.8万</strong>
              </p>
            </li>
            <li>
              <img src={require('./images/pic-1.jpg')} alt="" />
              <p className="index-car-name">上海大众-途昂</p>
              <p className="index-car-price">
                <span>9.99</span>万起</p>
              <p className="index-car-count">共
                <i>1</i>个车型在售</p>
              <p className="index-car-sale">最高下降
                <strong>2.8万</strong>
              </p>
            </li>
          </ul>
          <p className="index-more-brand">查看更多
            <i className="yellow-bt"></i>
          </p>
        </section>
       
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
    );
  }
}

export default Home;
