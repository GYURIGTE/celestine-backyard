import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="bg-green-400/80 border-b border-gray-200 sticky top-4 z-50 p-4 rounded-3xl mx-10 my-5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-3xl font-medium text-white">
              Celestine's Backyard
            </NavLink>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className="text-xl font-medium text-white hover:text-green-800 transition-colors">Home</NavLink>
            <NavLink to="/about" className="text-xl font-medium text-white hover:text-green-800 transition-colors">About</NavLink>
            <NavLink to="/pet" className="text-xl font-medium text-white hover:text-green-800 transition-colors">Pets</NavLink>
            

            <NavLink to="/contact">
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}