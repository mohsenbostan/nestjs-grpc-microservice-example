# NestJS gRPC Microservice Example

A real-world example of implementing gRPC microservice in NestJS.

### Communication Diagram

<img src="https://www.bostan.dev/images/nestjs-grpc-microservice-example.png" alt="the diagram" />

### Application's Directory Architecture

This example is using NestJS built-in [Workspaces](https://docs.nestjs.com/cli/monorepo) feature.

```
 - app  #Contains All Services
    - delivery #Internal Service
    - order    #Internal Service
    - gateway  #Public API Gateway Service
    
 - libs #Contains Common Shared Code Between Services
    - grpc   #Includes helpers for gRPC and also protobuf files
    - shared #Shared Helpers/Types
```
