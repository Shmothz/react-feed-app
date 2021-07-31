import React from 'react'
import {createUseStyles} from 'react-jss';

export const Profile = (props) => {
  const profileData = props.profileData

  const styles = createUseStyles({
    wrapperProfile: {
      display: 'flex'
    },
    wrapperInfo: {
      display: 'flex',
      flexDirection: 'column'
    },
    img: {
      width: '80px',
      height: '80px'
    },
    name: {},
    status: {}
  })()

  return (<div className={styles.wrapperProfile}>
    <img src={profileData.avatar}
         alt='avatar'
         className={styles.img}/>
    <div className={styles.wrapperInfo}>
      <span className={styles.name}>{profileData.firstName} {profileData.secondName}</span>
      <span className={styles.status}>{profileData.status}</span>
      <span>
        Date of birth:
        {(profileData.birthday === undefined || profileData.birthday === null)
          ? ' birthday is unknown'
          : profileData.birthday
        }
      </span>
    </div>
  </div>)
}