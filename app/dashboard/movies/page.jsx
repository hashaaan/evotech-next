import Image from "next/image";
import { getMovies } from "../../lib/apis/server";

export default async function DashboardPage() {
  // const moviesApiUri = `${process.env.NEXT_PUBLIC_API_URI}/movies`;

  // try {
  //   const moviesResp = await fetch(moviesApiUri);

  //   if (!moviesResp.ok) {
  //     console.log(`Response status: ${moviesResp.status}`);
  //   }

  //   const moviesData = await moviesResp.json();

  //   console.log(moviesData);
  // } catch (error) {
  //   console.log(error);
  // }

  const movies = await getMovies();

  console.log("Movies", movies);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Movies</h1>
      {movies ? (
        <div className="grid grid-cols-4 gap-4">
          {movies?.length &&
            movies.map((movie) => (
              <div key={movie._id} className="bg-white p-4 rounded">
                <h4 className="font-semibold text-center mb-2 text-lg">
                  {movie.title ?? "No Title"}
                </h4>
                <div className="flex justify-center bg-black w-full h-[276px] mb-4 rounded">
                  {movie.poster && (
                    <Image
                      src={movie.poster}
                      alt={movie.title}
                      width={200}
                      height={100}
                      className="h-full w-auto object-contain"
                    />
                  )}
                </div>
                <p className="text-sm mb-4 line-clamp-4">{movie.plot}</p>
                <div className="text-xs w-full">
                  <span className="bg-green-400 py-1 px-2 rounded-full ">
                    Rated: {movie.rated ?? "N/A"}
                  </span>
                </div>
              </div>
            ))}
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
