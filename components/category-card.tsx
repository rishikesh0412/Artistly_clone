import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/lib/mock-data';

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <Card 
      className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-white to-gray-50 hover:from-purple-50 hover:to-pink-50"
      onClick={onClick}
    >
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
        <h3 className="font-semibold text-lg mb-2 text-gray-900">{category.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{category.description}</p>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
          {category.count} artists
        </div>
      </CardContent>
    </Card>
  );
}