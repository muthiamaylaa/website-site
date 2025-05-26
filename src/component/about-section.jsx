import { Book, BookmarkCheck, Rocket } from "lucide-react";
import React from "react";

const dataKonten = [
  {
    ikon: Rocket,
    judul: "Pembelajaran Praktis",
    deskripsi: "Dapatkan pengalaman menarik dengan belajar di sintak.",
  },
  {
    ikon: Book,
    judul: "Relasi yang Luas",
    deskripsi: "Dapatkan teman baru di SINTAK.",
  },
  {
    ikon: BookmarkCheck,
    judul: "Penawaran Menarik",
    deskripsi: "Lorem ipsum dolor sit amet.",
  },
];

function AboutSection() {
  return (
    <section className="py-32">
      <div className="flex flex-col px-4 items-center justify-center max-w-7xl mx-auto">
        {/* Bagian Judul */}
        <div className="text-center space-y-5">
          <h1 className="font-bold text-4xl md:text-6xl">Mengenal lebih dekat SINTAK.</h1>
          <p className="text-gray-500">
            SINTAK adalah program study club yang diselenggarakan oleh HMJ MI
            dan GDGoC
          </p>
        </div>

        {/* Bagian Kotak */}
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-4">
          {dataKonten.map((data) => (
            <div className="flex items-center flex-col p-4 max-w-sm border border-gray-500">
              <div className="bg-red-300 p-4 rounded-full">
                <data.ikon size={32} />
              </div>
              <h2 className="font-bold text-xl">{data.judul}</h2>
              <p className="text-gray-500">{data.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
