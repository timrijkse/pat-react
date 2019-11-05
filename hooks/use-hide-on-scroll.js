import { useState } from "react";
import { useScrollPosition } from "./use-scroll-position";

function useHideOnScroll() {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isScrolledEnough = currPos.y > prevPos.y || currPos.y > -100;
      if (isScrolledEnough !== hideOnScroll) setHideOnScroll(isScrolledEnough);
    },
    [hideOnScroll]
  );

  return hideOnScroll;
}

export default useHideOnScroll;
