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
      <div className="w-full max-w-[80%] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and collaborations. Whether you have a project
                in mind, want to discuss technology, or just want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const card = (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full bg-gray-100 ${info.color}`}>{info.icon}</div>
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
                    >
                      {card}
                    </a>
                  );
                }

                return card;
              })}
            </div>
          </div>

        
          <div />
        </div>
      </div>
    </section>
  );
};

export default Contact;

