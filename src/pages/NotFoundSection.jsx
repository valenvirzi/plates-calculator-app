import { useRouteError } from "react-router-dom";

const NotFoundSection = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-black">
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
