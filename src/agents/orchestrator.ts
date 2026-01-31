
import type { AgentStatus } from '../types';

export const agentWorkflow = [
    {
        id: 'a1',
        name: 'Data Collection',
        duration: 3500,
        logs: [
            'Initializing hyper-speed signal scrapers...',
            'Deep-crawling GitHub Trending API with 98% coverage...',
            'Parsing Hugging Face meta-data for model usage shifts...',
            'Aggregating Google Trends global signal clusters...',
            'Executing NLP on Reddit /r/MachineLearning threads...',
            'Live-streaming Product Hunt AI telemetry...'
        ],
        metrics: { speed: 99, accuracy: 96, depth: 92 }
    },
    {
        id: 'a2',
        name: 'Trend Analysis',
        duration: 4500,
        logs: [
            'Normalizing multi-platform signal variance...',
            'Calculating proprietary WoW growth velocity vectors...',
            'Identifying cross-agent semantic clusters...',
            'Predicting emerging keyword trajectories (Acc: 94%)...',
            'Discarding stochastic noise from telemetry streams...'
        ],
        metrics: { speed: 95, accuracy: 97, depth: 95 }
    },
    {
        id: 'a3',
        name: 'Scoring & Ranking',
        duration: 3500,
        logs: [
            'Applying Bayesian weighted scoring matrix...',
            'Quantifying commercial viability coefficients...',
            'Determining technical longevity and moat depth...',
            'Validating against 24-month historical trend cycles...',
            'Compiling final architectural topic hierarchy...'
        ],
        metrics: { speed: 98, accuracy: 99, depth: 94 }
    },
    {
        id: 'a4',
        name: 'Opportunity Intelligence',
        duration: 5500,
        logs: [
            'Synthesizing market gap blueprints...',
            'Projecting target demographic high-intent segments...',
            'Architecting multi-agent business use cases...',
            'Designing Tier-1 monetization frameworks...',
            'Simulating Implementation Difficulty (ID) at scale...'
        ],
        metrics: { speed: 92, accuracy: 94, depth: 99 }
    },
    {
        id: 'a5',
        name: 'Quality & Validation',
        duration: 2500,
        logs: [
            'Performing Deep Hallucination Verification (DHV)...',
            'Checking cross-agent consistency parity...',
            'Ranking source credibility through Peer-AI Review...',
            'Formatting high-fidelity intelligence brief...',
            'Security signed. Report deployed to Firas Hunter.'
        ],
        metrics: { speed: 96, accuracy: 99, depth: 98 }
    },
];

export const simulateAgentProcess = (callback: (agents: AgentStatus[], currentLog?: string) => void) => {
    let currentAgents: AgentStatus[] = agentWorkflow.map(a => ({
        id: a.id,
        name: a.name,
        status: 'idle',
        progress: 0,
        lastUpdate: '-',
        metrics: a.metrics
    }));

    let currentStep = 0;

    const processNextStep = () => {
        if (currentStep >= agentWorkflow.length) return;

        const agentDef = agentWorkflow[currentStep];
        const startTime = Date.now();

        currentAgents = currentAgents.map((a, i) =>
            i === currentStep ? { ...a, status: 'processing', lastUpdate: 'Just now', reasoning: agentDef.logs[0] } : a
        );
        callback([...currentAgents], agentDef.logs[0]);

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(Math.round((elapsed / agentDef.duration) * 100), 100);

            const logIndex = Math.min(Math.floor((progress / 100) * agentDef.logs.length), agentDef.logs.length - 1);
            const currentLog = agentDef.logs[logIndex];

            currentAgents = currentAgents.map((a, i) =>
                i === currentStep ? {
                    ...a,
                    progress,
                    status: progress === 100 ? 'complete' : 'processing',
                    lastUpdate: progress === 100 ? 'Just now' : a.lastUpdate,
                    reasoning: currentLog
                } : a
            );

            callback([...currentAgents], currentLog);

            if (progress === 100) {
                clearInterval(interval);
                currentStep++;
                setTimeout(processNextStep, 400); // Faster transition
            }
        }, 120); // Faster updates
    };

    processNextStep();
};
