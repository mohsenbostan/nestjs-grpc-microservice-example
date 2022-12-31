import { ProcessOrderDeliverRequest } from '@app/shared/types/services/delivery/process-order-delivery.request';
import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DeliveryService } from './delivery.service';

@Controller()
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @GrpcMethod('DeliveryService', 'ProcessOrderDelivery')
  processOrderDelivery(data: ProcessOrderDeliverRequest) {
    return this.deliveryService.processOrderDelivery(data);
  }
}
