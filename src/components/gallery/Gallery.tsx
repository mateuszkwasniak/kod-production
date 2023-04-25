import React from "react";
import ReactPlayer from "react-player";
import classes from "./Gallery.module.scss";
import useVideos from "../../hooks/useVideos";

const play: string = new URL("../../assets/images/play.svg", import.meta.url)
  .href;

const Gallery = () => {
  const { isLoading, error, videos } = useVideos();

  //zamienic loading na obrazek krecacej sie tasmy
  return (
    <div className={classes.gallery} id="gallery">
      {isLoading && <p>Loading...</p>}
      {error && null}
      {videos.length > 0 &&
        videos.map((video) => (
          <ReactPlayer
            width={"100%"}
            height={"fit-content"}
            key={video.id}
            url={video.url}
            light={
              <div>
                <img
                  className={classes.cover}
                  src={video.thumbnail}
                  alt="Thumbnail"
                />
                <img className={classes.play} src={play} alt="Cover" />
              </div>
            }
            playing
            controls={true}
          />
        ))}
    </div>
  );
};

export default Gallery;
