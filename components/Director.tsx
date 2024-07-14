import React from "react";
import Container from "./Container";
import Image from "next/image";
import director_image from "../public/picture/4353491_s.jpg";

function Director() {
  return (
    <div className="w-full">
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="bg-white relative">
            <Image
              src={director_image}
              alt="Director"
              width={500}
              height={500}
              className="z-50 top-8 relative left-10"
            />
            <div className="absolute top-24 right-6 w-full h-[30rem] md:h-[34rem] z-40 bg-[#D9D9D9]"></div>
          </div>
          <div className="bg-[#E1BEA0] flex-1 text-white flex justify-center tracking-wider">
            <div className="flex flex-col gap-6 mt-14">
              <h1 className="text-2xl md:text-4xl mt-20 mb-10 text-center mr-40">
                創業者の想い
              </h1>
              <div className="flex flex-col gap-12 md:text-2xl leading-6">
                <div>
                  <p>服作りは、私にとって人生そのものです。</p>
                </div>
                <div className="leading-6">
                  <p>
                    生地を選ぶ時から、その向こう側に、
                    <br />
                    着る人の人生を思い描きます。
                    <br />
                    コットンとリネンのブレンド生地には、
                    <br />
                    柔らかくて通気性に優れた良さがあります。
                    <br />
                    新鮮な肌触りと心地よい着心地で、
                    <br />
                    人々の日常に寄り添えるはずです。
                  </p>
                </div>
                <div className="leading-6">
                  <p>
                    ガーゼのような柔らかな生地は、
                    <br />
                    赤ちゃんの肌につつみ、家族の暮らしを包み込みます。
                    <br />
                    衣類から家庭用品まで、
                    <br />
                    幅広い用途に活用できる可能性を秘めています。
                  </p>
                </div>
                <div className="leading-6">
                  <p>
                    日々の生活の中で、
                    <br />
                    着る人に心地よさを届けられることが何よりの喜びです。
                    <br />
                    それは家族に、恋人に、
                    <br />
                    そして何より自分自身へと向けられた、愛情の表れなのです。
                  </p>
                </div>
                <div className="mb-32 leading-6">
                  <p>
                    服は人生の一部であり、
                    <br />
                    人生そのものを踏まえてこそ、良いものができると信じています。
                    <br />
                    目に見えない思いを込めて、
                    <br />
                    一着一着、丁寧につくり上げていきます。
                    <br />
                    その服を着ることで、
                    <br />
                    着る人が自分らしく輝けますように。そう願っています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Director;
