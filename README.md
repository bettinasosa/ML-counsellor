This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# ML Counselor

ML Counsellor is an AI-powered counselling application leveraging OpenAI's latest features, including file search and threads beta. This project is currently a work in progress (WIP).

## Project Overview

ML Counsellor aims to provide AI-assisted counselling services using advanced language models and conversation management. The application utilises OpenAI's APIs to create an interactive and context-aware counseling experience.

## Features

- AI-powered conversational counselling
- Integration with OpenAI's file search and threads beta features
- File upload and management for conversation context
- Conversation summarization
- Vector store for efficient information retrieval
- Multi-user support (planned)

## Project Structure

```
app/
├── api/
│   └── counselor/
│       └── route.ts
├── components/
│   ├── ui/
│   ├── chatInput.tsx
│   ├── chatWindow.tsx
│   ├── memoryDisplay.tsx
│   └── messageList.tsx
├── config/
│   └── index.ts
├── context/
│   └── chatContext.tsx
├── controllers/
│   └── conversation.ts
├── hooks/
│   ├── use-toast.ts
│   └── useFile.ts
├── lib/
│   ├── prompts/
│   ├── schema/
│   ├── openaiClient.ts
│   └── utils.ts
├── services/
│   ├── assistant.ts
│   ├── fileHandler.ts
│   ├── threadManager.ts
│   └── vectorStore.ts
└── utils/
    ├── helpers.ts
    └── logger.ts
```

## Main Features

### Conversation Management

The core of the application is the `ConversationController` class, which manages the flow of the conversation. Key functionalities include:

- Initializing the assistant and vector store
- Creating and managing conversation threads
- Handling file uploads
- Running conversations and processing AI responses
- Summarizing conversations

### OpenAI Integration

The project leverages OpenAI's latest features:

- File search: Allows the AI to search through uploaded files for relevant information
- Threads beta: Manages conversation context and history

### Vector Store

A vector store is used for efficient storage and retrieval of conversation data and file contents.

## Planned Features

- Multi-user support: Enable testing of different assistants and reuse of existing ones
- Live deployment

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Contributing

As this project is still in development, contributions are not welcome.
