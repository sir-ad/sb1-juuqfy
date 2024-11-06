import React from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  phone: string;
  business: string;
  employees: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Thank you for your message! We\'ll get back to you soon.');
        reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Get Started</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp/Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { 
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Please enter a valid 10-digit phone number'
              }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
            Business Name
          </label>
          <input
            type="text"
            id="business"
            {...register('business')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Employees
          </label>
          <select
            id="employees"
            {...register('employees')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select...</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="200+">200+</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            How can we help? *
          </label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about your business needs..."
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <span>Get Free Consultation</span>
          <Send size={20} />
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          We'll get back to you within 24 hours
        </p>
      </form>
    </div>
  );
};

export default ContactForm;