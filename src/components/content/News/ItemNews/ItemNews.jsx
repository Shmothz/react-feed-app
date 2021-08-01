import React, {useState} from 'react'
import {Modal} from 'antd';
import {createUseStyles} from 'react-jss';
import {objStyles} from './styles';

export const ItemNews = (props) => {

  const styles = createUseStyles(objStyles)()

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div
           className={props.className.tab}
           onClick={showModal}>
        <img src={props.urlToImage}
             alt={'preview'}
             className={props.className.img}
        />
        <h3 className={props.className.title}>
          {props.elem.title}
        </h3>
      </div>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} title=''>
        <img
          className={styles.img}
          src={props.elem.urlToImage}
          alt={`Images ID: ${props.index}`}
          onClick={e => e.stopPropagation()}
        />
        <h4>
          {props.elem.title}
        </h4>
        <p>
          {props.elem.content} {<a href={props.elem.url}>...read more</a>}
        </p>
      </Modal>
    </>
  )
}