import { useRouteError } from "react-router-dom";

const NotFoundSection = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="bg-black min-h-screen text-white">
      <h1 className="">Error Not Found</h1>
      {/* TODO: Start making the main pages for the app */}
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFoundSection;
