import React from 'react'

const News = (props) => {
  debugger

  const getNews = () => {
    props.getUsersTC()
  }

  return (<div>
    <button onClick={getNews}>Загрузить новости</button>
  </div>)
}

export default News