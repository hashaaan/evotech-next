import Link from "next/link";
import PrintSyllabus from "./print-syllabus";
import { MODULE_TOOLTIPS } from "./constants";

export default function SyllabusPage() {
  return (
    <main className="container xl:max-w-[700px] mx-auto relative">
      <div className="py-8">
        <h1 className="text-3xl w-full text-center text-purple-900 font-bold font-mono mb-5">
          React.js and Next.js Mastering Course
        </h1>

        <div className="flex flex-col gap-4">
          <section
            id="javascript-fundamentals"
            className="bg-orange-100 w-full p-4 rounded-lg"
          >
            <h2 className="font-bold text-xl mb-4 text-orange-900">
              Module 1: JavaScript Fundamentals ✅
            </h2>
            <ol className="list-decimal flex flex-col ml-6 gap-3">
              <li>
                <p className="font-semibold">Introduction to JavaScript</p>
                <ul className="list-disc ml-6">
                  <li>Overview of JavaScript: What it is and how it works</li>
                  <li>Setting up the development environment</li>
                  <li>Console and debugging basics</li>
                </ul>
              </li>

              <li>
                <p className="font-semibold">JavaScript Basics</p>
                <ul className="list-disc ml-6">
                  <li>
                    Variables{" "}
                    <span className="text-blue-600">(var, let, const)</span> and
                    Data Types
                  </li>
                  <li>Operators and Expressions</li>
                  <li>Functions: Declarations, Expressions, Arrow Functions</li>
                  <li>
                    Control Structures: Conditionals (if-else), Loops (for,
                    while)
                  </li>
                </ul>
              </li>
            </ol>
          </section>

          <section
            id="javascript-fundamentals"
            className="bg-cyan-100 w-full p-4 rounded-lg"
          >
            <h2 className="font-bold text-xl mb-4 text-cyan-900">
              Module 2: Version Control with Git ✅
            </h2>
            <ol className="list-decimal flex flex-col ml-6 gap-3">
              <li>
                <p
                  className="font-semibold cursor-help"
                  title={MODULE_TOOLTIPS[1].gitExplanation}
                >
                  Introduction to Git
                </p>
                <ul className="list-disc ml-6">
                  <li>What is a Version Control System (VCS)</li>
                  <li>
                    Major git providers (
                    <span
                      title={MODULE_TOOLTIPS[1].github}
                      className="cursor-help hover:text-green-600"
                    >
                      Github
                    </span>
                    ,{" "}
                    <span
                      title={MODULE_TOOLTIPS[1].gitlab}
                      className="cursor-help hover:text-orange-600"
                    >
                      Gitlab
                    </span>
                    ,{" "}
                    <span
                      title={MODULE_TOOLTIPS[1].bitbucket}
                      className="cursor-help hover:text-blue-600"
                    >
                      Bitbucket
                    </span>
                    )
                  </li>
                </ul>
              </li>

              <li>
                <p className="font-semibold">
                  <Link href="/how-git-works" className="hover:underline">
                    How Git Works
                  </Link>
                </p>
                <ul className="list-disc ml-6">
                  <li>Create a new Github Repository</li>
                  <li>Basic git commands</li>
                  <li>
                    Add current project to existing{" "}
                    <Link
                      href="https://www.github.com"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </Link>{" "}
                    repository
                  </li>
                </ul>
              </li>
            </ol>
          </section>

          <section
            id="react-basics"
            className="bg-blue-100 w-full p-4 rounded-lg"
          >
            <h2 className="font-bold text-xl mb-4 text-blue-900">
              Module 3: React.js Basics
            </h2>
            <ol className="list-decimal flex flex-col ml-6 gap-3">
              <li>
                <p className="font-semibold">Introduction to React</p>
                <ul className="list-disc ml-6">
                  <li>What is React and why use it?</li>
                  <li>
                    Setting up the dev environment with{" "}
                    <span className="text-green-600">Create Next App</span>
                  </li>
                  <li>
                    <span className="text-green-600">Next.js</span> Project
                    Structure
                  </li>
                  <li>Understanding JSX: JavaScript Syntax Extension</li>
                  <li>Node.js Runtime and Node Package Manager (npm)</li>
                  <li>Dependencies vs Dev Dependencies</li>
                  <li>
                    NPM Commands (Ex: npm install, npm run dev, npm run build)
                  </li>
                  <li>Running the project on Local Dev Server</li>
                </ul>
              </li>

              <li>
                <p className="font-semibold">React Components</p>
                <ul className="list-disc ml-6">
                  <li>Functional vs Class Components</li>
                  <li>Props: Passing data between components</li>
                  <li>State Management: useState Hook</li>
                  <li>Component Lifecycle (Intro to useEffect)</li>
                  <li>Client vs Server Components</li>
                </ul>
              </li>

              <li>
                <p className="font-semibold">Styling in React</p>
                <ul className="list-disc ml-6">
                  <li>CSS Modules and Inline Styles</li>
                  <li>Styling with Tailwind CSS</li>
                </ul>
              </li>

              <li>
                <p className="font-semibold">React Events & Forms</p>
                <ul className="list-disc ml-6">
                  <li>Handling Events in React</li>
                  <li>Controlled vs Uncontrolled Components</li>
                  <li>Building Forms and Form Validation</li>
                </ul>
              </li>
            </ol>
          </section>

          <section
            id="advanced-react"
            className="bg-green-100 w-full p-4 rounded-lg"
          >
            <h2 className="font-bold text-xl mb-4 text-green-900">
              Module 4: Advanced React.js and Next.js
            </h2>
            <ol className="list-decimal flex flex-col ml-6 gap-3">
              <li>
                <p className="font-semibold">Component Architecture</p>
                <ul className="list-disc ml-6">
                  <li>Component Composition and Reusability</li>
                  <li>Lifting State Up</li>
                  <li>Context API for State Management</li>
                </ul>
              </li>

              <li>
                <p className="font-semibold">Hooks in Depth</p>
                <ul className="list-disc ml-6">
                  <li>
                    <span className="text-blue-600">useEffect:</span> Handling
                    Side Effects
                  </li>
                  <li>
                    <span className="text-blue-600">useContext:</span> Managing
                    Global State
                  </li>
                  <li>
                    <span className="text-blue-600">useState:</span> State
                    ManagementHook
                  </li>
                  <li>Custom Hooks: Building Your Own Hooks</li>
                </ul>
              </li>

              <li>
                <p className="font-semibold">Next.js App Router</p>
                <ul className="list-disc ml-6">
                  <li>App Router and Folder Structure</li>
                  <li>Nested Routes and Route Parameters</li>
                  <li>Dynamic Routing</li>
                  <li>Handling Navigation and Redirection</li>
                </ul>
              </li>

              <li>
                <p className="font-semibold">Next.js Built-in Features</p>
                <ul className="list-disc ml-6">
                  <li>Metadata</li>
                  <li>Browser vs Server Caching</li>
                  <li>Static and Dynamic Rendering</li>
                </ul>
              </li>

              <li>
                <p className="font-semibold">
                  Optimizing Performance with Next.js
                </p>
                <ul className="list-disc ml-6">
                  <li>Image Optimization</li>
                  <li>Font Optimization</li>
                  <li>Script Optimization</li>
                  <li>Lazy Loading</li>
                </ul>
              </li>
            </ol>
          </section>

          <section
            id="advanced-react"
            className="bg-yellow-100 w-full p-4 rounded-lg"
          >
            <h2 className="font-bold text-xl mb-4 text-yellow-900">
              Module 5: REST APIs and Database Integration
            </h2>
            <ol className="list-decimal flex flex-col ml-6 gap-3">
              <li>
                <p className="font-semibold">API Integration</p>
                <ul className="list-disc ml-6">
                  <li>
                    Fetching Data with{" "}
                    <span className="text-blue-600">fetch</span> and{" "}
                    <span className="text-red-600">ky</span>
                  </li>
                  <li>Error Handling and Loading States</li>
                  <li>
                    Integrating with{" "}
                    <span className="text-green-600">REST API</span>&apos;s
                  </li>
                </ul>
              </li>
              <li>
                <p className="font-semibold">Introduction Databases</p>
                <ul className="list-disc ml-6">
                  <li>Database Management System</li>
                  <li>Relational Databases vs Non-Relational Databases</li>
                  <li>Overview of Mongodb: What it is and how it works</li>
                </ul>
              </li>
              <li>
                <p className="font-semibold">Other Contents</p>
                <ul className="list-disc ml-6">
                  <li>Authentication with Next-Auth</li>
                  <li>Full Stack Application Development with Next.js</li>
                </ul>
              </li>
            </ol>
          </section>
        </div>
      </div>

      <PrintSyllabus />
    </main>
  );
}
