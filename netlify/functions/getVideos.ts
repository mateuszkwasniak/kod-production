import axios from "axios";
import { Context } from "vm";

exports.handler = async (
  event,
  context
): Promise<{ statusCode: number; body: string }> => {
  //   const playlistId: string = "PL1iJi2_cdkmHRs4jMXWGNiexM7my-tsYx";
  const playlistId: string = "PL6vMO-JzF2ZKkEPDkthGPvk4UPE9_G7dO";

  try {
    let response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${process.env.API_KEY}`
    );

    const videosDetails = response.data.items.map((item) => {
      return {
        id: item.snippet.resourceId.videoId,
        url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.maxres.url,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ videoDetails: videosDetails }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong" }),
    };
  }
};
