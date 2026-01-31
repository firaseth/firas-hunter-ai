
import type { AgentStatus } from '../types';

export const agentWorkflow = [
    {
        id: 'a1',
        name: 'Data Collection',
        duration: 4000,
        logs: [
            'Initializing signal scrapers...',
            'Crawling GitHub Trending for "AI"...',
            'Scraping Hugging Face Daily Models...',
            'Fetching Google Trends (AI queries)...',
            'Analyzing Reddit /r/MachineLearning signals...',
            'Checking Product Hunt AI launches...'
        ]
    },
    {
        id: 'a2',
        name: 'Trend Analysis',
        duration: 5000,
        logs: [
            'Normalizing raw signal data...',
            'Calculating WoW growth velocity...',
            'Detecting cross-platform clusters...',
            'Identifying emerging keyword patterns...',
            'Filtering high-noise signals...'
        ]
    },
    {
        id: 'a3',
        name: 'Scoring & Ranking',
        duration: 4000,
        logs: [
            'Applying weighted scoring matrix...',
            'Evaluating commercial potential...',
            'Assessing technical longevity...',
            'Cross-validating with historical data...',
            'Generating final topic ranks...'
        ]
    },
    {
        id: 'a4',
        name: 'Opportunity Intelligence',
        duration: 6000,
        logs: [
            'Mapping trends to market gaps...',
            'Identifying target demographics...',
            'Synthesizing business use cases...',
            'Formulating monetization strategies...',
            'Calculating Implementation Difficulty (ID)...'
        ]
    },
    {
        id: 'a5',
        name: 'Quality & Validation',
        duration: 3000,
        logs: [
            'Running hallucination check...',
            'Verifying data consistency...',
            'Checking source credibility scores...',
            'Final report formatting...',
            'Intelligence report signed and ready.'
        ]
    },
];

export const simulateAgentProcess = (callback: (agents: AgentStatus[], currentLog?: string) => void) => {
    let currentAgents: AgentStatus[] = agentWorkflow.map(a => ({
        id: a.id,
        name: a.name,
        status: 'idle',
        progress: 0,
        lastUpdate: '-'
    }));

    let currentStep = 0;

    const processNextStep = () => {
        if (currentStep >= agentWorkflow.length) return;

        const agentDef = agentWorkflow[currentStep];
        const startTime = Date.now();

        currentAgents = currentAgents.map((a, i) =>
            i === currentStep ? { ...a, status: 'processing', lastUpdate: 'Just now' } : a
        );
        callback([...currentAgents], agentDef.logs[0]);

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(Math.round((elapsed / agentDef.duration) * 100), 100);

            // Select log based on progress
            const logIndex = Math.min(Math.floor((progress / 100) * agentDef.logs.length), agentDef.logs.length - 1);
            const currentLog = agentDef.logs[logIndex];

            currentAgents = currentAgents.map((a, i) =>
                i === currentStep ? {
                    ...a,
                    progress,
                    status: progress === 100 ? 'complete' : 'processing',
                    lastUpdate: progress === 100 ? 'Just now' : a.lastUpdate
                } : a
            );

            callback([...currentAgents], currentLog);

            if (progress === 100) {
                clearInterval(interval);
                currentStep++;
                setTimeout(processNextStep, 800);
            }
        }, 150);
    };

    processNextStep();
};
