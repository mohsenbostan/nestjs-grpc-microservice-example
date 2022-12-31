import { IOrder, IOrderService } from '@app/shared';
import { ProcessOrderDeliverRequest } from '@app/shared/types/services/delivery/process-order-delivery.request';
import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DeliveryService implements OnModuleInit {
  private readonly logger = new Logger(DeliveryService.name);
  private orderService: IOrderService;

  constructor(@Inject('ORDER_SERVICE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.orderService = this.client.getService<IOrderService>('OrderService');
  }

  async processOrderDelivery(data: ProcessOrderDeliverRequest): Promise<void> {
    const order = await lastValueFrom(
      this.orderService.findOneById({ id: data.orderId }) as Observable<IOrder>,
    );

    this.logger.log(`Processing Order [${order.id}] ${order.name} ...`);
  }
}
