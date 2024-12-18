import { getMovies } from "../lib/apis/server";

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
    <main>
      {/* navbar section */}
      <div className="bg-blue-300 w-full h-16 flex px-4 justify-start items-center">
        <div className="container">
          <h1 className="text-black font-bold text-xl">Mflix Dashboard</h1>
        </div>
      </div>

      {/* body section */}
      <div className="container mt-8">
        <div className="grid grid-cols-4 gap-4">
          {movies?.length &&
            movies.map((movie) => (
              <div
                key={movie._id}
                className="flex flex-col justify-between bg-white p-4 rounded"
              >
                <h4 className="font-semibold text-center mb-4 text-lg">
                  {movie.title ?? "No Title"}
                </h4>
                <p className="text-sm mb-4">{movie.plot}</p>
                <div className="text-xs w-full">
                  <span className="bg-green-400 py-1 px-2 rounded-full ">
                    Rated: {movie.rated ?? "N/A"}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
