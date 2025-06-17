import React from 'react';
import styles from './BusinessDescription.module.css';

interface BusinessDescriptionProps {
  description: string;
}

export const BusinessDescription: React.FC<BusinessDescriptionProps> = ({ description }) => {
  return (
    <p className={styles.description}>
      {description}
    </p>
  );
};

export default BusinessDescription;