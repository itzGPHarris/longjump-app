import React from 'react';
import styles from './TeamMember.module.css';

interface TeamMemberProps {
  name: string;
  avatarUrl: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ name, avatarUrl }) => {
  return (
    <div className={styles.teamMember}>
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className={styles.avatar}
        onError={(e) => {
          // Fallback to a default avatar if image fails to load
          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNFNUU3RUIiLz4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyMCIgcj0iOCIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNOCAzNi41QzggMzAuNzAxIDEzLjM3MjYgMjYgMjAgMjZIMjhDMzQuNjI3NCAyNiA0MCAzMC43MDEgNDAgMzYuNVY0MEg4VjM2LjVaIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo=';
        }}
      />
      <p className={styles.memberName}>{name}</p>
    </div>
  );
};

export default TeamMember;