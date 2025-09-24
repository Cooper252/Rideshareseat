import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
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
import { mockTestimonials, mockPricingPlans } from '../mock';

const HomePage = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-pink-600" />,
      title: 'Safety First',
      description: 'All car seats meet or exceed federal safety standards with professional cleaning and inspection between each rental.'
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: 'Instant Pickup',
      description: 'Skip the rental car lines. Pick up your car seat from our smart kiosks in airport baggage claim areas.'
    },
    {
      icon: <DollarSign className="h-10 w-10 text-yellow-600" />,
      title: 'Save Money',
      description: 'Starting at just $9.95/day - significantly less expensive than traditional car rental with car seat options.'
    },
    {
      icon: <MapPin className="h-10 w-10 text-pink-600" />,
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
      <section className="relative bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50 py-24 lg:py-32">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-5xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-yellow-200 text-pink-800 px-6 py-2 text-lg font-accent font-semibold">
              <Award className="h-5 w-5 mr-3" />
              Trusted by 50,000+ Families
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-gray-900 mb-8 leading-tight">
              Travel Smarter with
              <span className="bg-gradient-to-r from-pink-600 via-blue-600 to-yellow-600 bg-clip-text text-transparent block">Portable Car Seats</span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed font-body">
              Skip expensive car rentals and travel freely with your children. Rent premium car seats from airport kiosks and use rideshares, taxis, or public transport with complete peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white text-xl px-10 py-6 shadow-lg font-accent font-semibold" asChild>
                <Link to="/book">
                  Book Now - Starting $9.95/day
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-10 py-6 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-accent font-medium" asChild>
                <Link to="/locations">View Locations</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-lg text-gray-600 font-body">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="font-medium">Safety Certified</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
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
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-3">{stat.number}</div>
                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-r from-pink-50 to-yellow-50">
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
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full">
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Travel Freedom for Modern Families
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Say goodbye to the hassle and expense of traditional car rentals. Our portable car seats give you the flexibility to choose how you travel while keeping your children safe.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link to="/book">Start Your Booking</Link>
              </Button>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop" 
                  alt="Family with car seat"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-yellow-500 to-pink-500 text-white p-8 rounded-xl shadow-2xl">
                  <div className="text-3xl font-bold">from $9.95</div>
                  <div className="text-lg opacity-90">per day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <strong>Example:</strong> 3-day Wayb Pico rental = $54.80 total ($14.95 × 3 days + $9.95 cleaning fee)
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-600 via-blue-600 to-yellow-500">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Family Travel?
          </h2>
          <p className="text-2xl text-pink-100 mb-10">
            Join thousands of families who've discovered a better way to travel. Book your car seat rental today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" variant="secondary" className="text-xl px-10 py-6 bg-white text-pink-600 hover:bg-gray-100" asChild>
              <Link to="/book">
                <Zap className="mr-3 h-6 w-6" />
                Book Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-pink-600" asChild>
              <Link to="/locations">Find Locations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;