import React, { Component } from 'react';
import { getUserInfo } from './../../ducks/reducer';
import {connect} from 'react-redux';

class Dashboard extends Component {
    state = {
        user: ''
    }
    componentDidMount() {
        this.props.getUserInfo();
         }


    render() { 
        return ( <div>
            Dashboard Component
        </div> )
    }
}
 
function mapStateToProps(state) {
    return {
      user: state.user
    };
  }
  
  export default connect(mapStateToProps, { getUserInfo })(Dashboard);