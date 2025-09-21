import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Linkedin, Download, Award, Send, Phone, MapPin } from "lucide-react";
import { resumeData } from "@/data/resume-data";
import { generateResumePDF } from "@/utils/pdf-generator";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import pmpCertificate from "@/assets/pmp-certificate.pdf";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch('https://formspree.io/f/xpwaqgnj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const handleDownloadResume = () => {
    generateResumePDF();
  };

  const handleDownloadPMPCertificate = () => {
    const link = document.createElement('a');
    link.href = pmpCertificate;
    link.download = 'Suhas_Bhushan_PMP_Certificate.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center gradient-text text-enhanced" data-testid="contact-title">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-white/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Send me a message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@company.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company" {...field} data-testid="input-company" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject *</FormLabel>
                          <FormControl>
                            <Input placeholder="What's this about?" {...field} data-testid="input-subject" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project, role, or how I can help..."
                            className="min-h-[120px] resize-none"
                            {...field}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full enhanced-button bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300"
                    data-testid="button-send-message"
                  >
                    {contactMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 enhanced-icon" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-white/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-purple-600 mr-3" />
                    <a href={`mailto:${resumeData.personal.email}`} className="text-muted-foreground hover:text-purple-600 transition-colors">
                      {resumeData.personal.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-3" />
                    <a href={`tel:${resumeData.personal.phone}`} className="text-muted-foreground hover:text-purple-600 transition-colors">
                      {resumeData.personal.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-muted-foreground">Sydney, Australia</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 text-purple-600 mr-3" />
                    <a 
                      href={resumeData.personal.linkedin} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-purple-600 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg border border-white/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">Quick Downloads</h3>
                <div className="space-y-3">
                  <Button 
                    onClick={handleDownloadResume}
                    variant="outline"
                    className="w-full enhanced-button border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 shadow-md hover:shadow-lg transition-all duration-300"
                    data-testid="button-download-resume"
                  >
                    <Download className="mr-2 h-4 w-4 enhanced-icon" />
                    Download Resume
                  </Button>
                  <Button 
                    onClick={handleDownloadPMPCertificate}
                    variant="outline"
                    className="w-full enhanced-button border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 shadow-md hover:shadow-lg transition-all duration-300"
                    data-testid="button-download-pmp"
                  >
                    <Award className="mr-2 h-4 w-4 enhanced-icon glow-icon" />
                    PMP Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
