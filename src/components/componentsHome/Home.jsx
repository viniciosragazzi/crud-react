import { HomeCenter } from "./HomeCenter";
import { HomeSidebar } from "./HomeSidebar";

export function Home() {
  return (
    <div className="homeArea flex flex-col sm:grid w-full min-h-full sm:ml-[100px]">
      <HomeCenter/>

      <HomeSidebar/>
    </div>
  );
}
