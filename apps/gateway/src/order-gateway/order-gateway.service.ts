import { FindOrderByIdRequest, IOrder, IOrderService } from '@app/shared';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class OrderGatewayService {
  private orderService: IOrderService;

  constructor(@Inject('ORDER_SERVICE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.orderService = this.client.getService<IOrderService>('OrderService');
  }

  findOneById(data: FindOrderByIdRequest): Observable<IOrder> {
    return this.orderService.findOneById(data) as Observable<IOrder>;
  }
}
