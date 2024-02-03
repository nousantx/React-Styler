import Styler from "../style/Styler";

const Home = () => {
  Styler();
  return (
    <>
      <div className="fx-ctr fd-col ai-start w-full h-100vh p-10vw">
        <header className="w-mx-600px">
          <h1 className="fs-3em">#Home</h1>
          <p className="fs-1.2rem fw-500 lh-1.4">
            This project use Tenox UI as styling process. Edit{" "}
            <code className="fs-90% bg-[neutral-200] p-3px ph-7px br-3px">
              /src/style/Styler.jsx
            </code>
          </p>
        </header>
      </div>
    </>
  );
};

export default Home;
