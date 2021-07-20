import React from 'react';
import Header from './layout/Header'
import Footer from './layout/Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Category from './components/Category';
import Recipe from './components/Recipe';

function App() {
  return (
    <Router basename='/react-food'>
      <Header />
        <main className='container content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/category/:name' component={Category} />
            <Route path='/recipe/:id' component={ Recipe } />
          </Switch>
        </main>
      <Footer />
    </Router>
  )
}

export default App;