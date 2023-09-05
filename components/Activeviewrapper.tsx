import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Activeviewrapper = ({
  children,
  callback,
  view,
}: {
  children: React.ReactElement;
  view: string;
  callback: (viewname: string) => void;
  activeview: string;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      console.log("activeView , ", view);
      callback(view);
    }
  }, [inView]);
  return <div ref={ref}>{children}</div>;
};

export default Activeviewrapper;
