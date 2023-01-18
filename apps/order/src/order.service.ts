import { FindOrderByIdRequest, IOrder, IOrderService } from '@app/shared';
import { Injectable } from '@nestjs/common';
import { GrpcNotFoundException } from 'nestjs-grpc-exceptions';

@Injectable()
export class OrderService implements IOrderService {
  findOneById({ id }: FindOrderByIdRequest): IOrder {
    if (id !== 'order-1') {
      throw new GrpcNotFoundException('Order not found.');
    }

    return {
      id,
      name: 'Test Product 1',
      price: 23,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
