import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { NavBar } from "../component/navbar";
import { Jumbo } from "../component/jumbotron";
import Container from "react-bootstrap/Container";
import { Footer } from "../component/footer";
import { Categories } from "../component/categories";
import { HomeCards } from "../component/cards";
import { Input } from "../component/input-field";

import "../../styles/home.scss";

export const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbo />
			<Input />
			<Categories />
			<Footer />
		</div>
	);
};
