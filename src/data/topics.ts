export interface Topic {
  slug: string;
  name: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  articleSlugs: string[];
}

export const topics: Topic[] = [
  {
    slug: 'bias',
    name: 'Bias and Discrimination',
    description: 'How data bias, model bias, and human bias interact to produce skewed or discriminatory AI outputs, from predictive policing to image generation.',
    level: 'beginner',
    articleSlugs: [
      'teaching-ai-ethics-bias-2023',
      'teaching-ai-ethics-2025-bias',
    ],
  },
  {
    slug: 'environment',
    name: 'Environment',
    description: 'The environmental costs of AI as an extractive technology: energy consumption, carbon emissions, mining, and the hidden costs of the cloud.',
    level: 'beginner',
    articleSlugs: [
      'teaching-ai-ethics-environment-2023',
      'teaching-ai-ethics-2025-environment',
    ],
  },
  {
    slug: 'truth',
    name: 'Truth and Academic Integrity',
    description: 'AI hallucinations, misinformation, deepfakes, and the challenge of maintaining truth and academic integrity in an age of synthetic media.',
    level: 'beginner',
    articleSlugs: [
      'teaching-ai-ethics-truth-and-academic-integrity',
      'teaching-ai-ethics-2025-truth',
    ],
  },
  {
    slug: 'copyright',
    name: 'Copyright',
    description: 'Complex legal and ethical questions about AI training data, creative ownership, and intellectual property across visual art, music, and text.',
    level: 'intermediate',
    articleSlugs: [
      'teaching-ai-ethics-copyright-2023',
      'teaching-ai-ethics-copyright-2025',
    ],
  },
  {
    slug: 'privacy',
    name: 'Privacy',
    description: 'Data collection, surveillance, the illusion of privacy in AI chatbots, and the erosion of personal privacy through ambient AI and cross-border data flows.',
    level: 'intermediate',
    articleSlugs: [
      'teaching-ai-ethics-privacy-2023',
      'teaching-ai-ethics-privacy-2025',
    ],
  },
  {
    slug: 'data',
    name: 'Data',
    description: 'How all aspects of our lives are being turned into data points to fuel AI, from educational apps to ChatGPT conversations, and the scale of data collection in the GenAI era.',
    level: 'intermediate',
    articleSlugs: [
      'teaching-ai-ethics-datafication',
      'teaching-ai-ethics-data-2025',
    ],
  },
  {
    slug: 'emotions',
    name: 'Emotions and Social Chatbots',
    description: 'From the contested science of AI affect recognition to the deliberate design of AI systems that manipulate human emotions: social chatbots, emotional dependency, and the risks to young people.',
    level: 'advanced',
    articleSlugs: [
      'teaching-ai-ethics-affect-recognition',
      'teaching-ai-ethics-2026-emotions',
    ],
  },
  {
    slug: 'human-labour',
    name: 'Human Labour',
    description: 'The hidden workforce behind AI: ghost work, content moderation trauma, data labelling exploitation, and the growing worker organising movement.',
    level: 'advanced',
    articleSlugs: [
      'teaching-ai-ethics-human-labour-2023',
      'teaching-ai-ethics-2026-human-labour',
    ],
  },
  {
    slug: 'power',
    name: 'Power and Hegemony',
    description: 'How AI reinforces existing power structures, concentrates wealth, and perpetuates hegemonic worldviews through biased data and corporate control.',
    level: 'advanced',
    articleSlugs: [
      'teaching-ai-ethics-power',
    ],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find(t => t.slug === slug);
}

export function getTopicsByLevel(level: Topic['level']): Topic[] {
  return topics.filter(t => t.level === level);
}
