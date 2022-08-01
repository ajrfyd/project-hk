import { useRef, useEffect } from "react";
import styled from "styled-components";

const Resizable = () => {
  const ref = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const resizableEle = ref.current;
    const resizerRight = rightRef.current;
    const resizerTop = topRef.current;
    const resizerBottom = bottomRef.current;
    const resizerLeft = leftRef.current;

    if(resizableEle && resizerRight && resizerTop && resizerBottom && resizerLeft) {
      const styles = window.getComputedStyle(resizableEle);
      let width = parseInt(styles.width, 10);
      let height = parseInt(styles.height, 10);
      let x = 0;
      let y = 0;

      resizableEle.style.top = '0';
      resizableEle.style.left = '0';

      //! Right resize
      const onMouseMoveRightResize = (e: MouseEvent) => {
        const dx = e.clientX - x;
        x = e.clientX;
        width = width + dx;
        resizableEle.style.width = `${width}px`;
      };

      const onMouseUpRightResize = (e: MouseEvent) => {
        document.removeEventListener('mousemove', onMouseMoveRightResize);
      };

      const onMouseDownRightResize = (e: MouseEvent) => {
        x = e.clientX;
        resizableEle.style.left = styles.left;
        resizableEle.style.right = '';
  
        document.addEventListener('mousemove', onMouseMoveRightResize);
        document.addEventListener('mouseup', onMouseUpRightResize);
      };

      //! Top resize
      const onMouseMoveTopResize = (e: MouseEvent) => {
        const dy = e.clientY - y;
        height = height - dy;
        y = e.clientY;
        resizableEle.style.height = `${height}px`;
      };

      const onMouseUpTopResize = () => {
        document.removeEventListener('mousemove', onMouseMoveTopResize);
      };

      const onMouseDownTopResize = (e: MouseEvent) => {
        y = e.clientY;
        const styles = window.getComputedStyle(resizableEle);
        resizableEle.style.bottom = styles.bottom;
        // resizableEle.style.top = '';
        document.addEventListener('mousemove', onMouseMoveTopResize);
        document.addEventListener('mouseup', onMouseUpTopResize);
      };

      //! Bottom resize
      const onMouseMoveBottomResize = (e: MouseEvent) => {
        const dy = e.clientY - y;
        height = height + dy;
        y = e.clientY;
        resizableEle.style.height = `${height}px`;
      };

      const onMouseUpBottomResize = () => {
        document.removeEventListener('mousemove', onMouseMoveBottomResize);
      };

      const onMouseDownBottomResize = (e: MouseEvent) => {
        y = e.clientY;
        const styles = window.getComputedStyle(resizableEle);
        resizableEle.style.top = styles.top;
        resizableEle.style.bottom = '';
        document.addEventListener('mousemove', onMouseMoveBottomResize);
        document.addEventListener('mouseup', onMouseUpBottomResize);
      };

      //! Left Resize
      const onMouseMoveLeftResize = (e: MouseEvent) => {
        const dx = e.clientX - x;
        x = e.clientX;
        width = width - dx;
        resizableEle.style.width = `${width}px`;
      };

      const onMouseUpLeftResize = (e: MouseEvent) => {
        document.removeEventListener('mousemove', onMouseMoveLeftResize);
      };

      const onMouseDownLeftResize = (e: MouseEvent) => {
        x = e.clientX;
        resizableEle.style.right = styles.right;
        resizableEle.style.left = 'none';
  
        document.addEventListener('mousemove', onMouseMoveLeftResize);
        document.addEventListener('mouseup', onMouseUpLeftResize);
      };

      //! Mouse Down event listener
      
      resizerRight.addEventListener('mousedown', onMouseDownRightResize);
      // resizerTop.addEventListener('mousedown', onMouseDownTopResize);
      resizerBottom.addEventListener('mousedown', onMouseDownBottomResize);
      // resizerLeft.addEventListener('mousedown', onMouseDownLeftResize);

      return () => {
        resizerRight.removeEventListener('mousedown', onMouseDownRightResize);
        // resizerTop.removeEventListener('mousedown', onMouseDownTopResize);
        resizerBottom.removeEventListener('mousedown', onMouseDownBottomResize);
        // resizerLeft.removeEventListener('mousedown', onMouseDownLeftResize);
      }
    }

      

    return () => {
    }
  }, []);

  return (
    <Container>
      <div ref={ref} className="resizable">
        <div ref={leftRef} className='resizer resizer-l'/>
        <div ref={topRef} className='resizer resizer-t'/>
        <div ref={rightRef} className='resizer resizer-r'/>
        <div ref={bottomRef} className='resizer resizer-b'/>
      </div>
    </Container>
  )
}

export default Resizable;

const Container = styled.div`

  .resizable {
    position: absolute;
    border: 2px solid #533535;
    width: 100px;
    height: 100px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    min-width: 15px;
    min-height: 15px;
    top: 0;
    left: 0;
  }

  .resizer {
    position: absolute;
    background: #000;
  }

  .resizer-r {
    cursor: col-resize;
    height: 100%;
    right: 0;
    top: 0;
    width: 5px;
    background: #000;
  }

  .resizer-t {
    cursor: row-resize;
    height: 5px;
    top: 0;
    left: 0;
    width: 100%;
    background: #000;
  }

  .resizer-b {
    cursor: row-resize;
    height: 5px;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #000;
  }

  .resizer-l {
    cursor: col-resize;
    height: 100%;
    left: 0;
    top: 0;
    width: 5px;
    background: #000;
  }
`