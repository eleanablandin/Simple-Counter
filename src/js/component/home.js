import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [seconds, setSeconds] = useState(0);
	const [start, setStart] = useState(false);
	// useEffect(() => {
	// 	setInterval(() => setSeconds(secondsPrev => secondsPrev + 1), 1000);
	// }, []);

	useEffect(() => {
		let interval = null;

		if (start) {
			interval = setInterval(() => {
				setSeconds(secondsPrev => secondsPrev + 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [start]);

	return (
		<div className="box">
			<div className="container mt-5 bg-dark text-white ">
				<div className="row justify-content-center border border-dark">
					<div className="col">
						<i className="far fa-clock"></i>
					</div>
					<div className="col">
						{Math.floor(seconds / 10000) % 10}
					</div>
					<div className="col">{Math.floor(seconds / 1000) % 10}</div>
					<div className="col">{Math.floor(seconds / 100) % 10}</div>
					<div className="col">{Math.floor(seconds / 10) % 10} </div>
					<div className="col">{seconds % 10}</div>
				</div>
			</div>

			<div className="buttons d-flex justify-content-center">
				<button
					type="button"
					className="btn btn-secondary border border-dark"
					onClick={() => setStart(true)}>
					Start
				</button>
				<button
					type="button"
					className="btn btn-secondary border border-dark"
					onClick={() => setStart(false)}>
					Pause
				</button>
				<button
					type="button"
					className="btn btn-secondary border border-dark"
					onClick={() => setStart(true)}>
					Resume
				</button>
				<button
					type="button"
					className="btn btn-secondary border border-dark"
					onClick={() => setSeconds(0)}>
					Reset
				</button>
			</div>
		</div>
	);
}
