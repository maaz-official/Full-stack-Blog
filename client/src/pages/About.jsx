import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl mx-auto p-6 md:p-10 text-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-7">
            Welcome to CodeHub!
          </h1>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-6">
              Hello there! I'm John, the creator of CodeHub. This platform is
              my digital playground where I share my passion for coding, tech,
              and everything in between.
            </p>

            <p className="mb-6">
              At CodeHub, you'll find a diverse range of articles and tutorials
              covering various aspects of web development, software engineering,
              and programming languages. Whether you're a beginner or an
              experienced developer, there's something here for everyone.
            </p>

            <p className="mb-6">
              I'm constantly learning and experimenting with new technologies,
              and I love sharing my discoveries with you. Expect fresh content
              regularly as I delve into the latest trends and innovations in
              the tech world.
            </p>

            <p>
              I believe in the power of community and collaboration. Feel free
              to leave comments on my posts, ask questions, or share your own
              insights. Let's learn and grow together as a supportive
              community of tech enthusiasts!
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-teal-600 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
