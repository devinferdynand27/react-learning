import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layouts';
import Dashboard from '../page/Dashboard';
import Welcome from '../page/Welcome';
import Profile from '../page/Profile';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/admin" element={<Layout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  </Routes>
);

export default AppRoutes;
