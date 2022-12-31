import { createService } from '@app/grpc';
import { SERVICE_PORTS } from '@app/shared';
import { OrderModule } from './order.module';

async function bootstrap() {
  const app = await createService('order', OrderModule, SERVICE_PORTS.ORDER);
  await app.listen();
}
bootstrap();
