import Navbar from '../components/Navbar';
import { Play, Shield, Zap, Users, Smartphone, Settings } from 'lucide-react';

export default function ProductPage() {
  const features = [
    {
      icon: Play,
      title: 'Crystal-Clear Video',
      description: 'Industry-leading video quality with adaptive bitrate technology. Experience HD/4K video on any connection.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'End-to-end encryption, HIPAA compliant, and SOC 2 Type II certified. Your data is always protected.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-100ms latency with global edge servers. Connect with anyone, anywhere, instantly.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Screen sharing, virtual whiteboard, chat, and breakout rooms for seamless teamwork.'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'Works on desktop, tablet, and mobile. Native apps for iOS and Android, plus web access.'
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Webhooks, APIs, and SDKs to integrate with your existing tools and workflows.'
    }
  ];

  const capabilities = [
    {
      title: 'Meeting Management',
      features: [
        'Host unlimited meetings',
        'Schedule & recurring meetings',
        'Waiting room & admission control',
        'Meeting templates',
        'Virtual backgrounds',
        'Layout customization'
      ]
    },
    {
      title: 'Collaboration Tools',
      features: [
        'Screen & application sharing',
        'Collaborative whiteboard',
        'In-meeting chat & messaging',
        'Polls & surveys',
        'Q&A for presentations',
        'Annotation tools'
      ]
    },
    {
      title: 'Recording & Transcription',
      features: [
        'Cloud & local recording',
        'Auto-generated transcripts',
        'Meeting replays & highlights',
        'Searchable recordings',
        'Time-coded notes',
        'Multiple export formats'
      ]
    },
    {
      title: 'Analytics & Insights',
      features: [
        'Real-time analytics',
        'Participant engagement metrics',
        'Network quality monitoring',
        'Custom reporting',
        'Usage statistics',
        'Compliance reports'
      ]
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
              The Modern Video Platform
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
              Everything you need for seamless communication and collaboration, all in one powerful platform.
            </p>
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-lg">
              Take a Tour
            </button>
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-container/20 flex items-center justify-center border-2 border-primary/20">
                <button className="bg-white text-primary p-6 rounded-full hover:scale-110 transition-transform shadow-lg">
                  <Play size={32} fill="currentColor" />
                </button>
              </div>
            </div>
            <p className="text-center text-on-surface-variant mt-6">Watch a 2-minute product tour to see what's possible</p>
          </div>
        </section>

        {/* Core Features */}
        <section className="px-6 py-20 bg-surface-container-lowest">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-headline font-bold text-on-surface">Core Features</h2>
              <p className="text-lg text-on-surface-variant">Everything built for modern teams</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="p-8 rounded-2xl bg-surface border border-outline/10 hover:border-primary/30 transition-all hover:shadow-lg">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-headline font-bold text-on-surface mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Capabilities */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-headline font-bold text-on-surface">Powerful Capabilities</h2>
              <p className="text-lg text-on-surface-variant">Comprehensive toolset for every use case</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="p-8 rounded-2xl bg-surface-container-lowest border border-outline/10">
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-6">
                    {capability.title}
                  </h3>
                  <ul className="space-y-4">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-on-surface-variant">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="px-6 py-20 bg-surface-container-lowest">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-headline font-bold text-on-surface">Seamless Integration</h2>
              <p className="text-lg text-on-surface-variant">Connect with your favorite tools and platforms</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-surface border border-outline/10 text-center">
                <h3 className="text-xl font-semibold text-on-surface mb-3">Calendar Integration</h3>
                <p className="text-on-surface-variant mb-6">
                  Sync with Google Calendar, Outlook, and iCal for automatic meeting scheduling.
                </p>
                <p className="text-sm text-primary font-semibold">Google • Microsoft • Apple</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-surface border border-outline/10 text-center">
                <h3 className="text-xl font-semibold text-on-surface mb-3">Messaging Platforms</h3>
                <p className="text-on-surface-variant mb-6">
                  Integrate with Slack, Teams, and Discord for meeting invites and notifications.
                </p>
                <p className="text-sm text-primary font-semibold">Slack • Teams • Discord</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-surface border border-outline/10 text-center">
                <h3 className="text-xl font-semibold text-on-surface mb-3">Business Tools</h3>
                <p className="text-on-surface-variant mb-6">
                  Connect with CRM, HRM, and project management tools via our API.
                </p>
                <p className="text-sm text-primary font-semibold">Salesforce • Notion • Zapier</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Stories */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-headline font-bold text-on-surface">Trusted by Leading Teams</h2>
              <p className="text-lg text-on-surface-variant">See what organizations are achieving</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline/10 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-on-surface">TechCorp Inc.</h4>
                    <p className="text-sm text-on-surface-variant">5,000+ employees</p>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  "We increased productivity by 40% after switching to The Fluid Exchange. The ease of use is unmatched."
                </p>
                <p className="text-sm text-primary font-semibold">→ Read full case study</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline/10 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-on-surface">Global University</h4>
                    <p className="text-sm text-on-surface-variant">15,000+ students</p>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  "Perfect for hybrid learning. Students love the interactive features and teachers appreciate the recording capabilities."
                </p>
                <p className="text-sm text-primary font-semibold">→ Read full case study</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline/10 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-on-surface">HealthCare Solutions</h4>
                    <p className="text-sm text-on-surface-variant">500+ clinics</p>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  "HIPAA compliance and security features give us peace of mind. Our patients love the ease of telemedicine."
                </p>
                <p className="text-sm text-primary font-semibold">→ Read full case study</p>
              </div>
              
              <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline/10 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-on-surface">StartUp Ventures</h4>
                    <p className="text-sm text-on-surface-variant">50 team members</p>
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  "Affordable, reliable, and scales with us. Couldn't ask for a better solution for our remote team."
                </p>
                <p className="text-sm text-primary font-semibold">→ Read full case study</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="px-6 py-20 bg-surface-container-lowest">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-headline font-bold text-on-surface">Security & Compliance</h2>
              <p className="text-lg text-on-surface-variant">Enterprise-grade protection for your data</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-surface border border-outline/10">
                <h3 className="text-xl font-semibold text-on-surface mb-4">Certifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="text-primary font-bold">✓</span>
                    SOC 2 Type II
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="text-primary font-bold">✓</span>
                    HIPAA Compliant
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="text-primary font-bold">✓</span>
                    GDPR & CCPA Compliant
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="text-primary font-bold">✓</span>
                    ISO 27001 Certified
                  </li>
                </ul>
              </div>
              
              <div className="p-8 rounded-2xl bg-surface border border-outline/10">
                <h3 className="text-xl font-semibold text-on-surface mb-4">Security Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="text-primary font-bold">✓</span>
                    End-to-End Encryption
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="text-primary font-bold">✓</span>
                    Multi-Factor Authentication
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="text-primary font-bold">✓</span>
                    Role-Based Access Control
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant">
                    <span className="text-primary font-bold">✓</span>
                    Regular Security Audits
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center px-6 py-20">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-headline font-bold text-on-surface">
              Experience the difference today
            </h2>
            <p className="text-lg text-on-surface-variant">
              Join thousands of teams and organizations already using The Fluid Exchange.
            </p>
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-lg">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
