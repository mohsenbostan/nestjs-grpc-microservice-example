import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';

export function createService(
  name: string,
  module: unknown,
  port = 5000,
): Promise<INestMicroservice> {
  return NestFactory.createMicroservice<MicroserviceOptions>(module, {
    transport: Transport.GRPC,
    options: {
      package: name,
      url: `localhost:${port}`,
      protoPath: join(__dirname, `../../libs/grpc/proto/${name}/${name}.proto`),
    },
  });
}
