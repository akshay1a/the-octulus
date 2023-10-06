import Image from "next/image";
import React from "react";

export default function Client({ data }: { data: any }) {
  console.log(data);
  return (
    <div>
      <div>
        <h1 className="text-2xl">{data.title}</h1>
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
