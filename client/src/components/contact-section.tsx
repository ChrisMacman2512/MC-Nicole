import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Youtube, MessageSquare, Download } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import type { InsertContactInquiry } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      location: "",
      duration: "",
      attendees: "",
      requirements: "",
      budget: ""
    }
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent!",
        description: "Thank you for your inquiry! Nicole will get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send inquiry. Please try again.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: InsertContactInquiry) => {
    submitInquiry.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-charcoal to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">Connect with Nicole</h2>
          <div className="w-24 h-1 bg-champagne mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to make your event unforgettable? Let's discuss how Nicole can bring her expertise to your next occasion.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-6 text-champagne">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-champagne mr-4" size={24} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:nicoleadams927@gmail.com" className="text-gray-300 hover:text-champagne">
                      nicoleadams927@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-champagne mr-4" size={24} />
                  <div>
                    <div className="font-semibold">Phone / WhatsApp</div>
                    <a href="tel:+919845965597" className="text-gray-300 hover:text-champagne">
                      +91 9845965597
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-champagne mr-4" size={24} />
                  <div>
                    <div className="font-semibold">Location</div>
                    <span className="text-gray-300">Bangalore, India</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-6 text-champagne">Follow Nicole</h3>
              <div className="flex space-x-6">
                <a 
                  href="https://www.instagram.com/nicole_adams_93/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-4 rounded-lg hover:bg-champagne hover:text-black transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://youtube.com/@mcnicoleadams7762" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-4 rounded-lg hover:bg-champagne hover:text-black transition-colors"
                >
                  <Youtube size={24} />
                </a>
                <a 
                  href="https://wa.me/919845965597" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-4 rounded-lg hover:bg-champagne hover:text-black transition-colors"
                >
                  <MessageSquare size={24} />
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                "Slaying stages, serving looks, flavors & match-day opinions. Anchor/Emcee | Culinary Storyteller🍽️| Sports Girl Vibes ⚽️ Bangalore Let's collaborate!"
              </p>
            </div>
            
            {/* Media Kit Download */}
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h3 className="font-playfair text-xl font-bold mb-4 text-champagne">Professional Media Kit</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Download Nicole's complete professional brochure, photos, and service details.
              </p>
              <Button className="bg-champagne text-black hover:bg-yellow-500">
                <Download className="mr-2" size={16} />
                Download Media Kit
              </Button>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="font-playfair text-2xl font-bold mb-6 text-champagne">Event Inquiry Form</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-white/20 text-white placeholder-gray-400 border-gray-600 focus:border-champagne"
                            placeholder="Your full name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Phone *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="tel"
                            className="bg-white/20 text-white placeholder-gray-400 border-gray-600 focus:border-champagne"
                            placeholder="Your phone number"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="bg-white/20 text-white placeholder-gray-400 border-gray-600 focus:border-champagne"
                          placeholder="your.email@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Event Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/20 text-white border-gray-600 focus:border-champagne">
                              <SelectValue placeholder="Select Event Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="awards">Awards Ceremony</SelectItem>
                            <SelectItem value="product-launch">Product Launch</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Event Date</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="date"
                            className="bg-white/20 text-white placeholder-gray-400 border-gray-600 focus:border-champagne"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Location</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-white/20 text-white placeholder-gray-400 border-gray-600 focus:border-champagne"
                            placeholder="Event venue"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Duration</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/20 text-white border-gray-600 focus:border-champagne">
                              <SelectValue placeholder="Select Duration" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="2-4 hours">2-4 hours</SelectItem>
                            <SelectItem value="half-day">Half Day</SelectItem>
                            <SelectItem value="full-day">Full Day</SelectItem>
                            <SelectItem value="multi-day">Multi-day</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="attendees"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Number of Attendees</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/20 text-white border-gray-600 focus:border-champagne">
                            <SelectValue placeholder="Select Range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="50-100">50-100</SelectItem>
                          <SelectItem value="100-250">100-250</SelectItem>
                          <SelectItem value="250-500">250-500</SelectItem>
                          <SelectItem value="500+">500+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="requirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Specific Requirements</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4}
                          className="bg-white/20 text-white placeholder-gray-400 border-gray-600 focus:border-champagne"
                          placeholder="Please describe your event requirements, preferred languages, and any special requests..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Budget Range</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/20 text-white border-gray-600 focus:border-champagne">
                            <SelectValue placeholder="Select Budget Range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="budget-friendly">Budget Friendly</SelectItem>
                          <SelectItem value="mid-range">Mid Range</SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                          <SelectItem value="luxury">Luxury</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-champagne text-black py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-lg"
                  disabled={submitInquiry.isPending}
                >
                  {submitInquiry.isPending ? "Sending..." : "Send Inquiry"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
