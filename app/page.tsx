import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="flex flex-col gap-2 list-inside list-decimal text-lg text-center font-bold">
          <li>
            <Link href="/javascript">What is JavaScript?</Link>
          </li>
          <li>What is TypeScript?</li>
        </ol>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
