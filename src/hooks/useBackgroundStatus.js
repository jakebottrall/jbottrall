import { useEffect, useState } from "react";

import BackgroundImage from "../assets/background.png";
import BoatImage from "../assets/boat.png";

export default function useBackgroundStatus() {
  const [status, setStatus] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [boatLoaded, setBoatLoaded] = useState(false);

  // check to see if the background image has loaded
  useEffect(() => {
    if (!backgroundLoaded) {
      const background = new Image();

      background.onload = () => {
        setBackgroundLoaded(true);
      };

      background.src = BackgroundImage;
      if (background.complete) {
        background.onload();
      }
    }
  });

  // check to see if the boat image has loaded
  useEffect(() => {
    if (!boatLoaded) {
      const boat = new Image();

      boat.onload = () => {
        setBoatLoaded(true);
      };

      boat.src = BoatImage;
      if (boat.complete) {
        boat.onload();
      }
    }
  });

  // if both assets have loaded update status
  useEffect(() => {
    if (boatLoaded && backgroundLoaded) {
      setStatus(true);
    }
  }, [boatLoaded, backgroundLoaded]);

  return status;
}
