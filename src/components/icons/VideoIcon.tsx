
const VideoIcon = (): JSX.Element => (
  <div className="w-full h-full flex items-center justify-center">
    <img 
      src="data:image/png;base64,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"
      alt="Video Icon"
      className="w-18 h-18 object-contain"
    />
  </div>
);

export default VideoIcon;