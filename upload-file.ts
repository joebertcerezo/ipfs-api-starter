import 'dotenv/config';

async function main() {
	try {

		const json = {
  "name": "cucumber 1",

  "description": "xxx description of NFT xxx",

  "image": "https://ipfs.io/ipfs/QmSfcUPG9i4NuyRFTbUddmeTQygn4pirN8HteeRLAufcVn",

  "attributes": [
    {
      "trait_type": "xxxxxxx trait label xxxxx",
      "value": "Mist xxxxxxx trait description xxxxx"
    },
    {
      "trait_type": "xxxxxx trait label xxxxxx",
      "value": "xxxxxxx trait label xxxxxxx"
    }
  ]
}
		// Construct a file according to the Web API
		const file = new File([JSON.stringify(json)], "1.json");

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
