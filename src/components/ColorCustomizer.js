import React from "react";

function ColorCustomizer() {
	return (
		<>
			<div className="color-customizer closed">
				<div className="color-button">
					<a className="opener" href="/#">
						{" "}
						<i className="fas fa-spinner fa-spin"></i>
					</a>
				</div>
				<div className="clearfix color-chooser text-center">
					<h4 className="text-theme font-w-8 mb-4">
						Softino With{" "}
						<span className="text-black font-w-5">
							Awesome Colors
						</span>
					</h4>
					<ul className="colorChange clearfix">
						<li
							className="theme-default selected"
							title="theme-default"
							data-style="color-1"
						></li>
						<li
							className="theme-2"
							title="theme-2"
							data-style="color-2"
						></li>
						<li
							className="theme-3"
							title="theme-3"
							data-style="color-3"
						></li>
						<li
							className="theme-4"
							title="theme-4"
							data-style="color-4"
						></li>
						<li
							className="theme-5"
							title="theme-5"
							data-style="color-5"
						></li>
						<li
							className="theme-6"
							title="theme-6"
							data-style="color-6"
						></li>
					</ul>
					<div className="text-center mt-4">
						<a
							className="btn btn-theme btn-circle"
							href="/#"
							data-text="Purchase Now"
						>
							<span>P</span>
							<span>u</span>
							<span>r</span>
							<span>c</span>
							<span>h</span>
							<span>a</span>
							<span>s</span>
							<span>e</span>
							<span> </span>
							<span>N</span>
							<span>o</span>
							<span>W</span>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default ColorCustomizer;
