import { Calendar, Clock, MapPin } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <section className="w-full ">
      <div className="max-w-7xl px-4 mx-auto flex flex-col items-center lg:flex-row">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-5xl font-bold">
            Kembangkan Skill Web Development-mu dengan Mengikuti Kelas Terbuka
            SINTAK.
          </h1>
          <p className="text-gray-500 text-xl">
            Pelajari materi pemrograman website dengan react dan nextjs bersama
            HMJ Manajemen Informatika dan Google Developer Group on Campus
            Polsri.
          </p>
          <div className="flex flex-col text-center md:flex-row gap-4">
            <a
              href=""
              className="bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-400"
            >
              Daftar Sekarang
            </a>
            <a
              href=""
              className="border border-gray-400 px-4 py-2 rounded-md hover:bg-black hover:text-white"
            >
              Pelajari Selengkapnya
            </a>
          </div>
          <div className="flex gap-2">
            <Calendar />
            <p>Rabu, 21 Mei 2025</p>
            <Clock />
            <p>13.30 - 15.30</p>
            <MapPin />
            <p>Kampus Polsri</p>
          </div>
        </div>
        <img src="./profile.png" alt="" className="w-120" />
      </div>
    </section>
  );
}

export default HeroSection;
