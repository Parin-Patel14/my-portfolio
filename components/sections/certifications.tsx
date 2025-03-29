"use client";

import { useState } from "react";
import { AuroraButton } from "@/components/ui/aurora-button";
import { CertificateCard } from "@/components/ui/certificate-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certifications = [
    {
      id: '1',
      name: 'Data Engineering',
      issuer: 'DataCamp',
      issueDate: 'Jan 2024',
      credentialId: 'DC-123456',
      credentialUrl: 'https://www.datacamp.com/certificate/DC-123456',
      image: '/Data_engineering.png',
      description: 'Data engineering fundamentals including ETL pipelines, data warehousing, and cloud data platforms.'
    },
    {
      id: '2',
      name: 'Data Engineering Fundamentals',
      issuer: 'IBM (Coursera)',
      issueDate: 'Sep 2023',
      credentialId: 'IJKL9012',
      credentialUrl: 'https://example.com/verify/IJKL9012',
      image: '/Data_engineering.png',
      description: 'Core concepts of data engineering pipelines'
    },
    {
      id: '3',
      name: 'Data Ingestion and Processing',
      issuer: 'Udemy',
      issueDate: 'Nov 2023',
      credentialId: 'MNOP3456',
      credentialUrl: 'https://udemy.com/certificate/MNOP3456',
      image: '/Data_ingestion.png',
      description: 'Techniques for efficient data ingestion and processing pipelines'
    },
    {
      id: '4',
      name: 'Data Tools and Technologies',
      issuer: 'Pluralsight',
      issueDate: 'Oct 2023',
      credentialId: 'QRST7890',
      credentialUrl: 'https://pluralsight.com/certificate/QRST7890',
      image: '/Data_tools.png',
      description: 'Mastery of modern data tools and technologies'
    },
    {
      id: '5',
      name: 'Apache Kafka for Data Streaming',
      issuer: 'Confluent',
      issueDate: 'Aug 2023',
      credentialId: 'UVWX1234',
      credentialUrl: 'https://confluent.io/certificate/UVWX1234',
      image: '/Kafka.png',
      description: 'Building real-time data streaming applications with Apache Kafka'
    },
    {
      id: '6',
      name: 'Python for Data Science',
      issuer: 'DataCamp',
      issueDate: 'Jul 2023',
      credentialId: 'YZAB5678',
      credentialUrl: 'https://datacamp.com/certificate/YZAB5678',
      image: '/Python.png',
      description: 'Python programming for data analysis and machine learning'
    },
    {
      id: '7',
      name: 'Advanced SQL for Data Analysis',
      issuer: 'DataCamp',
      issueDate: 'Jun 2023',
      credentialId: 'CDEF9012',
      credentialUrl: 'https://datacamp.com/certificate/CDEF9012',
      image: '/SQL.png',
      description: 'Advanced SQL techniques for data analysis and database management'
    }
];

export function CertificationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <section id="certifications" className="py-36 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Certifications
          </h2>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <CertificateCard
                key={certifications[currentIndex].id}
                certificate={certifications[currentIndex]}
                className="transition-transform duration-300"
              />
            </div>

            {/* Navigation Arrows */}
            {currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all -translate-x-1/2"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            
            {currentIndex < certifications.length - 1 && (
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all translate-x-1/2"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <AuroraButton 
          onClick={() => window.open('https://drive.google.com/drive/folders/14_xpYKSG3-gp-ELcVTEqWx2g3TZ-jm4N?usp=drive_link', '_blank')}
        >
          View More
        </AuroraButton>
      </div>
    </section>
  );
}
