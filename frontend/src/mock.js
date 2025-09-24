// Mock data for RideShare Seat platform

export const mockLocations = [
  {
    id: 1,
    name: "Los Angeles International Airport",
    code: "LAX",
    address: "1 World Way, Los Angeles, CA 90045",
    terminal: "Terminal 1 - Baggage Claim",
    available: true,
    inventory: {
      wayb_pico: 12,
      ridesafer_vest: 15
    },
    coordinates: { lat: 33.9425, lng: -118.4081 }
  },
  {
    id: 2,
    name: "John F. Kennedy International Airport",
    code: "JFK",
    address: "Queens, NY 11430",
    terminal: "Terminal 4 - Baggage Claim",
    available: true,
    inventory: {
      wayb_pico: 8,
      ridesafer_vest: 18
    },
    coordinates: { lat: 40.6413, lng: -73.7781 }
  },
  {
    id: 3,
    name: "Miami International Airport",
    code: "MIA",
    address: "2100 NW 42nd Ave, Miami, FL 33126",
    terminal: "Terminal D - Baggage Claim",
    available: true,
    inventory: {
      wayb_pico: 10,
      ridesafer_vest: 14
    },
    coordinates: { lat: 25.7617, lng: -80.1918 }
  },
  {
    id: 4,
    name: "Chicago O'Hare International Airport",
    code: "ORD",
    address: "10000 W O'Hare Ave, Chicago, IL 60666",
    terminal: "Terminal 1 - Baggage Claim",
    available: false,
    inventory: {
      wayb_pico: 0,
      ridesafer_vest: 0
    },
    coordinates: { lat: 41.9742, lng: -87.9073 }
  }
];

export const mockSeatTypes = [
  {
    id: 'wayb_pico',
    name: 'Wayb Pico',
    description: 'Ultra-portable car seat for children ages 1-4',
    weight_range: '22-40 lbs',
    age_range: '1-4 years',
    daily_rate: 14.95,
    features: ['Ultra-compact fold', 'FAA approved for airplanes', 'Weighs only 8 lbs', '5-point harness', 'Easy installation'],
    image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=300&fit=crop'
  },
  {
    id: 'ridesafer_vest',
    name: 'Ridesafer Vest',
    description: 'Innovative travel vest for children ages 5 and up',
    weight_range: '30-100 lbs',
    age_range: '5+ years',
    daily_rate: 9.95,
    features: ['Wearable safety vest', 'No installation required', 'Works in any vehicle', 'Compact storage', 'FMVSS 213 certified'],
    image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=300&fit=crop'
  }
];

export const mockBookings = [
  {
    id: 'RSB-2024-001',
    status: 'active',
    pickup_date: '2024-08-15',
    return_date: '2024-08-18',
    location: mockLocations[0],
    seat_type: mockSeatTypes[0],
    total_cost: 89.75,
    daily_rate: 19.95,
    cleaning_fee: 9.95,
    days: 4,
    special_requests: 'Please ensure extra cleaning',
    kiosk_pickup_code: 'ABC123',
    created_at: '2024-08-10T10:30:00Z'
  },
  {
    id: 'RSB-2024-002',
    status: 'completed',
    pickup_date: '2024-07-20',
    return_date: '2024-07-23',
    location: mockLocations[1],
    seat_type: mockSeatTypes[1],
    total_cost: 69.80,
    daily_rate: 19.95,
    cleaning_fee: 9.95,
    days: 3,
    special_requests: null,
    kiosk_pickup_code: 'XYZ789',
    created_at: '2024-07-15T14:20:00Z'
  }
];

export const mockUser = {
  id: 'user-123',
  email: 'parent@email.com',
  first_name: 'Sarah',
  last_name: 'Johnson',
  phone: '+1-555-0123',
  emergency_contact: {
    name: 'Mike Johnson',
    phone: '+1-555-0124',
    relationship: 'Spouse'
  },
  children: [
    {
      name: 'Emma',
      age: 3,
      weight: 35,
      preferred_seat: 'toddler'
    },
    {
      name: 'Liam',
      age: 5,
      weight: 55,
      preferred_seat: 'booster'
    }
  ],
  waiver_signed: true,
  waiver_date: '2024-08-01T09:15:00Z'
};

export const mockPricingPlans = [
  {
    name: 'Daily Rental',
    price: 19.95,
    period: 'per day',
    features: [
      'Premium car seat rental',
      'Branded carrying backpack',
      'Kiosk pickup & return',
      '24/7 customer support'
    ]
  },
  {
    name: 'Cleaning Fee',
    price: 9.95,
    period: 'per rental',
    features: [
      'Professional sanitization',
      'Safety inspection',
      'Quality assurance',
      'Ready for next use'
    ]
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: 'Jennifer Martinez',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'RideShare Seat saved our family vacation! No more dealing with expensive car rentals just to get a car seat. The pickup was seamless and the seat was spotless.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=80&h=80&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'New York, NY',
    rating: 5,
    text: 'As a frequent business traveler with kids, this service is a game-changer. Professional, reliable, and so much more convenient than traditional options.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Amanda Thompson',
    location: 'Miami, FL',
    rating: 5,
    text: 'The app made booking so easy, and the kiosk pickup was faster than baggage claim! My toddler loved the comfortable seat during our Uber rides.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
  }
];

export const mockFAQs = [
  {
    question: 'How does RideShare Seat work?',
    answer: 'Simply book online, pick up your car seat from our airport kiosk using your confirmation code, and return it to the same location when done. It\'s that easy!'
  },
  {
    question: 'Are the car seats safe and clean?',
    answer: 'Absolutely. Each seat undergoes professional cleaning and safety inspection between rentals. All seats meet or exceed federal safety standards.'
  },
  {
    question: 'What if my flight is delayed?',
    answer: 'No problem! Contact our 24/7 support team and we\'ll adjust your reservation. Late fees only apply after 24 hours past your original pickup time.'
  },
  {
    question: 'Can I extend my rental period?',
    answer: 'Yes, you can extend your rental through the app or by contacting support, subject to availability at your return location.'
  }
];

// Helper functions for mock API simulation
export const simulateAPICall = (data, delay = 800) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
};

export const generateBookingId = () => {
  return `RSB-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
};

export const calculateTotal = (days, dailyRate = 19.95, cleaningFee = 9.95) => {
  return (days * dailyRate) + cleaningFee;
};