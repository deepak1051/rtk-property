import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import LandingLayout from './layout/LandingLayout';
import PropertyListing from './pages/PropertyListing';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Route>
        <Route element={<LandingLayout />}>
          <Route path="listing" element={<PropertyListing />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/signin" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
