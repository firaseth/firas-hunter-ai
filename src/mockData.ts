
import type { TrendSignal, Opportunity, NewsItem, SentimentMetric } from './types';

export const mockTrends: TrendSignal[] = [
    // General
    {
        id: '1',
        topic: 'Agentic Workflows',
        category: 'Agents',
        industry: 'Enterprise',
        score: 95,
        growth: 45,
        platforms: ['GitHub', 'X', 'arXiv'],
        description: 'Transition from single-prompt chat to multi-step agentic reasoning loops.',
        status: 'trending',
        confidence: 98
    },
    // Finance
    {
        id: 'f1',
        topic: 'Automated Alpha Discovery',
        category: 'Finance',
        industry: 'Finance',
        score: 92,
        growth: 28,
        platforms: ['Bloomberg', 'GitHub', 'X'],
        description: 'LLMs searching datasets for proprietary trading signals and market inefficiencies.',
        status: 'trending',
        confidence: 94
    },
    {
        id: 'f2',
        topic: 'AI Auditor Agents',
        category: 'Security',
        industry: 'Finance',
        score: 84,
        growth: 18,
        platforms: ['Corporate News', 'GitHub'],
        description: 'Real-time compliance monitoring and automated financial statement verification.',
        status: 'emerging',
        confidence: 91
    },
    // Healthcare
    {
        id: 'h1',
        topic: 'Multimodal Diagnostics',
        category: 'Healthcare',
        industry: 'Healthcare',
        score: 89,
        growth: 35,
        platforms: ['Nature Medicine', 'Hugging Face'],
        description: 'Integrating vision and language models for comprehensive patient diagnostic reports.',
        status: 'trending',
        confidence: 96
    },
    {
        id: 'h2',
        topic: 'AI Protein Synthesis',
        category: 'Healthcare',
        industry: 'Healthcare',
        score: 94,
        growth: 52,
        platforms: ['Google DeepMind', 'arXiv'],
        description: 'Accelerated drug discovery through structural biology prediction using Large Scale Bio models.',
        status: 'trending',
        confidence: 99
    },
    // Education
    {
        id: 'e1',
        topic: 'Hyper-Personalized Tutors',
        category: 'Education',
        industry: 'Education',
        score: 78,
        growth: 24,
        platforms: ['YouTube', 'Discord'],
        description: '1-on-1 AI tutors adapting curriculum in real-time to student cognitive load.',
        status: 'emerging',
        confidence: 88
    },
    // Consumer
    {
        id: 'c1',
        topic: 'AI Content Orchestration',
        category: 'Generative AI',
        industry: 'Consumer',
        score: 91,
        growth: 62,
        platforms: ['TikTok', 'YouTube', 'OpenAI'],
        description: 'End-to-end automated video production for short-form entertainment.',
        status: 'trending',
        confidence: 95
    }
];

export const mockOpportunities: Opportunity[] = [
    {
        id: 'o1',
        topicId: '1',
        targetAudience: 'Enterprise DevOps Teams',
        useCases: ['Automated Bug Fixing', 'Cloud Infrastructure Optimization'],
        monetization: ['SaaS Subscription', 'B2B Licensing'],
        potential: 94
    },
    {
        id: 'of1',
        topicId: 'f1',
        targetAudience: 'Hedge Funds & Prop Firms',
        useCases: ['Signal Backtesting', 'Sentiment Analysis Pipeline'],
        monetization: ['Revenue Share', 'Institutional API'],
        potential: 97
    },
    {
        id: 'oh1',
        topicId: 'h2',
        targetAudience: 'BioTech Startups',
        useCases: ['Molecule Simulation', 'Clinical Trial Prediction'],
        monetization: ['R&D Partnerships', 'IP Licensing'],
        potential: 98
    }
];

export const mockNews: NewsItem[] = [
    { id: 'n1', title: 'OpenAI o3-mini models benchmarking', impact: 'High', category: 'Models', summary: 'Leap in reasoning efficiency for edge deployment.', timestamp: '12m ago' },
    { id: 'n2', title: 'NVIDIA hits peak H100 demand', impact: 'Medium', category: 'Hardware', summary: 'Secondary market shows sustained enterprise hunger.', timestamp: '45m ago' },
    { id: 'n3', title: 'DeepSeek-V3 Open-Source explosion', impact: 'High', category: 'Open Source', summary: 'Massive disruption in the cost-to-performance for MoE models.', timestamp: '1h ago' },
    { id: 'n4', title: 'Mistral Large 2 integrations expand in EU', impact: 'Low', category: 'Business', summary: 'New partnerships in the cloud sovereignty sector.', timestamp: '3h ago' },
    { id: 'n5', title: 'Google Gemini 2.0 Pro Early Access', impact: 'High', category: 'Agents', summary: 'Native tool-use capabilities show 40% less latency.', timestamp: '5h ago' }
];

export const mockSentiment: SentimentMetric[] = [
    { topic: 'Agentic RAG', hypeScore: 92, utilityScore: 88, momentum: 'Rising' },
    { topic: 'Zero-Shot Video', hypeScore: 95, utilityScore: 45, momentum: 'Cooling' },
    { topic: 'Small Language Models', hypeScore: 75, utilityScore: 94, momentum: 'Rising' },
    { topic: 'LLM Operating Systems', hypeScore: 88, utilityScore: 68, momentum: 'Rising' },
];
