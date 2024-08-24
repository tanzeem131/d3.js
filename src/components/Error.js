import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex justify-center items-center h-screen text-6xl font-extrabold">
      <h1>OOPS!!!</h1>
      <h2>Something went wrong!</h2>
      <h1>
        {err.status} {err.statusText}
      </h1>
    </div>
  );
};

export default Error;
