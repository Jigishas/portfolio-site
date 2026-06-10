import React from 'react';
import { Card, CardContent } from './ui/card';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  MessageCircle,
} from 'lucide-react';
import { generateWhatsAppURL } from '../utils/whatsapp';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '+254 743 121 169',
      color: 'text-green-600',
      link: 'tel:+254743121169',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'josephgachuru336@gmail.com',
      color: 'text-blue-600',
      link: 'mailto:josephgachuru336@gmail.com',
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: 'GitHub',
      content: 'github.com/Jigishas',
      color: 'text-gray-800',
      link: 'https://github.com/Jigishas',
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'WhatsApp',
      content: '+254 743 121 169',
      color: 'text-green-500',
      link: generateWhatsAppURL('+254743121169'),
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      content: 'Kirinyaga University, Kenya',
      color: 'text-red-600',
    },
  ];

  return (
    <section id="contact" className="py-20 w-full min-h-screen bg-contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            I’m open to new opportunities, collaborations, and freelance work. Reach out and let’s build something great.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Let’s Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss technology, or simply want to say hello—feel free to contact me.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const card = (
                  <Card className="glass glass-glow hover:-translate-y-0.5 transition-all duration-300 border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 ${info.color}`}>
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">{info.title}</h4>
                          <p className="text-muted-foreground">{info.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );

                if (info.link) {
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
                    >
                      {card}
                    </a>
                  );
                }

                return (
                  <div key={index} className="rounded-xl">
                    {card}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="glass p-6 rounded-2xl border-border/50 h-full">
              <h4 className="text-lg font-semibold text-primary mb-3">Quick Note</h4>
              <p className="text-muted-foreground leading-relaxed">
                Prefer WhatsApp? Use the WhatsApp card on the left. For emails, I respond quickly during weekdays.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-flex w-2.5 h-2.5 rounded-full bg-secondary" />
                  Response time: within 24–48 hours
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-flex w-2.5 h-2.5 rounded-full bg-accent" />
                  Areas: Full-stack, Data Engineering, AI/Automation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

