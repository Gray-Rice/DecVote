import React from "react";
import {
  CalendarDays,
  Users,
  Bed,
  Stethoscope,
  ClipboardList,
  UserCheck,
} from "lucide-react";
import NavBar from "./NavBar";

const features = [
  {
    icon: CalendarDays,
    title: "Transparency",
    description: "All votes are recorded on a public ledger",
  },
  {
    icon: Users,
    title: "Security",
    description: "Cryptographic techniques, such as hashing and digital signatures",
  },
  {
    icon: Stethoscope,
    title: "Immutability",
    description: "Once a vote is cast and recorded on the blockchain, it cannot be altered",
  },
  {
    icon: Bed,
    title: " Decentralization",
    description: "No single entity has control over the system",
  },
  {
    icon: ClipboardList,
    title: "Scalability",
    description: "Capable of handling large-scale elections with millions of voters",
  },
  {
    icon: UserCheck,
    title: "Real-time Results",
    description: "Votes are counted automatically as they are recorded",
  },
];



const Feature = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
    <Icon className="w-12 h-12 text-indigo-500 mb-4" />
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const AboutPage = () => {
 
  

  return (
    <div>
    <NavBar />
     <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
       <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
        Powerful Features
      </h2>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
          <Feature key={index} {...feature} />
         ))}
        </div>
    </div>
   </section>


  </div>
  );
};

export default AboutPage;
