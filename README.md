# aixcel

A simple script for running a retrieval-based question answering (QA) system with embeddings using the langchain library.
The code demonstrates how to create and utilize a vector store to retrieve answers to questions from a given text file.

## Installation

Clone the project to your local enviroment:

```bash
git clone https://github.com/n1c0z/aixcel.git
```

Navigate inside the cloned directory and install all packages with `npm install` (or `pnpm install` or `yarn`):

```bash
npm install
```

## Execution

Once you've installed all dependencies you can start a development server by running the following command:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Query

To query the AI with the data of the included dataset, update the last line of index.ts file inside the "src" directory, ie:

```bash
askModel("What are the columns in this dataset?")
```
