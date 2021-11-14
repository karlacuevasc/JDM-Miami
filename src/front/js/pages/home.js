import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { NavBar } from "../component/navbar";
import { Jumbo } from "../component/jumbotron";
import Container from "react-bootstrap/Container";
import { HomeCards } from "../component/cards";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const theCards = () => {
		let cards = [];
		let card = (
			<Container className="col">
				<HomeCards />
			</Container>
		);

		for (let i = 0; i < 3; i++) {
			cards.push(card);
		}

		return cards;
	};

	return (
		<Container>
			<NavBar />
			<Jumbo />
			<Container className="row">{theCards()}</Container>
		</Container>
	);
};
