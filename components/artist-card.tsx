// This is the ArtistCard component! It shows off an artist in a nice little card.
// If you want to add more bling, this is a good place to do it :)
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Languages } from 'lucide-react';
import { Artist } from '@/lib/mock-data';

// Props for the ArtistCard. onQuoteRequest is optional, so don't stress if you don't need it!
interface ArtistCardProps {
  artist: Artist;
  onQuoteRequest?: (artistId: string) => void;
}

export function ArtistCard({ artist, onQuoteRequest }: ArtistCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Artist image at the top. If you don't have an image, maybe add a placeholder? */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={artist.image}
          alt={artist.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* If the artist is featured, show a shiny badge! */}
        {artist.featured && (
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-600">
            Featured
          </Badge>
        )}
        {/* Star rating in the top right. Because everyone loves stars. */}
        <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">{artist.rating}</span>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-lg text-gray-900 mb-1">{artist.name}</h3>
          {/* Show all the artist's categories as little badges. TODO: Add icons? */}
          <div className="flex flex-wrap gap-1 mb-2">
            {artist.category.map((cat) => (
              <Badge key={cat} variant="secondary" className="text-xs">
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        {/* Short bio. If it's too long, it gets clamped. Because nobody likes a wall of text! */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{artist.bio}</p>

        <div className="space-y-2 text-xs text-gray-500">
          {/* Where are they from? */}
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{artist.location}</span>
          </div>
          {/* Languages spoken. Only showing the first two, but you can see more if you want! */}
          <div className="flex items-center">
            <Languages className="h-3 w-3 mr-1" />
            <span>{artist.languages.slice(0, 2).join(', ')}</span>
            {artist.languages.length > 2 && <span> +{artist.languages.length - 2}</span>}
          </div>
        </div>

        <div className="mt-3 pt-3 border-t">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500">Starting from</p>
              <p className="font-semibold text-purple-600">{artist.priceRange.split(' - ')[0]}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">{artist.reviewCount} reviews</p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        {/* This button lets you ask for a quote. If you want to change the text, go for it! */}
        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          onClick={() => onQuoteRequest?.(artist.id)}
        >
          Ask for Quote
        </Button>
      </CardFooter>
    </Card>
  );
}