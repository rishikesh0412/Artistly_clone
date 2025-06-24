'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { ArtistCard } from '@/components/artist-card';
import { Filters, FilterState } from '@/components/filters';
import { Button } from '@/components/ui/button';
import { artists, categories } from '@/lib/mock-data';
import { Grid, List, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

export default function ArtistsPageClient() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    location: '',
    priceRange: ''
  });

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setFilters(prev => ({
        ...prev,
        categories: [categoryParam]
      }));
    }
  }, [searchParams]);

  const filteredArtists = useMemo(() => {
    return artists.filter(artist => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          artist.name.toLowerCase().includes(query) ||
          artist.bio.toLowerCase().includes(query) ||
          artist.category.some(cat => cat.toLowerCase().includes(query)) ||
          artist.location.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      if (filters.categories.length > 0) {
        const matchesCategory = filters.categories.some(filterCat => {
          const category = categories.find(c => c.id === filterCat);
          return category && artist.category.includes(category.name);
        });
        if (!matchesCategory) return false;
      }

      if (filters.location && artist.location !== filters.location) {
        return false;
      }

      if (filters.priceRange && artist.priceRange !== filters.priceRange) {
        return false;
      }

      return true;
    });
  }, [searchQuery, filters]);

  const handleQuoteRequest = (artistId: string) => {
    const artist = artists.find(a => a.id === artistId);
    toast({
      title: "Quote Request Sent!",
      description: `Your quote request has been sent to ${artist?.name}. They will contact you within 24 hours.`,
    });
  };

  const resetFilters = () => {
    setFilters({ categories: [], location: '', priceRange: '' });
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Artist</h1>
          <p className="text-gray-600">Browse through our collection of talented performers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Filters filters={filters} onFiltersChange={setFilters} onReset={resetFilters} />
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search artists by name, category, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  {filteredArtists.length} artists found
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {filteredArtists.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No artists found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filters to find more artists.
                </p>
                <Button onClick={resetFilters} variant="outline">
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-4'
              }>
                {filteredArtists.map((artist) => (
                  <ArtistCard
                    key={artist.id}
                    artist={artist}
                    onQuoteRequest={handleQuoteRequest}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}