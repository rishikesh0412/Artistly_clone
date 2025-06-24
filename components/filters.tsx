// Filters component - lets users narrow down the artist list.
// If you want to add more filter options, this is the place!
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X, Filter, RotateCcw } from 'lucide-react';
import { categories, locations, priceRanges } from '@/lib/mock-data';

export interface FilterState {
  categories: string[];
  location: string;
  priceRange: string;
}

interface FiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onReset: () => void;
}

export function Filters({ filters, onFiltersChange, onReset }: FiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle category checkbox changes
  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const updatedCategories = checked 
      ? [...filters.categories, categoryId]
      : filters.categories.filter(c => c !== categoryId);
    
    onFiltersChange({
      ...filters,
      categories: updatedCategories
    });
  };

  // Remove a single category filter
  const removeCategory = (categoryId: string) => {
    onFiltersChange({
      ...filters,
      categories: filters.categories.filter(c => c !== categoryId)
    });
  };

  // Check if any filters are active
  const hasActiveFilters = filters.categories.length > 0 || filters.location || filters.priceRange;

  return (
    <div className="space-y-4">
      {/* Mobile Filter Toggle - for small screens */}
      <div className="md:hidden">
        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full justify-between"
        >
          <div className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2">
                {filters.categories.length + (filters.location ? 1 : 0) + (filters.priceRange ? 1 : 0)}
              </Badge>
            )}
          </div>
        </Button>
      </div>

      {/* Active Filters - show what the user has picked */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm font-medium text-gray-700">Active filters:</span>
          {filters.categories.map(categoryId => {
            const category = categories.find(c => c.id === categoryId);
            return category ? (
              <Badge key={categoryId} variant="secondary" className="flex items-center gap-1">
                {category.name}
                <X 
                  className="h-3 w-3 cursor-pointer hover:text-red-500" 
                  onClick={() => removeCategory(categoryId)}
                />
              </Badge>
            ) : null;
          })}
          {filters.location && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {filters.location}
              <X 
                className="h-3 w-3 cursor-pointer hover:text-red-500" 
                onClick={() => onFiltersChange({ ...filters, location: '' })}
              />
            </Badge>
          )}
          {filters.priceRange && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {filters.priceRange}
              <X 
                className="h-3 w-3 cursor-pointer hover:text-red-500" 
                onClick={() => onFiltersChange({ ...filters, priceRange: '' })}
              />
            </Badge>
          )}
          <Button variant="ghost" size="sm" onClick={onReset} className="text-red-500 hover:text-red-700">
            <RotateCcw className="h-3 w-3 mr-1" />
            Clear all
          </Button>
        </div>
      )}

      {/* Filter Panel - the main filter controls */}
      <div className={`${isExpanded || 'md:block'} ${!isExpanded && 'hidden'}`}>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filter Artists</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Categories - pick as many as you want! */}
            <div>
              <Label className="text-base font-medium mb-3 block">Categories</Label>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={filters.categories.includes(category.id)}
                      onCheckedChange={(checked) => 
                        handleCategoryChange(category.id, checked as boolean)
                      }
                    />
                    <Label 
                      htmlFor={category.id} 
                      className="text-sm font-normal cursor-pointer flex items-center"
                    >
                      <span className="mr-1">{category.icon}</span>
                      {category.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Location - where do you want your artist? */}
            <div>
              <Label className="text-base font-medium mb-3 block">Location</Label>
              <Select 
                value={filters.location} 
                onValueChange={(value) => onFiltersChange({ ...filters, location: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range - how much are you looking to spend? */}
            <div>
              <Label className="text-base font-medium mb-3 block">Price Range</Label>
              <Select 
                value={filters.priceRange} 
                onValueChange={(value) => onFiltersChange({ ...filters, priceRange: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All prices</SelectItem>
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}