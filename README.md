# Next Chat App

A **frontend chat application** built with **Next.js**, designed to work as the client-side interface for the NestJS-based chat backend.  
This repository represents the **frontend application**, separated from the backend for proper responsibility boundaries and maintainability.

The application focuses on **real-time interaction**, **state synchronization**, and **clean frontend architecture**, while delegating business logic to the backend API.

---

## Overview

This project demonstrates how to build a modern real-time chat frontend with:

- **WebSocket-based communication** using Socket.IO
- **Type-safe validation** using Zod
- **Client-side state management** with Zustand
- **Server-state management** using React Query
- **HTTP communication** using Axios
- **Reusable UI components** built with shadcn/ui


---

## Repository Separation

This repository contains **only the frontend application**.

- The **frontend** (this repository) is responsible for:
  - UI rendering and user interactions
  - Managing client-side and server state
  - Establishing WebSocket connections to the backend
  - Consuming authenticated backend APIs
- The [**backend**](https://github.com/iLeoon/nest-chat-api) is implemented in a **separate repository**
  - Handles WebSocket events, authentication, sessions, and data persistence

This separation reflects real-world production setups and allows both applications to evolve independently.

---

## Tech Stack

### Frontend
- **Next.js**
- **Socket.IO Client**
- **Zod** (schema validation)
- **Zustand** (client-side state)
- **React Query** (server-state management)
- **Axios** (HTTP requests)
- **shadcn/ui** (UI components)

---

## Architecture Overview

- The application is built as a **Next.js client** that communicates with the backend via:
  - **WebSockets** for real-time chat events
  - **HTTP APIs** for authentication and data fetching
- WebSocket connections are established using **Socket.IO**.
- Client-side state (UI state, user state) is managed with Zustand.
- Server state (messages, rooms, user data) is managed with React Query.
- Zod is used to enforce runtime validation and type safety.

---

## Real-Time Communication

- Real-time chat functionality is implemented using **Socket.IO**.
- The frontend maintains a persistent WebSocket connection to the backend.
- Incoming and outgoing chat events are handled through Socket.IO event listeners.
- Connection state and reconnection behavior are managed on the client.

This design enables low-latency messaging and responsive UI updates.

---

## State Management

### Client State (Zustand)
Zustand is used for:
- User session state
- UI-related state
- WebSocket connection state

### Server State (React Query)
React Query is used for:
- Fetching backend data
- Caching responses
- Synchronizing server state with the UI
- Handling loading and error states


---

## Validation

- **Zod** is used for:
  - Form validation
  - Runtime data validation
  - Ensuring consistency between frontend inputs and backend expectations

Validation is handled at the boundary between user input and application logic.

---

## UI Components

- UI components are built using **shadcn/ui**
- Components are reusable, accessible, and composable
- Styling follows a consistent design system

---

## Environment Configuration

The application uses a local `.env` file for configuration.

The `.env` file is used to configure:
- The backend connection URL

Environment files are created locally and are not committed to version control.

---

## Running the Project Locally

```bash
yarn install
yarn dev
```
