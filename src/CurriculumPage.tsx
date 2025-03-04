import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, BookOpen, Users, Target, Shield, Calculator, Award, Tag, FileText } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const courseData = {
  'adca': {
    title: 'ADCA (Advance Diploma in Computer Application)',
    duration: '12 months',
    description: 'Comprehensive training in advanced computer applications and modern technology.',
    fees: {
      regular: 12999,
      discounted: 10400,
      entranceDiscount: 2599
    },
    modules: [
      {
        title: 'Introduction to Computing',
        duration: '8 weeks',
        topics: ['Computer Fundamentals', 'Operating Systems', 'Hardware Components', 'Software Applications']
      },
      {
        title: 'Office Applications',
        duration: '12 weeks',
        topics: ['MS Word Advanced', 'Excel Data Analysis', 'PowerPoint Presentations', 'Database Management']
      },
      {
        title: 'Internet & Web Technologies',
        duration: '8 weeks',
        topics: ['Web Fundamentals', 'Email Management', 'Cloud Computing', 'Online Security']
      },
      {
        title: 'Programming Basics',
        duration: '12 weeks',
        topics: ['Basic Programming Concepts', 'Problem Solving', 'Algorithm Development', 'Simple Applications']
      }
    ]
  },
  'cciso': {
    title: 'C|CISO V3 (Certified Chief Information Security Officer)',
    duration: '6 months',
    description: 'Advanced certification program for information security leaders and executives.',
    fees: {
      regular: 12999,
      discounted: 10400,
      entranceDiscount: 2599
    },
    modules: [
      {
        title: 'Governance & Risk Management',
        duration: '4 weeks',
        topics: ['Security Strategy', 'Policy Development', 'Risk Assessment', 'Compliance Management']
      },
      {
        title: 'Information Security Controls',
        duration: '4 weeks',
        topics: ['Access Control', 'Network Security', 'Cloud Security', 'Data Protection']
      },
      {
        title: 'Security Program Management',
        duration: '4 weeks',
        topics: ['Project Management', 'Resource Planning', 'Team Leadership', 'Vendor Management']
      },
      {
        title: 'Strategic Planning & Finance',
        duration: '4 weeks',
        topics: ['Budget Planning', 'ROI Analysis', 'Strategic Alignment', 'Performance Metrics']
      }
    ]
  },
  'chfi': {
    title: 'EC-Council Computer Hacking Forensic Investigator',
    duration: '6 months',
    description: 'Master the skills of computer forensics investigation and cybercrime analysis.',
    fees: {
      regular: 12999,
      discounted: 10400,
      entranceDiscount: 2599
    },
    modules: [
      {
        title: 'Forensics in Today\'s World',
        duration: '4 weeks',
        topics: [
          'Fundamentals of Computer Forensics',
          'Cybercrimes and Investigation Procedures',
          'Digital Evidence',
          'Forensic Readiness & Incident Response',
          'SOC Role & Responsibilities',
          'Cybercrime Investigation Challenges',
          'Legal Compliance in Computer Forensics'
        ]
      },
      {
        title: 'Computer Forensics Investigation Process',
        duration: '4 weeks',
        topics: [
          'Forensic Investigation Process',
          'Pre-investigation Phase',
          'First Response',
          'Post-investigation Phase'
        ]
      },
      {
        title: 'Understanding Hard Disk and File Systems',
        duration: '6 weeks',
        topics: [
          'Types of Disk Drives',
          'Logical Disk Structure',
          'Windows/Linux/Mac Booting Process',
          'File Systems Analysis',
          'Autopsy & Sleuth Kit Tools',
          'Storage Systems',
          'Encoding Standards & Hex Editors',
          'File Format Analysis'
        ]
      },
      {
        title: 'Data Acquisition and Duplication',
        duration: '6 weeks',
        topics: [
          'Data Acquisition Methods',
          'Evidence Handling',
          'Disk Imaging',
          'Write Blocking',
          'Chain of Custody',
          'Documentation Procedures'
        ]
      }
    ]
  },
  'dfa': {
    title: 'DFA (Diploma in Financial Accounting)',
    duration: '6 months',
    description: 'Comprehensive program covering financial accounting principles and practices.',
    fees: {
      regular: 12999,
      discounted: 10400,
      entranceDiscount: 2599
    },
    modules: [
      {
        title: 'Fundamentals of Accounting',
        duration: '4 weeks',
        topics: ['Basic Accounting Principles', 'Journal Entries', 'Ledger Accounts', 'Trial Balance']
      },
      {
        title: 'Financial Statements',
        duration: '4 weeks',
        topics: ['Income Statement', 'Balance Sheet', 'Cash Flow Statement', 'Financial Analysis']
      },
      {
        title: 'Computerized Accounting',
        duration: '4 weeks',
        topics: ['Tally Fundamentals', 'GST in Tally', 'Financial Reports', 'Bank Reconciliation']
      },
      {
        title: 'Taxation & Compliance',
        duration: '4 weeks',
        topics: ['Income Tax Basics', 'GST Fundamentals', 'TDS/TCS', 'Statutory Compliance']
      }
    ]
  },
  'ceh': {
    title: 'CEH (Certified Ethical Hacking)',
    duration: '3 months',
    description: 'Comprehensive training in ethical hacking and penetration testing methodologies.',
    fees: {
      regular: 12999,
      discounted: 10400,
      entranceDiscount: 2599
    },
    modules: [
      {
        title: 'Introduction and Fundamentals',
        duration: '1 week',
        topics: [
          'Information Security Overview',
          'Information Security Threats and Attack Vectors',
          'Hacking Concepts',
          'Ethical Hacking Concepts',
          'Information Security Controls',
          'Penetration Testing Concepts',
          'Information Security Laws and Standards'
        ]
      },
      {
        title: 'Reconnaissance and Scanning',
        duration: '2 weeks',
        topics: [
          'Footprinting Concepts',
          'Footprinting through Search Engines',
          'Website Footprinting',
          'Email Footprinting',
          'Network Scanning Concepts',
          'Scanning Tools',
          'Scanning Techniques'
        ]
      },
      {
        title: 'System and Network Attacks',
        duration: '2 weeks',
        topics: [
          'System Hacking Concepts',
          'Malware Threats',
          'Sniffing Techniques',
          'Social Engineering',
          'Denial-of-Service',
          'Session Hijacking'
        ]
      },
      {
        title: 'Web and Application Security',
        duration: '2 weeks',
        topics: [
          'Web Server Attacks',
          'Web Application Vulnerabilities',
          'SQL Injection',
          'XSS and CSRF',
          'Security Tools'
        ]
      },
      {
        title: 'Wireless and Mobile Security',
        duration: '2 weeks',
        topics: [
          'Wireless Network Attacks',
          'Wireless Encryption',
          'Mobile Platform Vulnerabilities',
          'IoT Security',
          'Bluetooth Hacking'
        ]
      },
      {
        title: 'Advanced Topics',
        duration: '3 weeks',
        topics: [
          'Cloud Computing Security',
          'Cryptography',
          'Penetration Testing',
          'Security Frameworks',
          'Incident Response'
        ]
      }
    ]
  },
  'bugbounty': {
    title: 'Bug Bounty Program',
    duration: '2 months',
    description: 'Professional training in bug hunting and web application security testing.',
    fees: {
      regular: 12999,
      discounted: 10400,
      entranceDiscount: 2599
    },
    modules: [
      {
        title: 'Fundamentals and Reconnaissance',
        duration: '1 week',
        topics: [
          'Introduction',
          'Introduction to Burpsuite',
          'Information Gathering',
          'XSS',
          'Blind XSS'
        ]
      },
      {
        title: 'Basic Web Vulnerabilities',
        duration: '1 week',
        topics: [
          'Host Header Injection',
          'Data Tampering',
          'SPF Vulnerabilities',
          'HTML Injection',
          'File Inclusion',
          'Forced Browsing'
        ]
      },
      {
        title: 'Advanced Web Attacks',
        duration: '2 weeks',
        topics: [
          'Server Side Request Forgery (SSRF)',
          'Source Code Disclosure',
          'SQL Injection',
          'Advanced SQL Injection',
          'Cross Site Request Forgery (CSRF)'
        ]
      },
      {
        title: 'Security Vulnerabilities',
        duration: '2 weeks',
        topics: [
          'XML External Attacks',
          'Rate Limiting Attacks',
          'Long Password DoS Attack',
          'Buffer Overflow',
          'IDOR',
          'Account Takeover'
        ]
      },
      {
        title: 'CMS and Information Security',
        duration: '1 week',
        topics: [
          'CMS Vulnerabilities',
          'Drupal Security',
          'Information Disclosure',
          'Cryptographic Vulnerabilities'
        ]
      },
      {
        title: 'Advanced Exploitation',
        duration: '1 week',
        topics: [
          'Command Injection',
          'Remote Code Execution (RCE)',
          'Web Cache Deception',
          'Server-Side Template Injection',
          'DNS Zone Transfer',
          'Session Puzzling',
          'HSTS',
          'GraphQL'
        ]
      }
    ]
  }
};

function CurriculumPage() {
  const navigate = useNavigate();
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Courses</span>
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg opacity-90 mb-6">{course.description}</p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>{course.modules.length} Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>Professional Certification</span>
              </div>
            </div>
          </div>

          {/* Fees Structure Section */}
          <div className="p-8 border-b">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Tag className="w-6 h-6 text-blue-600" />
              Fees Structure
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">Regular Fee</h3>
                <p className="text-3xl font-bold text-gray-800 mb-2">₹{course.fees.regular}</p>
                <p className="text-gray-600">Full course fee without any discounts</p>
              </motion.div>
              
              <motion.div 
                className="bg-blue-50 p-6 rounded-lg border border-blue-200"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">Discount From Our Side</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">₹{course.fees.discounted}</p>
                <p className="text-gray-600">After qualifying our entrance exam</p>
              </motion.div>
              
              <motion.div 
                className="bg-purple-50 p-6 rounded-lg border border-purple-200"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">Final Fee</h3>
                <p className="text-3xl font-bold text-purple-600 mb-2">₹{course.fees.entranceDiscount}</p>
                <p className="text-gray-600">Enjoy your course and build career with nominal fees</p>
              </motion.div>
            </div>
          </div>

          {/* Entrance Exam Section */}
          <div className="p-8 border-b">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" />
              Entrance Exam
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Scholarship Opportunity</h3>
                  <p className="text-gray-700 mb-4">
                    Take our entrance exam and qualify for significant discount on your course fees. If you can't qualify, contact us for the best discount options.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Exam Fee: <span className="font-semibold">₹500</span> (non-refundable)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Duration: 60 minutes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Format: Multiple choice questions</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-center p-4 bg-white rounded-lg shadow-md">
                    <FileText className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                    <p className="text-lg font-semibold">Next Exam Date</p>
                    <p className="text-gray-700">01169650140</p>
                  </div>
                  <motion.button
                    className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Call us: 01169650140
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Course Modules
            </h2>
            <div className="space-y-8">
              {course.modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{module.title}</h3>
                    <span className="text-gray-500 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {module.duration}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {module.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-lg mb-6">Enroll now and take the first step towards becoming a certified professional in IT and Cybersecurity.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:deepakcybersolution@gmail.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              For Enrolling: deepakcybersolution@gmail.com
            </motion.a>
            <motion.a
              href="tel:01169650140"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              01169650140
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CurriculumPage;