import React from 'react';
import { TeamMember } from '../TeamMember';
import styles from './TeamSection.module.css';

interface Member {
  name: string;
  avatarUrl: string;
}

interface TeamSectionProps {
  members: Member[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ members }) => {
  if (!members || members.length === 0) {
    return null;
  }

  return (
    <section className={styles.teamSection}>
      <h2 className={styles.sectionHeading}>Our team</h2>
      <div className={styles.membersContainer}>
        {members.map((member, index) => (
          <TeamMember
            key={`${member.name}-${index}`}
            name={member.name}
            avatarUrl={member.avatarUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;