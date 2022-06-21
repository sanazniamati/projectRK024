import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Stage, Layer, RegularPolygon } from "react-konva";


const App = () => {
    const[opacity,setOpacity]=useState(0.5)
    const handelMousedOver=()=>{
        setOpacity(1)
    }
    const handelMousedLeave=()=>{
        setOpacity(0.5)
    }
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <RegularPolygon
                    x={180}
                    y={200}
                    sides={5}
                    radius={70}
                    fill={"red"}
                    stroke={"black"}
                    strokeWidth={4}
                    opacity={opacity}
                    draggable
                    onMouseOver={handelMousedOver}
                    onMouseLeave={handelMousedLeave}
                />
            </Layer>
        </Stage>
    );
};

const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


