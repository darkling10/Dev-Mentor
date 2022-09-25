
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import routes from './config/Routes';

 
function App() {
  return (
    <Router>
      <Routes>
      {
        routes.map((ele)=>{
          return <Route path={ele.path} element={ele.element}></Route>
        })
      }
      </Routes>
    </Router>
  );
}
 
export default App;