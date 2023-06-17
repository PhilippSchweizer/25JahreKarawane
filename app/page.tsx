import { getYears } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const years = await getYears();
  return (
    <div className="mx-auto max-w-5xl py-20">
      <h1 className="text-7xl font-extrabold">
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          25 Jahre Karawane
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Für die Rechte von Flüchtlingen und Migranten!
      </p>

      <h2 className="mt-24 text-3xl font-bold text-gray-700">Eine Zeitreise</h2>
      <div className="mt-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {years.map((year) => (
          <Link
            href={`/years/${year.slug}`}
            key={year._id}
            className="rounded-lg border-2 border-gray-500  p-1 transition hover:scale-105 hover:border-blue-500"
          >
            {year.image && (
              <Image
                src={year.image}
                alt={year.title}
                width={750}
                height={300}
                className="rounded-lg border border-gray-500 object-cover"
              />
            )}

            <div
              className="
            mt-2
            bg-gradient-to-r 
            from-orange-400 
            via-red-500 
            to-purple-600 
            bg-clip-text 
            font-extrabold 
            text-transparent"
            >
              {year.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
