import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

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

        {session?.user ? (
          <div className="flex flex-col mt-6">
            <h2 className="h-10 text-lg font-bold">
              Hello! <span className="text-green-600">{session.user.name}</span>
            </h2>
            <Link
              href="/dashboard"
              className="mt-2 text-center bg-white text-green-600 border-green-500 border hover:bg-green-500 hover:text-black h-10 px-4 py-2 rounded-lg text-sm"
            >
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <Link
            href="/sign-in"
            className="mt-8 bg-white text-blue-700 border-blue-700 border hover:bg-blue-800 hover:text-white h-10 px-4 py-2 rounded-lg text-sm"
          >
            Go to Sign in
          </Link>
        )}
      </div>
    </main>
  );
}
