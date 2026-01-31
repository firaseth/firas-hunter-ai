
import type { AgentStatus } from '../types';
import { CheckCircle2, Loader2, Circle } from 'lucide-react';

const AgentStatusList = ({ agents }: { agents: AgentStatus[] }) => {
    return (
        <div className="glass-card">
            <h3 style={{ marginBottom: '1.25rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>Agent Orchestration</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {agents.map(agent => (
                    <div key={agent.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ color: agent.status === 'complete' ? 'var(--accent-emerald)' : agent.status === 'idle' ? 'var(--text-secondary)' : 'var(--accent-blue)' }}>
                            {agent.status === 'complete' ? <CheckCircle2 size={20} /> :
                                agent.status === 'idle' ? <Circle size={20} /> :
                                    <Loader2 size={20} className="spin" />}
                        </div>

                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{agent.name}</span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{agent.progress}%</span>
                            </div>
                            <div style={{ width: '100%', height: '4px', background: 'var(--bg-accent)', borderRadius: '2px', overflow: 'hidden' }}>
                                <div style={{
                                    width: `${agent.progress}%`,
                                    height: '100%',
                                    background: agent.status === 'complete' ? 'var(--accent-emerald)' : 'var(--accent-blue)',
                                    transition: 'width 1s ease-in-out'
                                }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .spin { animation: spin 2s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
        </div>
    );
};

export default AgentStatusList;
