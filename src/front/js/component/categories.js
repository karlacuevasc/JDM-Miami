import React, { useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { JdmApi } from "../api";
import useSWR from "swr";
import "/Users/karlacuevas/Documents/JDM-Website-Info/src/front/styles/categories.scss";
import { useParams } from "react-router-dom";

export function Categories() {
	const { data, isValidating } = useSWR("/carlist", JdmApi);
	const params = useParams();

	const carFilter = useMemo(
		() => {
			if (!data) {
				return [];
			}
			if (!params.letter) {
				return data.results;
			}
			return data.results.filter(x => x.make.toLowerCase().startsWith(params.letter));
		},
		[data, params.letter]
	);

	let theCarData = carFilter.map((item, index) => {
		return (
			<Container key={index}>
				<h1 className="categoryTitle">{item.make}</h1>
				<h1 className="categoryTitle">{item.model}</h1>
				<h1 className="categoryTitle">{item.year}</h1>
				<img src={item.image} style={{ maxHeight: "500px" }} />
			</Container>
		);
	});

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
						<a href="make/a">A</a>
					</h5>
					<h5>
						<a href="make/b">B</a>
					</h5>
					<h5>
						<a href="make/c">C</a>
					</h5>
					<h5>
						<a href="make/d">D</a>
					</h5>
					<h5>
						<a href="make/e">E</a>
					</h5>
					<h5>
						<a href="make/f">F</a>
					</h5>
					<h5>
						<a href="make/g">G</a>
					</h5>
					<h5>
						<a href="make/h">H</a>
					</h5>
					<h5>
						<a href="make/i">I</a>
					</h5>
					<h5>
						<a href="make/j">J</a>
					</h5>
					<h5>
						<a href="make/k">K</a>
					</h5>
					<h5>
						<a href="make/l">L</a>
					</h5>
					<h5>
						<a href="/make/m">M</a>
					</h5>
					<h5>
						<a href="/make/n">N</a>
					</h5>
					<h5>
						<a href="make/o">O</a>
					</h5>
					<h5>
						<a href="make/p">P</a>
					</h5>
					<h5>
						<a href="make/q">Q</a>
					</h5>
					<h5>
						<a href="make/r">R</a>
					</h5>
					<h5>
						<a href="make/s">S</a>
					</h5>
					<h5>
						<a href="make/s">T</a>
					</h5>
					<h5>
						<a href="make/u">U</a>
					</h5>
					<h5>
						<a href="make/v">V</a>
					</h5>
					<h5>
						<a href="make/w">W</a>
					</h5>
					<h5>
						<a href="make/x">X</a>
					</h5>
					<h5>
						<a href="make/y">Y</a>
					</h5>
					<h5>
						<a href="make/z">Z</a>
					</h5>
				</Container>
				{theCarData}
			</Row>
		</Col>
	);
}
