import React from "react";
import Container from "./Container";

function BrandBorn() {
  return (
    <div className="w-full">
      <Container>
        <div className="flex flex-col gap-16 items-center">
          <h1 className="text-2xl font-bold md:text-4xl">
            「きのこ」はどのようにしてうまれたのか
          </h1>
          <div className="flex flex-col gap-14 font-mono font-semibold tracking-wider md:text-2xl md:pl-20">
            <div className="md:leading-[3rem]">
              <p>
                美しい瀬戸内の島々に囲まれた小さな町で、アトリエきのこは生まれました。
                <br />
                この地方は、のんびりとした時の流れと、心地よい潮風に恵まれています。
              </p>
            </div>
            <div className="md:leading-[3rem]">
              <p>
                暮らしのなかで感じた、大人の女性たちの願いからアトリエきのこは芽生えました。
                <br />
                それは、「毎日の着こなしを気にすることなく、自分らしく輝ける服があればいいのに」
                <br />
                という想いからでした。
              </p>
            </div>
            <div className="md:leading-[3rem]">
              <p>
                そこで私たちは、大自然の恵みである天然素材を使い、
                <br />
                シンプルでベーシックな中に上品な遊び心を取り入れたデザインに挑戦しました。
                <br />
                肌触りの良さにこだわり、動きやすく無理のない着心地を追求しながら、
                <br />
                ささやかな可愛らしさを忘れないお洋服づくりに取り組みました。
              </p>
            </div>
            <div className="md:leading-[3rem]">
              <p>
                自然の恵みを活かし、優しく寄り添うナチュラルで上質な服作りを心がけています。
                <br />
                瀬戸内の海からそよ風のように届く、そんな思いを込めた&quot;きのこ&quot;のお洋服です。
                <br />
                日々の生活に寄り添い、あなたらしく輝く存在でありたい、
                <br />
                そんな想いがアトリエきのこの原点なのです。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BrandBorn;
