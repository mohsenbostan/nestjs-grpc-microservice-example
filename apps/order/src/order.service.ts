import { FindOrderByIdRequest, IOrder, IOrderService } from '@app/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService implements IOrderService {
  findOneById({ id }: FindOrderByIdRequest): IOrder {
    return {
      id,
      name: 'Test Product 1',
      price: 23,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
