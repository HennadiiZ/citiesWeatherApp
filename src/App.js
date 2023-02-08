import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import AllCitiesPage from './pages/AllCitiesPage';
import DetailsCityPage from './pages/DetailsCityPage';
import HeaderNav from './layout/HeaderNav';
import Layout from './layout/Layout';

import FindCityPage from './pages/FindCityPage';

function App() {
  return (
    <div>
      <HeaderNav />
      <Layout>
        <main>
          <Routes>
            <Route path="*" element={<Navigate to="/cities" replace />}/>
            <Route path='/cities/*' element={ <AllCitiesPage/> } />
            <Route path='/cities/:cityId' element={ <DetailsCityPage/> } />
            {/*  */}
            <Route path='/find-city/*' element={ <FindCityPage/> } />
          </Routes>
        </main>
      </Layout>
    </div>
  );
}

export default App;
