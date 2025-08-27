import React from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the team behind Vayo Vault, our mission to revolutionize travel savings, and our track record of helping members save millions on luxury travel.',
  openGraph: {
    title: 'About Vayo Vault - Travel Industry Experts',
    description: 'Meet the team revolutionizing travel savings with exclusive member deals.',
  },
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'SC',
      experience: '15+ years in luxury hospitality',
      background: 'Former VP at Marriott International, built relationships with 500+ premium properties worldwide.',
      achievements: ['Led $2B in hotel revenue', 'Negotiated exclusive partnerships', 'MBA from Wharton']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Travel Officer',
      image: 'MR',
      experience: '12+ years in travel technology',
      background: 'Ex-Expedia executive who specialized in inventory optimization and dynamic pricing algorithms.',
      achievements: ['Built travel platform serving 50M users', 'Expert in travel industry analytics', 'Stanford CS degree']
    },
    {
      name: 'Jennifer Park',
      role: 'Head of Member Experience',
      image: 'JP',
      experience: '10+ years in customer success',
      background: 'Former Disney hospitality manager focused on creating magical experiences for premium guests.',
      achievements: ['4.9/5 customer satisfaction score', 'Built member community of 10K+', 'Travel industry awards']
    }
  ];

  const milestones = [
    { year: '2019', event: 'Company Founded', description: 'Started with a vision to democratize luxury travel access' },
    { year: '2020', event: 'First 1,000 Members', description: 'Reached our first milestone despite pandemic challenges' },
    { year: '2021', event: 'Partnership Network', description: 'Established relationships with 200+ premium properties' },
    { year: '2022', event: '$1M Saved', description: 'Our members collectively saved their first million dollars' },
    { year: '2023', event: '10,000+ Members', description: 'Reached 10,000 happy members across 50 states' },
    { year: '2024', event: '$2M+ Saved', description: 'Members have now saved over $2 million on dream vacations' },
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Members' },
    { number: '$2M+', label: 'Total Savings' },
    { number: '500+', label: 'Partner Properties' },
    { number: '4.8/5', label: 'Average Rating' },
    { number: '85%', label: 'Member Retention' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Badge variant="success" className="mb-6">
            Founded in 2019
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Travel Industry Veterans
            <br />
            <span className="text-primary-600">On Your Side</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're not just another travel website. We're industry insiders who got tired of seeing travelers overpay for luxury experiences. 
            Our team has decades of combined experience negotiating the deals you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Join 10,000+ Smart Travelers
            </Button>
            <Button variant="secondary" size="lg">
              See Our Member Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Track Record
            </h2>
            <p className="text-gray-600">Numbers that show our commitment to member success</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Your Travel Advocates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings together decades of experience from the world's leading travel and hospitality companies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} variant="default" className="h-full">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary-600 font-bold text-xl">{member.image}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-primary-600 font-medium">{member.role}</p>
                    <p className="text-sm text-gray-500 mt-1">{member.experience}</p>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {member.background}
                  </p>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600">
              What drives us to create the world's most trusted travel membership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card variant="default">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To democratize access to luxury travel by leveraging our industry relationships and expertise, 
                  making exclusive experiences accessible to everyone at transparent, fair prices.
                </p>
              </div>
            </Card>
            
            <Card variant="default">
              <div className="p-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Promise</h3>
                <p className="text-gray-600">
                  Complete transparency, no hidden fees, and genuine savings. We succeed only when our members save money 
                  and create unforgettable travel memories.
                </p>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Transparency</h4>
              <p className="text-sm text-gray-600">
                No hidden fees, clear pricing, honest communication about what we can and can't deliver.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Member-First</h4>
              <p className="text-sm text-gray-600">
                Every decision is made with our members' best interests in mind, not short-term profits.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-sm text-gray-600">
                Continuous improvement in deals, service, and technology to exceed member expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600">
              From startup idea to helping 10,000+ members save millions
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Become part of a community that values smart travel, genuine savings, and unforgettable experiences. 
            Your next dream vacation is just a membership away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Start Your Membership - $37/month
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              View Member Benefits
            </Button>
          </div>
          <div className="mt-6 text-sm text-primary-100">
            30-day money back guarantee • Cancel anytime • No contracts
          </div>
        </div>
      </section>
    </div>
  );
}