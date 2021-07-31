import React from 'react'
import {Profile} from './Profile';
import {connect} from 'react-redux';

const Container = (props) => {
  return <Profile {...props} />
}

const mapStateToProps = (state) => {
  return {
    profileData: state.profilePage.profileData
  }
}
export const ProfileContainer = connect(mapStateToProps)(Container)
