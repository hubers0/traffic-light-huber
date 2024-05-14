import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [activeColor, setActiveColor] = useState("")
	return (
		<div className="container-stick">
			<div className="container">
				<div className={`bg-dark traffic-light p-4`}>
					<div className={`bg-danger light ${activeColor === "red" ? "glow" : ""}`}
						onClick={() => setActiveColor("red")}>
					</div>

					<div className={`bg-warning light ${activeColor === "yellow" ? "glow" : ""}`}
						onClick={() => setActiveColor("yellow")}>
					</div>

					<div className={`bg-success light ${activeColor === "green" ? "glow" : ""}`}
						onClick={() => setActiveColor("green")}>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Home;