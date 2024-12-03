import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Foundation Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4"> Iqra Sweet Home Trust (ISHT)</h3>
          <p className="text-lg">
          Iqra Sweet Home Trust (ISHT) offers free education and covers expenses for underprivileged students in Pakistan, including cadet college admissions..
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul>
            <li>
              <a href="/about" className="text-lg hover:text-primary transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="text-lg hover:text-primary transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-lg hover:text-primary transition duration-300">
                Contact
              </a>
            </li>
            <li>
              <a href="/donate" className="text-lg hover:text-primary transition duration-300">
                Donate
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-lg mb-2">
            Address: Iqra Sweet Home, House No. R-18, Phase 1, Defence View, Shaheed-eMillat Road, Ext. Karachi.
          </p>
          <p className="text-lg mb-2">Phone: 021-38892198 Ext. 9933</p>
          <p className="text-lg mb-2">Whatsapp:92-328-2288900
          </p>
          
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="text-xl hover:text-primary transition duration-300">
              <FaFacebook />
            </a>
            
            <a href="https://instagram.com" className="text-xl hover:text-primary transition duration-300">
              <FaInstagram />
            </a>
            
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-lg text-gray-400">
        <p>&copy; 2024 Iqra Sweet Home Trust (ISHT). All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
