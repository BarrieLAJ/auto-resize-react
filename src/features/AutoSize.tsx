import React, { useState, useEffect, ReactNode, useRef } from "react";

export const Tile = (props: {
  children: ({ width, height }: { width: number; height: number }) => ReactNode;
}) => {
  const topElem = useRef<any>(null);
  const bottomElem = useRef<any>(null);
  const [height, setHeight] = useState<number>();
  const [width, setWidth] = useState<number>();
  const [refIsSet, setRefIsSet] = useState(false);
  const resizeobserver = useRef<ResizeObserver | null>();
  const refIsTrue = refIsSet === true;

  useEffect(() => {
    setRefIsSet(true);
  }, []);



//resize effect
  useEffect(() => {
    resizeobserver.current = new ResizeObserver((entries, observer) => {
      for (let entry of entries) {
        if (
          entry.contentRect.right
        ) {
          let topRect = topElem.current.getBoundingClientRect();
          let bottomRect = bottomElem.current.getBoundingClientRect();
          let height = bottomRect.top - topRect.top;
          let width = bottomRect.left - topRect.left;
          setHeight(height);
          setWidth(width);
        }
      }
    });
    if (refIsSet) {
      resizeobserver.current.observe(topElem.current);
    }
    return () => {
      if (resizeobserver.current) {
        resizeobserver.current.disconnect();
      }
    };
  }, [resizeobserver, refIsSet]);


  //re-render after first mount
  useEffect(() => {
    let topRect = topElem.current.getBoundingClientRect();
    let bottomRect = bottomElem.current.getBoundingClientRect();
    let height = bottomRect.top - topRect.top;
    let width = bottomRect.left - topRect.left;
    setHeight(height);
    setWidth(width);
  }, [refIsTrue]);

  return (
    <>
      <div
        ref={topElem}
        style={{
          height: 2,
          backgroundColor: "red",
        }}
      />
      <div
        ref={bottomElem}
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          height: 1,
          backgroundColor: "green",
          zIndex: 100,
        }}
      />
      {width !== undefined && height !== undefined
        ? props.children({ width, height })
        : null}
    </>
  );
};
