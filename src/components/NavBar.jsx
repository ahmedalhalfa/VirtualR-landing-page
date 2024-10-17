import logo from '../assets/logo.png';
import { navItems } from '../constants';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const location = useLocation();
  const [isAuthRoute, setIsAuthRoute] = useState(false);
  useEffect(() => {
    setIsAuthRoute(location.pathname === '/signin' || location.pathname === '/create-account' || location.pathname === '/forgot-password');
  }, [location.pathname]);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto reltive text-sm">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </Link>
          {!isAuthRoute ? (
            <>
              <ul className="hidden lg:flex ml-14 space-x-12">
                {navItems.map((item) => (
              <li key={item.label}>
                    <HashLink to={item.href}>{item.label}</HashLink>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link to="/signin" className="py-2 px-3 border rounded-md">
              Sign In
            </Link>
            <Link to="/create-account" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
              Create An Account
            </Link>
          </div>
          <button className="lg:hidden md:flex flex-col justify-end" onClick={toggleNavBar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
          </>
          ) : null}
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
          <ul>
            {navItems.map((item) => {
              return (
                <li key={item.label} className="py-4">
                  <HashLink to={item.href}>{item.label}</HashLink>
                </li>
              );
            })}
          </ul>
          <div className="flex space-x-6">
            <Link to="/signin" className="py-2 px-3 border rounded-md">
              sign in
            </Link>
            <Link to="/create-account" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
              create an account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
