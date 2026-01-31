
import { useState, useEffect } from 'react';
import { Search, Download, Play, Loader2, Globe, Terminal } from 'lucide-react';
import TrendCard from './TrendCard';
import AgentStatusList from './AgentStatusList';
import OpportunityPanel from './OpportunityPanel';
import IndustrySelector from './IndustrySelector';

import { mockTrends } from '../mockData';
import type { AgentStatus, TrendSignal } from '../types';
import { simulateAgentProcess } from '../agents/orchestrator';

const Dashboard = () => {
    const [agents, setAgents] = useState<AgentStatus[]>([]);
    const [isRunning, setIsRunning] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState('All');
    const [activeLog, setActiveLog] = useState<string>('System idle. Awaiting command...');
    const [filteredTrends, setFilteredTrends] = useState<TrendSignal[]>(mockTrends);

    useEffect(() => {
        if (selectedIndustry === 'All') {
            setFilteredTrends(mockTrends);
        } else {
            setFilteredTrends(mockTrends.filter(t => t.industry === selectedIndustry));
        }
    }, [selectedIndustry]);

    const startAnalysis = () => {
        setIsRunning(true);
        setActiveLog('Initializing multi-agent intelligence layer...');
        simulateAgentProcess((updatedAgents, currentLog) => {
            setAgents(updatedAgents);
            if (currentLog) setActiveLog(currentLog);
            if (updatedAgents.every(a => a.status === 'complete')) {
                setIsRunning(false);
                setActiveLog('Intelligence report complete. Insights updated.');
            }
        });
    };

    useEffect(() => {
        setAgents([
            { id: 'a1', name: 'Data Collection', status: 'idle', progress: 0, lastUpdate: '-' },
            { id: 'a2', name: 'Trend Analysis', status: 'idle', progress: 0, lastUpdate: '-' },
            { id: 'a3', name: 'Scoring & Ranking', status: 'idle', progress: 0, lastUpdate: '-' },
            { id: 'a4', name: 'Opportunity Intelligence', status: 'idle', progress: 0, lastUpdate: '-' },
            { id: 'a5', name: 'Quality & Validation', status: 'idle', progress: 0, lastUpdate: '-' },
        ]);
    }, []);

    return (
        <div className="main-content">
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Firas <span className="gradient-text">Hunter</span></h1>
                    <p style={{ color: 'var(--text-secondary)' }}>AI topic intelligence & deep trend discovery</p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div className="glass-card" style={{ padding: '0.4rem 0.75rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--accent-emerald)', background: 'rgba(16, 185, 129, 0.05)' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)', boxShadow: '0 0 10px var(--accent-emerald)' }}></div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-emerald)' }}>LIVE DATA STREAM</span>
                    </div>
                </div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <IndustrySelector selected={selectedIndustry} onSelect={setSelectedIndustry} />
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'var(--bg-secondary)',
                                padding: '0.5rem 1rem',
                                borderRadius: '10px',
                                border: '1px solid var(--border-color)'
                            }}>
                                <Search size={18} color="var(--text-secondary)" />
                                <input
                                    type="text"
                                    placeholder="Search signals..."
                                    style={{ background: 'none', border: 'none', color: 'white', outline: 'none', width: '150px', fontSize: '0.875rem' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem' }}>{selectedIndustry} AI Impact Signals</h2>
                        <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Showing {filteredTrends.length} detected trends</span>
                    </div>

                    <div className="grid-cols-3">
                        {filteredTrends.map(trend => (
                            <TrendCard key={trend.id} trend={trend} />
                        ))}
                    </div>

                    <OpportunityPanel />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-emerald)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Terminal size={18} color="var(--accent-emerald)" />
                                <h3 style={{ fontSize: '0.875rem', fontWeight: 700 }}>LIVE ANALYTICS ENGINE</h3>
                            </div>
                        </div>

                        <div style={{
                            background: 'rgba(0,0,0,0.3)',
                            padding: '1rem',
                            borderRadius: '8px',
                            fontFamily: 'monospace',
                            fontSize: '0.75rem',
                            color: 'var(--accent-emerald)',
                            minHeight: '60px',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            {isRunning && <span style={{ marginRight: '8px' }}>[RUNNING]</span>}
                            {activeLog}
                        </div>

                        <button
                            onClick={startAnalysis}
                            disabled={isRunning}
                            style={{
                                marginTop: '1rem',
                                width: '100%',
                                background: isRunning ? 'var(--bg-accent)' : 'var(--accent-emerald)',
                                color: 'white',
                                border: 'none',
                                padding: '0.8rem',
                                borderRadius: '10px',
                                fontWeight: 700,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                cursor: isRunning ? 'not-allowed' : 'pointer',
                                opacity: isRunning ? 0.7 : 1,
                                transition: 'var(--transition)'
                            }}
                        >
                            {isRunning ? <Loader2 size={18} className="spin" /> : <Play size={18} />}
                            {isRunning ? 'PROCESSING SIGNALS...' : 'INITIALIZE DEEP SCAN'}
                        </button>
                    </div>

                    <AgentStatusList agents={agents} />

                    <div className="glass-card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                            <Globe size={18} color="var(--accent-blue)" />
                            <h3 style={{ fontSize: '0.875rem', fontWeight: 700 }}>GLOBAL SIGNAL SOURCES</h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                            {['Google Trends', 'GitHub API', 'arXiv Labs', 'Hugging Face', 'Reddit Stream', 'Product Hunt'].map(s => (
                                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-blue)' }}></div>
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))' }}>
                        <h3 style={{ fontSize: '0.875rem', color: 'var(--accent-purple)', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: 800 }}>Firas Hunter Insight</h3>
                        <p style={{ fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--text-primary)' }}>
                            Firas Hunter's signal correlation engine suggests {selectedIndustry === 'All' ? 'Agentic Workflows' : selectedIndustry} will see a 40%+ spike in developer adoption this quarter.
                        </p>
                    </div>

                    <button style={{
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: 'var(--accent-blue)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        padding: '0.8rem',
                        borderRadius: '10px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        cursor: 'pointer'
                    }}>
                        <Download size={18} />
                        Download Intelligence PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
