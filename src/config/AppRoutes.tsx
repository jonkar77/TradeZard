import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import NoLayout from './layout/NoLayout';

// Lazy load the components
const HomePage = lazy(() => import('../components/homePage'));
const HeroSection = lazy(() => import('../components/frontPage/HeroSection'));

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Routes with NoLayout */}
          <Route
            path="/"
            element={
              <NoLayout>
                <HeroSection />
              </NoLayout>
            }
          />
          {/* Routes with MainLayout */}
          <Route
            path="/home"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          <Route
            path="/feed"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          {/* Add more routes here that require Navbar and Sidebar */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
