import React from "react";
import Container from "./Container";
import Image from "next/image";
import top_image from "@/public/picture/29696870_m 1.jpg";
import top_image2 from "@/public/picture/29696870_m 2.jpg";

function PageTop() {
  return (
    <div className="bg-[#E1BEA0] w-full">
      <Container>
        <div className="flex justify-between">
          <div className="w-[50%] flex items-center justify-center -mt-24">
            <h1 className="writing-vertical-rl text-2xl md:text-5xl text-white tracking-[0.8rem] px-6">
              　　　　　優しさをあなたへ
            </h1>
            <h1 className="writing-vertical-rl text-2xl md:text-5xl text-white tracking-[0.8rem]">
              自然のぬくもり、
            </h1>
          </div>
          <div className="flex items-center h-[40rem] md:h-[60rem] overflow-hidden">
            <Image
              src={top_image2}
              alt="top_image2"
              className="object-cover w-[8.5rem] h-full mx-4 md:mx-8"
            />
            <Image
              src={top_image}
              alt="top_image"
              className="object-cover w-[42rem] h-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PageTop;
