import 'dotenv/config';
import { readFileSync } from 'fs';
import { basename } from 'path';

async function uploadImage(imagePath: string) {
	try {
		// Read the image file
		const imageBuffer = readFileSync(imagePath);
		const fileName = basename(imagePath);

		// Create form data and attach the file
		const data = new FormData();
		const file = new File([imageBuffer], fileName);
		data.append("file", file);

		// Optional: Add metadata
		const metadata = JSON.stringify({
			name: `Cucumber Chad - ${fileName}`,
			keyvalues: {
				type: "image",
				project: "cucumber-chad-nft",
			},
		});
		data.append("pinataMetadata", metadata);

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
		console.log("Image uploaded successfully!");
		console.log(`IPFS Hash: ${upload.IpfsHash}`);
		console.log(`File Name: ${upload.Name}`);
		console.log(`Size: ${upload.PinSize} bytes`);
		console.log(`IPFS URL: ipfs://${upload.IpfsHash}`);
		console.log(`Gateway URL: https://gateway.pinata.cloud/ipfs/${upload.IpfsHash}`);
		
		return upload;
	} catch (error) {
		console.error("Error uploading image:", error);
		throw error;
	}
}

// Get the image path from command line arguments
const imagePath = process.argv[2];

if (!imagePath) {
	console.error("Please provide an image path as an argument");
	console.log("Usage: npm run upload-image <path-to-image>");
	process.exit(1);
}

uploadImage(imagePath);
