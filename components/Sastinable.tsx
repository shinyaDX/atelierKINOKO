import React from "react";
import Container from "./Container";
import Image from "next/image";
import logo1 from "@/public/logo/_1e3b5a52-7ed8-4407-81d7-a2c8a9d159a4.jpg";
import logo2 from "@/public/logo/1188379.jpg";
import logo3 from "@/public/logo/スクリーンショット-2021-02-24-19.39.06.png";
import logo4 from "@/public/logo/木のフレームアイコン.jpeg";

const logos = [
  { src: logo1, text: "オーガニックコットン" },
  { src: logo2, text: "リサイクル素材" },
  { src: logo3, text: "工程での廃棄物削減" },
  { src: logo4, text: "再生可能エネルギー" },
];

function Sastinable() {
  return (
    <div className="bg-[#E1BEA0]">
      <Container>
        <div className="flex flex-col gap-24">
          <h1 className="text-white text-center text-4xl md:text-5xl md:mt-16">
            環境への配慮と取り組み
          </h1>
          <ul className="grid grid-cols-4 gap-4 place-items-center">
            {logos.map((logo, index) => (
              <li key={index}>
                <Image
                  src={logo.src}
                  alt={`logo ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-full"
                />
                <p className="mt-16 md:text-2xl text-center mb-14">
                  {logo.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Sastinable;
