import { ProcessOrderDeliverRequest } from './process-order-delivery.request';

export interface IDeliveryService {
  processOrderDelivery(data: ProcessOrderDeliverRequest): void;
}
