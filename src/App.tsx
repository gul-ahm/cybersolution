import React, { Suspense, lazy } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, BookOpen, Clock, Users, Mail, Phone, MapPin, ArrowRight, Shield, Calculator } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const CurriculumPage = lazy(() => import('./CurriculumPage'));

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );
}

function HomePage() {
  const { scrollYProgress } = useScroll();
  
  const timeline = [
    {
      year: '2024',
      title: 'ADCA Program Launch',
      description: 'Advanced computer applications training program begins',
      courseId: 'adca'
    },
    {
      year: '2024',
      title: 'CEH Certification',
      description: 'Certified Ethical Hacker program launches',
      courseId: 'ceh'
    },
    {
      year: '2024',
      title: 'Bug Bounty Program',
      description: 'Professional bug hunting training begins',
      courseId: 'bugbounty'
    },
    {
      year: '2024',
      title: 'CHFI Certification',
      description: 'Computer Hacking Forensic Investigator certification program',
      courseId: 'chfi'
    },
    {
      year: '2024',
      title: 'C|CISO V3 Program',
      description: 'Certified Chief Information Security Officer program begins',
      courseId: 'cciso'
    },
    {
      year: '2024',
      title: 'DFA Program Launch',
      description: 'Diploma in Financial Accounting program starts',
      courseId: 'dfa'
    }
  ];

  const courses = [
    {
      title: 'ADCA',
      subtitle: 'Advance Diploma in Computer Application',
      duration: '12 months',
      icon: <GraduationCap className="w-6 h-6" />,
      description: 'Comprehensive training in advanced computer applications',
      courseId: 'adca'
    },
    {
      title: 'CEH',
      subtitle: 'Certified Ethical Hacker',
      duration: '3 months',
      icon: <Shield className="w-6 h-6" />,
      description: 'Master ethical hacking and penetration testing',
      courseId: 'ceh'
    },
    {
      title: 'Bug Bounty',
      subtitle: 'Professional Bug Hunting Program',
      duration: '2 months',
      icon: <Shield className="w-6 h-6" />,
      description: 'Learn web application security testing and bug hunting',
      courseId: 'bugbounty'
    },
    {
      title: 'C|CISO V3',
      subtitle: 'Certified Chief Information Security Officer',
      duration: '6 months',
      icon: <Shield className="w-6 h-6" />,
      description: 'Advanced certification for information security leaders',
      courseId: 'cciso'
    },
    {
      title: 'CHFI',
      subtitle: 'Computer Hacking Forensic Investigator',
      duration: '6 months',
      icon: <Shield className="w-6 h-6" />,
      description: 'Master computer forensics and cybercrime investigation',
      courseId: 'chfi'
    },
    {
      title: 'DFA',
      subtitle: 'Diploma in Financial Accounting',
      duration: '6 months',
      icon: <Calculator className="w-6 h-6" />,
      description: 'Master financial accounting and taxation',
      courseId: 'dfa'
    }
  ];

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
        >
          <div className="max-w-4xl px-6">
            <motion.h1 
              className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Deepak Cyber Solution
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-4"
            >
              AN ISO 9001:2015 CERTIFIED ORGANIZATION
            </motion.p>
            <motion.p 
              className="text-lg text-gray-300 mb-2"
            >
              CERTIFICATION N : EC5AA48D
            </motion.p>
            <motion.p 
              className="text-2xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering Future Tech Leaders
            </motion.p>
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={() => {
                const coursesSection = document.querySelector('#courses');
                coursesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Programs
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.section 
        className="py-20 px-6"
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            {...fadeInUp}
          >
            About Us
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Campus" 
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Excellence in IT Education & Professional Training</h3>
              <p className="text-gray-600 mb-6">
                At Deepak Cyber Solution, we provide industry-leading IT education and professional certification programs.
                Our courses are designed to equip students with practical skills and knowledge required in today's
                digital world.
              </p>
              <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  { icon: <GraduationCap className="w-8 h-8 text-blue-600" />, text: "Expert Instructors" },
                  { icon: <Clock className="w-8 h-8 text-blue-600" />, text: "Flexible Schedule" },
                  { icon: <Users className="w-8 h-8 text-blue-600" />, text: "Small Classes" },
                  { icon: <Shield className="w-8 h-8 text-blue-600" />, text: "Industry Certifications" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    variants={fadeInUp}
                  >
                    {item.icon}
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="courses"
        className="py-20 bg-gray-100 px-6"
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            {...fadeInUp}
          >
            Our Courses
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {courses.map((course, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="text-blue-600 mb-4">{course.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
                <h4 className="text-lg text-gray-600 mb-3">{course.subtitle}</h4>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <motion.a
                    href={`/curriculum/${course.courseId}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="py-20 px-6"
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            {...fadeInUp}
          >
            Course Timeline
          </motion.h2>
          <div className="relative">
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-8`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-1/2 px-8">
                  <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="text-blue-600 font-bold">{item.year}</span>
                    <h3 className="text-xl font-semibold my-2">{item.title}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <motion.a
                      href={`/curriculum/${item.courseId}`}
                      className={`flex items-center gap-2 text-blue-600 hover:text-blue-800 ${index % 2 === 0 ? 'ml-auto' : ''}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Curriculum</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
                <motion.div 
                  className="w-8 h-8 absolute left-1/2 -ml-4 rounded-full bg-blue-600 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                />
                <div className="w-1/2"></div>
              </motion.div>
            ))}
            <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-gray-200 -z-10"></div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-20 bg-gray-900 text-white px-6"
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            {...fadeInUp}
          >
            Contact Us
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: <Mail className="w-8 h-8 text-blue-400" />, title: "Email", content: "deepakcybersolution@gmail.com" },
              { icon: <Phone className="w-8 h-8 text-blue-400" />, title: "Phone", content: "01169650140" },
              { 
                icon: <MapPin className="w-8 h-8 text-blue-400" />, 
                title: "Address", 
                content: "Babugaon, Matwari, Hazaribagh, Jharkhand - 825301" 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-4"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                {item.icon}
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-300">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/curriculum/:courseId" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <CurriculumPage />
            </Suspense>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;