'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "野生动物监测项目",
      description: "使用先进的监测技术对特定区域的野生动物进行长期监测",
      image: "/placeholder.jpg",
      details: [
        "项目时间：2023年",
        "监测区域：XX自然保护区",
        "监测物种：XX物种",
        "使用技术：红外相机、GPS追踪等",
      ]
    },
    // 可以添加更多项目
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">项目展示</h1>
            <p className="mt-4 text-xl text-gray-500">
              展示野外调查和研究项目的具体内容
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900">项目详情：</h4>
                  <ul className="mt-2 space-y-1">
                    {project.details.map((detail, index) => (
                      <li key={index} className="text-gray-600">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl mx-4">
            <Image
              src={selectedImage}
              alt="Project image"
              width={1200}
              height={800}
              className="rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 