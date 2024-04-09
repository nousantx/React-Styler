import { useLayoutEffect } from "react";
import tenoxui, { defineProps, makeStyles, moreColor } from "tenoxui";

const Styler = () => {
  useLayoutEffect(() => {
    defineProps({
      dis: ["display"],
      bdr: ["border"],
      bc: ["borderColor"],
      all: ["all"],
      "ob-fit": ["objectFit"],
      "bd-bottom": ["borderBottom"],
    });
    makeStyles({
      // Body Style
      body: "bg-[neutral-100] tc-[neutral-900]",
      // Utility classes you can use
      ".w-full,.w-mx": "w-100%",
      ".h-full,.h-mx": "h-100%",
      ".text-center": "ta-center",
      ".flex": "dis-flex",
      ".fx-ctr,.flex-center": "dis-flex flex-parent-center",
      ".fd-col": "fd-column",
      ".space-b": "jc-[sb]",
      // Position
      ".fixed": "post-fixed",
      ".relative": "post-relative",
      ".absolute": "post-absolute",
    });

    moreColor();
    tenoxui();
  }, []);
};

export default Styler;
