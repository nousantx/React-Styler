import Styler from "../style/Styler";

const Footer = () => {
  Styler();
  return (
    <footer className="w-full bg-[neutral-100] fx-ctr fd-col p-0">
      <div className="w-full fx-ctr gap-3rem ai-stretch space-b p-2rem ph-10vw">
        <header>
          <h1 className="fs-1.5em lh-1">Tex</h1>
          <p className="fs-16px fw-600 white-space-nowrap lh-1">
            Tenox Style Example
          </p>
          <p className="lh-1 fs-12px fs-500 mt-1em">&copy; 2024 tenoxui</p>
        </header>
        <p className="text-center fx-ctr text-style-italic">
          &quot;Hehe, just kidding&quot;
        </p>
      </div>
      <p className="fs-12px fw-500 lh-1 flex-center bw-0 bs-solid bw-top-1px border-ddd w-full p-1rem">
        Built with{" "}
        <span className="mi-round fs-inherit tc-d3e602 mh-3px">favorite</span>
        by NOuSantx.
      </p>
    </footer>
  );
};

export default Footer;
