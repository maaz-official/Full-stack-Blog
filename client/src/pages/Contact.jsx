import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl mx-auto p-6 md:p-10 text-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-7">
            Contact Me
          </h1>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-6">
              Feel free to reach out to me with any questions, feedback, or
              collaboration opportunities. I'm always excited to connect with
              fellow developers and enthusiasts.
            </p>
            <p className="mb-6">
              You can reach me via email at: <strong>muhammadmaaz07@outlook.com</strong>
            </p>
            <p>
              Alternatively, you can connect with me on social media:
              <br />
              Twitter: <a href="https://twitter.com/LazzyCode">@Lazzy_Code</a>
              <br />
              LinkedIn: <a href="https://www.linkedin.com/in/muhammad-maaz-khan-b57738266/">Lazzy Code</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
