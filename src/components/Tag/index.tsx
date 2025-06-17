import React from 'react';
import styles from './Tag.module.css';

interface TagProps {
  label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <span className={styles.tag}>
      {label}
    </span>
  );
};

export default Tag;