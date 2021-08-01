import React from 'react'
import {Avatar} from 'antd'
import {DatePicker} from 'antd'
import {Input} from 'antd'
import moment from 'moment';
import {createUseStyles} from 'react-jss';
import {objStyles} from './styles';

const objLabels = {
  firstName: 'My name',
  secondName: 'My last name',
  birthday: 'Birth date',
  avatar: 'Avatar',
  status: 'Status',
  country: 'Country',
  city: 'City'
}

export const Profile = ({profileData}) => {

  const styles = createUseStyles(objStyles)()

  return (
    <div className={styles.wrapper}>
      <Avatar shape="square" size={64} src={profileData.avatar}/>
      {
        Object.keys(profileData).map((key, index) => <div key={index} className={styles.item}>
            {(key === 'birthday')
              ? profileData[key]
                ? <DatePicker style={{width: '50%'}}
                              placeholder="Basic usage"
                              disabled
                              value={moment(new Date(profileData.birthday))}/>
                : <Input value='Birth date is unknown' disabled addonBefore={objLabels[key]}/>
              : (key === 'avatar') ? null :
                <Input value={profileData[key]} disabled addonBefore={objLabels[key]}/>
            }
          </div>
        )
      }
    </div>)
}