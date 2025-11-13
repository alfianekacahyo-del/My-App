import React from 'react';
import { Target, Heart, Users, BookOpen, Award, Clock } from 'lucide-react';
import { schoolInfo, programs, staff } from '../data/Mock';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-100 to-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Profil Sekolah
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mengenal lebih dekat TK Pembangunan dan komitmen kami dalam mendidik generasi penerus bangsa
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Visi Kami</h2>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {schoolInfo.vision}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Misi Kami</h2>
              </div>
              <div className="space-y-4">
                {schoolInfo.mission.map((item, index) => (
                  <div key={index} className="bg-yellow-50 p-4 rounded-xl flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Program Pembelajaran
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai program yang dirancang khusus untuk mengoptimalkan tumbuh kembang anak
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={program.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  index === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-500' :
                  index === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-500' :
                  'bg-gradient-to-br from-green-400 to-green-500'
                }`}>
                  {index === 0 ? <BookOpen className="w-8 h-8 text-white" /> :
                   index === 1 ? <Heart className="w-8 h-8 text-white" /> :
                   <Users className="w-8 h-8 text-white" />}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{program.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Usia: {program.age}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Durasi: {program.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Tim Pengajar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guru-guru berpengalaman dan berdedikasi yang siap membimbing putra-putri Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <div key={member.id} className="bg-white border-2 border-gray-100 p-8 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
                    index === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-500' :
                    index === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-500' :
                    'bg-gradient-to-br from-green-400 to-green-500'
                  }`}>
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.position}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>{member.education}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Pengalaman {member.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;