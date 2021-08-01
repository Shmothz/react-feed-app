import React from 'react'
import {HeaderComponent as Header} from './components/Header'
import {Route, Switch} from 'react-router-dom'
import {Main} from './components/content/Main'
import {News} from './components/content/News'
import {ProfileContainer} from './components/content/Profile'

import {Layout} from 'antd'
import 'antd/dist/antd.css'

const {Content, Footer} = Layout

function App() {

  return (
    <Layout className="layout" style={{minHeight: '100vh'}}>
      <Header />
      <Content style={{padding: 50, margin: '0 auto', flexGrow: 1}}>
        <div className="site-layout-content" style={{padding: 24, minHeight: 360, backgroundColor: 'white'}}>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/news" component={News}/>
            <Route path="/profile" component={ProfileContainer}/>
          </Switch>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>Custom Serv Test Task</Footer>
    </Layout>
  )
}

export default App



