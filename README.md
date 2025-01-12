# UiFde

This project was generated using Angular v19.

# Data Source
This UI application displays the latest image received from kinesis stream or uploaded using `https://hm15blhzgb.execute-api.eu-west-1.amazonaws.com/Development/upload`.

# Access Swagger UI
To access and view swagger details for backend API, follow below steps:
1. Copy/download contents of swagger.yaml file
2. Navigate to `https://editor-next.swagger.io/` and paste above copied contents.
3. Use Swagger UI to upload and./or get latest image.

Test Payload to upload:
{
    "ImageUrl":"https://picsum.photos/id/237/200/300",
    "Description":"Hello world"
}

# Development Server

To start a local development server, run:

```bash
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

# Deployed Application

Deployed version of this application is available on - http://ui-fde-bucket.s3-website-eu-west-1.amazonaws.com/ 
