import React, { useState } from "react";
import { Stage, Layer, Rect, Circle, Line } from "react-konva";

const App = () => {
  const [rect, setRect] = useState({ isDragging: false, x: 50, y: 50 });
  const [circle, setCircle] = useState({ isDragging: false, x: 250, y: 100 });
  const [line, setLine] = useState({ isDragging: false, x: 150, y: 200 });

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={rect.x}
          y={rect.y}
          width={100}
          height={100}
          fill={"red"}
          draggable
          onDragStart={() => {
            setRect({
              ...rect,
              isDragging: true
            });
          }}
          onDragEnd={(e) => {
            setRect({
              ...rect,
              isDragging: false,
              x: e.target.x(),
              y: e.target.y()
            });
          }}
          shadowBlur={10}
        />
        <Circle
          x={circle.x}
          y={circle.y}
          radius={50}
          fill="green"
          draggable
          onDragStart={() => {
            setCircle({
              ...circle,
              isDragging: true
            });
          }}
          onDragEnd={(e) => {
            setCircle({
              ...circle,
              isDragging: false,
              x: e.target.x(),
              y: e.target.y()
            });
          }}
        />
        <Line
          x={line.x}
          y={line.y}
          points={[0, 0, 100, 0, 100, 100]}
          tension={0.5}
          closed
          stroke="black"
          fillLinearGradientStartPoint={{ x: -50, y: -50 }}
          fillLinearGradientEndPoint={{ x: 50, y: 50 }}
          fillLinearGradientColorStops={[0, "red", 1, "yellow"]}
          draggable
          onDragStart={() => {
            setLine({
              ...line,
              isDragging: true
            });
          }}
          onDragEnd={(e) => {
            setLine({
              ...line,
              isDragging: false,
              x: e.target.x(),
              y: e.target.y()
            });
          }}
        />
      </Layer>
    </Stage>
  );
};

export default App;
