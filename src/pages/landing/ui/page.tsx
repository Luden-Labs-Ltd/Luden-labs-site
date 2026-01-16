import { useEffect } from "react";
import { Space } from "./space";

export function LandingPage() {
  useEffect(() => {
    const originalBackground = document.body.style.background;
    document.body.style.background = "#062B58";

    return () => {
      document.body.style.background = originalBackground;
    };
  }, []);

  return <Space />;
}
