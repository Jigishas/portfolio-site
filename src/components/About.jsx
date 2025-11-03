import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 w-full min-h-screen bg-about">
      <div className="w-full max-w-none px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={textRef} className="space-y-6 opacity-0 transform translate-x-[-50px] transition-all duration-1000">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              Passionate Software Engineer & Tech Enthusiast
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm Joseph Gachuru, a dedicated Software Engineering student at Kirinyaga University with a strong passion for technology and software development. I specialize in creating efficient, scalable solutions across multiple domains.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans{' '}
              <Badge variant="secondary" className="mx-1">Software Engineering</Badge>,{' '}
              <Badge variant="secondary" className="mx-1">Data Engineering</Badge>, and{' '}
              <Badge variant="secondary" className="mx-1">Backend Development</Badge>{' '}
              with proficiency in the MERN stack, cloud computing, Java programming, and DevOps practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm constantly learning and exploring new technologies to enhance my skills and contribute to innovative projects that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Badge variant="outline">MERN Stack</Badge>
              <Badge variant="outline">Java</Badge>
              <Badge variant="outline">Python</Badge>
              <Badge variant="outline">Apache Airflow</Badge>
              <Badge variant="outline">Snowflake</Badge>
              <Badge variant="outline">Docker</Badge>
              <Badge variant="outline">AWS</Badge>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div ref={imageRef} className="opacity-0 transform translate-x-[50px] transition-all duration-1000">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-secondary to-primary p-8 text-center text-white">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold mb-2">JG</div>
                      <div className="text-lg opacity-90">Joseph Gachuru</div>
                      <div className="text-sm opacity-75">Software Engineer</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold">2+</div>
                      <div className="text-sm opacity-90">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">10+</div>
                      <div className="text-sm opacity-90">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">5+</div>
                      <div className="text-sm opacity-90">Technologies</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
