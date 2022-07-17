import React, { useState, useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function VideoPlay(props) {
  const {} = props;
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [option, setOptopm] = useState({});

  const onReadyPlay = palyer => {
    videoRef.current = palyer;
    palyer.play();
  };

  const init = () => {
    let _option = {
      controls: true,
      autoplay: false,
      loop: false,
      preload: true,
      notSupportedMessage: "此视频暂无法播放，请稍后再试",
      poster: "https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF", //视频封面
      controlBar: {
        // timeDivider: true,//是否显示时间控制条，默认为true
        // remainingTimeDisplay: false,//是否显示剩余时间，默认为true
        // fullscreenToggle: true // 全屏按钮
        children: [
          { name: "playToggle" },
          {
            name: "volumePanel",
            inline: false // 不使用水平方式
          },
          { name: "currentTimeDisplay" },
          { name: "durationDisplay" },
          { name: "progressControl" },
          {
            name: "pictureInPictureToggle"
          },
          {
            name: "FullscreenToggle"
          }
        ]
      }
    };
    setOptopm(_option);

    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(
        videoElement,
        _option,
        () => {}
      ));
      onReadyPlay(player);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="video_play" style={{ width: "100%", height: "100%" }}>
      <video ref={videoRef} className="video-js vjs-big-play-centered">
        <source
          src={`http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4`}
          type="video/mp4"
        />
      </video>
    </div>
  );
}
