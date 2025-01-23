const WorkCard = ({ img, name, description, onClick, isVideo, videoSrc }) => {
  return (
    <div
      className="flex flex-col items-center p-2 overflow-hidden rounded-lg laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div className="relative mb-5 w-full h-0 pb-[56.25%]">
        {isVideo ? (
          <video
            className="absolute top-0 left-0 object-cover w-full h-full transition-all duration-300 ease-out border-2 border-purple-500 rounded-t-lg cursor-pointer hover:scale-110"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc} type="video/webm" />
            <source src={videoSrc} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            alt={name}
            className="absolute top-0 left-0 object-cover w-full h-full transition-all duration-300 ease-out border-2 border-purple-500 rounded-t-lg cursor-pointer hover:scale-110"
            src={img}
          />
        )}
      </div>
      <div className="text-center">
        <h1 className="py-2 text-3xl font-medium">
          {name ? name : "Project Name"}
        </h1>
        <h2 className="py-2 text-xl opacity-50">
          {description ? description : "Description"}
        </h2>
      </div>
    </div>
  );
};

export default WorkCard;
