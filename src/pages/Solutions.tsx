import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Cloud, GraduationCap, Building2, Factory, ShoppingBag } from 'lucide-react';
import SolutionFeature from '../components/SolutionFeature';
import IndustrySolution from '../components/IndustrySolution';

const Solutions = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Business Solutions"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Comprehensive business management solutions tailored for local businesses, powered by Tally and backed by expert support.
          </p>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Solutions</h2>
            <p className="text-xl text-gray-600">Everything you need to manage your business efficiently</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SolutionFeature
              icon={<Calculator className="w-8 h-8 text-blue-600" />}
              title="Tally Solutions"
              description="Complete business management with Tally's powerful features"
              features={[
                "Multi-location inventory management",
                "Real-time financial reporting",
                "GST compliance & filing",
                "Custom report generation"
              ]}
            />
            <SolutionFeature
              icon={<Cloud className="w-8 h-8 text-blue-600" />}
              title="Tally on Cloud"
              description="Access your Tally data anytime, anywhere with our cloud solution"
              features={[
                "Remote access from any device",
                "Automatic data backup",
                "Multi-user collaboration",
                "Enhanced data security"
              ]}
              highlight={true}
            />
            <SolutionFeature
              icon={<GraduationCap className="w-8 h-8 text-blue-600" />}
              title="GST Training"
              description="Expert-led training programs for businesses"
              features={[
                "Hands-on GST workshops",
                "Regular compliance updates",
                "Industry-specific guidance",
                "E-filing assistance"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600">Tailored solutions for different business sectors</p>
          </div>
          <div className="space-y-20">
            <IndustrySolution
              title="Coal & Power Industry"
              description="Specialized solutions for coal mining and power generation companies"
              features={[
                "Resource management and tracking",
                "Compliance management",
                "Multi-location operations",
                "Contractor billing management"
              ]}
              image="https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&q=80"
            />
            <IndustrySolution
              title="Construction & Real Estate"
              description="Complete project management and accounting solutions"
              features={[
                "Project cost tracking",
                "Material management",
                "Labor billing",
                "Progress monitoring"
              ]}
              image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
              reverse={true}
            />
            <IndustrySolution
              title="Retail & Distribution"
              description="Streamlined solutions for retail operations"
              features={[
                "POS integration",
                "Inventory management",
                "Customer relationship management",
                "Sales analytics"
              ]}
              image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with a free consultation and demo of our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
              Schedule Free Demo
            </Link>
            <a 
              href="https://wa.me/919131771382"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Get WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;