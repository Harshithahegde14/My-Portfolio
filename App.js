import React, { useEffect, useState } from 'react';

// Reusable Skill Bar Component
const SkillBar = ({ name, level }) => {
  const levelWidth = {
    'Beginner': 'w-4/12',
    'Intermediate': 'w-7/12',
    'Advanced': 'w-10/12',
    'Expert': 'w-full'
  };

  const levelColor = {
    'Beginner': 'bg-red-400',
    'Intermediate': 'bg-yellow-400',
    'Advanced': 'bg-green-400',
    'Expert': 'bg-blue-500'
  };

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-600">{level}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className={`${levelWidth[level]} ${levelColor[level]} h-2.5 rounded-full transition-all duration-500 ease-out`}></div>
      </div>
    </div>
  );
};


// Main App component
const App = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Effect to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Project data for easier mapping
  const projects = [
    {
      id: 'nourishnet',
      title: 'NourishNet',
      description: 'NourishNet is a machine learning-powered nutrition and recipe recommendation system that suggests meals based on user preferences, goals, and available ingredients. Built using Python, Pandas, Scikit-learn, and Streamlit, it analyzes a large food dataset to generate personalized and healthy meal options. The app features a user-friendly interface and stores recipe data using SQLite. Deployed on Google Cloud Platform, NourishNet showcases how ML and cloud technologies can be combined to promote smarter, goal-driven eating habits.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'SQLite', 'Google Cloud Platform'],
      link: '#' // Replace with actual project link
    },
    {
      id: 'triptact',
      title: 'Trip Tact',
      description: 'TripTact is a machine learning-based tourism recommendation system that suggests destinations based on user preferences like mood, location, and budget. I developed the ML model using Python and Pandas, and built a Flask API to deliver real-time suggestions. Challenges included handling imbalanced categories and mapping diverse user inputs, which I solved through data preprocessing and stratified sampling. This project strengthened my skills in classification models, API development, and building scalable ML-backed applications with real-world user interaction.',
      technologies: ['Python', 'Pandas', 'Flask', 'Machine Learning', 'API Development', 'Data Preprocessing'],
      link: '#' // Replace with actual project link
    },
    {
      id: 'issue-classifier',
      title: 'Issue-Classifier',
      description: 'The project is an AI-powered Customer Support Ticket Classifier for MyPickup, a smart e-bike subscription service. It reads customer messages from email or WhatsApp, identifies the issue, and classifies it into the correct department and category using an ML model. The classified ticket is then stored in a database for streamlined support handling. The system is designed to automate support operations, reduce response time, and enhance customer experience by routing queries accurately without human intervention.',
      technologies: ['Python', 'Machine Learning', 'NLP', 'Database (SQL)', 'Automation'],
      link: '#' // Replace with actual project link
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 font-sans text-gray-800 antialiased">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-pink-500 to-purple-700 text-white p-6 md:p-8 shadow-xl rounded-b-3xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Name/Title - Centered on mobile, left-aligned on desktop, with more bottom margin on mobile */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-0 drop-shadow-lg text-center md:text-left">Harshitha Hegde</h1>
          {/* Navigation - Centered on mobile, with increased spacing */}
          <nav className="text-lg md:text-xl space-x-6 md:space-x-10 mt-4 md:mt-0 flex justify-center w-full md:w-auto">
            <a href="#about" className="hover:text-pink-200 transition duration-300 transform hover:scale-105 inline-block">About</a>
            <a href="#projects" className="hover:text-pink-200 transition duration-300 transform hover:scale-105 inline-block">Projects</a>
            <a href="#education" className="hover:text-pink-200 transition duration-300 transform hover:scale-105 inline-block">Education</a>
            <a href="#contact" className="hover:text-pink-200 transition duration-300 transform hover:scale-105 inline-block">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {/* Corrected background image URL syntax and used a reliable Pexels galaxy image */}
      <section className="relative h-96 flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2150/sky-space-mix-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white p-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Innovating with Code</h2>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">Problem Solver | Machine Learning Enthusiast | Cloud Explorer</p>
          <a href="#projects" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            View My Work
          </a>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container mx-auto p-4 md:p-8">

        {/* About Me Section */}
        <section id="about" className="bg-white p-6 md:p-10 rounded-3xl shadow-lg mb-10 border-b-4 border-pink-400">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            {/* Profile Image Placeholder */}
            <div className="flex-shrink-0 mb-6 md:mb-0">
              <img
                src="https://placehold.co/200x200/A78BFA/FFFFFF?text=Your+Photo" // Replace with your actual photo URL
                alt="Harshitha Hegde"
                className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-pink-300"
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-4 text-gray-700">
                Hello! I'm <span className="font-semibold text-pink-600">Harshitha Hegde</span>, a passionate <span className="font-semibold text-blue-600">Computer Science Engineering Student</span> with a strong interest in <span className="font-semibold text-purple-600">Problem Solving, machine learning, Cloud Computing, Data Science</span>. I love solving complex problems and creating impactful solutions that make a difference.
                I didn’t come from a tech background; in fact, I studied biology until 12th grade. Tech wasn’t something I grew up with. But once I entered engineering, I discovered programming, struggled at first, and then gradually started enjoying problem-solving and building smart systems. <span className="italic text-gray-600">My curiosity led me to explore data, ML, and cloud computing, and now I’m building projects and preparing for roles that challenge me. I’m not from a traditional tech start — but I’m proud of how far I’ve come.</span> I've been hooked ever since!
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                I'm always eager to learn new technologies and improve my skills, embracing challenges as opportunities for growth. Currently, I'm diving deeper into <span className="font-semibold text-teal-600">Problem Solving, Machine Learning</span>.
              </p>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4 text-center">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {/* Programming Languages */}
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Programming Languages</h4>
              <SkillBar name="Python" level="Beginner" />
              <SkillBar name="Java" level="Beginner" />
              <SkillBar name="SQL" level="Beginner" />
            </div>
            {/* Frameworks & Libraries */}
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Frameworks & Libraries</h4>
              <SkillBar name="Pandas" level="Beginner" />
              <SkillBar name="Scikit-learn" level="Beginner" />
              <SkillBar name="Streamlit" level="Beginner" />
              <SkillBar name="Flask" level="Beginner" />
            </div>
            {/* Tools & Platforms */}
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Tools & Platforms</h4>
              <SkillBar name="Git" level="Beginner" />
              <SkillBar name="AWS" level="Beginner" />
              <SkillBar name="Google Cloud Platform" level="Beginner" />
            </div>
            {/* Core Concepts */}
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Core Concepts</h4>
              <SkillBar name="Data Structures" level="Beginner" />
              <SkillBar name="Algorithms" level="Beginner" />
              <SkillBar name="Problem Solving" level="Beginner" />
              <SkillBar name="Data Preprocessing" level="Beginner" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-white p-6 md:p-10 rounded-3xl shadow-lg mb-10 border-b-4 border-blue-400">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-md border border-purple-200 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                <h3 className="text-xl font-bold text-purple-800 mb-2">{project.title}</h3>
                <p className="text-gray-700 text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-200 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-pink-600 hover:text-pink-800 hover:underline font-semibold flex items-center" target="_blank" rel="noopener noreferrer">
                  View Project &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="bg-white p-6 md:p-10 rounded-3xl shadow-lg mb-10 border-b-4 border-teal-400">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6 text-center">Education</h2>
          <div className="space-y-8">
            {/* Education Item 1 */}
            <div className="border-l-4 border-blue-600 pl-6 py-1">
              <h3 className="text-xl font-bold text-gray-900">Bachelor of Science in Computer Science</h3>
              <p className="text-blue-700 text-lg">New Horizon College of Engineering | October 2023 - present</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>GPA: <span className="font-medium text-indigo-700">9.34</span>.</li>
                <li>Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Machine Learning, Operating Systems.</li>
                <li>Completed capstone project: <span className="font-medium text-pink-700">Trip Tact</span>, demonstrating full-stack development and Machine Learning skills.</li>
              </ul>
            </div>
            {/* Add more education items as needed */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white p-6 md:p-10 rounded-3xl shadow-lg border-b-4 border-indigo-400">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6 text-center">Get in Touch</h2>
          <p className="text-lg leading-relaxed mb-8 text-gray-700 text-center">
            I'm always open to new opportunities, collaborations, and interesting discussions. Feel free to reach out!
          </p>
          <div className="flex flex-col items-center space-y-5">
            <a href="mailto:harshithahegde1401@gmail.com" className="flex items-center text-blue-600 hover:text-blue-800 hover:underline text-xl font-medium transition duration-300">
              <svg className="w-8 h-8 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m0-4h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2z"></path></svg>
              harshithahegde1401@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/harshitha-hegde-a6084633b" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 hover:text-purple-800 hover:underline text-xl font-medium transition duration-300">
              <svg className="w-8 h-8 mr-3 text-purple-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.382 1.11-2.5 2.48-2.5s2.48 1.118 2.48 2.5zM.02 24h4.96V8.5H.02V24zM9.52 8.5c-2.07 0-3.52 1.166-3.52 3.125V24h4.96v-9.5c0-.95.66-1.75 1.5-1.75.83 0 1.5.8 1.5 1.75V24h4.96V14.06c0-3.59-2.59-4.99-5.11-4.99z"/></svg>
              LinkedIn Profile
            </a>
            <a href="https://github.com/Harshithahegde14" target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-600 hover:text-pink-800 hover:underline text-xl font-medium transition duration-300">
              <svg className="w-8 h-8 mr-3 text-pink-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.47.087.671-.205.671-.453 0-.223-.009-.814-.013-1.59-.278.196-.67.378-1.02.464-.35.086-.85-.186-1.11-.36-.26-.174-.632-.78-.92-.99-.288-.21-.69-.536-1.01-.723-.32-.187-.76-.28-.01-.28.707 0 1.28.675 1.46.99.645 1.13 1.88 1.01 2.32.777.067-.597.252-.99.46-1.21-.19-.203-.68-.482-1.09-.757-.41-.275-.84-.587-1.19-.92-.35-.333-.63-.76-.84-1.22-.21-.46-.32-.97-.32-1.54 0-.91.25-1.65.75-2.25-.075-.203-.275-.96.07-2.003 0 0 .61-.2 2-.07.57-.16 1.17-.24 1.77-.24.6 0 1.2.08 1.77.24 1.39-.13 2-.07 2-.07.345 1.043.145 1.8.07 2.003.5.6.75 1.34.75 2.25 0 .248-.2.54-.67.453C21.135 20.197 24 16.442 24 12.017 24 6.484 19.523 2 14 2h-2z" clipRule="evenodd"/></svg>
              GitHub Profile
            </a>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-700 to-pink-500 text-white text-center p-5 mt-10 rounded-t-3xl shadow-xl">
        <p className="text-lg">&copy; {new Date().getFullYear()} Harshitha Hegde. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
