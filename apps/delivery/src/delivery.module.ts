import { getServiceClientConfig } from '@app/grpc';
import { SERVICE_PORTS } from '@app/shared';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';

@Module({
  imports: [
    ClientsModule.register([
      getServiceClientConfig('order', `localhost:${SERVICE_PORTS.ORDER}`),
    ]),
  ],
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}
