import React from "react";
import { Link } from "react-router-dom";
import "/workspace/The-World-of-JDM/src/front/styles/jumbotron.scss";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export const Jumbo = () => {
	return (
		<>
			<Container>
				<div className="background p-5 rounded-lg m-3">
					<h1 className="display-4">JDM Miami</h1>
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
						featured content or information.
					</p>
					<hr className="my-4" />
					<p>
						It uses utility classNamees for typography and spacing to space content out within the larger
						container.
					</p>
					<a className="btn btn-primary btn-lg" href="#" role="button">
						Learn more
					</a>
				</div>
			</Container>
		</>
	);
};
