import LocatePage from "./LocatePage";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <p>Bean Here</p>
      <Suspense fallback={<p>Loading feed...</p>}>
        <LocatePage />
      </Suspense>
    </div>
  );
}
