import React from "react";

function Video() {
	return (
		<>
			<div className="ui container">
				<div className="ui grid">
					<div className="ui row">
						<div className="sixteen wide column">
							<div className="ui segment topspace">
								<h3 className="ui header">Ron's Best Moments</h3>
							</div>
						</div>
						<div className="sixteen wide column">
							<div className="ui embed">
								<iframe
									title="Ron Swanson Supercut"
									src="https://www.youtube.com/embed/SrLZgP-OR6s"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Video;
