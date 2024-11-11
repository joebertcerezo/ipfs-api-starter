async function main() {
	try {
		// Construct a file according to the Web API
		const file = new File(["Hello World!"], "hello.txt");

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
