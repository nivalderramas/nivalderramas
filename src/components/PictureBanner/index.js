import React from "react";
import Image from "mui-image";

function PictureBanner() {
  return (
    <div>
      <Image
        src="/nivalderramas/img/portrait2.png"
        height="100%"
        width="100%"
        fit="cover"
        duration={300}
        easing="cubic-bezier(0.7, 0, 0.6, 1)"
        showLoading={false}
        errorIcon={true}
        shift={null}
        distance="100px"
        shiftDuration={900}
        bgColor="inherit"
      />
    </div>
  );
}

export { PictureBanner };
