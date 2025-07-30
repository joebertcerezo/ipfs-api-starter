import 'dotenv/config';

async function main() {
	try {

		const json = {
  "name": "Cucumber Chad: Fire Grid Master",
  "description": "Chad's bringing the heat! This fierce version of our legendary Cucumber Chad showcases his strategic mind with a classic tic-tac-toe grid backdrop set against blazing flames. The fiery orange and red gradient background represents Chad's burning passion for victory, while the grid symbolizes his tactical approach to domination. With his signature mustache and dark shades, this Chad is ready to play the game of life - and win every time!",
  "image": "https://ipfs.io/ipfs/QmaNynKRfNTshdkVNgUEULwyfzJtmNqttMyKP8EwuBni3i",
  "attributes": [
    {
      "trait_type": "Character Type",
      "value": "Alpha Cucumber"
    },
    {
      "trait_type": "Background Pattern",
      "value": "Tic-Tac-Toe Grid"
    },
    {
      "trait_type": "Background Effect",
      "value": "Fire Gradient"
    },
    {
      "trait_type": "Facial Hair",
      "value": "Classic Mustache"
    },
    {
      "trait_type": "Eyewear",
      "value": "Dark Sunglasses"
    },
    {
      "trait_type": "Color Scheme",
      "value": "Fire Orange"
    },
    {
      "trait_type": "Vibe",
      "value": "Strategic Intensity"
    },
    {
      "trait_type": "Game Element",
      "value": "Tic-Tac-Toe"
    },
    {
      "trait_type": "Energy Level",
      "value": "Blazing Hot"
    },
    {
      "trait_type": "Rarity",
      "value": "Rare"
    }
  ]
}
		// Construct a file according to the Web API
		const file = new File([JSON.stringify(json)], "4.json");

		// Create form data and attach the file
		const data = new FormData();
		data.append("file", file);

		// Optional: Attach other info about the file

		// Custom name and keyvalues
		// const metadata = JSON.stringify({
		// 	name: "My cool file",
		// 	keyvalues: {
		// 		env: "prod",
		// 		user: "sudo",
		// 	},
		// });
		// data.append("pinataMetadata", metadata);

		// Change CID version or add to a Group
		// const options = JSON.stringify({
		// 	cidVersion: 1,
		// 	groupId: "my-group-id",
		// });
		// data.append("pinataOptions", options);

		// Upload the file
		const uploadRequest = await fetch(
			"https://api.pinata.cloud/pinning/pinFileToIPFS",
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${process.env.PINATA_JWT}`,
				},
				body: data,
			},
		);
		// Parse the response and log it out
		const upload = await uploadRequest.json();
		console.log(upload);
	} catch (error) {
		console.log(error);
	}
}

main();
