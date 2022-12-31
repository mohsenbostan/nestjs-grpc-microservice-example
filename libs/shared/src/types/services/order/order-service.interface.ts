import { Observable } from 'rxjs';
import { FindOrderByIdRequest } from './find-order-by-id.request';
import { IOrder } from './order.interface';

export interface IOrderService {
  findOneById(
    data: FindOrderByIdRequest,
  ): IOrder | Promise<IOrder> | Observable<IOrder>;
}
