import { useState } from "react";
import styled, { css } from "styled-components";

const DICE_FACES = {
  1: [[50, 50]],
  2: [
    [28, 28],
    [72, 72],
  ],
  3: [
    [28, 28],
    [50, 50],
    [72, 72],
  ],
  4: [
    [28, 28],
    [72, 28],
    [28, 72],
    [72, 72],
  ],
  5: [
    [28, 28],
    [72, 28],
    [50, 50],
    [28, 72],
    [72, 72],
  ],
  6: [
    [28, 28],
    [72, 28],
    [28, 50],
    [72, 50],
    [28, 72],
    [72, 72],
  ],
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  width: 100%;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 32px;
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

const DiceRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const DiceSVG = styled.svg`
  filter: ${({ $rolling }) => ($rolling ? "blur(1.5px)" : "none")};
  transition: filter 0.08s;
`;

const ResultMessage = styled.div`
  min-height: 32px;
  text-align: center;
  font-family: monospace;
  color: ${({ $won }) => ($won ? "#f7c948" : "#e74c3c")};
  font-size: 20px;
  font-weight: 700;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  max-width: 340px;
  justify-content: center;
`;

const BetButton = styled.button`
  flex: 1;
  min-width: 120px;
  max-width: 160px;
  padding: 20px 0;
  border-radius: 12px;
  border: none;
  color: #fff;
  font-family: monospace;
  font-size: clamp(18px, 5vw, 22px);
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: ${({ $rolling }) => ($rolling ? "not-allowed" : "pointer")};
  opacity: ${({ $rolling }) => ($rolling ? 0.5 : 1)};
  transition:
    transform 0.1s,
    opacity 0.1s;
  -webkit-tap-highlight-color: transparent;

  ${({ $side }) =>
    $side === "odd"
      ? css`
          background: linear-gradient(135deg, #c0392b, #96281b);
          box-shadow: 0 4px 20px rgba(192, 57, 43, 0.4);
          &:hover {
            transform: translateY(-2px);
          }
        `
      : css`
          background: linear-gradient(135deg, #1a6b3c, #0f4a2a);
          box-shadow: 0 4px 20px rgba(26, 107, 60, 0.4);
          &:hover {
            transform: translateY(-2px);
          }
        `}
`;

const ResetButton = styled.button`
  background: transparent;
  color: #444;
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  padding: 8px 20px;
  font-family: monospace;
  font-size: 11px;
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

function Die({ value, rolling }) {
  const dots = value ? DICE_FACES[value] : [];
  return (
    <DiceSVG
      width="clamp(80px,20vw,110px)"
      height="clamp(80px,20vw,110px)"
      viewBox="0 0 100 100"
      $rolling={rolling}
    >
      <rect
        x={5}
        y={5}
        width={90}
        height={90}
        rx={14}
        fill="#1a1a1a"
        stroke="#3a3a3a"
        strokeWidth={2}
      />
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={7} fill="#f0e6c8" />
      ))}
      {!value && (
        <text
          x={50}
          y={58}
          textAnchor="middle"
          fill="#333"
          fontSize={32}
          fontFamily="monospace"
        >
          ?
        </text>
      )}
    </DiceSVG>
  );
}

export default function OddEvenGame() {
  const [dice, setDice] = useState([null, null]);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ w: 0, l: 0 });
  const [rolling, setRolling] = useState(false);

  function roll(choice) {
    if (rolling) return;
    setResult(null);
    setRolling(true);
    let ticks = 0;
    const interval = setInterval(() => {
      setDice([Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)]);
      if (++ticks > 12) {
        clearInterval(interval);
        const d1 = Math.ceil(Math.random() * 6),
          d2 = Math.ceil(Math.random() * 6);
        const sum = d1 + d2,
          isOdd = sum % 2 !== 0;
        const won =
          (choice === "odd" && isOdd) || (choice === "even" && !isOdd);
        setDice([d1, d2]);
        setResult({ sum, won, isOdd, d1, d2 });
        setScore((s) => (won ? { ...s, w: s.w + 1 } : { ...s, l: s.l + 1 }));
        setRolling(false);
      }
    }, 80);
  }

  function reset() {
    setDice([null, null]);
    setResult(null);
    setScore({ w: 0, l: 0 });
  }

  return (
    <Wrapper>
      <StatsRow>
        <StatBlock>
          <div className="label">Wins</div>
          <div className="value">{score.w}</div>
        </StatBlock>
        <StatBlock>
          <div className="label">Losses</div>
          <div className="value">{score.l}</div>
        </StatBlock>
      </StatsRow>

      <DiceRow>
        <Die value={dice[0]} rolling={rolling} />
        <span style={{ fontFamily: "monospace", fontSize: 24, color: "#444" }}>
          +
        </span>
        <Die value={dice[1]} rolling={rolling} />
        {result && !rolling && (
          <>
            <span
              style={{ fontFamily: "monospace", fontSize: 24, color: "#444" }}
            >
              =
            </span>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: result.won ? "#f7c948" : "#e74c3c",
                  fontFamily: "monospace",
                  lineHeight: 1,
                }}
              >
                {result.sum}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#555",
                  marginTop: 4,
                  fontFamily: "monospace",
                }}
              >
                {result.isOdd ? "odd" : "even"}
              </div>
            </div>
          </>
        )}
        {rolling && (
          <span
            style={{ fontFamily: "monospace", fontSize: 24, color: "#444" }}
          >
            = ?
          </span>
        )}
      </DiceRow>

      <ResultMessage $won={result?.won}>
        {result && !rolling && (result.won ? "You win!" : "You lose!")}
        {rolling && "rolling..."}
        {!result && !rolling && "Pick your bet"}
      </ResultMessage>

      <ButtonsRow>
        <BetButton
          $side="odd"
          $rolling={rolling}
          onClick={() => roll("odd")}
          disabled={rolling}
        >
          ODD
        </BetButton>
        <BetButton
          $side="even"
          $rolling={rolling}
          onClick={() => roll("even")}
          disabled={rolling}
        >
          EVEN
        </BetButton>
      </ButtonsRow>

      <ResetButton onClick={reset}>Reset score</ResetButton>

      <Hint>Two dice are rolled. Pick Odd or Even sum to win.</Hint>
    </Wrapper>
  );
}
