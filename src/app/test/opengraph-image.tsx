import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          color: 'white',
          background: 'blue',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        Test Image
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'no-store',
        'Access-Control-Allow-Origin': '*', // CORS 정책 설정
      },
    },
  );
}
