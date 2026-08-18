import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Our Team | Coreline IT Solutions',
  description: 'Meet the brilliant minds behind Coreline IT Solutions.',
};

const teamMembers = [
  {
    name: 'Shubham Desai',
    role: 'Python & Gen AI Developer',
    image: '/team/shubham.jpeg',
    mobile: '+91 72194 29987',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'shubham@example.com'
    }
  },
  {
    name: 'Suraj Irle',
    role: 'Senior Graphic Designer',
    image: '/team/suraj.png',
    mobile: '+91 93071 91465',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'suraj@example.com'
    }
  },
  {
    name: 'Omakar Gaikwad',
    role: 'Full Stack Developer',
    image: '/team/omkar.png',
    mobile: '+91 84599 37345',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'omakar@example.com'
    }
  },
  {
    name: 'Vaibhav Lohar',
    role: 'Graphic Designer',
    image: '/team/vaibhav.jpeg',
    mobile: '',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'vaibhav@example.com'
    }
  },
  {
    name: 'Bhagyashree Pimple',
    role: 'Graphic Designer',
    image: '/team/bhagyasgree.jpeg',
    mobile: '',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'bhagyashree@example.com'
    }
  },
  {
    name: 'Shubhangi Bhoge',
    role: 'Graphic Designer',
    image: '/team/shubhangi.png',
    mobile: '',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'shubhangi@example.com'
    }
  },
  {
    name: 'Vishal Udapure',
    role: 'Flutter Developer',
    image: '/team/vishal.png',
    mobile: '',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'vishal@example.com'
    }
  },
  {
    name: 'Jay Wattamwar',
    role: 'Junior Data Analyst',
    image: '/team/jay.jpeg',
    mobile: '',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'jay@example.com'
    }
  },
  {
    name: 'Akash Banger',
    role: 'Graphic Designer',
    image: '/team/aakash.jpeg',
    mobile: '',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'akash@example.com'
    }
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
      <section className="bg-slate-900 text-white pt-24 pb-12 md:pt-32 md:pb-16 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            The passionate experts driving digital transformation and building scalable solutions.
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:-translate-y-2 flex flex-col items-center justify-center min-h-[220px]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-slate-200 dark:border-slate-700 shadow-sm"
              />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-4">{member.role}</p>
              {member.mobile && (
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mt-auto">
                  📞 {member.mobile}
                </p>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-24 bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl shadow-blue-600/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Want to join our team?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 relative z-10">
            We are always looking for talented individuals who are passionate about technology and innovation to join our growing family.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 hover:bg-slate-50 font-semibold rounded-xl transition-colors relative z-10">
            View Open Positions
          </Link>
        </div>
      </div>
    </div>
  );
}
