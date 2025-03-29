"use client";

import React from "react";
import { Gallery6 } from "@/components/gallery6";

export function ProjectsSection() {
  const projects = [
    {
      title: "Classification using Deep Learning",
      period: "2023",
      description: "Developed deep learning models for image classification using PyTorch.",
      contributions: [
        "Implemented CNN architectures for image classification tasks",
        "Achieved 95% accuracy on CIFAR-10 dataset",
        "Developed data augmentation pipelines to improve model robustness"
      ],
      skills: [
        "Python", 
        "PyTorch", 
        "Deep Learning", 
        "Computer Vision", 
        "Data Augmentation", 
        "Model Optimization"
      ],
      image: "/Pytorch_DL.png",
      githubUrl: "https://github.com/Parin-Patel14/Wonders-Classification-DeepLearning"
    },
    {
      title: "Mental Health Dynamics Analysis",
      period: "2023",
      description: "Investigated the impact of personality traits and demographics on mental health using machine learning and statistical analysis.",
      contributions: [
        "Processed and analyzed DASS survey data, removing outliers and ensuring data integrity",
        "Developed predictive models (Logistic Regression, Random Forest, SVM) achieving 78% precision and 96% recall",
        "Conducted ANOVA in SPSS, confirming significant correlations between demographic factors and mental health scores"
      ],
      skills: [
        "Python", 
        "SQL", 
        "C/C++", 
        "Embedded C", 
        "MATLAB", 
        "Machine Learning (Linear/Logistic Regression)", 
        "Data Analysis (NumPy, Pandas, Matplotlib, SciPy, Scikit-learn)",
        "Jupyter Notebook", 
        "PyCharm", 
        "Proteus", 
        "Arduino IDE", 
        "Atmel Studio", 
        "Google Colaboratory", 
        "Microsoft Office"
      ],
      image: "/Data_analysis.png",
      githubUrl: "https://github.com/Parin-Patel14/Mental-Health-Dynamics-Analysis"
    },
    {
      title: "Loan Eligibility Prediction System",
      period: "2023",
      description: "Built a machine learning-driven system to automate and optimize loan eligibility assessment.",
      contributions: [
        "Processed 4,269 data points, handled missing values, and normalized features",
        "Trained and compared multiple models, with XGBoost improving accuracy by 12%",
        "Developed Flask-based web application hosted on AWS EC2"
      ],
      skills: [
        "Python", 
        "SQL", 
        "C/C++", 
        "Embedded C", 
        "MATLAB", 
        "Machine Learning (Linear/Logistic Regression)", 
        "Data Analysis (NumPy, Pandas, Matplotlib, SciPy, Scikit-learn)",
        "Jupyter Notebook", 
        "PyCharm", 
        "Proteus", 
        "Arduino IDE", 
        "Atmel Studio", 
        "Google Colaboratory", 
        "Microsoft Office"
      ],
      image: "/Loan.png",
      githubUrl: "https://github.com/Parin-Patel14/Loan-Eligibility-Prediction"
    },
    {
      title: "AI-Powered Sudoku Solver",
      period: "2023",
      description: "Developed an AI-based Sudoku solver using multiple search algorithms.",
      contributions: [
        "Implemented and compared DFS, IDS, CSP, and BFS algorithms",
        "BFS achieved fastest solving time of 0.01 to 0.14 seconds for simpler puzzles",
        "Developed interactive Pygame-based GUI for visualization"
      ],
      skills: [
        "Python", 
        "SQL", 
        "C/C++", 
        "Embedded C", 
        "MATLAB", 
        "Machine Learning (Linear/Logistic Regression)", 
        "Data Analysis (NumPy, Pandas, Matplotlib, SciPy, Scikit-learn)",
        "Jupyter Notebook", 
        "PyCharm", 
        "Proteus", 
        "Arduino IDE", 
        "Atmel Studio", 
        "Google Colaboratory", 
        "Microsoft Office"
      ],
      image: "/Ai_Sudoku.jpg",
      githubUrl: "https://github.com/Parin-Patel14/AI-Powered-Sudoku-Solver"
    },
    {
      title: "Fake News Detection System",
      period: "2023",
      description: "Developed machine learning models to classify news articles as real or fake.",
      contributions: [
        "Processed 20,800 labeled news articles using TF-IDF vectorization",
        "Achieved 99% accuracy using XGBoost model",
        "Improved Logistic Regression accuracy from 49% to 98% through advanced preprocessing"
      ],
      skills: [
        "Python", 
        "SQL", 
        "C/C++", 
        "Embedded C", 
        "MATLAB", 
        "Machine Learning (Linear/Logistic Regression)", 
        "Data Analysis (NumPy, Pandas, Matplotlib, SciPy, Scikit-learn)",
        "Jupyter Notebook", 
        "PyCharm", 
        "Proteus", 
        "Arduino IDE", 
        "Atmel Studio", 
        "Google Colaboratory", 
        "Microsoft Office"
      ],
      image: "/ML.jpeg",
      githubUrl: "https://github.com/Parin-Patel14/Fake-News-Prediction"
    },
    {
      title: "Deep Learning-Based Semantic Segmentation",
      period: "2023",
      description: "Developed DeepLabV3-based model for segmenting doors and stairs in images.",
      contributions: [
        "Trained on 200 annotated images using PyTorch",
        "Achieved 83% pixel-wise accuracy and 63% mIoU",
        "Implemented data augmentation and normalization techniques"
      ],
      skills: [
        "Python", 
        "SQL", 
        "C/C++", 
        "Embedded C", 
        "MATLAB", 
        "Machine Learning (Linear/Logistic Regression)", 
        "Data Analysis (NumPy, Pandas, Matplotlib, SciPy, Scikit-learn)",
        "Jupyter Notebook", 
        "PyCharm", 
        "Proteus", 
        "Arduino IDE", 
        "Atmel Studio", 
        "Google Colaboratory", 
        "Microsoft Office"
      ],
      image: "/Pytorch.jpg",
      githubUrl: "https://github.com/Parin-Patel14/Semantic-Segmentation-DeepLabV3"
    },
    {
      title: "Biomedical Named Entity Recognition",
      period: "2023",
      description: "Developed NER model for biomedical text processing using BioBERT and CRF.",
      contributions: [
        "Achieved 89.7% F1 score on BC5CDR dataset",
        "Implemented BioBERT with CRF for entity boundary detection",
        "Integrated ClearML for experiment tracking and model versioning"
      ],
      skills: [
        "Python", 
        "SQL", 
        "C/C++", 
        "Embedded C", 
        "MATLAB", 
        "Machine Learning (Linear/Logistic Regression)", 
        "Data Analysis (NumPy, Pandas, Matplotlib, SciPy, Scikit-learn)",
        "Jupyter Notebook", 
        "PyCharm", 
        "Proteus", 
        "Arduino IDE", 
        "Atmel Studio", 
        "Google Colaboratory", 
        "Microsoft Office"
      ],
      image: "/NER.jpg",
      githubUrl: "https://github.com/Parin-Patel14/Biomedical-NER"
    }
  ];

  const galleryItems = projects.map((project) => ({
    id: project.title.toLowerCase().replace(/ /g, '-'),
    title: project.title,
    summary: project.description,
    url: projects.find(p => p.title === project.title)?.githubUrl || "#",
    image: project.image
  }));

  return (
    <section id="projects" className="py-36 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>
        
        <Gallery6 
          items={galleryItems}
        />
      </div>
    </section>
  );
}
