import { Module } from '@nestjs/common';
import { OrderGatewayModule } from './order-gateway/order-gateway.module';

@Module({
  imports: [OrderGatewayModule],
})
export class GatewayModule {}
