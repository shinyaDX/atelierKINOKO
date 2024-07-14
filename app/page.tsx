import Image from "next/image";
import PageTop from "@/components/PageTop";
import Director from "@/components/Director";
import BrandBorn from "@/components/BrandBorn";
import Material from "@/components/Material";
import Sastinable from "@/components/Sastinable";

export default function Home() {
  return (
    <>
      <PageTop />
      <BrandBorn />
      <Director />
      <Material />
      <Sastinable />
    </>
  );
}
