import { getServiceClientConfig } from '@app/grpc';
import { SERVICE_PORTS } from '@app/shared';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { OrderGatewayController } from './order-gateway.controller';
import { OrderGatewayService } from './order-gateway.service';

@Module({
  imports: [
    ClientsModule.register([
      getServiceClientConfig('order', `localhost:${SERVICE_PORTS.ORDER}`),
    ]),
  ],
  controllers: [OrderGatewayController],
  providers: [OrderGatewayService],
})
export class OrderGatewayModule {}
