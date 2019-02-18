import React, { Component } from 'react'
import { connect } from 'dva';
import styles from './Home.less';
// let {INIT_LEVEL} = process.env  //环境变量的值

 class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {activeIndex} = this.props.home;
    return (
      <div className={styles.bigBox}>
        7檬科学
      </div>
    )
  }


}


const mapStateToProps = (state)=>{
  return {
    home : state.home
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    changeState : (attr,value)=>{//接收一个state对象的属性名和属性值 -->  映射到reducer里面处理
      dispatch({type: 'home/changeState',payload:[attr,value]});
    },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
