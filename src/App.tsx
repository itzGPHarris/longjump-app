import React from 'react';
import styles from './App.module.css'; // Use our new module stylesheet

// Import all the business components
import { BusinessHeader } from './components/BusinessHeader';
import { VideoPlayer } from './components/VideoPlayer';
import { BusinessDescription } from './components/BusinessDescription';
import { TagList } from './components/TagList';
import { LinksSection } from './components/LinksSection';
import { TeamSection } from './components/TeamSection';

const businessData = {
  name: "RadientHue",
  description: "RadientHue crafts clean, plant-based cosmetics for all skin tones and gender expressions. Our 50+ foundation shades contain no harmful chemicals and are never tested on animals. We prioritize sustainability with 100% recyclable packaging and donate 5% of profits to support diversity in beauty.",
  videoThumbnail: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  tags: ["Beauty", "Healthcare", "Sustainability", "Diversity"],
  links: [
    { label: "Executive Summary", url: "#" },
    { label: "Pitch Deck", url: "#" },
    { label: "Product Catalog", url: "#" }
  ],
  team: [
    { name: "Sarah Chen", avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
    { name: "Marcus Johnson", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
    { name: "Priya Patel", avatarUrl: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" },
    { name: "Alex Rivera", avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" }
  ]
};

export default function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.content}>
            <BusinessHeader businessName={businessData.name} />
            <VideoPlayer thumbnailUrl={businessData.videoThumbnail} videoUrl={businessData.videoUrl} />
            <BusinessDescription description={businessData.description} />
            <TagList tags={businessData.tags} />
            <LinksSection links={businessData.links} />
            <TeamSection members={businessData.team} />
          </div>
        </div>
      </div>
    </div>
  );
}