import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Dashboard/>}/>
        <Route path="/dashboard" exact={true} element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
