import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Cloud, Phone, ChevronRight, CheckCircle2, ArrowRight, Star, Building2, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Apple-inspired Minimalism */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 mix-blend-multiply animate-gradient" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-4xl">
            {/* Trust Badge */}
            <div className="mb-8 inline-flex items-center bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 fade-up">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white/90">Trusted by 900+ Local Businesses Since 1996</span>
            </div>
            
            {/* Value Proposition */}
            <h1 className="display-text text-white mb-8 fade-up stagger-1">
              Simplify Your Business,
              <br />
              <span className="text-4xl md:text-5xl hindi-text mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                अपने व्यवसाय को आसान बनाएं
              </span>
            </h1>

            {/* Pain Point Solution */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl fade-up stagger-2">
              Stop struggling with complex accounting and GST compliance. Get expert local support and modern business solutions in your language.
            </p>

            {/* Social Proof */}
            <div className="flex flex-wrap gap-4 mb-12 fade-up stagger-2">
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
                <Building2 className="w-5 h-5 text-blue-400" />
                <span className="text-white/90">3-Star Tally Partner</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-white/90">28+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="text-white/90">24/7 Local Support</span>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 fade-up stagger-3">
              <Link 
                to="/contact" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Free Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="tel:+919131771382"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points & Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="display-text text-4xl mb-6">
              Your Business Challenges,
              <span className="block text-3xl hindi-text mt-2 gradient-text">
                हमारा समाधान
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Access Anywhere</h3>
              <p className="text-gray-600 mb-4">Work from anywhere with Tally on Cloud. Access your business data securely from any device.</p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Remote access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Auto backups</span>
                </li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Local Support</h3>
              <p className="text-gray-600 mb-4">Get expert help in your language. Our team understands your local business needs.</p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Hindi support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Quick response</span>
                </li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">GST Ready</h3>
              <p className="text-gray-600 mb-4">Stay compliant with our GST training and support. Never worry about tax filing again.</p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Free training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Easy filing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="display-text text-4xl mb-6">
              Trusted by Local Leaders
              <span className="block text-3xl hindi-text mt-2 gradient-text">
                हमारे ग्राहक क्या कहते हैं
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">"HCS Business Solutions' service and follow-up is excellent. Their technical team is very knowledgeable and well-trained, always eager to share new features with proper guidance."</p>
              <div>
                <p className="font-bold">Anil Gupta</p>
                <p className="text-gray-600">Business Owner, Singrauli</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6">"The best Tally solutions in Singrauli. I can manage all my 3 firms from home. The free GST training was incredibly helpful for my business."</p>
              <div>
                <p className="font-bold">Anjani Keshari</p>
                <p className="text-gray-600">Multi-business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="display-text text-4xl mb-6">
            Ready to Transform Your Business?
            <span className="block text-3xl hindi-text mt-2 text-blue-400">
              अभी शुरू करें
            </span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="https://wa.me/919131771382"
              target="_blank"
              rel="noopener noreferrer" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;