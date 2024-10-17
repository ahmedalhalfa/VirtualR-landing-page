import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <main className="max-w-7xl mx-auto pt-20 px-6">
        <Outlet />
      </main>
    </>
  );
}