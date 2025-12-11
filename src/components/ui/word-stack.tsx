'use client';

type WordStackProps = {
  items?: string[];
};

export function WordStack({
  items = ['prototype.', 'solve.', 'build.', 'develop.', 'innovate.', 'transform.'],
}: WordStackProps) {
  return (
    <div className="word-stack-container">
      <ul className="word-stack-list">
        {items.map((word, i) => (
          <li key={i} className="word-stack-item">
            {word}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .word-stack-container {
          width: 100%;
          padding: 4rem 2rem;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .word-stack-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: clamp(2.5rem, 8vw, 6rem);
          font-weight: 600;
          line-height: 1.2;
        }

        .word-stack-item {
          background: linear-gradient(
            180deg,
            rgba(12, 47, 30, 0.35) 0%,
            rgba(12, 47, 30, 0.5) 30%,
            rgba(12, 47, 30, 1) 50%,
            rgba(12, 47, 30, 0.5) 70%,
            rgba(12, 47, 30, 0.35) 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
