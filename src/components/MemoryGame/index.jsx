import { useState, useEffect } from "react";
import styled from "styled-components";

const ALL_SYMBOLS = [
  "⚔️",
  "🍺",
  "🎲",
  "🗡️",
  "🪙",
  "🔮",
  "🧙",
  "🐉",
  "🐶",
  "🐱",
  "🐸",
  "🐼",
  "🦊",
  "🐯",
  "🐺",
  "🦁",
  "🍎",
  "🍊",
  "🍋",
  "🍇",
  "🍓",
  "🍑",
  "🥝",
  "🍍",
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 24px;
  font-family: monospace;
`;

const StatBlock = styled.div`
  text-align: center;
  .label {
    font-size: 11px;
    color: #888;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .value {
    font-size: 48px;
    font-weight: 700;
    color: #f0e6c8;
    line-height: 1;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, clamp(60px, 16vw, 72px));
  gap: 10px;
`;

const Card = styled.div`
  width: clamp(60px, 16vw, 72px);
  height: clamp(60px, 16vw, 72px);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(22px, 6vw, 28px);
  cursor: ${({ $matched }) => ($matched ? "default" : "pointer")};
  background: ${({ $isFlipped, $isMatched }) =>
    $isMatched ? "rgba(247,201,72,0.15)" : $isFlipped ? "#2a2218" : "#1a1a1a"};
  border: ${({ $isMatched, $isFlipped }) =>
    $isMatched
      ? "1.5px solid rgba(247,201,72,0.4)"
      : $isFlipped
        ? "1.5px solid #444"
        : "1.5px solid #2a2a2a"};
  transition: all 0.2s;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

const ActionButton = styled.button`
  background: ${({ $primary }) => ($primary ? "#f7c948" : "transparent")};
  color: ${({ $primary }) => ($primary ? "#111" : "#555")};
  border: 1px solid ${({ $primary }) => ($primary ? "#f7c948" : "#333")};
  border-radius: 6px;
  padding: 10px 24px;
  font-family: monospace;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Hint = styled.p`
  color: #444;
  font-family: monospace;
  font-size: 11px;
  text-align: center;
  max-width: 280px;
  margin: 0;
`;

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);
  const [lock, setLock] = useState(false);

  function init() {
    const pool = [...ALL_SYMBOLS].sort(() => Math.random() - 0.5).slice(0, 8);
    const deck = [...pool, ...pool]
      .sort(() => Math.random() - 0.5)
      .map((sym, i) => ({ id: i, sym }));
    setCards(deck);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setWon(false);
    setLock(false);
  }

  useEffect(() => {
    init();
  }, []);

  function flip(id) {
    if (lock || flipped.includes(id) || matched.includes(id)) return;
    const next = [...flipped, id];
    setFlipped(next);
    if (next.length === 2) {
      setMoves((m) => m + 1);
      setLock(true);
      const [a, b] = next.map((i) => cards.find((c) => c.id === i));
      if (a.sym === b.sym) {
        const nm = [...matched, a.id, b.id];
        setMatched(nm);
        setFlipped([]);
        setLock(false);
        if (nm.length === cards.length) setWon(true);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setLock(false);
        }, 900);
      }
    }
  }

  return (
    <Wrapper>
      <StatsRow>
        <StatBlock>
          <div className="label">Moves</div>
          <div className="value">{moves}</div>
        </StatBlock>
        <StatBlock>
          <div className="label">Matched</div>
          <div className="value">{`${matched.length / 2}/8`}</div>
        </StatBlock>
      </StatsRow>

      <CardGrid>
        {cards.map((card) => {
          const isFlipped =
            flipped.includes(card.id) || matched.includes(card.id);
          const isMatched = matched.includes(card.id);
          return (
            <Card
              key={card.id}
              onClick={() => flip(card.id)}
              $isFlipped={isFlipped}
              $isMatched={isMatched}
              $matched={isMatched}
            >
              {isFlipped ? card.sym : "?"}
            </Card>
          );
        })}
      </CardGrid>

      {won ? (
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              color: "#f7c948",
              fontFamily: "monospace",
              fontSize: 18,
              marginBottom: 12,
              fontWeight: 700,
            }}
          >
            Cleared in {moves} moves!
          </div>
          <ActionButton $primary onClick={init}>
            Play again
          </ActionButton>
        </div>
      ) : (
        <ActionButton onClick={init}>Shuffle</ActionButton>
      )}

      <Hint>
        Tap two cards. Match all pairs to win. Symbols randomised each round.
      </Hint>
    </Wrapper>
  );
}
