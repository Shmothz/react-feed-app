import React from 'react'
import {Header} from './components/Header'
import {Route, Switch} from 'react-router-dom'
import {Main} from './components/content/Main'
import {News} from './components/content/News'
import {ProfileContainer} from './components/content/Profile'
import {createUseStyles} from 'react-jss';
import {objStyles} from './styles';

function App() {

  const styles = createUseStyles(objStyles)()

  return (
    <div className="App">
      <Header/>
      <div className={styles.contentWrapper}>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/news" component={News}/>
          <Route path="/profile" component={ProfileContainer}/>
        </Switch>
      </div>
    </div>
  )
}

export default App
