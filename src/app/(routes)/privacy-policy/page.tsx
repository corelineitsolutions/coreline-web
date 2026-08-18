import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Coreline IT Solutions',
  description: 'Privacy Policy of Coreline IT Solutions, a software development company in Pune.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">1. Introduction</h2>
            <p className="text-slate-600 mb-4">
              Welcome to Coreline IT Solutions. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website 
              (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">2. Data We Collect</h2>
            <p className="text-slate-600 mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">3. How We Use Your Data</h2>
            <p className="text-slate-600 mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">4. Data Security</h2>
            <p className="text-slate-600 mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">5. Contact Us</h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <p className="text-slate-600 mb-2"><strong>Email:</strong> <a href="mailto:contact@corelineitsolutions.com" className="text-blue-600 hover:underline">contact@corelineitsolutions.com</a></p>
              <p className="text-slate-600"><strong>Address:</strong> 06, B Wing, 4th Floor, City Vista, Ashoka Nagar, Kharadhi, Pune</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
