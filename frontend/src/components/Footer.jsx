import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="border-t border-t-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-xl font-bold">Job Hunt</h1>
              <p className="text-sm">
                © 2024 Your Company. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://facebook.com"
                className="hover:text-gray-400"
                aria-label="Facebook"
              >
                <svg className="w-6 h-" fill="curentColor" viewBox="0 0 24 24">
                  <path
                    d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 
      24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 
      1.894-4.788 4.659-4.788 1.325 0 2.464.099 
      2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 
      1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.403 
      24 24 23.403 24 22.674V1.326C24 .597 23.403 
      0 22.675 0z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-gray-400"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.18 9.18 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.69 4.13A12.82 12.82 0 0 1 1.64 1.15a4.48 4.48 0 0 0 1.4 6.07A4.48 4.48 0 0 1 .96 6.7v.05a4.51 4.51 0 0 0 3.63 4.42 4.52 4.52 0 0 1-2.05.08 4.51 4.51 0 0 0 4.21 3.14A9.06 9.06 0 0 1 1 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.84-6.86 12.84-12.82 0-.2 0-.39-.02-.58A9.22 9.22 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-gray-400"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14C2.24 0 1 1.24 1 2.76v18.48C1 22.76 2.24 24 4 24h14c1.76 0 3-1.24 3-2.76V2.76C22 1.24 20.76 0 19 0zM7.12 20.45H4.56V9h2.56v11.45zM5.84 7.62a1.48 1.48 0 1 1 0-2.96 1.48 1.48 0 0 1 0 2.96zM20.45 20.45h-2.56v-5.55c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.65h-2.56V9h2.45v1.56h.03a2.69 2.69 0 0 1 2.42-1.33c2.59 0 3.07 1.7 3.07 3.9v7.32z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
