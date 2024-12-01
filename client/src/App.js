import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from './Components/Index';
import IMC from './Components/Imc';
import Calculadora from './Components/Calculadora';


function App() {
  
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Index />} /> 
              <Route path="/imc" element={<IMC />} /> 
              <Route path="/calculadora" element={<Calculadora />} /> 
              
          </Routes>
      </BrowserRouter>
  );
}

export default App;
