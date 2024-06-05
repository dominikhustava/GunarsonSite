"use client"
import ScrollLink from "./ScrollLink";

const Footer: React.FC = () => {
    return (
      <footer className="bottom-0 left-0 w-full bg-gray-800 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-lg font-bold">Gunarson zatepľovanie a revitalizácia fasád</h2>
              <p>&copy; {new Date().getFullYear()} Gunarson s.r.o. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <ScrollLink href="#onas" className="hover:text-gray-400">
                O nás
              </ScrollLink>
              <a href="#projekty" className="hover:text-gray-400">
                Projekty
              </a>
              <a href="#kontakt" className="hover:text-gray-400">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;