import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(()=> {
            
        },1500);
    }
  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="ContactUs">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground  mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I am always open to discuss about new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail size={20} className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:Sandy31524@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Sandy31524@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone size={20} className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="mailto:Sandy31524@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    +91 9628376437
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin size={20} className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Location</h4>
                  <a
                    href="mailto:Sandy31524@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Transport Nagar ,Lucknow (UP)
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 ">
              <h4 className="font-medium mb-4">Connect with Me</h4>
              <div className="flex  space-x-4 justify-center">
                <a href="" className="text-primary">
                  <Linkedin />
                </a>
                <a href="" className="text-primary">
                  <Twitter />
                </a>
                <a href="" className="text-primary">
                  <Github />
                </a>
                <a href="" className="text-primary">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form action="" className="space-y-6 ">
              <div>
                <label htmlFor="name" className="mb-2 text-sm font-medium block">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  required
                  placeholder="Amit Sharma..."
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 text-sm font-medium block">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  required
                  placeholder="123@example.com"
                />
              </div>
              <div>
                <label htmlFor="name" className="mb-2 text-sm font-medium block">Your Message</label>
                <textarea
                  id="message"  
                  name="message"
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  required
                  placeholder="Hi,I would like to talk about...."
                />
              </div>
              <button className={cn("cosmic-button w-full flex items-center justify-center gap-2")} 
              type="submit">
                Send Message{" "}
                    <Send size={16}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
