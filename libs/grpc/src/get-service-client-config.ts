import { Transport } from '@nestjs/microservices';
import { join } from 'path';

export function getServiceClientConfig(
  name: string,
  url: `${string}:${number}` = 'localhost:5000',
) {
  return {
    name: `${name.toUpperCase()}_SERVICE`,
    transport: Transport.GRPC,
    options: {
      package: name,
      url: url as string,
      protoPath: join(__dirname, `../../libs/grpc/proto/${name}/${name}.proto`),
    },
  } as const;
}
