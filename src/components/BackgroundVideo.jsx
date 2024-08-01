import "./BackgroundVideo.css";
import BgVideo from "../assets/bg_video.mp4";

function BackgroundVideo() {
  return (
    <div className="video-container h-[100vh]  w-[100%]">
      <video loop autoPlay muted id="bg-video">
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;
