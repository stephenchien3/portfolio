const TOP_TEXT =
  '🦆 quack quack ✦ if you read this you owe me a coffee ✦ stephen chien dot com ✦ disclaimer: the cursor is sentient ✦ no thoughts head empty ✦ ';
const RIGHT_TEXT =
  '✦ scrolling sideways since 2026 ✦ do not feed the geese ✦ ducks have been removed ✦ this site contains 0% ai-generated regret ✦ ';
const BOTTOM_TEXT =
  '✦ caution: marquee in motion ✦ if you build it they will quack ✦ powered by vibes and react server components ✦ ✿ have a nice day ✿ ';
const LEFT_TEXT =
  '✦ welcome aboard the s.s. portfolio ✦ all aboard ✦ keep your hands and feet inside the viewport at all times ✦ ';

function repeat(text: string, n: number) {
  return text.repeat(n);
}

export default function BorderMarquee() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9990,
      }}
    >
      <div className="marquee marquee-top">
        <div className="marquee-track marquee-track-x">
          <span>{repeat(TOP_TEXT, 4)}</span>
          <span>{repeat(TOP_TEXT, 4)}</span>
        </div>
      </div>
      <div className="marquee marquee-bottom">
        <div className="marquee-track marquee-track-x marquee-track-x-reverse">
          <span>{repeat(BOTTOM_TEXT, 4)}</span>
          <span>{repeat(BOTTOM_TEXT, 4)}</span>
        </div>
      </div>
      <div className="marquee marquee-left">
        <div className="marquee-track marquee-track-y">
          <span>{repeat(LEFT_TEXT, 4)}</span>
          <span>{repeat(LEFT_TEXT, 4)}</span>
        </div>
      </div>
      <div className="marquee marquee-right">
        <div className="marquee-track marquee-track-y marquee-track-y-reverse">
          <span>{repeat(RIGHT_TEXT, 4)}</span>
          <span>{repeat(RIGHT_TEXT, 4)}</span>
        </div>
      </div>
    </div>
  );
}
