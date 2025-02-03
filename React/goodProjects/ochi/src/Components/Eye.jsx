import React from "react";

function Eye() {
    const [leftEyeAngle, setLeftEyeAngle] = React.useState(0);
    const [rightEyeAngle, setRightEyeAngle] = React.useState(0);

    const [leftDelta, setLeftDelta] = React.useState({ x: 0, y: 0 });
    const [rightDelta, setRightDelta] = React.useState({ x: 0, y: 0 });

    const leftEyeRef = React.useRef(null);
    const rightEyeRef = React.useRef(null);

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            const leftEye = leftEyeRef.current;
            const rightEye = rightEyeRef.current;

            const leftEyeRect = leftEye.getBoundingClientRect();
            const rightEyeRect = rightEye.getBoundingClientRect();

            const leftDelX = x - (leftEyeRect.left + leftEyeRect.width / 2);
            const leftDelY = y - (leftEyeRect.top + leftEyeRect.height / 2);
            setLeftDelta({ x: leftDelX, y: leftDelY });

            const rightDelX = x - (rightEyeRect.left + rightEyeRect.width / 2);
            const rightDelY = y - (rightEyeRect.top + rightEyeRect.height / 2);
            setRightDelta({ x: rightDelX, y: rightDelY });

            const leftAngle = Math.atan2(leftDelY, leftDelX) * (180 / Math.PI);
            const rightAngle = Math.atan2(rightDelY, rightDelX) * (180 / Math.PI);

            setLeftEyeAngle(leftAngle - 180);
            setRightEyeAngle(rightAngle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const MULTIPLE = 0.05;

    return (
        <div  className="eyes_div gap-10 h-[15vw] flex flex-row">
            {/* Left Eye */}
            <div
                ref={leftEyeRef}
                className="eye_white flex items-center bg-zinc-100 h-[15vw] w-[15vw] rounded-full justify-center"
            >
                <div
                    style={{
                        transform: `translate(${leftDelta.x * MULTIPLE}px , ${
                            leftDelta.y * MULTIPLE
                        }px)`,
                    }}
                    className="eye_black h-[62%] w-[62%] bg-black rounded-full flex items-center justify-center"
                >
                    <div
                        style={{ transform: `rotate(${leftEyeAngle}deg)` }}
                        className="line w-full flex items-center h-[20%]  "
                    >
                        <div className="eye_iris flex w-[15%] h-[75%] bg-zinc-100 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Right Eye */}
            <div
                ref={rightEyeRef}
                className="eye_white flex items-center bg-zinc-100 h-[15vw] w-[15vw] rounded-full justify-center"
            >
                <div
                    style={{
                        transform: `translate(${rightDelta.x * MULTIPLE}px , ${
                            rightDelta.y * MULTIPLE
                        }px)`,
                    }}
                    className="eye_black h-[62%] w-[62%] bg-black rounded-full flex items-center justify-center"
                >
                    <div
                        style={{ transform: `rotate(${rightEyeAngle}deg)` }}
                        className="line w-full flex items-center h-[20%] "
                    >
                        <div className="eye_iris flex w-[15%] h-[75%] bg-zinc-100 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eye;
