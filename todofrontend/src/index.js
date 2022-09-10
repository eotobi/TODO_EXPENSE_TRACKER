import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  Route, BrowserRouter,Routes
} from 'react-router-dom'
import TodoFunction from './components/ToDoTasks/TodoFunction';
import Admin from './components/Admin/Admin';


//import TodoClass from './components/TodoClass';


function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path= "/home" element = {<App/>}/>
        <Route exact path= "/tasks" element = {<TodoFunction/>} />
        <Route exact path= "/administrator" element = {<Admin/>} />
        {/**<Route exact path= "/todos" element = {<TodoClass/>} />*/}
      </Routes>
    </BrowserRouter>
  ) 
}
ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
