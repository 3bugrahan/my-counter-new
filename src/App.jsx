import * as React from "react";
import { Container } from "@mui/material";
import { Button } from "semantic-ui-react";

// const waiting = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve();
// 		}, ms);
// 		clearInterval(interval);
// 	});
// };

const App = () => {
	const [sayac, setSayac] = React.useState(0);
	const [sayi, setSayi] = React.useState(0);

	const getCounter = () => {
		if (sayi) {
			clearInterval(sayi);
			setSayi(0);
			return;
		}

		const interval = setInterval(() => {
			setSayac((prev) => prev + 1);
		}, 1000);
		setSayi(interval);
	};

	return (
		<Container sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
			<h1>Geçen Süre: {sayac} saniye</h1>
			<Button onClick={getCounter}>
				{sayi ? "Sayacı Durdur" : "Sayacı Başlat"}
			</Button>
		</Container>
	);
};

export default App;
