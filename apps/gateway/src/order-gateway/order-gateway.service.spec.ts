import { Test, TestingModule } from '@nestjs/testing';
import { OrderGatewayService } from './order-gateway.service';

describe('OrderGatewayService', () => {
  let service: OrderGatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderGatewayService],
    }).compile();

    service = module.get<OrderGatewayService>(OrderGatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
