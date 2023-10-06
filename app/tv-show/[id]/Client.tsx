import Image from "next/image";
import React from "react";

export default function Client({ data }: { data: any }) {
  return (
    <div className="">
      <div>
        <h1 className="text-2xl">{data.name}</h1>
        <p>{data.overview}</p>
      </div>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
          alt=""
          width={200}
          height={100}
        />
      </div>
    </div>
  );
}
