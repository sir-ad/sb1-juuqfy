import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/YOUR_NEWSLETTER_SCRIPT_ID/exec', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success('Thank you for subscribing to our newsletter!');
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      toast.error('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">HCS Business Solutions</h3>
            <p className="text-gray-400 mb-4">Your trusted Tally Solutions partner since 1996, serving over 900 clients across MP, CG & UP.</p>
            <p className="text-sm text-gray-500">CIN: U72501MP2017PTC043575</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Tally Solutions</li>
              <li className="text-gray-400">Tally on Cloud</li>
              <li className="text-gray-400">GST Training & Seminars</li>
              <li className="text-gray-400">Corporate Tech Hardware</li>
              <li className="text-gray-400">Custom Dashboards</li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <a href="tel:+919425331547" className="text-gray-400 hover:text-white transition">+91 94253 31547</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <a href="mailto:support@tallysolutionsmp.com" className="text-gray-400 hover:text-white transition">support@tallysolutionsmp.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">Government Degree College Road, Waidhan, MP 486886</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <label htmlFor="newsletter" className="text-sm font-medium">Subscribe to our newsletter</label>
              <div className="flex gap-2">
                <input
                  type="email"
                  id="newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} HCS Business Solutions Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;