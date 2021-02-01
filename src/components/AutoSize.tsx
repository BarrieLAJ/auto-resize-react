import React, {
  useState,
  useEffect,
  ReactNode,
  useRef,
  useCallback,
} from "react";
import styled from "styled-components";

const TopElem =styled.div`
height: 0;
`

const BottomElem = styled.div`
position: fixed;
bottom: 0;
right: 0;
height: 0;
`

const AutoSize = (props: {
  className?: any
  children: ({ width, height }: { width: number; height: number, 
    className: string
  }) => ReactNode;
}) => {
  const topElem = useRef<any>();
  const bottomElem = useRef<any>();
  const [height, setHeight] = useState<number>();
  const [width, setWidth] = useState<number>();
  const lastTimerRef = useRef<any>(-1)

  const computeDimension = useCallback(() => {
    let topRect = topElem.current.getBoundingClientRect();
    let bottomRect = bottomElem.current.getBoundingClientRect();
    let height = bottomRect.top - topRect.top;
    let width = bottomRect.left - topRect.left;
    setHeight(height);
    setWidth(width);
  }, []);

  //resize effect
  useEffect(() => {
    const resizeobserver: ResizeObserver = new ResizeObserver(
      (entries) => {
        clearTimeout(lastTimerRef.current)
        const timer = setTimeout(() => {
          computeDimension();
       }, 30);
        lastTimerRef.current = timer
      }
    );
    resizeobserver.observe(topElem.current);
    return () => {
      resizeobserver.disconnect();
    };
  }, [computeDimension]);

  //re-render after first mount
  return (
    <>
      <TopElem ref={topElem}/>
      <BottomElem ref={bottomElem} />
      {width !== undefined && height !== undefined
        ? props.children({ width, height, className:props.className })
        : null}
    </>
  );
};

export default AutoSize