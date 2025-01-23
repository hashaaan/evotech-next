"use client";

import Image from "next/image";
import { useState } from "react";

type MovieCardProps = {
  _id: string;
  title: string;
  year: number;
  poster: string;
  plot: string;
  rated: number;
};

export default function MovieCard({
  title,
  year,
  poster,
  plot,
  rated,
}: MovieCardProps) {
  const [imageSrc, setImageSrc] = useState(poster);
  return (
    <div className="bg-white p-4 rounded">
      <h4 className="font-semibold text-center mb-2 text-lg">
        {title !== "" ? title : "No Title"}{" "}
        <span className="text-gray-500 font-normal text-base">
          {year && year}
        </span>
      </h4>
      <div className="flex justify-center bg-black w-full h-[276px] mb-4 rounded">
        {poster && (
          <Image
            src={imageSrc}
            alt={title}
            width={200}
            height={100}
            priority
            className="h-full w-auto object-contain"
            onError={() => setImageSrc("/images/movie-placeholder.png")}
          />
        )}
      </div>
      <p className="text-sm mb-4 line-clamp-4">{plot}</p>
      <div className="text-xs w-full">
        <span className="bg-green-400 py-1 px-2 rounded-full ">
          Rated: {rated ?? "N/A"}
        </span>
      </div>
    </div>
  );
}
