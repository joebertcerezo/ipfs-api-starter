async function main() {
	try {
		// Fetch a group
		const listGroupRequest = await fetch("https://api.pinata.cloud/groups", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${process.env.PINATA_JWT}`,
			},
		});
		const listGroups = await listGroupRequest.json();

		// Get group ID
		const groupId = listGroups[0].id;

		// Fetch a file ID
		const fileRequest = await fetch(
			"https://api.pinata.cloud/data/pinList?status=pinned",
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${process.env.PINATA_JWT}`,
				},
			},
		);
		const files = await fileRequest.json();

		// Get file CID
		const cid = files.rows[0].ipfs_pin_hash;

		// Create payload
		const data = JSON.stringify({
			cids: [cid],
		});

		// Add file to group
		const request = await fetch(
			`https://api.pinata.cloud/groups/${groupId}/cids`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.PINATA_JWT}`,
				},
				body: data,
			},
		);
		console.log(request.statusText);
	} catch (error) {
		console.log(error);
	}
}

main();
