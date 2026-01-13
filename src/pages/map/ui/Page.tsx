import { useEffect } from "react";
import { Map } from "./Map";

export function MapPage() {
  useEffect(() => {
    const originalBackground = document.body.style.background;
    document.body.style.background = "#6098ae";

    return () => {
      document.body.style.background = originalBackground;
    };
  }, []);

  return <Map />;
}
