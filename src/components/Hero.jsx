import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-300 rounded-full opacity-40 animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Selamat Datang di{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">
                  TK PEMBANGUNAN
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Membangun generasi cerdas dan berakhlak mulia melalui pendidikan 
                berkualitas dengan pendekatan pembelajaran yang menyenangkan.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">150+</div>
                <div className="text-sm text-gray-600">Siswa Aktif</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <BookOpen className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">15</div>
                <div className="text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <Star className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">4.9</div>
                <div className="text-sm text-gray-600">Rating Orang Tua</div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                to="/profil"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Lihat Profil Sekolah</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-200 to-blue-200 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop"
                alt="Anak-anak belajar di TK Pembangunan"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;