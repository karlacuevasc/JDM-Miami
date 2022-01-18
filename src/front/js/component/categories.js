import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { JdmApi } from "../api";
import useSWR from "swr";
import "/Users/karlacuevas/Documents/JDM-Website-Info/src/front/styles/categories.scss";

export function Categories() {
	const { data, isValidating } = useSWR("/carlist", JdmApi);

	let theCarData =
		data &&
		data.results.map((item, index) => {
			return (
				<Container key={index}>
					<h1 className="categoryTitle">{item.make}</h1>
					<h1 className="categoryTitle">{item.model}</h1>
					<h1 className="categoryTitle">{item.year}</h1>
					<img src={item.image} style={{ maxHeight: "500px" }} />
				</Container>
			);
		});

	let mazda = () => {
		if (data.results === "Mazda") {
			// return <h1 className="categoryTitle">{data.results}</h1>;
			console.log(data.results);
		} else {
		}
	};

	return (
		<Col>
			<Row>
				<Container>
					<h1 className="categoryTitle">Categories</h1>
				</Container>
			</Row>
			<Row>
				<Container className="byAlphabet">
					<h5>
						<a href="#">#</a>{" "}
					</h5>
					<h5>
						<a href="#">A</a>
					</h5>
					<h5>
						<a href="#">B</a>
					</h5>
					<h5>
						<a href="#">C</a>
					</h5>
					<h5>
						<a href="#">D</a>
					</h5>
					<h5>
						<a href="#">E</a>
					</h5>
					<h5>
						<a href="#">F</a>
					</h5>
					<h5>
						<a href="#">G</a>
					</h5>
					<h5>
						<a href="#">H</a>
					</h5>
					<h5>
						<a href="#">I</a>
					</h5>
					<h5>
						<a href="#">J</a>
					</h5>
					<h5>
						<a href="#">K</a>
					</h5>
					<h5>
						<a href="#">L</a>
					</h5>
					<h5>
						<a href="#">M</a>
					</h5>
					<h5>
						<a href="#">N</a>
					</h5>
					<h5>
						<a href="#">O</a>
					</h5>
					<h5>
						<a href="#">P</a>
					</h5>
					<h5>
						<a href="#">Q</a>
					</h5>
					<h5>
						<a href="#">R</a>
					</h5>
					<h5>
						<a href="#">S</a>
					</h5>
					<h5>
						<a href="#">T</a>
					</h5>
					<h5>
						<a href="#">U</a>
					</h5>
					<h5>
						<a href="#">V</a>
					</h5>
					<h5>
						<a href="#">W</a>
					</h5>
					<h5>
						<a href="#">X</a>
					</h5>
					<h5>
						<a href="#">Y</a>
					</h5>
					<h5>
						<a href="#">Z</a>
					</h5>
				</Container>
				{theCarData}
			</Row>
		</Col>
	);
}
