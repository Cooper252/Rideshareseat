import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { ScrollArea } from '../components/ui/scroll-area';
import { Separator } from '../components/ui/separator';
import { Badge } from '../components/ui/badge';
import { useAuth } from '../context/AuthContext';
import { Shield, AlertTriangle, FileText, CheckCircle, Download, Printer } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

const WaiverPage = () => {
  const { user } = useAuth();
  const [hasRead, setHasRead] = useState(false);
  const [agreesToTerms, setAgreesToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!hasRead || !agreesToTerms) {
      toast.error('Please read the waiver and agree to all terms');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Safety waiver signed successfully!');
    } catch (error) {
      toast.error('Failed to sign waiver. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const waiverSections = [
    {
      title: "1. Acknowledgment of Risk",
      content: `I understand that the use of car seats and child safety equipment involves inherent risks, including but not limited to the risk of injury or property damage. I acknowledge that RideShare Seat has made no warranty or representation about the absolute safety of the equipment.`
    },
    {
      title: "2. Assumption of Risk",
      content: `I voluntarily assume full responsibility for any risks of loss, property damage, or personal injury that may be sustained by me or my child(ren) as a result of using the rented car seat, whether caused by the negligence of RideShare Seat or otherwise.`
    },
    {
      title: "3. Release and Waiver of Claims",
      content: `I hereby release, waive, discharge, and covenant not to sue RideShare Seat, its owners, managers, employees, and affiliates from any and all claims, liabilities, or damages arising from or related to the use of the rented car seat.`
    },
    {
      title: "4. Proper Installation and Use",
      content: `I agree to properly install and use the car seat according to manufacturer instructions and applicable laws. I understand that improper installation or use may result in serious injury or death.`
    },
    {
      title: "5. Inspection Responsibility",
      content: `I agree to inspect the car seat upon receipt and report any defects or damage immediately. I will not use equipment that appears damaged or defective.`
    },
    {
      title: "6. Compliance with Laws",
      content: `I agree to comply with all applicable federal, state, and local laws regarding child passenger safety, including but not limited to age, weight, and height requirements for car seat use.`
    },
    {
      title: "7. Insurance and Indemnification",
      content: `I agree to indemnify and hold harmless RideShare Seat from any claims, damages, or expenses arising from my use of the rented car seat, including legal fees and court costs.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 p-4 rounded-full">
              <Shield className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Safety Waiver and Liability Agreement
          </h1>
          <p className="text-lg text-gray-600">
            Please read carefully and sign digitally to proceed with your car seat rental
          </p>
        </div>

        {/* User Status */}
        {user && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {user.first_name} {user.last_name}
                  </h3>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                {user.waiver_signed ? (
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Waiver Signed - {format(new Date(user.waiver_date), 'MMM dd, yyyy')}
                  </Badge>
                ) : (
                  <Badge variant="secondary">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Signature Required
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Waiver Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 mr-2" />
                  Liability Waiver and Release Agreement
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Important Notice */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-900 mb-2">
                        IMPORTANT LEGAL NOTICE
                      </h3>
                      <p className="text-red-800 text-sm">
                        This is a legal document that affects your rights. By signing this waiver, 
                        you are giving up certain legal rights, including the right to sue for 
                        certain claims. Please read carefully and understand all terms before signing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Waiver Content */}
                <ScrollArea className="h-96 w-full border border-gray-200 rounded-lg p-4 mb-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        WAIVER AND RELEASE OF LIABILITY
                      </h3>
                      <p className="text-gray-700 mb-4">
                        In consideration of being permitted to rent car safety equipment from RideShare Seat, 
                        I, the undersigned, acknowledge, agree and represent that:
                      </p>
                    </div>

                    {waiverSections.map((section, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 mb-2">{section.title}</h4>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          {section.content}
                        </p>
                        {index < waiverSections.length - 1 && <Separator className="my-4" />}
                      </div>
                    ))}

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        8. Governing Law and Jurisdiction
                      </h4>
                      <p className="text-gray-700 text-sm">
                        This agreement shall be governed by and construed in accordance with the laws 
                        of the State of California. Any disputes shall be resolved in the courts of 
                        Los Angeles County, California.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Safety Commitment
                      </h4>
                      <p className="text-blue-800 text-sm">
                        While this waiver limits liability, RideShare Seat remains committed to 
                        providing safe, clean, and properly maintained car seats. All equipment 
                        undergoes regular safety inspections and professional cleaning.
                      </p>
                    </div>
                  </div>
                </ScrollArea>

                {/* Signature Section */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="hasRead"
                      checked={hasRead}
                      onCheckedChange={setHasRead}
                    />
                    <label htmlFor="hasRead" className="text-sm text-gray-700">
                      I have read and understand the entire waiver and release agreement above.
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreesToTerms"
                      checked={agreesToTerms}
                      onCheckedChange={setAgreesToTerms}
                    />
                    <label htmlFor="agreesToTerms" className="text-sm text-gray-700">
                      I voluntarily agree to the terms and conditions set forth in this waiver 
                      and understand that I am giving up substantial rights by signing it.
                    </label>
                  </div>

                  {user && !user.waiver_signed && (
                    <div className="pt-4">
                      <Button
                        onClick={handleSubmit}
                        disabled={!hasRead || !agreesToTerms || isSubmitting}
                        className="w-full bg-red-600 hover:bg-red-700"
                        size="lg"
                      >
                        {isSubmitting ? 'Processing...' : 'Sign Waiver Digitally'}
                      </Button>
                    </div>
                  )}

                  {user?.waiver_signed && (
                    <div className="flex space-x-4 pt-4">
                      <Button variant="outline" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download Copy
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Printer className="h-4 w-4 mr-2" />
                        Print Copy
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Key Points */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Points</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Risk Assumption</p>
                      <p className="text-xs text-gray-600">You assume responsibility for risks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Proper Usage</p>
                      <p className="text-xs text-gray-600">Must follow manufacturer instructions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Inspection Required</p>
                      <p className="text-xs text-gray-600">Check equipment before use</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Legal Compliance</p>
                      <p className="text-xs text-gray-600">Follow all applicable safety laws</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Legal Questions</p>
                    <p className="text-xs text-gray-600">
                      Contact our legal department for clarification on any terms
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Safety Support</p>
                    <p className="text-xs text-gray-600">
                      24/7 customer support for safety-related concerns
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Contact Support
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Safety Certification */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Safety Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      All car seats meet or exceed FMVSS 213 safety standards
                    </p>
                    <Badge className="bg-green-100 text-green-800">
                      NHTSA Certified
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaiverPage;