import Image from "next/image";
import React from "react";

function CategoryCard({ category}) {
  return (
    <>
      <div className="relative group" key={category.name}>
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative h-56 bg-zinc-900  rounded-3xl flex-col content-center items-center justify-center ">
          <Image
            width={300}
            height={300}
            priority
            src={category.icon}
            className="max-w-full max-h-40 m-auto"
            alt="Follow us on Twitter"
          />
          <p className="text-center text-2xl font-black uppercase mx-auto ">
            {category.name.split("").map((word, index) => {
              if (word === "_") return <span key={word + index}> </span>;
              return <span key={word + index}>{word}</span>;
            })}
          </p>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
