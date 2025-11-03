import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import {
  Code,
  Database,
  Cloud,
  Laptop,
  Server,
  Zap,
  GitBranch,
  Container
} from 'lucide-react';

const Skills = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Software Engineering',
      icon: <Code className="h-8 w-8 text-secondary" />,
      skills: [
        { name: 'MERN Stack', primary: true },
        { name: 'React.js', primary: false },
        { name: 'Node.js', primary: false },
        { name: 'Express.js', primary: false },
        { name: 'MongoDB', primary: false },
        { name: 'JavaScript', primary: false },
        { name: 'HTML/CSS', primary: false },
        { name: 'Java Programming', primary: false },
      ],
    },
    {
      title: 'Data Engineering',
      icon: <Database className="h-8 w-8 text-secondary" />,
      skills: [
        { name: 'Apache Airflow', primary: true },
        { name: 'Snowflake', primary: false },
        { name: 'Data Pipelines', primary: false },
        { name: 'ETL Processes', primary: false },
        { name: 'Database Design', primary: false },
        { name: 'SQL', primary: false },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="h-8 w-8 text-secondary" />,
      skills: [
        { name: 'Cloud Computing', primary: true },
        { name: 'DevOps Engineering', primary: false },
        { name: 'CI/CD Pipelines', primary: false },
        { name: 'Docker', primary: false },
        { name: 'Git & GitHub', primary: false },
        { name: 'Linux', primary: false },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 w-full min-h-screen bg-skills">
      <div className="w-full max-w-none px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="opacity-0 transform translate-y-8 transition-all duration-700 hover:shadow-xl hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <CardTitle className="text-xl text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant={skill.primary ? 'default' : 'secondary'}
                      className={`transition-all duration-300 hover:scale-105 ${
                        skill.primary
                          ? 'bg-secondary hover:bg-secondary/90 text-white'
                          : 'hover:bg-secondary/20'
                      }`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow">
              <GitBranch className="h-5 w-5 text-secondary" />
              <span>Git</span>
            </div>
            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow">
              <Container className="h-5 w-5 text-secondary" />
              <span>Docker</span>
            </div>
            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow">
              <Server className="h-5 w-5 text-secondary" />
              <span>AWS</span>
            </div>
            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow">
              <Zap className="h-5 w-5 text-secondary" />
              <span>REST APIs</span>
            </div>
            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow">
              <Laptop className="h-5 w-5 text-secondary" />
              <span>Agile/Scrum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
