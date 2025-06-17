import React from 'react';
import { LinkItem } from '../LinkItem';
import styles from './LinksSection.module.css';

interface Link {
  label: string;
  url: string;
}

interface LinksSectionProps {
  links: Link[];
}

export const LinksSection: React.FC<LinksSectionProps> = ({ links }) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className={styles.linksSection}>
      {links.map((link, index) => (
        <LinkItem
          key={`${link.url}-${index}`}
          label={link.label}
          url={link.url}
        />
      ))}
    </div>
  );
};

export default LinksSection;