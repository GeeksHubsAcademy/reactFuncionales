
import './App.css';

//Importamos las librerias necesarias para usar react-router-dom
import { Switch, BrowserRouter, Route } from 'react-router-dom';

//Importamos los componentes funcionales
import Register from './containers/Register/Register';
import Home from './containers/Home/Home';

//Enrutado con componentes funcionales 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/register' component={Register} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
