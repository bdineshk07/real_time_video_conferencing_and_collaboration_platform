import Navbar from '../components/Navbar';
import { CheckCircle2 } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 100 participants',
        '45-minute meeting limit',
        'Basic screen sharing',
        'Chat & messaging',
        'Mobile app access',
        'Community support'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$12.99',
      period: '/month',
      description: 'Ideal for growing teams and small businesses',
      features: [
        'Up to 500 participants',
        'Unlimited meeting duration',
        'Advanced screen sharing',
        'Chat & messaging',
        'Recording & playback',
        'Mobile app access',
        'Priority support',
        'Custom branding',
        'Integration APIs'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact sales',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited participants',
        'Unlimited meeting duration',
        'All Professional features',
        'SSO & advanced security',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee (99.99%)',
        'Advanced analytics',
        'Compliance & certifications'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! Professional and Enterprise plans come with a 14-day free trial. No credit card required.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.'
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, get 20% off when you choose annual billing on any plan.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees or hidden charges. Only pay for what you use.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you before you hit limits. You can upgrade immediately, or we\'ll automatically restrict new meetings.'
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
              Choose the perfect plan for your team. Scale as you grow.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-b from-primary/10 to-primary/5 border-2 border-primary shadow-2xl transform md:scale-105'
                      : 'bg-surface-container-lowest border border-outline/10'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-on-surface-variant text-sm">
                        {plan.description}
                      </p>
                    </div>

                    <div>
                      <div className="text-4xl font-bold text-on-surface">
                        {plan.price}
                      </div>
                      <div className="text-on-surface-variant text-sm">
                        {plan.period}
                      </div>
                    </div>

                    <button
                      className={`w-full py-3 rounded-full font-semibold transition-all ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-primary to-primary-container text-on-primary hover:shadow-lg'
                          : 'bg-surface-container text-primary hover:bg-surface-container-highest border border-outline/20'
                      }`}
                    >
                      {plan.cta}
                    </button>

                    <div className="space-y-4 pt-4 border-t border-outline/10">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-on-surface-variant">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-20 bg-surface-container-lowest">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-headline font-bold text-on-surface">Frequently Asked Questions</h2>
              <p className="text-lg text-on-surface-variant">Everything you need to know about our pricing</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group p-6 rounded-xl bg-surface border border-outline/10 cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold text-on-surface hover:text-primary transition-colors">
                    {faq.question}
                    <span className="inline-block transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-4 text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center px-6 py-20">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-headline font-bold text-on-surface">Ready to get started?</h2>
            <p className="text-lg text-on-surface-variant">
              Join thousands of teams already using our platform.
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
