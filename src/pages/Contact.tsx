import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import ContactForm from '../components/ContactForm';
import OfficeLocation from '../components/OfficeLocation';

const Contact = () => {
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in learning more about your Tally solutions.");
  const whatsappLink = `https://wa.me/919425331547?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col">
      <Toaster position="top-right" />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80" 
            alt="Contact" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Have questions about our solutions? We're here to help you find the perfect fit for your business.
          </p>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="tel:+919425331547"
              className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <Phone className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-gray-600">+91 94253 31547</p>
              </div>
            </a>
            <a 
              href="mailto:support@tallysolutionsmp.com"
              className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <Mail className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-gray-600">support@tallysolutionsmp.com</p>
              </div>
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <Send className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-gray-600">Chat with us</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-8">Our Offices</h2>
              <div className="space-y-6">
                <OfficeLocation
                  city="Singrauli"
                  address="Government Degree College Road, Waidhan, Madhya Pradesh, 486886"
                  phone="+91 94253 31547"
                />
                <OfficeLocation
                  city="Ambikapur"
                  address="456 Market Road, Ambikapur, Chhattisgarh"
                  phone="+91 94253 31547"
                />
                <OfficeLocation
                  city="Bilaspur"
                  address="789 Business Hub, Bilaspur, Chhattisgarh"
                  phone="+91 94253 31547"
                />
                <OfficeLocation
                  city="Rewa"
                  address="321 Tech Park, Rewa, Madhya Pradesh"
                  phone="+91 94253 31547"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-gray-50 rounded-lg">
                <span className="font-semibold">What areas do you serve?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 px-6 text-gray-600">We primarily serve businesses in Singrauli, Ambikapur, Bilaspur, Rewa, and surrounding regions across Madhya Pradesh, Chhattisgarh, and Uttar Pradesh.</p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-gray-50 rounded-lg">
                <span className="font-semibold">How quickly can you implement Tally solutions?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 px-6 text-gray-600">Basic implementation can be completed within 1-2 days. For customized solutions, the timeline varies based on your specific requirements.</p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-6 bg-gray-50 rounded-lg">
                <span className="font-semibold">Do you provide after-sales support?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 px-6 text-gray-600">Yes, we provide comprehensive after-sales support including technical assistance, training, and regular updates for all our solutions.</p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;