import React from 'react';
import { useRig } from '../contexts/RigContext';

const OnAirPanel = () => {
    const { ptt } = useRig();

    return (
        <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: ptt ? 'var(--accent-red)' : 'var(--bg-secondary)',
            color: ptt ? 'var(--text-primary)' : 'var(--text-muted)',
            flexDirection: 'column',
            transition: 'background 0.2s, color 0.2s'
        }}>
            <div style={{
                fontSize: 'clamp(2rem, 8vw, 6rem)',
                fontWeight: '900',
                fontFamily: 'Orbitron, sans-serif',
                textAlign: 'center',
                lineHeight: 1,
                textShadow: ptt ? '0 0 20px rgba(0,0,0,0.5)' : 'none',
                animation: ptt ? 'pulse 1s infinite' : 'none'
            }}>
                {ptt ? 'ON AIR' : 'RX'}
            </div>
            {!ptt && (
                <div style={{
                    marginTop: '1rem',
                    fontSize: '0.8rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    opacity: 0.5
                }}>
                    STANDBY
                </div>
            )}
        </div>
    );
};

export default OnAirPanel;
