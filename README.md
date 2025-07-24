# Pinata File Upload Starter

This repo provides examples for uploading files to Pinata, a leading IPFS pinning service. It includes basic API calls to help you get started with uploading and managing files on IPFS through Pinata's platform.

> [!TIP]
> If you plan to use Pinata in a Typescript/Javascript enviornment, check out [SDK](https://github.com/PinataCloud/pinata)!

## Getting Started

First follow [these steps](https://docs.pinata.cloud/quickstart) to create a free Pinata account and get your API key and Gateway URL.

By default this repo uses [Bun.sh](https://bun.sh), so install this first unless you plan to run the files with another program.

Clone the repo to your machine and install the dependencies

```bash
git clone https://github.com/PinataCloud/files-api-starter

cd files-api-starter

bun install
```

Create a `.env` file in the root directory and add your Pinata JWT API key and Gateway URL:

```
PINATA_JWT=your_pinata_jwt_here
GATEWAY_URL=your_gateway_url_here
```

## Usage

Upload files to Pinata using the following commands:

**Upload JSON files to Pinata:**

```bash
npm run upload
```

**Upload image files to Pinata:**

```bash
npm run upload-image <path-to-image>
```

For example:

```bash
npm run upload-image logo.png
npm run upload-image /path/to/your/image.png
```

**Using Bun directly:**

```bash
bun upload-file.ts
```

**Additional Pinata operations:**

Explore the other files in this repo for additional Pinata functionality:

- `list-files.ts` - List files from your Pinata account
- `create-group.ts` - Create file groups in Pinata
- `add-to-group.ts` - Add files to existing groups
- `create-ipfs-url.ts` - Generate IPFS URLs for your files
