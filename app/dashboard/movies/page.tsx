import { getMovies } from "@/lib/apis/server";
import MovieCard from "./movie-card";

export default async function DashboardPage() {
  const movies = await getMovies();

  if (!movies) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold hidden">Movies</h1>
      {movies ? (
        <div className="grid grid-cols-4 gap-4">
          {movies?.length &&
            movies.map((movie) => <MovieCard key={movie._id} {...movie} />)}
        </div>
      ) : (
        <div>
          <h1 className="text-center text-red-600 font-bold text-xl">
            Oops! Something went wrong.
          </h1>
        </div>
      )}
    </div>
  );
}
