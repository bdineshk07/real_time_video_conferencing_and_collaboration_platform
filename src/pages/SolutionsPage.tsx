import Navbar from '../components/Navbar';
import { Video, Users, Lock, BarChart3, Globe, Zap } from 'lucide-react';

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Video,
      title: 'Crystal-Clear Video',
      description: 'Experience HD video conferencing with adaptive bitrate streaming for optimal performance on any connection.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in screen sharing, real-time chat, and collaborative tools to keep your team productive and connected.'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, end-to-end protection, and compliance with all major security standards.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track meeting metrics, participant engagement, and generate detailed reports for better insights.'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Reliable performance across 200+ countries with low-latency servers and 99.99% uptime SLA.'
    },
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'No downloads required. Start meeting in seconds with our browser-based platform.'
    }
  ];

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="text-center px-6 py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface">
              Solutions for Every Team
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
              Powerful features designed to transform how teams communicate and collaborate.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={index} className="p-8 rounded-2xl bg-surface-container-lowest border border-outline/10 hover:border-primary/30 transition-all hover:shadow-lg">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-headline font-bold text-on-surface mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="px-6 py-20 bg-surface-container-lowest">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-headline font-bold text-on-surface">Built for Your Industry</h2>
              <p className="text-lg text-on-surface-variant">Trusted by organizations across all sectors</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-surface border border-outline/10">
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">For Enterprises</h3>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Secure, scalable video conferencing with advanced admin controls, SSO integration, and dedicated support for large organizations.
                </p>
                <ul className="space-y-2 text-on-surface-variant">
                  <li>✓ Custom branding</li>
                  <li>✓ Advanced security</li>
                  <li>✓ Dedicated account manager</li>
                </ul>
              </div>
              
              <div className="p-8 rounded-2xl bg-surface border border-outline/10">
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">For Education</h3>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Virtual classrooms, lecture recording, and collaboration tools designed for educators and students.
                </p>
                <ul className="space-y-2 text-on-surface-variant">
                  <li>✓ Lecture recording</li>
                  <li>✓ Student breakout rooms</li>
                  <li>✓ Special edu pricing</li>
                </ul>
              </div>
              
              <div className="p-8 rounded-2xl bg-surface border border-outline/10">
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">For Startups</h3>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Cost-effective communication platform with all the features you need to grow and scale.
                </p>
                <ul className="space-y-2 text-on-surface-variant">
                  <li>✓ Flexible pricing</li>
                  <li>✓ Easy integration</li>
                  <li>✓ Community support</li>
                </ul>
              </div>
              
              <div className="p-8 rounded-2xl bg-surface border border-outline/10">
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">For Healthcare</h3>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  HIPAA-compliant telemedicine and secure patient consultations with enterprise-grade encryption.
                </p>
                <ul className="space-y-2 text-on-surface-variant">
                  <li>✓ HIPAA compliant</li>
                  <li>✓ Secure data handling</li>
                  <li>✓ Compliance verification</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center px-6 py-20">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-headline font-bold text-on-surface">Ready to transform your team?</h2>
            <p className="text-lg text-on-surface-variant">
              Get started with a free 14-day trial. No credit card required.
            </p>
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-lg">
              Start Free Trial
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
