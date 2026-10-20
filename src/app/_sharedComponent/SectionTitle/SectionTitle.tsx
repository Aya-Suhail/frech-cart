

const SectionTitle = ({title,subtitle}:{title:string,subtitle:string}) => {
  return (
    <>
      <h2 className="relative
      text-4xl font-bold ps-6 mb-5
      before:content-[''] 
      before:absolute 
      before:h-10 
      before:w-3 
      before:inset-s-0
      before:bg-green-700 
      before:rounded-sm">
        {subtitle} <span className="text-green-700 ">{title}</span>
        </h2>
    </>
  );
}

export default SectionTitle;
