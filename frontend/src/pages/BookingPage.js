import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useAuth } from '../context/AuthContext';
import { mockLocations, mockSeatTypes, calculateTotal, generateBookingId, simulateAPICall } from '../mock';
import { format, differenceInDays, addDays } from 'date-fns';
import { CalendarIcon, MapPin, Car, Users, Clock, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const BookingPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // Form state
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSeatType, setSeatSeatType] = useState('');
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [specialRequests, setSpecialRequests] = useState('');
  
  // Contact info for non-authenticated users
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  // UI state
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingCost, setBookingCost] = useState(null);

  // Redirect if not authenticated after step 2
  useEffect(() => {
    if (currentStep > 2 && !isAuthenticated) {
      toast.error('Please sign in to complete your booking');
      navigate('/login');
    }
  }, [currentStep, isAuthenticated, navigate]);

  // Calculate costs when dates change
  useEffect(() => {
    if (pickupDate && returnDate && selectedSeatType) {
      const days = differenceInDays(returnDate, pickupDate);
      if (days > 0) {
        const selectedSeat = mockSeatTypes.find(seat => seat.id === selectedSeatType);
        const dailyRate = selectedSeat ? selectedSeat.daily_rate : 14.95;
        const subtotal = days * dailyRate;
        const total = subtotal + 9.95;
        setBookingCost({
          days,
          dailyRate,
          subtotal,
          cleaningFee: 9.95,
          total
        });
      }
    }
  }, [pickupDate, returnDate, selectedSeatType]);

  const selectedLocationData = mockLocations.find(loc => loc.id.toString() === selectedLocation);
  const selectedSeatData = mockSeatTypes.find(seat => seat.id === selectedSeatType);

  const handleDateSelect = (date, type) => {
    if (type === 'pickup') {
      setPickupDate(date);
      // Auto-set return date to next day if not set
      if (!returnDate) {
        setReturnDate(addDays(date, 1));
      }
    } else {
      setReturnDate(date);
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      // Validate step 1
      if (!selectedLocation || !selectedSeatType || !pickupDate || !returnDate) {
        toast.error('Please fill in all required fields');
        return;
      }
      if (differenceInDays(returnDate, pickupDate) <= 0) {
        toast.error('Return date must be after pickup date');
        return;
      }
    }
    
    if (currentStep === 2 && !isAuthenticated) {
      // Validate contact info for non-authenticated users
      if (!contactInfo.firstName || !contactInfo.lastName || !contactInfo.email || !contactInfo.phone) {
        toast.error('Please fill in all contact information');
        return;
      }
    }
    
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await simulateAPICall(null, 2000);
      
      // Create mock booking
      const bookingId = generateBookingId();
      
      toast.success(`Booking confirmed! Your reference: ${bookingId}`);
      navigate('/dashboard');
    } catch (error) {
      toast.error('Booking failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { title: 'Trip Details', description: 'Select location, dates, and seat type' },
    { title: 'Contact Info', description: 'Provide your contact information' },
    { title: 'Review & Pay', description: 'Review booking and complete payment' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50 py-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Book Your Car Seat</h1>
          <p className="text-2xl text-gray-600">Safe, convenient, and affordable car seat rentals</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`flex items-center justify-center w-14 h-14 rounded-full border-3 text-lg font-bold ${
                  currentStep > index + 1 
                    ? 'bg-green-500 border-green-500 text-white'
                    : currentStep === index + 1
                    ? 'bg-gradient-to-r from-pink-500 to-blue-500 border-pink-500 text-white'
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > index + 1 ? (
                    <CheckCircle className="h-8 w-8" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-32 h-2 mx-6 rounded-full ${
                    currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <h2 className="text-2xl font-semibold text-gray-900">{steps[currentStep - 1].title}</h2>
            <p className="text-lg text-gray-600">{steps[currentStep - 1].description}</p>
          </div>
        </div>

        {/* Step Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Step 1: Trip Details */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    {/* Location Selection */}
                    <div>
                      <Label className="text-xl font-semibold mb-4 block">Pickup Location</Label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger className="h-14 text-lg">
                          <SelectValue placeholder="Select airport location" />
                        </SelectTrigger>
                        <SelectContent>
                          {mockLocations.map((location) => (
                            <SelectItem key={location.id} value={location.id.toString()}>
                              <div className="flex items-center">
                                <MapPin className="h-5 w-5 mr-3" />
                                {location.name} ({location.code})
                                {!location.available && (
                                  <Badge variant="secondary" className="ml-3">Unavailable</Badge>
                                )}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {selectedLocationData && (
                        <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-pink-50 rounded-xl border border-blue-200">
                          <p className="text-lg text-blue-800">
                            <strong>Location:</strong> {selectedLocationData.terminal}
                          </p>
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-lg text-blue-600">Available Inventory:</span>
                            <div className="flex space-x-6 text-lg">
                              <span>Wayb Pico: {selectedLocationData.inventory.wayb_pico}</span>
                              <span>Ridesafer Vest: {selectedLocationData.inventory.ridesafer_vest}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Date Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-base font-semibold mb-3 block">Pickup Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {pickupDate ? format(pickupDate, 'PPP') : 'Select pickup date'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={pickupDate}
                              onSelect={(date) => handleDateSelect(date, 'pickup')}
                              disabled={(date) => date < new Date() || date < new Date(new Date().setHours(0, 0, 0, 0))}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <Label className="text-base font-semibold mb-3 block">Return Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {returnDate ? format(returnDate, 'PPP') : 'Select return date'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={returnDate}
                              onSelect={(date) => handleDateSelect(date, 'return')}
                              disabled={(date) => !pickupDate || date <= pickupDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    {/* Seat Type Selection */}
                    <div>
                      <Label className="text-base font-semibold mb-3 block">Car Seat Type</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mockSeatTypes.map((seat) => (
                          <div
                            key={seat.id}
                            className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                              selectedSeatType === seat.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => setSeatSeatType(seat.id)}
                          >
                            <img src={seat.image} alt={seat.name} className="w-full h-24 object-contain rounded mb-3" />
                            <h3 className="font-semibold text-gray-900 mb-1">{seat.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{seat.age_range}</p>
                            <p className="text-xs text-gray-500 mb-2">{seat.weight_range}</p>
                            <p className="text-lg font-bold text-blue-600">${seat.daily_rate}/day</p>
                          </div>
                        ))}
                      </div>
                      {selectedSeatData && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold mb-2">Features:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {selectedSeatData.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Special Requests */}
                    <div>
                      <Label className="text-base font-semibold mb-3 block">Special Requests (Optional)</Label>
                      <Textarea
                        placeholder="Any special requirements or notes for your rental..."
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Info */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    {!isAuthenticated ? (
                      <>
                        <div className="text-center mb-6">
                          <AlertCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                          <h3 className="text-lg font-semibold mb-2">Contact Information Required</h3>
                          <p className="text-gray-600 mb-4">
                            We need your contact information to process the booking. You can also{' '}
                            <Button variant="link" className="p-0 h-auto" onClick={() => navigate('/login')}>
                              sign in
                            </Button>{' '}
                            to skip this step.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              value={contactInfo.firstName}
                              onChange={(e) => setContactInfo({...contactInfo, firstName: e.target.value})}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              value={contactInfo.lastName}
                              onChange={(e) => setContactInfo({...contactInfo, lastName: e.target.value})}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={contactInfo.email}
                              onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={contactInfo.phone}
                              onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                              required
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Contact Information Confirmed</h3>
                        <p className="text-gray-600">
                          Your account information will be used for this booking.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Review & Pay */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold mb-4">Review Your Booking</h3>
                    
                    {/* Booking Summary */}
                    <div className="space-y-4">
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <div className="font-semibold">{selectedLocationData?.name}</div>
                          <div className="text-sm text-gray-600">{selectedLocationData?.terminal}</div>
                        </div>
                      </div>

                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <Car className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <div className="font-semibold">{selectedSeatData?.name}</div>
                          <div className="text-sm text-gray-600">{selectedSeatData?.age_range} • {selectedSeatData?.weight_range}</div>
                        </div>
                      </div>

                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <Clock className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <div className="font-semibold">
                            {pickupDate && format(pickupDate, 'PPP')} - {returnDate && format(returnDate, 'PPP')}
                          </div>
                          <div className="text-sm text-gray-600">{bookingCost?.days} days</div>
                        </div>
                      </div>

                      {specialRequests && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="font-semibold mb-1">Special Requests:</div>
                          <div className="text-sm text-gray-600">{specialRequests}</div>
                        </div>
                      )}
                    </div>

                    {/* Payment Section */}
                    <div className="border-t pt-6">
                      <h4 className="text-lg font-semibold mb-4">Payment Information</h4>
                      <div className="p-4 bg-blue-50 rounded-lg mb-4">
                        <p className="text-sm text-blue-800">
                          <strong>Note:</strong> This is a demo booking. Stripe integration will process real payments in the production version.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <Label>Cardholder Name</Label>
                          <Input placeholder="John Doe" />
                        </div>
                        <div>
                          <Label>Card Number</Label>
                          <Input placeholder="4242 4242 4242 4242" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label>Expiry Date</Label>
                            <Input placeholder="MM/YY" />
                          </div>
                          <div>
                            <Label>CVC</Label>
                            <Input placeholder="123" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  {currentStep > 1 && (
                    <Button variant="outline" onClick={handleBack}>
                      Back
                    </Button>
                  )}
                  <div className="ml-auto">
                    {currentStep < 3 ? (
                      <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700">
                        Continue
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleSubmit} 
                        disabled={isSubmitting}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        {isSubmitting ? 'Processing...' : 'Complete Booking'}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Booking Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                {bookingCost ? (
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Daily rate × {bookingCost.days} days</span>
                      <span>${bookingCost.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cleaning fee</span>
                      <span>${bookingCost.cleaningFee.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span>${bookingCost.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <Clock className="h-8 w-8 mx-auto mb-2" />
                    <p>Select dates to see pricing</p>
                  </div>
                )}

                {selectedLocationData && selectedSeatData && (
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <h4 className="font-semibold">Selection Summary:</h4>
                    <div className="text-sm space-y-1">
                      <p><strong>Location:</strong> {selectedLocationData.code}</p>
                      <p><strong>Seat:</strong> {selectedSeatData.name}</p>
                      {pickupDate && returnDate && (
                        <p><strong>Duration:</strong> {differenceInDays(returnDate, pickupDate)} days</p>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;