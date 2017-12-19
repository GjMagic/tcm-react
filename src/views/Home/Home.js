import React, { Component } from 'react';
import axios from 'axios';

import HomeHeader from '../../components/HomeHeader/HomeHeader';
import HomeBrand from '../../components/HomeBrand/HomeBrand';
import CarSource from '../../components/CarSource/CarSource';
import CarSearch from '../../components/CarSearch/CarSearch';
import HomeFooter from '../../components/HomeFooter/HomeFooter';
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
  
  componentWillMount() {
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

    let { circular, brands, series } = this.state;

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

        <CarSource series={series} />
       
        <CarSearch />
        
        <HomeFooter />
      </div>
    );
  }
}

export default Home;
