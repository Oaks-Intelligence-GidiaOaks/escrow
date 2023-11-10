import { useEffect, useState } from "react";

const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    window.addEventListener("touchstart", () => {
      setIsTouch(true);
    });
  });

  console.log(isTouch);
  return () => {
    window.removeEventListener("touchstart", () => {
      setIsTouch(false);
    });
  };
};

export default useIsTouchDevice;
