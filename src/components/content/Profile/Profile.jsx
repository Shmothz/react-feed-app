import React from 'react'
import {Avatar} from 'antd'
import {Descriptions} from 'antd'

export const Profile = (props) => {
  const profileData = props.profileData

  return (<>
    <Avatar shape="square" size={64} src={profileData.avatar}/>
    <Descriptions title="My profile info">
      <Descriptions.Item label="Name">{profileData.firstName} {profileData.secondName}</Descriptions.Item>
      <Descriptions.Item label="Status">{profileData.status}</Descriptions.Item>
      <Descriptions.Item label="Date of birth">
        {(profileData.birthday === undefined || profileData.birthday === null)
          ? ' birthday is unknown'
          : profileData.birthday
        }
      </Descriptions.Item>
      <Descriptions.Item label="Live">{profileData.country}, {profileData.city}</Descriptions.Item>
    </Descriptions>
  </>)
}