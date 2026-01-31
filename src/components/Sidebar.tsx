import { LayoutDashboard, TrendingUp, Lightbulb, BarChart3, Settings, Shield, Sun, Moon } from 'lucide-react';

interface SidebarProps {
    toggleTheme: () => void;
    theme: 'dark' | 'light';
}

const Sidebar = ({ toggleTheme, theme }: SidebarProps) => {
    return (
        <aside className="sidebar">
            <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <div style={{ padding: '2px', borderRadius: '10px', overflow: 'hidden' }}>
                    <img src="/logo.png" alt="Firas Hunter Logo" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Firas Hunter</h2>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
                <NavItem icon={<TrendingUp size={20} />} label="Trend Engine" />
                <NavItem icon={<Lightbulb size={20} />} label="Opportunities" />
                <NavItem icon={<BarChart3 size={20} />} label="Market Reports" />
                <NavItem icon={<Shield size={20} />} label="Agent Security" />
            </nav>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div
                    onClick={toggleTheme}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        background: 'var(--bg-accent)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        transition: 'var(--transition)'
                    }}
                >
                    {theme === 'dark' ? <Sun size={20} color="var(--accent-emerald)" /> : <Moon size={20} color="var(--accent-blue)" />}
                    <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </div>
                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                    <NavItem icon={<Settings size={20} />} label="Settings" />
                </div>
            </div>
        </aside>
    );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '0.75rem 1rem',
        borderRadius: '12px',
        cursor: 'pointer',
        backgroundColor: active ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
        color: active ? 'var(--accent-blue)' : 'var(--text-secondary)',
        fontWeight: active ? '600' : '400',
        transition: 'var(--transition)'
    }}>
        {icon}
        <span>{label}</span>
    </div>
);

export default Sidebar;
