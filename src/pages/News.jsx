import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { news } from '../data/Mock';

const News = () => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-100 to-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Berita & Kegiatan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ikuti berbagai kegiatan dan pencapaian terbaru dari TK Pembangunan
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {news.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Berita Utama</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(news[0].date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                    {news[0].title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {news[0].summary}
                  </p>
                  
                  <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-200">
                    <span>Lihat Selengkapnya</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-100 to-yellow-100 rounded-3xl p-4">
                    <img
                      src={news[0].image}
                      alt={news[0].title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All News */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Berita & Kegiatan Terbaru
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-medium text-gray-600">
                        {formatDate(item.date)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>5 min read</span>
                    </div>
                    
                    <button className="inline-flex items-center space-x-1 text-blue-500 hover:text-blue-600 transition-colors text-sm font-medium">
                      <span>Baca</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-400 to-yellow-400 rounded-3xl p-8 lg:p-12 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Jangan Lewatkan Berita Terbaru
              </h2>
              <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
                Daftarkan email Anda untuk mendapatkan update kegiatan dan informasi penting dari TK Pembangunan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-6 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 text-gray-800"
                />
                <button className="bg-white text-blue-500 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                  Berlangganan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;