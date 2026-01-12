import React from 'react';

export interface NavItem {
  label: string;
  id: string;
}

export interface ServiceItem {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

export interface StatItem {
  value: string;
  label: string;
  subLabel?: string;
}

export interface LocationData {
  name: string;
  area: number;
}