import { ImageResponse } from 'next/og';

export const alt =
  'Sthairyam — online therapy with Bhavana Bulchandani, counselling psychologist, across India';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Social share card. Uses the site's existing brand colours so shared links
 * look like the site; no new visual language is introduced.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#FAF7F0',
          padding: '80px',
          borderBottom: '24px solid #1E4B3F',
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#1E4B3F',
            fontWeight: 600,
          }}
        >
          Sthairyam
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 66,
            lineHeight: 1.15,
            color: '#212D27',
            maxWidth: 940,
          }}
        >
          Online therapy with a counselling psychologist in India
        </div>
        <div style={{ marginTop: 36, fontSize: 30, color: '#55645C' }}>
          Bhavana Bulchandani · MA Psychology, BHU
        </div>
        <div style={{ marginTop: 12, fontSize: 26, color: '#B26E4B' }}>
          Free 15 to 20 minute discovery call
        </div>
      </div>
    ),
    size
  );
}
