async function main() {
	try {
		// Fetch the lastest file and build a link
		const fileRequest = await fetch(
			"https://api.pinata.cloud/data/pinList?status=pinned&pageLimit=1",
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${process.env.PINATA_JWT}`,
				},
			},
		);
		const fileData = await fileRequest.json();

		// Get the CID
		const cid = fileData.rows[0].ipfs_pin_hash;

		// Put together the url
		const url = `https://${process.env.GATEWAY_URL}/ipfs/${cid}`;

		console.log(url);

		// Use a public gateway
		const publicGatewayUrl = `https://ipfs.io/ipfs/${cid}`;
		console.log(publicGatewayUrl);
	} catch (error) {
		console.log(error);
	}
}

main();
