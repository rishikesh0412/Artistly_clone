export interface Artist {
  id: string;
  name: string;
  category: string[];
  bio: string;
  priceRange: string;
  location: string;
  languages: string[];
  image: string;
  featured: boolean;
  rating: number;
  reviewCount: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: 'singers',
    name: 'Singers',
    icon: '🎤',
    description: 'Professional vocalists for all occasions',
    count: 45
  },
  {
    id: 'dancers',
    name: 'Dancers',
    icon: '💃',
    description: 'Classical and contemporary dance performers',
    count: 32
  },
  {
    id: 'speakers',
    name: 'Speakers',
    icon: '🎯',
    description: 'Motivational and keynote speakers',
    count: 28
  },
  {
    id: 'djs',
    name: 'DJs',
    icon: '🎧',
    description: 'Music directors and sound artists',
    count: 38
  }
];

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Aria Sharma',
    category: ['Singers'],
    bio: 'Classical Indian vocalist with 15+ years experience in Bollywood and traditional music.',
    priceRange: '₹25,000 - ₹50,000',
    location: 'Mumbai, Maharashtra',
    languages: ['Hindi', 'English', 'Marathi'],
    image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=500',
    featured: true,
    rating: 4.9,
    reviewCount: 127
  },
  {
    id: '2',
    name: 'Raj Patel',
    category: ['DJs'],
    bio: 'Electronic music producer and DJ specializing in wedding celebrations and corporate events.',
    priceRange: '₹15,000 - ₹35,000',
    location: 'Bangalore, Karnataka',
    languages: ['English', 'Hindi', 'Kannada'],
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=500',
    featured: false,
    rating: 4.7,
    reviewCount: 89
  },
  {
    id: '3',
    name: 'Meera Nair',
    category: ['Dancers'],
    bio: 'Bharatanatyam and contemporary dance artist with national award recognition.',
    priceRange: '₹20,000 - ₹40,000',
    location: 'Chennai, Tamil Nadu',
    languages: ['Tamil', 'English', 'Malayalam'],
    image: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=500',
    featured: true,
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: '4',
    name: 'Dr. Vikram Singh',
    category: ['Speakers'],
    bio: 'Leadership coach and corporate trainer with expertise in team building and motivation.',
    priceRange: '₹50,000 - ₹100,000',
    location: 'New Delhi, Delhi',
    languages: ['English', 'Hindi', 'Punjabi'],
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=500',
    featured: false,
    rating: 4.9,
    reviewCount: 203
  },
  {
    id: '5',
    name: 'Sanya Malhotra',
    category: ['Singers', 'Dancers'],
    bio: 'Multi-talented performer specializing in fusion of Indian classical and western styles.',
    priceRange: '₹30,000 - ₹60,000',
    location: 'Pune, Maharashtra',
    languages: ['Hindi', 'English', 'Gujarati'],
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=500',
    featured: true,
    rating: 4.8,
    reviewCount: 94
  },
  {
    id: '6',
    name: 'Arjun Reddy',
    category: ['DJs'],
    bio: 'Techno and house music specialist with international festival experience.',
    priceRange: '₹20,000 - ₹45,000',
    location: 'Hyderabad, Telangana',
    languages: ['English', 'Telugu', 'Hindi'],
    image: 'https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=500',
    featured: false,
    rating: 4.6,
    reviewCount: 67
  }
];

export const locations = [
  'Mumbai, Maharashtra',
  'New Delhi, Delhi',
  'Bangalore, Karnataka',
  'Chennai, Tamil Nadu',
  'Kolkata, West Bengal',
  'Hyderabad, Telangana',
  'Pune, Maharashtra',
  'Ahmedabad, Gujarat',
  'Jaipur, Rajasthan',
  'Lucknow, Uttar Pradesh'
];

export const priceRanges = [
  '₹10,000 - ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹100,000',
  '₹100,000+'
];

export const languages = [
  'Hindi',
  'English',
  'Tamil',
  'Telugu',
  'Marathi',
  'Gujarati',
  'Bengali',
  'Kannada',
  'Malayalam',
  'Punjabi'
];