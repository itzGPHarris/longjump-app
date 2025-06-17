import React from 'react';
import styles from './LinkItem.module.css';

interface LinkItemProps {
  label: string;
  url: string;
}

export const LinkItem: React.FC<LinkItemProps> = ({ label, url }) => {
  return (
    <a
      href={url}
      className={styles.linkItem}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className={styles.linkIcon}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.linkLabel}>{label}</span>
    </a>
  );
};

export default LinkItem;