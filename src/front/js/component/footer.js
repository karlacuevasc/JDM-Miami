import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import "/Users/karlacuevas/Documents/JDM-Website-Info/src/front/styles/footer.scss";

export const Footer = () => (
	<Container className="footerParent">
		<div className="footerBackground">
			<div className="text-white-small">
				<Row>
					<Col sm={4} />
					<Col sm={4} />
					<Col sm={4} className="footerCompanySection">
						{/* <div>
							<Link className="aboutuslink" to="/about">
								<h5 className="about">About</h5>
							</Link>
						</div> */}
					</Col>
				</Row>
			</div>
		</div>
	</Container>
);
