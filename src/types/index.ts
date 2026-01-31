
export interface TrendSignal {
    id: string;
    topic: string;
    category: 'Agents' | 'Generative AI' | 'Business' | 'Education' | 'Healthcare' | 'DevOps' | 'Security' | 'Finance' | 'Productivity';
    industry: 'General' | 'Finance' | 'Healthcare' | 'Education' | 'Consumer' | 'Enterprise';
    score: number;
    growth: number;
    platforms: string[];
    description: string;
    status: 'trending' | 'emerging' | 'saturated' | 'stable';
    confidence: number;
}

export interface Opportunity {
    id: string;
    topicId: string;
    targetAudience: string;
    useCases: string[];
    monetization: string[];
    potential: number;
}

export interface AgentStatus {
    id: string;
    name: string;
    status: 'idle' | 'processing' | 'shaping' | 'validating' | 'complete';
    progress: number;
    lastUpdate: string;
}

export interface IntelligenceReport {
    id: string;
    timestamp: string;
    topTrends: TrendSignal[];
    emergingTrends: TrendSignal[];
    opportunities: Opportunity[];
    decliningTopics: string[];
    recommendations: {
        invest: string[];
        monitor: string[];
        avoid: string[];
    };
}
