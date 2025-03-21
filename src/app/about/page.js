import React from 'react';

const About = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto p-4 space-y-10">
      {/* Company Section */}
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4">About Our Company</h1>
        <p className="text-gray-600">We are dedicated to delivering the best products and services to our customers worldwide.</p>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="p-4 border rounded-lg shadow-sm">Fast Delivery</li>
          <li className="p-4 border rounded-lg shadow-sm">24/7 Customer Support</li>
          <li className="p-4 border rounded-lg shadow-sm">Easy Returns</li>
        </ul>
      </section>

      {/* Policy Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Policies</h2>
        <p className="text-gray-600">We believe in transparency and fairness. Read more about our privacy policy and terms of service.</p>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Mission</h2>
        <p className="text-gray-700">Our mission is to empower people with access to high-quality products through a seamless online shopping experience.</p>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600">Have questions? Reach out to us at <a href="mailto:support@ecommerce.com" className="text-blue-500">support@ecommerce.com</a></p>
      </section>
    </div>
        </div>
    );
};

export default About;