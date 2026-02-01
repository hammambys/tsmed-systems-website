import React from "react";
import { Linkedin, Twitter, Mail, Phone } from "lucide-react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Logo className="h-50 md:h-20" url="/logo-full.png" />
            <p className="text-slate-500 leading-relaxed mb-6">
              Ensuring medical device excellence through modern tracking and
              compliance technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Solution</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-600 hover:text-secondary">
                  Asset Management
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-secondary">
                  Compliance Engine
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-secondary">
                  Audit Readiness
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-secondary">
                  Maintenance Scheduling
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-600 hover:text-secondary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-secondary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-secondary">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-600">
                <Mail size={16} className="mr-2" /> hello@tsmed.systems
              </li>
              <li className="flex items-center text-slate-600">
                <Phone size={16} className="mr-2" /> +1 (800) 555-MED-TECH
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2024 TSMED Systems Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
