// Added React import to resolve the 'React' namespace for React.ReactNode
import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'science' | 'pleasure';
}

export interface NavItem {
  label: string;
  href: string;
}
