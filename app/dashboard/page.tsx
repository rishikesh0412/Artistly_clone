// This is the Dashboard page! Here, managers can see stats and review artist submissions.
// If you want to add more analytics or actions, this is a great place to experiment :)
'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Users as users, BarChart, PieChart, TrendingUp, Search, Filter, Download, Eye, MessageSquare, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

// Mock data for artist submissions (feel free to swap this out for real API data!)
const artistSubmissions = [
  {
    id: '1',
    name: 'Priya Sharma',
    category: 'Singer',
    city: 'Mumbai',
    fee: '₹35,000',
    submittedAt: '2025-01-15',
    status: 'pending',
    experience: '5+ years',
    languages: ['Hindi', 'English'],
    email: 'priya.sharma@email.com',
    phone: '+91 9876543210'
  },
  {
    id: '2',
    name: 'Rahul Verma',
    category: 'DJ',
    city: 'Delhi',
    fee: '₹25,000',
    submittedAt: '2025-01-14',
    status: 'approved',
    experience: '3+ years',
    languages: ['Hindi', 'English', 'Punjabi'],
    email: 'rahul.verma@email.com',
    phone: '+91 9876543211'
  },
  {
    id: '3',
    name: 'Kavya Nair',
    category: 'Dancer',
    city: 'Bangalore',
    fee: '₹40,000',
    submittedAt: '2025-01-13',
    status: 'rejected',
    experience: '7+ years',
    languages: ['Tamil', 'English', 'Kannada'],
    email: 'kavya.nair@email.com',
    phone: '+91 9876543212'
  },
  {
    id: '4',
    name: 'Dr. Amit Kumar',
    category: 'Speaker',
    city: 'Chennai',
    fee: '₹75,000',
    submittedAt: '2025-01-12',
    status: 'pending',
    experience: '10+ years',
    languages: ['English', 'Hindi', 'Tamil'],
    email: 'amit.kumar@email.com',
    phone: '+91 9876543213'
  },
  {
    id: '5',
    name: 'Riya Patel',
    category: 'Singer',
    city: 'Ahmedabad',
    fee: '₹30,000',
    submittedAt: '2025-01-11',
    status: 'approved',
    experience: '4+ years',
    languages: ['Gujarati', 'Hindi', 'English'],
    email: 'riya.patel@email.com',
    phone: '+91 9876543214'
  }
];

const stats = [
  {
    title: 'Total Submissions',
    value: '127',
    change: '+12%',
    trend: 'up',
    icon: users
  },
  {
    title: 'Approved Artists',
    value: '89',
    change: '+8%',
    trend: 'up',
    icon: CheckCircle
  },
  {
    title: 'Pending Review',
    value: '24',
    change: '+3%',
    trend: 'up',
    icon: MessageSquare
  },
  {
    title: 'Monthly Revenue',
    value: '₹2.4L',
    change: '+15%',
    trend: 'up',
    icon: TrendingUp
  }
];

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const { toast } = useToast();

  // Filter submissions based on search and filters
  const filteredSubmissions = artistSubmissions.filter(submission => {
    const matchesSearch = submission.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         submission.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         submission.city.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || submission.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || submission.category.toLowerCase() === categoryFilter.toLowerCase();
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Handle status change (just a toast for now, but you could update state or call an API)
  const handleStatusChange = (submissionId: string, newStatus: string) => {
    toast({
      title: "Status Updated",
      description: `Artist submission has been ${newStatus}.`,
    });
  };

  // Helper to get a badge for each status
  const getStatusBadge = (status: string) => {
    const variants = {
      pending: 'default',
      approved: 'default',
      rejected: 'destructive'
    } as const;

    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };

    return (
      <Badge className={colors[status as keyof typeof colors]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header - welcome the manager! */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manager Dashboard</h1>
          <p className="text-gray-600">Manage artist submissions and track platform performance</p>
        </div>

        {/* Stats Cards - quick overview of how things are going */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Artist Submissions Table - review and manage artists here */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle>Artist Submissions</CardTitle>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search artists..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="singer">Singer</SelectItem>
                    <SelectItem value="dancer">Dancer</SelectItem>
                    <SelectItem value="dj">DJ</SelectItem>
                    <SelectItem value="speaker">Speaker</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Artist Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>Fee Range</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubmissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{submission.name}</div>
                          <div className="text-sm text-gray-500">{submission.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>{submission.category}</TableCell>
                      <TableCell>{submission.city}</TableCell>
                      <TableCell>{submission.fee}</TableCell>
                      <TableCell>{submission.experience}</TableCell>
                      <TableCell>{getStatusBadge(submission.status)}</TableCell>
                      <TableCell>{new Date(submission.submittedAt).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {submission.status === 'pending' && (
                            <>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleStatusChange(submission.id, 'approved')}
                                className="text-green-600 hover:text-green-700"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleStatusChange(submission.id, 'rejected')}
                                className="text-red-600 hover:text-red-700"
                              >
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {filteredSubmissions.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No submissions found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filters to find submissions.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      {/* Toast notifications for user feedback */}
      <Toaster />
    </div>
  );
}