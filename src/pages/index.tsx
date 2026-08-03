import dynamic from "next/dynamic";

const HouserViewer = dynamic(() => import("@/components/HouserViewer"), {
  ssr: false,
});

export default function Home() {
  return <HouserViewer />;
}
