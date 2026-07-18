import { motion } from "motion/react";
import { Phone, MessageCircle, Mail, MapPin, CheckCircle2, GraduationCap, Users, BookOpen, Clock, Award, Star, ChevronDown, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Feature, Subject, Testimonial, FAQItem, Stat } from "./types";

export const features: Feature[] = [
  { title: "Expert Teachers", icon: "GraduationCap" },
  { title: "Regular Tests", icon: "BookOpen" },
  { title: "Study Material", icon: "Award" },
  { title: "Doubt Classes", icon: "MessageCircle" },
  { title: "Small Batch Size", icon: "Users" },
  { title: "Parent Updates", icon: "Clock" },
];

export const subjects: Subject[] = [
  { name: "Mathematics", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop", color: "bg-blue-600" },
  { name: "Physics", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", color: "bg-purple-600" },
  { name: "Chemistry", image: "https://images.unsplash.com/photo-1532634896-26909d0d4b89?q=80&w=800&auto=format&fit=crop", color: "bg-emerald-600" },
  { name: "Biology", image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=800&auto=format&fit=crop", color: "bg-rose-600" },
];

export const whyChooseUs = [
  "Experienced Faculty",
  "Small Batch Size",
  "Weekly Mock Tests",
  "Individual Attention",
  "Affordable Fees",
  "Concept Based Learning",
  "Exam Oriented Preparation",
  "Friendly Environment",
];

export const testimonials: Testimonial[] = [
  {
    name: "Rahul Sharma",
    role: "Class XII Student",
    content: "Poddar's Classes transformed my understanding of Physics. The doubt clearing sessions are exceptional.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Priya Das",
    role: "Class X Student",
    content: "The best coaching in Raiganj. Teachers are very friendly and explain everything in detail.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Class XII Student",
    content: "I secured 95% in Mathematics thanks to the regular test series and personal guidance here.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
];

export const faqs: FAQItem[] = [
  { question: "What classes do you offer?", answer: "We offer classes for students from Grade VI to XII." },
  { question: "Do you provide study material?", answer: "Yes, we provide comprehensive, exam-oriented study materials for all subjects." },
  { question: "Are there regular tests?", answer: "Yes, we conduct weekly mock tests and regular assessment series to track progress." },
  { question: "What is the batch size?", answer: "We maintain small batch sizes to ensure individual attention for every student." },
];

export const stats: Stat[] = [
  { label: "Students Enrolled", value: "500+" },
  { label: "Success Rate", value: "98%" },
  { label: "Expert Faculty", value: "15+" },
  { label: "Years of Excellence", value: "10+" },
];

export const heroBackgrounds = [
  "/gallery/hero_1.jpg",
  "/gallery/hero_2.jpg",
  "/gallery/hero_3.jpg",
  "/gallery/hero_4.jpg",
  "/gallery/hero_5.jpg",
  "/gallery/hero_6.jpg",
  "/gallery/hero_7.jpg",
  "/gallery/img_8.jpg",
  "/gallery/img_9.jpg",
  "/gallery/img_10.jpg",
  "/gallery/img_11.jpg",
  "/gallery/img_12.jpg",
];

export const galleryImages = [
  { url: "/gallery/hero_1.jpg", title: "Class Session" },
  { url: "/gallery/hero_2.jpg", title: "Student Interaction" },
  { url: "/gallery/hero_3.jpg", title: "Learning Environment" },
  { url: "/gallery/hero_4.jpg", title: "Success Stories" },
  { url: "/gallery/hero_5.jpg", title: "Achievers" },
  { url: "/gallery/hero_6.jpg", title: "Campus Life" },
  { url: "/gallery/hero_7.jpg", title: "Faculty Team" },
  { url: "/gallery/img_8.jpg", title: "Class Activities" },
  { url: "/gallery/img_9.jpg", title: "Workshop" },
  { url: "/gallery/img_10.jpg", title: "Group Discussion" },
  { url: "/gallery/img_11.jpg", title: "Lab Session" },
  { url: "/gallery/img_12.jpg", title: "Library" },
];
