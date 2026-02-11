import React from 'react';

export interface Mosque {
  id: number;
  name: string;
  mapLink: string;
  availableCircles?: string[];
}

export interface Statistic {
  id: number;
  label: string;
  value: number;
  icon?: React.ReactNode;
  key: string;
}

export interface AdItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  link?: string;
  buttons?: { text: string; link: string }[];
  details?: {
    sections: {
      title: string;
      items: string[];
    }[];
  };
}

export interface Recitation {
  id: number;
  student: string;
  surah: string;
  link: string;
  thumbnail: string;
}