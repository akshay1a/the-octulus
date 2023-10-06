"use client";

import Link from "next/link";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import Image from "next/image";

export default function Client({ movies }: { movies: any }) {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genreId: any) => {
    setSelectedGenre(genreId);
  };

  const resetGenreFilter = () => {
    setSelectedGenre(null);
  };

  const filteredMovies = selectedGenre
    ? movies.filter((movie: { genre_ids: string | never[] }) =>
        movie.genre_ids.includes(selectedGenre)
      )
    : movies;

  // console.log(movies);
  
  return (
    <div className="flex flex-col gap-10 p-5">
      <h1 className="text-4xl font-bold">TV Shows</h1>
      {/* Filters */}
      <div className="flex flex-col gap-5">
        <h2 className="text-lg font-semibold">Genres</h2>
        <ul className="flex flex-row flex-wrap gap-3">
          <button
            className="border rounded-full px-2 "
            onClick={resetGenreFilter}
          >
            All
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(28)}
          >
            Action
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(12)}
          >
            Adventure
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(16)}
          >
            Animation
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(35)}
          >
            Comedy
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(80)}
          >
            Crime
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(99)}
          >
            Documentary
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(18)}
          >
            Drama
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(10751)}
          >
            Family
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(14)}
          >
            Fantasy
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(36)}
          >
            History
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(27)}
          >
            Horror
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(10402)}
          >
            Music
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(9648)}
          >
            Mystery
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(10749)}
          >
            Romance
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(878)}
          >
            Science Fiction
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(10770)}
          >
            TV Movie
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(53)}
          >
            Thriller
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(10752)}
          >
            War
          </button>
          <button
            className="border rounded-full px-2 "
            onClick={() => handleGenreClick(37)}
          >
            Western
          </button>
        </ul>
      </div>

      <div>
        <div className="bg-inherit">
          {selectedGenre !== null && (
            <button
              className="border px-2 rounded-full mb-4 "
              onClick={resetGenreFilter}
            >
              Reset Filter
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5 bg-inherit ">
          {filteredMovies.map(
            (movie: {
              id: Key | null | undefined;
              poster_path: any;
              name:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | PromiseLikeOfReactNode
                | null
                | undefined;
            }) => (
              <Link
                href={`/tv-show/${movie.id}`}
                key={movie.id}
                className="flex flex-col gap-1 justify-start items-center "
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={(movie.name as string) + " poster"}
                  className="w-full h-56 rounded-xl"
                  width={200}
                  height={450}
                />
                <div className="flex flex-col gap-5 ">
                  <h2 className="text-md font-light text-center">
                    {movie.name}
                  </h2>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
