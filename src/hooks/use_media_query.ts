import { useEffect, useState } from "react"

export const UseMediaQuery = (query: string): boolean => {
    const [match, setMatch] = useState(false)

    useEffect(() => {
      const media = window.matchMedia(query);

      const listener = () => setMatch(media.matches);

      setMatch(media.matches)

      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
    }, [query]);

    return match
}