
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Java' | 'JavaScript' | 'Network';
  date: string;
  author: string;
  readTime: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'Language' | 'Framework' | 'Network' | 'Tool';
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  fullImageUrl?: string;
  fullPdfUrl?: string;
  link?: string;
}

export interface UserProfile {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  education: {
    school: string;
    major: string;
    period: string;
  };
  socials: {
    github: string;
    linkedin: string;
    facebook?: string;
    instagram?: string;
    email: string;
    phone: string;
  };
}
