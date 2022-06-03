import './App.css';
import DealPage from './page/DealPage';
import DealWriteForm from './components/DealWriteForm';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<DealPage />} />
        <Route path='/dealform' element={<DealWriteForm />} />
      </Routes>
    </div>
  );
}

export default App;
