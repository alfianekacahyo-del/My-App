import React from "react";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import { contact } from "../data/Mock";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-yellow-50 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  TK PEMBANGUNAN
                </h3>
                <p className="text-sm text-blue-600">
                  Membangun Generasi Cerdas
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lembaga pendidikan anak usia dini yang berkomitmen mengembangkan
              potensi setiap anak dengan pendekatan pembelajaran yang
              menyenangkan dan berkarakter.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">{contact.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-sm text-gray-600">{contact.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-sm text-gray-600">{contact.email}</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">
              Jam Operasional
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-600">
                    Senin - Jumat: {contact.hours.weekdays}
                  </p>
                  <p className="text-gray-600">Sabtu: {contact.hours.sunday}</p>
                  <p className="text-gray-600">
                    Minggu: {contact.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2025 TK PEMBANGUNAN. All rights reserved.
              <span className="mx-2">|</span>
              Made with <Heart className="w-4 h-4 text-red-400 inline mx-1" />{" "}
              for our children
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
