import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl w-full text-center font-semibold mb-4">
          EVOTE<span className="text-green-600">C</span>H Education
        </h1>
        <Link
          href="/syllabus"
          className="text-xl text-purple-900 font-mono font-bold"
        >
          React.js and Next.js Mastering Course
        </Link>
      </div>
    </main>
  );
}
