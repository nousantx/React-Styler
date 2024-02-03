import Styler from "../style/Styler";

const NotFound = () => {
  Styler();
  return (
    <div className="fx-ctr w-full h-100vh">
      <header className="text-center">
        <h1 className="fs-3em">404</h1>
        <p>Page not found!</p>
      </header>
    </div>
  );
};

export default NotFound;
