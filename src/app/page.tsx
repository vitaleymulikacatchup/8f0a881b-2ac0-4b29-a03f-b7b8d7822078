"use client"

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from '@/providers/themeProvider/ThemeProvider';
import { BarChart3, CheckSquare, DollarSign, MessageSquare, Puzzle, Rocket, Shield, Sparkles, Star, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="medium"
      background="plain"
      cardStyle="glass-flat"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="FlowTask"
          button={{
            text: "Get Started",
            href: "https://flowtask.com/signup"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Streamline Your Team's Productivity"
          description="Transform how your team works with our all-in-one productivity platform. Manage tasks, collaborate seamlessly, and achieve more together."
          tag="Productivity Platform"
          tagIcon={Zap}
          buttons={[
            {
              text: "Start Free Trial",
              href: "https://flowtask.com/trial"
            },
            {
              text: "Watch Demo",
              href: "demo"
            }
          ]}
          imageSrc="https://pixabay.com/get/g3e3633b5e60e0ac4dcecdd88309176fbe64c8f1b034f5b267f471f5e24f29428f430c7ac8f78f0b22db0163e85c9b48f40d4da80077a4aea98f7c930ab73d990_1280.jpg"
          imageAlt="FlowTask productivity dashboard"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Built for Modern Teams"
          description={[
            "We understand the challenges of remote work and distributed teams. That's why we've created a platform that brings clarity to chaos.",
            "From startups to enterprises, FlowTask adapts to your workflow and scales with your growth."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Everything You Need to Stay Productive"
          description="Powerful features designed to help your team work smarter, not harder"
          tag="Features"
          tagIcon={Star}
          features={[
            {
              title: "Smart Task Management",
              description: "Organize, prioritize, and track tasks with intelligent automation that learns from your team's patterns.",
              icon: CheckSquare,
              button: {
                text: "Explore Tasks",
                href: "features/tasks"
              }
            },
            {
              title: "Real-time Collaboration",
              description: "Work together seamlessly with live updates, comments, and shared workspaces that keep everyone aligned.",
              icon: Users,
              button: {
                text: "See Collaboration",
                href: "features/collaboration"
              }
            },
            {
              title: "Advanced Analytics",
              description: "Get insights into team performance, project progress, and productivity trends with detailed reporting.",
              icon: BarChart3,
              button: {
                text: "View Analytics",
                href: "features/analytics"
              }
            },
            {
              title: "Seamless Integrations",
              description: "Connect with 50+ tools your team already uses, from Slack to Google Workspace and beyond.",
              icon: Puzzle,
              button: {
                text: "Browse Integrations",
                href: "features/integrations"
              }
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your team size and needs"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              badge: "Perfect for Small Teams",
              badgeIcon: Sparkles,
              price: "$9/user/month",
              subtitle: "Everything you need to get started",
              features: [
                "Up to 10 team members",
                "Unlimited tasks and projects",
                "Basic reporting",
                "Email support",
                "Mobile apps"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$19/user/month",
              subtitle: "Advanced features for growing teams",
              features: [
                "Unlimited team members",
                "Advanced analytics",
                "Custom workflows",
                "Priority support",
                "API access",
                "Advanced integrations"
              ]
            },
            {
              id: "enterprise",
              badge: "Best for Large Organizations",
              badgeIcon: Shield,
              price: "Custom pricing",
              subtitle: "Enterprise-grade security and support",
              features: [
                "Everything in Professional",
                "SSO and advanced security",
                "Dedicated account manager",
                "Custom training",
                "99.9% uptime SLA"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Trusted by Teams Worldwide"
          description="See what our customers are saying about FlowTask"
          tag="Testimonials"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Product Manager at TechStart",
              testimonial: "FlowTask transformed how our distributed team collaborates. We've increased our productivity by 40% since switching from our old project management tool.",
              imageSrc: "https://pixabay.com/get/ge057bf9021ef21f7c263baeab6fa59b4c677816cf88980d034ae4f112ba749c128e35206038695452a6affbb471b3902197cc3f095e084e481eb706da2758590_1280.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Engineering Lead at DataFlow",
              testimonial: "The analytics features are incredible. We can finally see where bottlenecks occur and optimize our workflow accordingly. Game-changer for our team.",
              imageSrc: "https://pixabay.com/get/g6441bf7bf902ca644c61a1ddb741eeda7966981576866d4d8f7cac682fd8257ff91243243df2048a1db016b23657a2a28273fc53636418fff77d6f59cc7a62da_1280.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "CEO at GrowthCorp",
              testimonial: "As our company scaled from 20 to 200 employees, FlowTask scaled with us. The enterprise features and support are top-notch.",
              imageSrc: "https://pixabay.com/get/gb00cd51ff0cb96e69858d959387fb22d18a48ade177f37d01a7310348cb6ac395650e26b25ce598f9c6241b9ba0cd742a98d044501dd5c5051b5d6c1735dd253_1280.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Operations Director at InnovateNow",
              testimonial: "The integrations with our existing tools made the transition seamless. Our team was up and running in just a few hours.",
              imageSrc: "https://pixabay.com/get/g7660e6896919403c5ed0570d1bffad5708ed776b5148f9dc52da5570713c80cbc0ec99e6461181cd853e6144cad92209de62668ef3591b95341fd105b943483a_1280.jpg",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about FlowTask"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "How quickly can we get started?",
              content: "You can start using FlowTask immediately after signing up. Our onboarding process takes less than 5 minutes, and we provide step-by-step guidance to help your team get productive right away."
            },
            {
              id: "2",
              title: "Can we migrate our existing data?",
              content: "Yes! We support data migration from popular tools like Asana, Trello, Monday.com, and others. Our support team will help you migrate your projects, tasks, and team data seamlessly."
            },
            {
              id: "3",
              title: "What security measures do you have?",
              content: "FlowTask employs enterprise-grade security including SOC 2 Type II compliance, end-to-end encryption, SSO support, and regular security audits. Your data is hosted on secure, GDPR-compliant servers."
            },
            {
              id: "4",
              title: "Do you offer a free trial?",
              content: "Yes! We offer a 14-day free trial with full access to all Professional features. No credit card required. You can invite your entire team to try FlowTask risk-free."
            },
            {
              id: "5",
              title: "How does billing work?",
              content: "Billing is monthly or annual per active user. You can add or remove users anytime, and we'll prorate the charges. Annual plans save 20% compared to monthly billing."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Rocket}
          title="Ready to Transform Your Team's Productivity?"
          description="Join thousands of teams already using FlowTask to work smarter and achieve more together."
          inputPlaceholder="Enter your work email"
          buttonText="Start Free Trial"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. No credit card required."
          imageSrc="https://pixabay.com/get/g554dbe6aa137d00cf4dfa3bc9b8ee9380ca58fcff5c8533266da8f90cf8f5c65a9952e7e103fcf1a8d452f80258360cdaba16db36b679ea549832ef2e93e2ed8_1280.jpg"
          imageAlt="Productive workspace"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="FlowTask"
          copyrightText="© 2025 FlowTask. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Features",
                  href: "features"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Integrations",
                  href: "integrations"
                },
                {
                  label: "API",
                  href: "api"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "careers"
                },
                {
                  label: "Blog",
                  href: "blog"
                },
                {
                  label: "Press",
                  href: "press"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Help Center",
                  href: "help"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Status",
                  href: "https://status.flowtask.com"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}