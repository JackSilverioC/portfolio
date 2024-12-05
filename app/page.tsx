import dynamic from "next/dynamic";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Presentation from "@/components/Presentation";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { navItems } from "@/data";

const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNav").then((mod) => mod.FloatingNav),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Presentation />
        <Grid />
        <RecentProjects />
        <Skills />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
