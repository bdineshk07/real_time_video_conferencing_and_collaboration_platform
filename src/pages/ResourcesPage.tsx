import Navbar from '../components/Navbar';
import { BookOpen, Users, VideoIcon, HelpCircle, FileText, Zap } from 'lucide-react';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      items: [
        'Getting Started Guide',
        'API Reference',
        'SDK Downloads',
        'Integration Guides',
        'Best Practices'
      ]
    },
    {
      icon: VideoIcon,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for every feature',
      items: [
        'Setting Up Your First Meeting',
        'Screen Sharing Guide',
        'Recording & Playback',
        'Advanced Features',
        'Troubleshooting Tips'
      ]
    },
    {
      icon: FileText,
      title: 'Blog & Articles',
      description: 'Latest updates, tips, and industry insights',
      items: [
        'Product Updates',
        'Remote Work Tips',
        'Security Best Practices',
        'Case Studies',
        'Industry News'
      ]
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with other users and get support',
      items: [
        'Community Forum',
        'User Groups',
        'Events & Webinars',
        'Feature Requests',
        'Bug Reports'
      ]
    },
    {
      icon: HelpCircle,
      title: 'Support Center',
      description: 'Get help from our support team',
      items: [
        '24/7 Chat Support',
        'Email Support',
        'Status Page',
        'Incident Reports',
        'FAQ'
      ]
    },
    {
      icon: Zap,
      title: 'Developer Tools',
      description: 'Tools and resources for developers',
      items: [
        'Webhook Documentation',
        'Code Samples',
        'SDKs & Libraries',
        'Testing Sandbox',
        'Developer Dashboard'
      ]
    }
  ];

  const recentBlogPosts = [
    {
      title: 'Remote Work Revolution: 5 Tips for Effective Virtual Meetings',
      excerpt: 'Discover best practices for productive virtual meetings in 2026',
      date: 'March 28, 2026',
      category: 'Remote Work'
    },
    {
      title: 'Security First: How We Protect Your Data',
      excerpt: 'Learn about our enterprise-grade security infrastructure',
      date: 'March 25, 2026',
      category: 'Security'
    },
    {
      title: 'Introducing AI-Powered Meeting Summaries',
      excerpt: 'Automatically generate meeting summaries with our new AI feature',
      date: 'March 20, 2026',
      category: 'Product'
    },
    {
      title: 'Case Study: How TechCorp SHR Increased Productivity by 40%',
      excerpt: 'See how one company transformed their collaboration workflow',
      date: 'March 15, 2026',
      category: 'Case Study'
    }
  ];

  const faqItems = [
    {
      question: 'How do I get started with the API?',
      answer: 'Visit our API Documentation page to get your API key, review endpoint references, and check out our code samples in multiple languages.'
    },
    {
      question: 'What SDKs are available?',
      answer: 'We provide official SDKs for JavaScript/TypeScript, Python, Go, Java, and C#. Community-maintained SDKs are also available.'
    },
    {
      question: 'Where can I report a bug?',
      answer: 'You can report bugs through our community forum or directly via email to support@thefluidexchange.com with reproduction steps.'
    },
    {
      question: 'How often is the platform updated?',
      answer: 'We release new features and updates regularly. Check our blog and status page for the latest announcements.'
    },
    {
      question: 'Is there a sandbox environment for testing?',
      answer: 'Yes, all Enterprise customers have access to our testing sandbox. Contact support for sandbox credentials.'
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
              Resources & Support
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
              Everything you need to succeed with our platform
            </p>
          </div>
        </section>

        {/* Resource Categories Grid */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="p-8 rounded-2xl bg-surface-container-lowest border border-outline/10 hover:border-primary/30 transition-all hover:shadow-lg group cursor-pointer">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                      {category.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm mb-6">
                      {category.description}
                    </p>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="text-on-surface-variant text-sm hover:text-primary transition-colors cursor-pointer">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Recent Blog Posts */}
        <section className="px-6 py-20 bg-surface-container-lowest">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-headline font-bold text-on-surface">Latest from Our Blog</h2>
              <p className="text-lg text-on-surface-variant">Stay updated with the latest news and insights</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {recentBlogPosts.map((post, index) => (
                <article key={index} className="p-8 rounded-2xl bg-surface border border-outline/10 hover:border-primary/30 transition-all hover:shadow-lg group cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-on-surface-variant text-sm">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {post.excerpt}
                  </p>
                </article>
              ))}
            </div>
            
            <div className="text-center">
              <button className="text-primary font-semibold hover:underline">
                View all blog posts →
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-headline font-bold text-on-surface">Frequently Asked Questions</h2>
              <p className="text-lg text-on-surface-variant">Quick answers to common questions</p>
            </div>
            
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details key={index} className="group p-6 rounded-xl bg-surface-container-lowest border border-outline/10 cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold text-on-surface hover:text-primary transition-colors">
                    {item.question}
                    <span className="inline-block transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-on-surface-variant leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-6 py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-headline font-bold text-on-surface">Still have questions?</h2>
              <p className="text-lg text-on-surface-variant">
                Our support team is here to help. Reach out anytime.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-surface border border-outline/10">
                <h3 className="font-semibold text-on-surface mb-2">Live Chat</h3>
                <p className="text-on-surface-variant text-sm mb-4">Available 24/7</p>
                <button className="text-primary font-semibold hover:underline">Start Chat</button>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-outline/10">
                <h3 className="font-semibold text-on-surface mb-2">Email Support</h3>
                <p className="text-on-surface-variant text-sm mb-4">Response within 24 hours</p>
                <a href="mailto:support@thefluidexchange.com" className="text-primary font-semibold hover:underline">support@thefluidexchange.com</a>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-outline/10">
                <h3 className="font-semibold text-on-surface mb-2">Community Forum</h3>
                <p className="text-on-surface-variant text-sm mb-4">Connect with other users</p>
                <button className="text-primary font-semibold hover:underline">Visit Forum</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
