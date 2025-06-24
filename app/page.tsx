'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CategoryCard } from '@/components/category-card';
import { Navigation } from '@/components/navigation';
import { categories } from '@/lib/mock-data';
import { ArrowRight, Star, Users, Calendar, Shield } from 'lucide-react';

// Main homepage component
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Navigation bar at the top. If you add more pages, update Navigation! */}
      <Navigation />
      
      {/* Hero Section - the big intro bit! */}
      <section className="relative overflow-hidden">
        {/* Just a fancy background gradient overlay. Looks cool, right? */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connect with 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}Amazing Artists
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              India's premier platform connecting event planners with talented performers. 
              From singers to dancers, speakers to DJs - find the perfect artist for your next event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Main CTA button - takes you to the artists page */}
              <Link href="/artists">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8">
                  Explore Artists
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              {/* If you're an artist, this is your entry point! */}
              <Link href="/onboarding">
                <Button size="lg" variant="outline" className="px-8">
                  Join as Artist
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - some humble bragging */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Each stat gets its own little card */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-gray-600">Verified Artists</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">2,000+</div>
              <div className="text-gray-600">Events Completed</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-gray-600">Verified Profiles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - pick your flavor of artist! */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Artists by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our curated collection of talented performers across different categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* TODO: Add more categories if we get more artists! */}
            {categories.map((category) => (
              <Link key={category.id} href={`/artists?category=${category.id}`}>
                <CategoryCard category={category} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - last nudge for the user! */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Artist?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of event planners who trust Artistly to make their events unforgettable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/artists">
              <Button size="lg" variant="secondary" className="px-8">
                Browse Artists
              </Button>
            </Link>
            <Link href="/onboarding">
              <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-purple-600">
                Become an Artist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - because every site needs one! */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-2xl font-bold">Artistly</span>
            </div>
            <p className="text-gray-400 mb-8">
              Connecting artists and event planners across India
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                &copy; 2025 Artistly.com. All rights reserved. Created for Frontend Developer Assignment.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}