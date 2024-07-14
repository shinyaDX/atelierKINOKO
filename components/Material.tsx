import React from "react";
import Container from "./Container";
import Image from "next/image";
import material_image from "../public/picture/3033069_m 1.jpg";

function material() {
  return (
    <div className="w-full">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="writing-vertical-rl text-2xl flex flex-col md:gap-32 gap-12 tracking-widest mt-12">
            <div className="flex flex-col gap-8">
              <p>私たちは上質な天然素材を惜しみなく使用し</p>
              <p>その素材本来の良さを最大限に活かすことにこだわっています</p>
            </div>
            <div className="flex flex-col gap-8">
              <p>コットンの柔らかさと通気性　リネンの上品な風合いなど</p>
              <p>様々な素材の長所を熟知し製品の用途に合わせて</p>
              <p>最適なものを選びます</p>
            </div>
            <div className="flex flex-col gap-8">
              <p>こうした上質な素材へのこだわりが</p>
              <p>私たちの心地よい製品作りの原点なのです</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 items-center flex md:-mt-14">
            <Image
              src={material_image}
              alt="material"
              width={800}
              height={800}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default material;
