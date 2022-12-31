import { createService } from '@app/grpc';
import { SERVICE_PORTS } from '@app/shared';
import { DeliveryModule } from './delivery.module';

async function bootstrap() {
  const app = await createService(
    'delivery',
    DeliveryModule,
    SERVICE_PORTS.DELIVERY,
  );
  await app.listen();
}
bootstrap();
