import { useState, useEffect, useRef } from "react";

export function useElementHeight() {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current?.offsetHeight);
      }
    };

    // Initial height set
    updateHeight();

    // Set up a resize observer to listen for height changes
    const resizeObserver = new ResizeObserver(updateHeight);
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return { ref, height };
}
