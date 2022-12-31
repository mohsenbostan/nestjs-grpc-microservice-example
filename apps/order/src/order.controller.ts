import { FindOrderByIdRequest, IOrder } from '@app/shared';
import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @GrpcMethod('OrderService', 'findOneById')
  findOneById(data: FindOrderByIdRequest): IOrder {
    return this.orderService.findOneById(data);
  }
}
