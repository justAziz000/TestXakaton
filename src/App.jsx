// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DogSection from './components/DogSection';     // Itlar bo‘limi
import CatSection from './components/CatSection';       // Mushuklar bo‘limi
import DogDetail from './pages/DogDetail';
import CatDetail from './pages/CatDetail';

function App() {
  return (
    <BrowserRouter>
      {/* Header har doim yuqorida */}

      <Routes>
        {/* Asosiy sahifa — ikkalasi ham chiqadi */}
        <Route 
          path="/" 
          element={
            <main>
              <DogSection />
              <CatSection />
            </main>
          } 
        />

        {/* Batafsil sahifalar */}
        <Route path="/dog/:type" element={<DogDetail />} />
        <Route path="/cat/:type" element={<CatDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;