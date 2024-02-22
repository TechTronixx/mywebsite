const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="p-2 overflow-hidden rounded-lg laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div className="relative mb-5">
        <img
          alt={name}
          className="object-contain w-full h-full transition-all duration-300 ease-out rounded-t-lg cursor-pointer hover:scale-110"
          src={img}
        />
      </div>
      <div>
        <h1 className="mb-2 text-3xl font-medium">
          {name ? name : "Project Name"}
        </h1>
        <h2 className="text-xl opacity-50">
          {description ? description : "Description"}
        </h2>
      </div>
    </div>
  );
};

export default WorkCard;
