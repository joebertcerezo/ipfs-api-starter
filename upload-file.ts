import 'dotenv/config';

async function main() {
	try {

		const json = {
  "name": "Cucumber Chad: Rainbow Riot",
  "description": "Chad's gone full spectrum! This psychedelic version of our beloved Cucumber Chad brings maximum energy with a kaleidoscope background that's as bold as his personality. The rainbow checkerboard pattern represents Chad's versatility and his ability to adapt to any vibe while maintaining that legendary alpha cucumber swagger. This is Chad at his most expressive - fresh, colorful, and absolutely electric!",
  "image": "https://ipfs.io/ipfs/QmbUAffQwNnNepW3quNskYmGH6yp85AdNG3G6w2mwbGq52",
  "attributes": [
    {
      "trait_type": "Character Type",
      "value": "Alpha Cucumber"
    },
    {
      "trait_type": "Background Pattern",
      "value": "Rainbow Checkerboard"
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
      "trait_type": "Vibe",
      "value": "Psychedelic"
    },
    {
      "trait_type": "Color Scheme",
      "value": "Full Spectrum"
    },
    {
      "trait_type": "Energy Level",
      "value": "Maximum"
    },
    {
      "trait_type": "Rarity",
      "value": "Ultra Rare"
    }
  ]
}
		// Construct a file according to the Web API
		const file = new File([JSON.stringify(json)], "3.json");

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
