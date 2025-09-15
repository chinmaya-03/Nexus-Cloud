# Nexus Cloud

Nexus Cloud is a modular cloud platform designed for scalable and flexible cloud-native application development. It features a Next.js frontend, Node.js API server, build server, and S3 reverse proxy, making it easy to deploy and manage modern web applications.

## Features
- **Next.js Frontend**: Fast, modern UI with Tailwind CSS
- **Node.js API Server**: Handles backend logic and integrates with Prisma ORM
- **Build Server**: Automates build and deployment processes
- **S3 Reverse Proxy**: Efficient file storage and retrieval
- **Kafka Integration**: Robust messaging and event streaming
- **Prisma ORM**: Simplified database management

## Project Structure
```
frontend-nextjs/      # Next.js frontend
api-server/           # Node.js API server with Prisma
build-server/         # Build and deployment automation
s3-reverse-proxy/     # S3 reverse proxy for file storage
static/               # Static assets
```

## Getting Started
1. Clone the repository:
   ```sh
   git clone https://github.com/KDeepak5673/Nexus-Cloud.git
   ```
2. Install dependencies for each service:
   ```sh
   cd api-server && npm install
   cd ../build-server && npm install
   cd ../frontend-nextjs && npm install
   cd ../s3-reverse-proxy && npm install
   ```
3. Configure environment variables as needed.
4. Start the services:
   ```sh
   # Example for API server
   cd api-server && npm start
   # Example for frontend
   cd ../frontend-nextjs && npm run dev
   ```

## License
MIT

---
For more details, see individual service folders and documentation.
