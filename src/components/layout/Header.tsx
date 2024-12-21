import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import Navigation from './Navigation';
import Logo from '../common/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-grow md:flex-none">
            <Link to="/" className="mx-auto md:mx-0">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4 flex-grow justify-end">
            <Navigation />
            <div className="flex items-center">
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Search className="h-5 w-5" />
              </button>
            </div>
            <Link to="/login" className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              ログイン
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <Navigation mobile />
        </div>
      )}
    </header>
  );
};

export default Header;
