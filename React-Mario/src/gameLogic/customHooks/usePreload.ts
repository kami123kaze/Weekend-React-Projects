import { useState, useEffect,useMemo } from "react";

export default function usePreload(urls: string[]) {
  const [loaded, setLoaded] = useState(false);
  const [images, setImages] = useState<Record<string, HTMLImageElement>>({});

  useEffect(() => {
    let loadedCount = 0;
    const total = urls.length;
    const imgs: Record<string, HTMLImageElement> = {};

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        imgs[url] = img;
        loadedCount++;
        if (loadedCount === total) {
          setImages(imgs);
          setLoaded(true);
        }
      };
    });

    return () => {
      Object.values(imgs).forEach((img) => (img.onload = null));
    };
  }, [urls]);

return { loaded, images: useMemo(() => images, [images]) };}
