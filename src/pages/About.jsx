import Styler from "../style/Styler";

const About = () => {
  Styler();
  return (
    <>
      <div className="fx-ctr fd-col ai-start w-full h-100vh p-2rem ph-10vw">
        <header className="w-mx-600px">
          <h1 className="fs-3em">#About</h1>
          <p className="fs-1.2rem fw-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,
            minima!
          </p>
        </header>
      </div>
    </>
  );
};

export default About;
