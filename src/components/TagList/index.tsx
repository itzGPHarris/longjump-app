import React from 'react';
import { Tag } from '../Tag';
import styles from './TagList.module.css';

interface TagListProps {
  tags: string[];
}

export const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className={styles.tagList}>
      {tags.map((tag, index) => (
        <Tag key={index} label={tag} />
      ))}
    </div>
  );
};

export default TagList;