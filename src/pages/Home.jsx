import React from "react";
import Hero from "../components/Hero";
import TestimonialsSection from "../components/TestimonialsSection";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Users, BookOpen } from "lucide-react";
import { schoolInfo } from "../data/Mock";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                  Tentang TK Pembangunan
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {schoolInfo.vision}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Pembelajaran Berkualitas
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Metode pembelajaran yang disesuaikan dengan perkembangan
                      anak usia dini
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Lingkungan Ramah Anak
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Fasilitas yang aman dan nyaman untuk mendukung tumbuh
                      kembang anak
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Guru Berpengalaman
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Tim pengajar yang profesional dan berpengalaman dalam
                      pendidikan anak
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  to="/profil"
                  className="inline-flex items-center space-x-2 text-blue-500 font-semibold hover:text-blue-600 transition-colors"
                >
                  <span>Pelajari lebih lanjut</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop"
                  alt="Suasana pembelajaran di TK Pembangunan"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Program Unggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai program pembelajaran yang dirancang khusus untuk
              mengembangkan potensi anak
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Program PAUD
              </h3>
              <p className="text-gray-600 mb-4">
                Program pembelajaran untuk anak usia 3-4 tahun dengan fokus pada
                pengembangan motorik dan sosial
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Usia 3-4 tahun • 3 jam/hari
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Kelas Kreatif
              </h3>
              <p className="text-gray-600 mb-4">
                Program pengembangan kreativitas melalui seni, musik, dan
                eksplorasi
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Usia 4-5 tahun • 4 jam/hari
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Seni & Musik
              </h3>
              <p className="text-gray-600 mb-4">
                Program khusus untuk mengembangkan bakat seni dan musik anak
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Usia 3-6 tahun • 2 jam/hari
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/profil"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Lihat Semua Program</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
};

export default Home;
