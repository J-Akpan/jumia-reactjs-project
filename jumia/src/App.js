import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import "./styles/app.scss"


function App() {
  return (
    <div className="app-container">
      <Routes>
         <Route path='/' element={<Home/>} />
      </Routes>
  
    </div>
  );
}

export default App;
