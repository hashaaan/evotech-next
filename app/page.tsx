import Link from "next/link";
// import { redirect } from "next/navigation";

export default async function Home() {
  const authResp = {
    user: { name: "Hashan Shalitha" },
  };

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

        {authResp?.user ? (
          <div className="flex flex-col mt-6">
            <h2 className="h-10 text-lg font-bold">
              Hello!{" "}
              <span className="text-green-600">{authResp.user.name}</span>
            </h2>
            <button className="mt-2 bg-white text-green-600 border-green-500 border hover:bg-green-500 hover:text-black h-10 px-4 py-2 rounded-lg text-sm">
              Sign Out
            </button>
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
