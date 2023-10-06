import Link from "next/link";
import Image from "next/image";
import React, { Key } from "react";

export default function Client({ data, data2 }: { data: any; data2: any }) {
  return (
    <>
      <div className="flex flex-col gap-10 p-5">
        <h2 className="text-2xl font-bold">Top Trending Today</h2>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5 bg-inherit">
            {data.map(
              (movie: {
                id: Key | null | undefined;
                poster_path: any;
                title: string | number | boolean | null | undefined;
                name: string | undefined;
                media_type: string | undefined;
              }) => (
                <Link
                  href={`/${movie.media_type === "movie" ? 'movie' : 'tv-show'}/${movie.id}`}
                  key={movie.id}
                  className="flex flex-col gap-1 justify-start items-center "
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={(movie.title as string) + " poster"}
                    className="w-full h-56 rounded-xl"
                    width={200}
                    height={450}
                  />
                  <div className="flex flex-col gap-5 ">
                    <h2 className="text-md font-light text-center">
                      {movie.media_type === "movie" ? movie.title : movie.name}
                    </h2>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>

        {/* Trending Movies */}
        <h2 className="text-2xl font-bold mt-24">Top Action Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5 bg-inherit">
          {data2.map(
            (movie: {
              id: Key | null | undefined;
              poster_path: any;
              title: string | number | boolean | null | undefined;
              name: string | undefined;
              media_type: string | undefined;
            }) => (
              <Link
                href={`/movie/${movie.id}`}
                key={movie.id}
                className="flex flex-col gap-1 justify-start items-center "
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={(movie.title as string) + " poster"}
                  className="w-full h-56 rounded-xl"
                  width={200}
                  height={450}
                />
                <div className="flex flex-col gap-5 ">
                  <h2 className="text-md font-light text-center">
                    {movie.title}
                  </h2>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}
