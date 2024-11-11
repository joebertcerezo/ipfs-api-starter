async function main() {
	try {
		// Build optional queries
		const queryParams = new URLSearchParams({ status: "pinned" });

		// Filter by name
		//queryParams.append("metadata[name]", "hello.txt");

		// Filter by group ID
		// queryParams.append("groupId", "18893556-de8e-4229-8a9a-27b95468dd3e");

		// Filter by mime type
		// queryParams.append("mimeType", "text/plain");

		// Filter by CID
		//queryParams.append("cid", "QmVLwvmGehsrNEvhcCnnsw5RQNseohgEkFNN1848zNzdng");

		// Set result limit
		//queryParams.append("pageLimit", "100");

		// Add pagination
		// queryParams.append(
		// 	"pageOffset",
		// 	"100",
		// );

		const queryString = queryParams.toString();

		// Construct the URL
		const url = `https://api.pinata.cloud/data/pinList${queryString ? `?${queryString}` : ""}`;

		// Fetch list of files
		const filesRequest = await fetch(url, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${process.env.PINATA_JWT}`,
			},
		});

		// Parse the response and log it out
		const files = await filesRequest.json();
		console.log(files.rows);
	} catch (error) {
		console.log(error);
	}
}

main();
