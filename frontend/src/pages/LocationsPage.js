import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { mockLocations } from '../mock';
import { MapPin, Clock, Car, Search, CheckCircle, XCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const LocationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredLocations = mockLocations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getInventoryStatus = (inventory) => {
    const total = inventory.toddler + inventory.booster + inventory.convertible;
    if (total === 0) return { status: 'unavailable', text: 'Unavailable', color: 'bg-red-100 text-red-800' };
    if (total < 5) return { status: 'low', text: 'Low Stock', color: 'bg-yellow-100 text-yellow-800' };
    return { status: 'available', text: 'Available', color: 'bg-green-100 text-green-800' };
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find RideShare Seat kiosks at major airports nationwide. All locations feature 24/7 access with real-time inventory updates.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{mockLocations.length}</div>
              <div className="text-gray-600">Total Locations</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {mockLocations.filter(loc => loc.available).length}
              </div>
              <div className="text-gray-600">Currently Available</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Kiosk Access</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {mockLocations.reduce((total, loc) => 
                  total + loc.inventory.toddler + loc.inventory.booster + loc.inventory.convertible, 0
                )}
              </div>
              <div className="text-gray-600">Total Seats Available</div>
            </CardContent>
          </Card>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLocations.map((location) => {
            const inventoryStatus = getInventoryStatus(location.inventory);
            return (
              <Card key={location.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{location.code}</CardTitle>
                      <h3 className="text-lg text-gray-700 font-medium">{location.name}</h3>
                    </div>
                    <Badge className={inventoryStatus.color}>
                      {location.available ? (
                        <CheckCircle className="h-4 w-4 mr-1" />
                      ) : (
                        <XCircle className="h-4 w-4 mr-1" />
                      )}
                      {inventoryStatus.text}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div className="text-sm text-gray-600">
                        <div>{location.address}</div>
                        <div className="font-medium text-gray-800 mt-1">{location.terminal}</div>
                      </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <span className="text-sm text-gray-600">24/7 Kiosk Access</span>
                    </div>

                    {/* Inventory */}
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Car className="h-5 w-5 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">Current Inventory</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div className="bg-gray-50 p-2 rounded text-center">
                          <div className="font-semibold text-gray-900">{location.inventory.toddler}</div>
                          <div className="text-gray-600">Toddler</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded text-center">
                          <div className="font-semibold text-gray-900">{location.inventory.booster}</div>
                          <div className="text-gray-600">Booster</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded text-center">
                          <div className="font-semibold text-gray-900">{location.inventory.convertible}</div>
                          <div className="text-gray-600">Convertible</div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t">
                      <div className="flex space-x-2">
                        <Button 
                          className="flex-1 bg-blue-600 hover:bg-blue-700" 
                          size="sm"
                          disabled={!location.available}
                          asChild
                        >
                          <Link to="/book">
                            Book Here
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {!location.available && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-sm text-red-800">
                          This location is temporarily unavailable. Please check back later or contact support.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No locations found</h3>
            <p className="text-gray-500">Try adjusting your search terms or check back later for new locations.</p>
          </div>
        )}

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Expanding Soon</h2>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <p className="text-lg text-gray-600 mb-6">
              We're rapidly expanding to serve more families nationwide. Coming soon to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-gray-600">
                <strong>Atlanta (ATL)</strong><br />
                <small>Q4 2024</small>
              </div>
              <div className="text-gray-600">
                <strong>Denver (DEN)</strong><br />
                <small>Q4 2024</small>
              </div>
              <div className="text-gray-600">
                <strong>Seattle (SEA)</strong><br />
                <small>Q1 2025</small>
              </div>
            </div>
            <Button variant="outline">Get Notified of New Locations</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;