import { NodeSDK } from '@opentelemetry/sdk-node';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';

const sdk = new NodeSDK({
  traceExporter: new JaegerExporter({
    endpoint: 'http://localhost:14268/api/traces', // Jaeger 엔드포인트
  }),
  serviceName: 'next-app',
});

sdk.start(); // OpenTelemetry 초기화
