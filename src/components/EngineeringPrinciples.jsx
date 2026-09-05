import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Gauge, Workflow, ShieldCheck, Activity, Lightbulb, Sparkles } from 'lucide-react';

const principles = [
  {
    number: '01',
    title: 'Performance first',
    description: 'I profile API and database bottlenecks before optimizing. Caching, indexing and lean requests come after I can measure the problem.',
    icon: <Gauge className="h-6 w-6" />,
  },
  {
    number: '02',
    title: 'API-driven architecture',
    description: 'I design reusable backend services that can support multiple clients — web, mobile or integrations — behind one consistent API.',
    icon: <Workflow className="h-6 w-6" />,
  },
  {
    number: '03',
    title: 'Security by default',
    description: 'Authentication, authorization, validation and least-privilege access are considered from the beginning, not bolted on later.',
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    number: '04',
    title: 'Observable systems',
    description: 'Logging, monitoring and structured error handling let me diagnose production issues instead of guessing.',
    icon: <Activity className="h-6 w-6" />,
  },
  {
    number: '05',
    title: 'Product thinking',
    description: 'I look past the ticket and focus on the underlying business problem — the why behind every feature.',
    icon: <Lightbulb className="h-6 w-6" />,
  },
];

const EngineeringPrinciples = () => (
  <motion.section
    id="engineering"
    className="py-20 w-full bg-skills"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wider text-secondary uppercase bg-secondary/10 rounded-full">
          How I Engineer
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Engineering Principles
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
          The way I approach systems — not just frameworks.
        </p>
        <div className="w-28 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.number}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <Card className="h-full card-refined hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl font-bold text-primary/10 group-hover:text-primary/25 transition-colors">
                    {principle.number}
                  </span>
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                    {principle.icon}
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-primary mb-1.5">{principle.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{principle.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Product Engineering callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Card className="h-full border-primary/15 bg-gradient-to-br from-primary/8 to-secondary/8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <CardContent className="p-4 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-primary">Product Engineering</h3>
              </div>
              <p className="text-xs text-foreground/70 leading-relaxed">
                I enjoy working across the full product lifecycle — from identifying a business problem and designing workflows
                to implementing backend architecture, building interfaces and deploying the final system.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default EngineeringPrinciples;