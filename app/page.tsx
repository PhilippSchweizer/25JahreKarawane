import { getYears } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const years = await getYears();
  return (
    <div id="karawane-app">
      <nav className="lg:py-20"></nav>

      <main className="flex overflow-hidden lg:h-[calc(100vh-300px)]">
        <div className="box-border flex flex-1 overflow-x-auto scroll-smooth bg-center max-md:flex-col lg:h-full lg:space-x-10">
          <header className="lg:flex-column lg:mr-14 lg:flex lg:w-1/3 lg:flex-wrap">
            <h1 className="text-7xl font-extrabold">
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                25 Jahre Karawane
              </span>
              <p className="mt-3 text-xl">
                Für die Rechte der Flüchtlinge und MigrantInnen
              </p>
            </h1>
            <h2 className="text-3xl font-bold">Eine Zeitreise</h2>
          </header>
          {years.map((year) => (
            <Link
              href={`/years/${year.slug}`}
              key={year._id}
              className="relative box-border h-full w-1/4 flex-shrink-0 snap-center overflow-hidden rounded-lg p-1"
            >
              {year.image && (
                <Image
                  src={year.image}
                  alt={year.title}
                  fill
                  // sizes="(max-width: 768px) 100vw, (min-width: 769px) 25vw"
                  style={{ objectFit: "cover" }}
                  // className="rounded-lg"
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
      </main>
    </div>
  );
}
