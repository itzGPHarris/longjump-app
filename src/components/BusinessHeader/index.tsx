import React from 'react';
import styles from './BusinessHeader.module.css';

interface BusinessHeaderProps {
  businessName: string;
}

export const BusinessHeader: React.FC<BusinessHeaderProps> = ({ businessName }) => {
  const handleBoostClick = () => {
    // Placeholder for boost functionality
    console.log('Boost clicked for:', businessName);
  };

  return (
    <div className={styles.businessHeader}>
      <h1 className={styles.businessName}>{businessName}</h1>
      <button className={styles.boostButton} onClick={handleBoostClick}>
        Boost
      </button>
    </div>
  );
};

export default BusinessHeader;