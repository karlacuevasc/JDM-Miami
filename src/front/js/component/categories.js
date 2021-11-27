import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "/workspace/JDM-Miami/src/front/styles/categories.scss";

export function Categories() {
	return (
		<Col>
			<Row>
				<Container>
					<h1 className="categoryTitle">Categories</h1>
				</Container>
			</Row>
			<Row>
				<Container className="byAlphabet">
					<h5># </h5>
					<h5>A</h5>
					<h5>B </h5>
					<h5>C</h5>
					<h5>D</h5>
					<h5>E</h5>
					<h5>F</h5>
					<h5>G</h5>
					<h5>H</h5>
					<h5>I</h5>
					<h5>J</h5>
					<h5>K</h5>
					<h5>L</h5>
					<h5>M</h5>
					<h5>N</h5>
					<h5>O</h5>
					<h5>P</h5>
					<h5>Q</h5>
					<h5>R</h5>
					<h5>S</h5>
					<h5>T</h5>
					<h5>U</h5>
					<h5>V</h5>
					<h5>W</h5>
					<h5>X</h5>
					<h5>Y</h5>
					<h5>Z</h5>
				</Container>
			</Row>
		</Col>
	);
}
