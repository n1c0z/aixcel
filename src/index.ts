import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

// Loaders
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { JSONLoader } from "langchain/document_loaders/fs/json";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

import { config } from "dotenv";
import { Document } from "langchain/document";

config();

// Read data useing directory loader
const loader = new DirectoryLoader("./docs", {
	".json": (path) => new JSONLoader(path),
	".txt": (path) => new TextLoader(path),
	".csv": (path) => new CSVLoader(path, { separator: "," }),
	".pdf": (path) => new PDFLoader(path),
});

// See contents of docs that are being being loaded
const docs = await loader.load();
console.log(docs);
const csvContent = docs.map((doc: Document) => doc.pageContent);
console.log(`Page Content ---> ${csvContent}`);
