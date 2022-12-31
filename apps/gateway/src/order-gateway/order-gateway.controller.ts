import { Controller, Get, Param } from '@nestjs/common';
import { OrderGatewayService } from './order-gateway.service';

@Controller('orders')
export class OrderGatewayController {
  constructor(protected readonly orderService: OrderGatewayService) {}

  @Get('/:id')
  findOneById(@Param('id') id: string) {
    return this.orderService.findOneById({
      id,
    });
  }
}
