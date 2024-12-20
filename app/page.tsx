import Link from "next/link";
import { signOut, auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const authResp = await auth();

  if (!authResp?.user) {
    redirect("/login");
  }

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

        {authResp?.user && (
          <div className="flex flex-col mt-6">
            <h2 className="h-10 text-lg font-bold">
              Hello!{" "}
              <span className="text-green-600">{authResp.user.name}</span>
            </h2>
            <button
              className="mt-2 bg-white text-green-600 border-green-500 border hover:bg-green-500 hover:text-black h-10 px-4 py-2 rounded-lg text-sm"
              onClick={async () => {
                "use server";
                await signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
