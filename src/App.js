import './App.css';
import ContactPage from './Containers/Contact/ContactPage'
import FourOFour from './Containers/404/FourOFour'
import {Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
              <Switch>
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/404" component={FourOFour} />
                    <Route path="/" exact>
                              <Redirect to="/contact" />
                    </Route>

                    <Route path="*" >
                          <Redirect to="/404" />
                    </Route>
              </Switch>
    </div>
  );
}

export default App;
