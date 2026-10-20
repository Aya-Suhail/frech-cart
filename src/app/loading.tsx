import BounceLoader from "react-spinners/BounceLoader";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <BounceLoader color="#17c41d"/>
    </div>
  );
}

export default Loading;
