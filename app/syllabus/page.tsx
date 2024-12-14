export default function SyllabusPage() {
  return (
    <main className="container xl:max-w-[700px] mx-auto">
      <div className="py-8">
        <h1 className="text-3xl w-full text-center text-purple-900 font-bold font-mono mb-5">
          React.js and Next.js Mastering Course
        </h1>

        <div className="flex flex-col gap-4">
          <section
            id="javascript-fundamentals"
            className="bg-orange-100 w-full p-4 rounded-lg"
          >
            <h2 className="font-bold text-xl mb-4">
              Module 1: JavaScript Fundamentals
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
            id="react-basics"
            className="bg-blue-100 w-full p-4 rounded-lg"
          >
            <h2 className="font-bold text-xl mb-4">
              Module 2: React.js Basics
            </h2>
            <ol className="list-decimal flex flex-col ml-6 gap-3">
              <li>
                <p className="font-semibold">Introduction to React</p>
                <ul className="list-disc ml-6">
                  <li>What is React and why use it?</li>
                  <li>
                    Setting up the React environment with{" "}
                    <span className="text-green-600">Create Next App</span>
                  </li>
                  <li>
                    <span className="text-green-600">Next JS</span> Project
                    Structure
                  </li>
                  <li>Understanding JSX: JavaScript Syntax Extension</li>
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
            <h2 className="font-bold text-xl mb-4">
              Module 3: Advanced React.js and Next.js
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
                  <li>Handling Navigation and Redirection</li>
                </ul>
              </li>

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
                    <span className="text-green-600">REST API</span>s
                  </li>
                </ul>
              </li>
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}
