import React, { useEffect, useState } from 'react';

function Cursor() {
const [cursorX, setCursorX] = useState(0),
      [cursorY, setCursorY] = useState(0),
      [deviceType, setDeviceType] = useState(''),
      [isClicking, setIsClicking] = useState(false);

// check if it is a touch device
const isTouchDevice = () => {
	try {
	document.createEvent('TouchEvent');
	setDeviceType('touch');
	return true;
	} catch (e) {
	setDeviceType('mouse');
	return false;
	}
};

const move = (e) => {
	const touchEvent = e.touches ? e.touches[0] : null;
	const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
	const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;

	setCursorX(x);
	setCursorY(y);

	const cursorBorder = document.getElementById('cursor-border');
	if (cursorBorder) {
	cursorBorder.style.left = `${x}px`;
	cursorBorder.style.top = `${y}px`;
	}
};

const handleMouseDown = () => {
	setIsClicking(true);
};

const handleMouseUp = () => {
	setIsClicking(false);
};


useEffect(() => {
	document.addEventListener('mousemove', move);
	document.addEventListener('touchmove', move);
	document.addEventListener('mousedown', handleMouseDown);
	document.addEventListener('mouseup', handleMouseUp);

	return () => {
	document.removeEventListener('mousemove', move);
	document.removeEventListener('touchmove', move);
	document.removeEventListener('mousedown', handleMouseDown);
	document.removeEventListener('mouseup', handleMouseUp);
	};
}, []);

return (
	<>
	<style>
		{`
		* {
			cursor: none;
		}
		#cursor {
			position: absolute;
			background-color: ${isClicking ? '#aa00ff' : '#4800ac'};
			height: 5px;
			width: 5px;
			border-radius: 50%;
			transform: translate(-50%, -50%);
			pointer-events: none;
			transition: background-color 0.2s ease;
            z-index:999;
		}

		#cursor-border {
            display: flex;
            justify-content: center;
            align-items: center;
			position: absolute;
			width: 70px;
			height: 70px;
			background-color: transparent;
			border: 1px solid #aa00ffaa;
			border-radius: 50%;
			transform: translate(-50%, -50%);
			pointer-events: none;
			transition: all 0.2s ease-out;
            z-index:999;
		}
	`}
	</style>
	<div id="cursor" style={{ left: `${cursorX}px`, top: `${cursorY}px` }}></div>
	<div id="cursor-border"></div>

</>
);
}

export default Cursor;
