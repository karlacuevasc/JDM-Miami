import React from "react";
import useSWR from "swr";

export async function JdmApi(path) {
	const response = await fetch("https://kc-jdm-api.herokuapp.com" + path);

	// console.log(response);

	if (response.status === 200) {
		const payload = await response.json();
		// console.log(JSON.stringify(payload));
		return payload;
	}
	throw new Error();
}
