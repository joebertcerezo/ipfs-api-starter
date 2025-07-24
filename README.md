# ipfs-api-starter

This repo includes some basic API calls to help get you started using the IPFS API.

**Watch the video!**
[![IMAGE ALT TEXT HERE](https://dweb.mypinata.cloud/files/bafybeidq7raunlrwrnvzif5pcwvtrndhu7wz7udwf2kfl6mprhjs63u6jq)](https://www.youtube.com/watch?v=qarW5KhIWXE)

> [!TIP]
> If you plan to use Pinata in a Typescript/Javascript enviornment, check out our [SDK](https://github.com/PinataCloud/pinata)!

## Getting Started

First follow [these steps](https://docs.pinata.cloud/quickstart) to make a free Pinata account and get your API key and Gateway URL

By default this repo will use [Bun.sh](https://bun.sh) so install this first unless you plan to run the files with another program.

Clone the repo to your machine and install the dependencies

```bash
git clone https://github.com/PinataCloud/files-api-starter

cd files-api-starter

bun install
```

Rename the `.env.example` file to `.env` and paste in your Pinata JWT API key and Gateway URL

```
PINATA_JWT=
GATEWAY_URL=
```

## Usage

Start using the API by running the following:

**Upload JSON files:**

```bash
npm run upload
```

**Upload image files:**

```bash
npm run upload-image <path-to-image>
```

For example:

```bash
npm run upload-image logo.png
npm run upload-image /path/to/your/image.png
```

**Using Bun (original):**

```bash
bun upload-files.ts
```

Continue testing by running the other files included in the repo
