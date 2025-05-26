import { Star } from "lucide-react";
import React from "react";

function StatSection() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center text-center mx-auto bg-[url(/roblok.jpg)] bg-fixed py-16">
        <div className="font-bold text-white">
          <h1 className="text-5xl">90+</h1>
          <p>Pendaftar</p>
        </div>
        <div className="font-bold text-white">
          <h1 className="text-5xl">8+</h1>
          <p>Mentor</p>
        </div>
        <div className="font-bold text-white">
          <div className="flex items-center justify-center">
            <h1 className="text-5xl">
              5<Star />
            </h1>
          </div>
          <p>Review dan Ulasan</p>
        </div>
        <div className="font-bold text-white">
          <h1 className="text-5xl">100+</h1>
          <p>Ulasan</p>
        </div>
      </div>
    </section>
  );
}

export default StatSection;
