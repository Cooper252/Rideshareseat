import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Car, 
  Shield, 
  Clock, 
  DollarSign, 
  MapPin, 
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Zap
} from 'lucide-react';
import { mockTestimonials, mockPricingPlans, mockSeatTypes } from '../mock';

const HomePage = () => {
  const features = [
    {
      icon: <DollarSign className="h-10 w-10 text-white" />,
      title: 'Massive Savings',
      description: 'Save over $346 per 3-day trip compared to traditional car rentals. Our affordable daily rates make family travel budget-friendly.'
    },
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      title: 'Safety First',
      description: 'All car seats meet or exceed federal safety standards with professional cleaning and inspection between each rental.'
    },
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: 'Instant Pickup',
      description: 'Skip the rental car lines. Pick up your car seat from our smart kiosks in airport baggage claim areas.'
    },
    {
      icon: <MapPin className="h-10 w-10 text-white" />,
      title: 'Convenient Locations',
      description: 'Available at major airports nationwide with 24/7 kiosk access for maximum flexibility.'
    }
  ];

  const benefits = [
    'No more lugging car seats through airports',
    'Use rideshare, taxi, or public transportation freely',
    'Professional cleaning between each rental',
    'Lightweight, portable, collapsible design',
    'Branded backpack included with every rental',
    '24/7 customer support and assistance'
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Families' },
    { number: '15+', label: 'Airport Locations' },
    { number: '99.9%', label: 'Uptime' },
    { number: '4.9/5', label: 'Customer Rating' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-24 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-5xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800 px-6 py-2 text-lg font-accent font-semibold">
              <Award className="h-5 w-5 mr-3" />
              Trusted by 50,000+ Families
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-gray-900 mb-8 leading-tight">
              Travel Smarter with
              <span className="text-blue-600 block">Portable Car Seats</span>
            </h1>
            
            {/* Savings Highlight */}
            <div className="mb-8 p-6 bg-green-100 rounded-xl border border-green-300 shadow-md max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-green-700 mr-3" />
                <span className="text-2xl lg:text-3xl font-bold font-heading text-green-800">
                  Save over $346 per 3-day trip vs renting a vehicle
                </span>
              </div>
            </div>
            
            <p className="text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed font-body">
              Skip expensive car rentals and travel freely with your children. Rent premium car seats from airport kiosks and use rideshares, taxis, or public transport with complete peace of mind.
            </p>

            {/* Pricing Highlight */}
            <div className="mb-10">
              <div className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md">
                <span className="text-2xl font-bold font-accent">Starting at only $9.95 per day!</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-10 py-6 shadow-md font-accent font-semibold" asChild>
                <Link to="/book">
                  Start Your Booking
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-10 py-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-accent font-medium" asChild>
                <Link to="/locations">View Locations</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-lg text-gray-600 font-body">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <span className="font-medium">Safety Certified</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <span className="font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-3">{stat.number}</div>
                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
              Why Choose RideShare Seat?
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-body">
              We've revolutionized family travel by making car seat rentals as easy as picking up your luggage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-blue-600 rounded-lg">
                      {React.cloneElement(feature.icon, { className: "h-10 w-10 text-white" })}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
              Our Premium Car Seats
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-body">
              Choose from our carefully selected, safety-certified car seats designed for modern families on the move.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mockSeatTypes.map((seat, index) => (
              <Card key={seat.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
                <div className="aspect-w-16 aspect-h-10 bg-gray-50 p-4">
                  {seat.gallery && seat.gallery.length > 1 ? (
                    // Multiple images for Wayb Pico
                    <div className="grid grid-cols-3 gap-2 h-56">
                      {seat.gallery.map((image, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={image} 
                          alt={`${seat.name} ${imgIndex + 1}`}
                          className="w-full h-full object-contain rounded"
                        />
                      ))}
                    </div>
                  ) : (
                    // Single image for other products
                    <img 
                      src={seat.image} 
                      alt={seat.name}
                      className="w-full h-56 object-contain mx-auto"
                    />
                  )}
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold font-heading text-gray-900">{seat.name}</h3>
                    <Badge className="bg-blue-600 text-white text-lg px-4 py-2 font-accent">
                      ${seat.daily_rate}/day
                    </Badge>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-4 font-body">{seat.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg">
                      <div className="text-lg font-bold font-accent text-gray-900">{seat.age_range}</div>
                      <div className="text-sm text-gray-600">Age Range</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg">
                      <div className="text-lg font-bold font-accent text-gray-900">{seat.weight_range}</div>
                      <div className="text-sm text-gray-600">Weight Range</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold font-heading text-gray-900 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {seat.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center font-body">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-accent font-semibold" asChild>
                    <Link to="/book">
                      Rent {seat.name}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-gray-900 mb-6">
                Travel Freedom for Modern Families
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-body">
                Say goodbye to the hassle and expense of traditional car rentals. Our portable car seats give you the flexibility to choose how you travel while keeping your children safe.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-accent font-semibold" asChild>
                <Link to="/book">Start Your Booking</Link>
              </Button>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <img 
                  src="https://customer-assets.emergentagent.com/job_0658cab3-6d1c-40bf-afed-bf663411f0ef/artifacts/7l1sead5_planet-pdp_jpg.webp" 
                  alt="Happy family traveling with luggage and car seats"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="relative">
                <img 
                  src="https://customer-assets.emergentagent.com/job_0658cab3-6d1c-40bf-afed-bf663411f0ef/artifacts/lwsn3i5m_our_mission.webp" 
                  alt="Family walking at airport"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-gray-900 mb-6">
                Our Mission: Stress-Free Family Travel
              </h2>
              <p className="text-xl text-gray-600 mb-6 font-body">
                We believe family travel should be about making memories, not managing logistics. That's why we created RideShare Seat — to give parents the freedom to explore without the burden of bulky equipment.
              </p>
              <p className="text-xl text-gray-600 mb-8 font-body">
                Our premium, safety-certified car seats install in under 30 seconds and fit perfectly in any rideshare, taxi, or rental car — so you can focus on what matters most: your family.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30 sec</div>
                  <div className="text-gray-600">Quick Install</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Safety Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
              See How Much You Save
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-body">
              Compare the real costs of traditional car rentals vs. RideShare Seat for a 3-day family trip
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Traditional Car Rental */}
            <Card className="border-2 border-red-200 shadow-lg bg-white">
              <CardHeader className="bg-red-600 text-white p-8">
                <CardTitle className="text-3xl font-bold font-heading text-center">Traditional Car Rental</CardTitle>
                <p className="text-center text-red-100 text-xl font-body">3-Day Trip Total</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-red-200">
                    <span className="text-lg font-medium font-body">Car Rental ($79.95/day × 3)</span>
                    <span className="text-lg font-bold">$239.85</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-red-200">
                    <span className="text-lg font-medium font-body">Rental Insurance ($19.95/day × 3)</span>
                    <span className="text-lg font-bold">$59.85</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-red-200">
                    <span className="text-lg font-medium font-body">Car Seat Rental ($14.95/day × 3)</span>
                    <span className="text-lg font-bold">$44.85</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-red-200">
                    <span className="text-lg font-medium font-body">Gas (total)</span>
                    <span className="text-lg font-bold">$40.00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-red-200">
                    <span className="text-lg font-medium font-body">Hotel Parking ($45/day × 3)</span>
                    <span className="text-lg font-bold">$135.00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-red-200">
                    <span className="text-lg font-medium font-body">Additional Parking ($20/day × 3)</span>
                    <span className="text-lg font-bold">$60.00</span>
                  </div>
                  <div className="flex justify-between items-center py-6 bg-red-100 rounded-lg px-4 mt-6">
                    <span className="text-2xl font-bold font-heading text-red-800">Total Cost:</span>
                    <span className="text-3xl font-bold text-red-600">$579.55</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RideShare Seat Option */}
            <Card className="border-2 border-green-200 shadow-lg bg-white">
              <CardHeader className="bg-green-600 text-white p-8">
                <CardTitle className="text-3xl font-bold font-heading text-center">RideShare Seat</CardTitle>
                <p className="text-center text-green-100 text-xl font-body">3-Day Trip Total</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-green-200">
                    <span className="text-lg font-medium font-body">Ridesafer Vest Rental ($9.95/day × 3)</span>
                    <span className="text-lg font-bold">$29.85</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-green-200">
                    <span className="text-lg font-medium font-body">Cleaning Fee (one-time)</span>
                    <span className="text-lg font-bold">$7.95</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-green-200">
                    <span className="text-lg font-medium font-body">Ubers (4 rides/day × $15 × 3 days)</span>
                    <span className="text-lg font-bold">$180.00</span>
                  </div>
                  <div className="py-8"></div> {/* Spacer to align with the other card */}
                  <div className="flex justify-between items-center py-6 bg-green-100 rounded-lg px-4 mt-6">
                    <span className="text-2xl font-bold font-heading text-green-800">Total Cost:</span>
                    <span className="text-3xl font-bold text-green-600">$217.80</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Savings Highlight */}
          <div className="mt-12 text-center">
            <div className="bg-blue-600 p-2 rounded-lg max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-4xl font-bold font-heading text-gray-900 mb-4">You Save</h3>
                <div className="text-6xl font-bold text-green-600 mb-4">
                  $361.75
                </div>
                <p className="text-2xl text-gray-600 font-body">That's a 62% savings on your family travel costs!</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-6 font-accent font-bold shadow-lg" asChild>
              <Link to="/book">
                Start Saving Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Time Comparison Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-6">
              See How Much Time You Save
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-body">
              Renting a car seat through RideShare Seat is dramatically more convenient than traditional car rentals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Traditional Car Rental Time */}
            <Card className="border-2 border-orange-200 shadow-lg bg-white">
              <CardHeader className="bg-orange-500 text-white p-8">
                <CardTitle className="text-3xl font-bold font-heading text-center">Traditional Car Rental</CardTitle>
                <p className="text-center text-orange-100 text-xl font-body">Total Time Investment</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-orange-200">
                    <span className="text-lg font-medium font-body">Shuttle to car rental lot from airport</span>
                    <span className="text-lg font-bold">15 min</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-orange-200">
                    <span className="text-lg font-medium font-body">Time at rental counter</span>
                    <span className="text-lg font-bold">15 min</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-orange-200">
                    <span className="text-lg font-medium font-body">Finding parking (10 min/day × 3)</span>
                    <span className="text-lg font-bold">30 min</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-orange-200">
                    <span className="text-lg font-medium font-body">Walking to/from parking spots</span>
                    <span className="text-lg font-bold">20 min</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-orange-200">
                    <span className="text-lg font-medium font-body">Time refilling gas</span>
                    <span className="text-lg font-bold">10 min</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-orange-200">
                    <span className="text-lg font-medium font-body">Vehicle inspection and paperwork</span>
                    <span className="text-lg font-bold">8 min</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-orange-200">
                    <span className="text-lg font-medium font-body">Drop-off vehicle & shuttle to airport</span>
                    <span className="text-lg font-bold">25 min</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-orange-200">
                    <span className="text-lg font-medium font-body">Waiting for shuttles & navigation delays</span>
                    <span className="text-lg font-bold">12 min</span>
                  </div>
                  <div className="flex justify-between items-center py-6 bg-orange-100 rounded-lg px-4 mt-6">
                    <span className="text-2xl font-bold font-heading text-orange-800">Total Time:</span>
                    <span className="text-3xl font-bold text-orange-600">135 min</span>
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-lg font-semibold text-orange-700">That's over 2 hours!</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RideShare Seat Time */}
            <Card className="border-2 border-blue-200 shadow-lg bg-white">
              <CardHeader className="bg-blue-600 text-white p-8">
                <CardTitle className="text-3xl font-bold font-heading text-center">RideShare Seat</CardTitle>
                <p className="text-center text-blue-100 text-xl font-body">Total Time Investment</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-blue-200">
                    <span className="text-lg font-medium font-body">Retrieve car seat from smart locker in baggage claim</span>
                    <span className="text-lg font-bold">1 min</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-blue-200">
                    <span className="text-lg font-medium font-body">Install car seat (under 30 seconds each time)</span>
                    <span className="text-lg font-bold">1 min</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-blue-200">
                    <span className="text-lg font-medium font-body">Drop off car seat in ticketing area storage bin</span>
                    <span className="text-lg font-bold">1 min</span>
                  </div>
                  <div className="py-24"></div> {/* Spacer to align with the other card */}
                  <div className="flex justify-between items-center py-6 bg-blue-100 rounded-lg px-4 mt-6">
                    <span className="text-2xl font-bold font-heading text-blue-800">Total Time:</span>
                    <span className="text-3xl font-bold text-blue-600">3 min</span>
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-lg font-semibold text-blue-700">Quick & convenient!</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Time Savings Highlight */}
          <div className="mt-12 text-center">
            <div className="bg-green-600 p-2 rounded-lg max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-4xl font-bold font-heading text-gray-900 mb-4">You Save</h3>
                <div className="text-6xl font-bold text-green-600 mb-4">
                  132 Minutes
                </div>
                <p className="text-2xl text-gray-600 font-body">That's over 2 hours of your precious vacation time!</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-xl px-12 py-6 font-accent font-bold shadow-lg" asChild>
              <Link to="/book">
                Save Time Today
                <Clock className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden fees. No surprises. Just honest pricing for safe, reliable car seats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mockPricingPlans.map((plan, index) => (
              <Card key={index} className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    ${plan.price}
                  </div>
                  <div className="text-gray-500 mb-6">{plan.period}</div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              <strong>Example:</strong> 3-day Ridesafer Vest rental = $37.80 total ($9.95 × 3 days + $7.95 cleaning fee)
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/book">Calculate Your Cost</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Families Nationwide
            </h2>
            <div className="flex items-center justify-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-lg text-gray-600">4.9/5 from 12,000+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portability Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-gray-900 mb-6">
                Truly Portable. Truly Convenient.
              </h2>
              <p className="text-xl text-gray-600 mb-6 font-body">
                Our Wayb Pico car seat folds flat and weighs only 8 pounds — light enough to carry anywhere. Whether you're navigating busy airports, hopping in and out of rideshares, or exploring a new city, our portable car seats go wherever you go.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Folds completely flat for easy storage</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Includes a carrying backpack</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Only 8 lbs — lighter than most diaper bags</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Installs in under 30 seconds</span>
                </div>
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-accent font-semibold" asChild>
                <Link to="/book">
                  Book Your Seat Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <img 
                  src="https://customer-assets.emergentagent.com/job_0658cab3-6d1c-40bf-afed-bf663411f0ef/artifacts/cr41nbuc_stardust-extra-1.webp" 
                  alt="Woman carrying portable Wayb Pico car seat"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Comfort Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="relative">
                <img 
                  src="https://customer-assets.emergentagent.com/job_0658cab3-6d1c-40bf-afed-bf663411f0ef/artifacts/zgle78va_gh-extra-2.webp" 
                  alt="Happy child safely secured in car seat with mother"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold font-heading text-gray-900 mb-6">
                Safety First, Always
              </h2>
              <p className="text-xl text-gray-600 mb-6 font-body">
                Every car seat in our fleet meets or exceeds federal safety standards. Our WAYB Pico is designed with a reinforced aluminum frame and energy-absorbing side impact protection to keep your little one safe.
              </p>
              <p className="text-xl text-gray-600 mb-8 font-body">
                Plus, every seat is professionally cleaned and thoroughly inspected between rentals — so you can have complete peace of mind.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Shield className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                  <div className="text-gray-900 font-semibold">Federal Safety Certified</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-2" />
                  <div className="text-gray-900 font-semibold">Professionally Cleaned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-heading">
            Ready to Transform Your Family Travel?
          </h2>
          <p className="text-2xl text-blue-100 mb-10 font-body">
            Join thousands of families who've discovered a better way to travel. Book your car seat rental today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="text-xl px-10 py-6 bg-white text-blue-600 hover:bg-gray-100 font-accent font-semibold" asChild>
              <Link to="/book">
                <Zap className="mr-3 h-6 w-6" />
                Book Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-accent font-medium" asChild>
              <Link to="/locations">Find Locations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;