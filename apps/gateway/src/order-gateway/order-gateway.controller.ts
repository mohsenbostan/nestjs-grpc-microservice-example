import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { GrpcToHttpInterceptor } from 'nestjs-grpc-exceptions';
import { OrderGatewayService } from './order-gateway.service';

@Controller('orders')
export class OrderGatewayController {
  constructor(protected readonly orderService: OrderGatewayService) {}

  @Get('/:id')
  @UseInterceptors(GrpcToHttpInterceptor)
  findOneById(@Param('id') id: string) {
    return this.orderService.findOneById({
      id,
    });
  }
}
