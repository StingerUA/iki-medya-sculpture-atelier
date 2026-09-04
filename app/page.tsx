import { StoreApp } from "@/components/store-app";
import { StoreEnhancements } from "@/components/store-enhancements";

export default function Home() {
  return (
    <>
      <StoreApp initialPath="/tr" />
      <StoreEnhancements />
    </>
  );
}
