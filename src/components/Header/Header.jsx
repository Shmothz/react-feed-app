import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'
import {Navigation} from './Navigation'
import {objStyles} from './styles'
import {Logo} from './Logo'

const SANDWICH_ADDRESS = 'https://e7.pngegg.com/pngimages/252/694/png-clipart-line-product-design-angle-line-angle-symmetry.png'
const CROSS_ADDRESS = 'http://watchfit.com/wp-content/uploads/2015/03/healthy-lunch-sandwiches2.jpg'

export const Header = () => {

  const styles = createUseStyles(objStyles)()

  const [modalWindow, setModalWindow] = useState(false)

  const handleOpen = () => {
    setModalWindow(true)
  }
  const handleClose = () => {
    setModalWindow(false)
  }

  return (<div className={styles.wrapper}>
    <Logo className={styles.logo}/>
    <div className={styles.menuWrapper}>
      <img
        src={
          modalWindow
            ? SANDWICH_ADDRESS
            : CROSS_ADDRESS
        }
        alt={'sandwich'}
        className={styles.imgSandwich}
        onClick={
          modalWindow
            ? handleClose
            : handleOpen}/>
      {
        modalWindow && <Navigation onClick={handleClose}/>
      }
    </div>
  </div>)
}