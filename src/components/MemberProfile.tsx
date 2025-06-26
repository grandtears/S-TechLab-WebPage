import React from 'react';

interface Member {
  name: string;
  icon: string;
  links: {
    x?: string;
    note?: string;
    instagram?: string;
  };
}

const MemberProfile: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '2rem',
      padding: '1.5rem',
      borderRadius: '8px',
      background: 'rgba(255, 255, 255, 0.1)',
    }}>
      <img src={member.icon} alt={`${member.name} icon`} style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginRight: '1.5rem',
      }} />
      <div>
        <h2 style={{ margin: 0, fontSize: '1.8rem' }}>{member.name}</h2>
        <div style={{ marginTop: '0.5rem' }}>
          {member.links.x && <a href={member.links.x} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', color: '#1DA1F2' }}>X</a>}
          {member.links.note && <a href={member.links.note} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', color: '#4CAF50' }}>note</a>}
          {member.links.instagram && <a href={member.links.instagram} target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C' }}>Instagram</a>}
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;