export default function StatusPage() {
  return (
    <div className="container my-8 flex flex-col justify-center items-center h-screen">
      <p className="text-lg text-red-600 font-mono font-bold animate-pulse duration-1000 text-center">
        Sorry!, Mflix server is down at the moment.
      </p>
      <span className="text-lg font-mono text-neutral-600 font-bold">
        Please check back later
      </span>
    </div>
  );
}
