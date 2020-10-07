import { useEffect, useState } from "react";

import BackgroundImage from "../../img/background.png";
import BoatImage from "../../img/boat.png";

export default function useBackgroundStatus(props) {
  const [status, setStatus] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [boatLoaded, setBoatLoaded] = useState(false);

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

  useEffect(() => {
    if (boatLoaded && backgroundLoaded) {
      setStatus(true);
    }
  }, [boatLoaded, backgroundLoaded]);

  return status;
}
