import React, {useState} from 'react'
import {createUseStyles} from 'react-jss';
import Navigation from './Navigation';

const Header = () => {

  const styles = createUseStyles({
    wrapper: {
      width: '420px',
      margin: '0 auto',
      background: {
        color: '#6666ff'
      },
      display: 'flex',
      justifyContent: 'space-between'
    },
    logo: {
      width: '45px',
      height: '45px'
    },
    menuWrapper : {
      position: 'relative',
      width: '167px'
    },
    imgSandwich: {
      width: '45px',
      heigth: '45px',
      position: 'absolute',
      top: '0',
      right: '0'
    }
  })()

  const [modalWindow, setModalWindow] = useState(false)

  const handleOpen = () => {
    setModalWindow(true)
  }
  const handleClose = () => {
    setModalWindow(false)
  }

  return (<div className={styles.wrapper}>
    <img
      src={'https://e7.pngegg.com/pngimages/1020/955/png-clipart-graphics-eagle-bird-graphy-eagle-animals-photography.png'}
      alt={'svg-logo'}
      className={styles.logo}
    />
    <div className={styles.menuWrapper}>
      {
        modalWindow
          ? <img
            src={'https://e7.pngegg.com/pngimages/252/694/png-clipart-line-product-design-angle-line-angle-symmetry.png'}
            alt={'sandwich'}
            className={styles.imgSandwich}
            onClick={handleClose}/>
          : <img src={'http://watchfit.com/wp-content/uploads/2015/03/healthy-lunch-sandwiches2.jpg'}
                 alt={'sandwich'}
                 className={styles.imgSandwich}
                 onClick={handleOpen}/>
      }
      {
        modalWindow
          ? <div onClick={handleClose}><Navigation /></div>
          : null
      }
    </div>
  </div>)
}

export default Header