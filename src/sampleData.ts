export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  imageUrl: string;
  type: 'house' | 'apartment' | 'condo';
  status: 'available' | 'pending' | 'sold';
}

export interface PropertyRequest {
  id: string;
  propertyId: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'pending' | 'contacted' | 'closed';
  createdAt: string;
}

export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Waterfront Luxury Apartment",
    description: "Stunning apartment with private balcony and ocean views",
    price: 5500,
    location: "Miami Beach, FL",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    imageUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3",
    type: "apartment",
    status: "available",
  },
  {
    id: "2",
    title: "Downtown Penthouse",
    description: "Luxurious penthouse with panoramic city views",
    price: 8500,
    location: "New York, NY",
    bedrooms: 2,
    bathrooms: 2.5,
    squareFeet: 1500,
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
    type: "apartment",
    status: "pending",
  },
  {
    id: "3",
    title: "Modern Beach House",
    description: "Contemporary beachfront home with private pool",
    price: 12000,
    location: "La Jolla, CA",
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3200,
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3",
    type: "house",
    status: "available",
  },
];

export const SAMPLE_REQUESTS: PropertyRequest[] = [
  {
    id: "1",
    propertyId: "1",
    name: "John Smith",
    email: "john@example.com",
    phone: "555-0123",
    message:
      "Interested in scheduling a viewing this weekend. Looking for a 12-month lease.",
    status: "pending",
    createdAt: "2024-03-10T10:00:00Z",
  },
  {
    id: "2",
    propertyId: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "555-0124",
    message: "Would like to discuss lease terms and arrange a viewing.",
    status: "contacted",
    createdAt: "2024-03-09T15:30:00Z",
  },
  {
    id: "3",
    propertyId: "3",
    name: "Michael Brown",
    email: "michael@example.com",
    phone: "555-0125",
    message:
      "Requesting information about pet policy and available move-in dates.",
    status: "closed",
    createdAt: "2024-03-08T09:15:00Z",
  },
];
