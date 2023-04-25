import { useState, useEffect } from "react";

type VideoDetailsType = {
  id: string;
  url: string;
  title: string;
  thumbnail: string;
};

type UseVideosType = {
  isLoading: boolean;
  error: string | null;
  videos: VideoDetailsType[];
};

const useVideos = (): UseVideosType => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [videos, setVideos] = useState<VideoDetailsType[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      setError(null);
      setIsLoading(true);

      try {
        const response: Response = await fetch("/.netlify/functions/getVideos");
        if (response.ok) {
          const data: { videoDetails: VideoDetailsType[] } =
            await response.json();
          setVideos(data.videoDetails);
          setIsLoading(false);
        } else {
          throw new Error("Something went wrong.");
        }
      } catch (error) {
        setIsLoading(false);
        setError("Something went wrong.");
      }
    };

    fetchVideos();
  }, []);

  return { isLoading, videos, error };
};

export default useVideos;
