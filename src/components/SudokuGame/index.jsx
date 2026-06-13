import { useState, useEffect } from "react";
import styled from "styled-components";

// Semua game logic dari GamesPage.jsx tetap sama
// Hanya copy-paste Sudoku function dan render dari GamesPage.jsx

function generateSudoku() {
  const board = Array.from({ length: 9 }, () => Array(9).fill(0));

  function isValid(b, r, c, n) {
    for (let i = 0; i < 9; i++) {
      if (b[r][i] === n || b[i][c] === n) return false;
      const br = 3 * Math.floor(r / 3) + Math.floor(i / 3);
      const bc = 3 * Math.floor(c / 3) + (i % 3);
      if (b[br][bc] === n) return false;
    }
    return true;
  }

  function solve(b) {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (b[r][c] === 0) {
          const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(
            () => Math.random() - 0.5,
          );
          for (const n of nums) {
            if (isValid(b, r, c, n)) {
              b[r][c] = n;
              if (solve(b)) return true;
              b[r][c] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  solve(board);
  const puzzle = board.map((r) => [...r]);
  let removed = 0;
  while (removed < 45) {
    const r = Math.floor(Math.random() * 9);
    const c = Math.floor(Math.random() * 9);
    if (puzzle[r][c] !== 0) {
      puzzle[r][c] = 0;
      removed++;
    }
  }
  return { puzzle, solution: board };
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
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
    font-size: 40px;
    font-weight: 700;
    color: #f0e6c8;
    line-height: 1;
  }
`;

const GridWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, clamp(32px, 9vw, 40px));
  border: 2px solid #555;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 auto;
  width: fit-content;
`;

const Cell = styled.div`
  width: clamp(32px, 9vw, 40px);
  height: clamp(32px, 9vw, 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: clamp(13px, 3.5vw, 17px);
  font-weight: ${({ $fixed }) => ($fixed ? 700 : 400)};
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  border-right: ${({ $thickRight }) =>
    $thickRight ? "2px solid #555" : "1px solid #2a2a2a"};
  border-bottom: ${({ $thickBottom }) =>
    $thickBottom ? "2px solid #555" : "1px solid #2a2a2a"};
  cursor: ${({ $fixed }) => ($fixed ? "default" : "pointer")};
  transition: background 0.1s;
  user-select: none;
`;

const Numpad = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
`;

const NumButton = styled.button`
  width: clamp(32px, 9vw, 36px);
  height: clamp(32px, 9vw, 36px);
  border-radius: 6px;
  background: ${({ $active }) =>
    $active ? "rgba(247,201,72,0.2)" : "#1a1a1a"};
  border: ${({ $active }) =>
    $active ? "1.5px solid #f7c948" : "1.5px solid #2a2a2a"};
  color: ${({ $active }) => ($active ? "#f7c948" : "#888")};
  font-family: monospace;
  font-size: clamp(13px, 3.5vw, 15px);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.1s;
`;

const ActionRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryButton = styled.button`
  background: #f7c948;
  color: #111;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-family: monospace;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const GhostButton = styled.button`
  background: transparent;
  color: #555;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 10px 20px;
  font-family: monospace;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const ErrorMsg = styled.div`
  color: #e74c3c;
  font-family: monospace;
  font-size: 12px;
`;

const Hint = styled.p`
  color: #444;
  font-family: monospace;
  font-size: 11px;
  text-align: center;
  max-width: 320px;
  margin: 0;
`;

export default function SudokuGame() {
  const [data, setData] = useState(null);
  const [userGrid, setUserGrid] = useState(null);
  const [selected, setSelected] = useState(null);
  const [errors, setErrors] = useState(new Set());
  const [won, setWon] = useState(false);
  const [checking, setChecking] = useState(false);

  function init() {
    const { puzzle, solution } = generateSudoku();
    setData({ puzzle, solution });
    setUserGrid(puzzle.map((r) => [...r]));
    setSelected(null);
    setErrors(new Set());
    setWon(false);
  }

  useEffect(() => {
    init();
  }, []);

  function handleCellClick(r, c) {
    if (!data || data.puzzle[r][c] !== 0) return;
    setSelected([r, c]);
  }

  function handleNumber(n) {
    if (!selected || won) return;
    const [r, c] = selected;
    if (data.puzzle[r][c] !== 0) return;
    const next = userGrid.map((row) => [...row]);
    next[r][c] = n === next[r][c] ? 0 : n;
    setUserGrid(next);
    const key = `${r}-${c}`;
    if (errors.has(key)) {
      const e = new Set(errors);
      e.delete(key);
      setErrors(e);
    }
  }

  function checkSolution() {
    setChecking(true);
    const newErrors = new Set();
    let allFilled = true;
    for (let r = 0; r < 9; r++)
      for (let c = 0; c < 9; c++) {
        if (userGrid[r][c] === 0) {
          allFilled = false;
          continue;
        }
        if (userGrid[r][c] !== data.solution[r][c]) newErrors.add(`${r}-${c}`);
      }
    setErrors(newErrors);
    if (newErrors.size === 0 && allFilled) setWon(true);
    setTimeout(() => setChecking(false), 300);
  }

  if (!data || !userGrid)
    return (
      <div style={{ color: "#555", fontFamily: "monospace" }}>
        Generating puzzle...
      </div>
    );

  const [selR, selC] = selected || [-1, -1];
  const selVal = selected ? userGrid[selR][selC] : 0;

  function getCellBg(r, c) {
    const isSelected = r === selR && c === selC;
    const isError = errors.has(`${r}-${c}`);
    const isSameVal =
      selVal > 0 && userGrid[r][c] === selVal && !(r === selR && c === selC);
    const isSameRowCol = r === selR || c === selC;
    const isSameBox =
      Math.floor(r / 3) === Math.floor(selR / 3) &&
      Math.floor(c / 3) === Math.floor(selC / 3);
    if (isSelected) return "#3a2e00";
    if (isError) return "rgba(231,76,60,0.2)";
    if (isSameVal) return "rgba(247,201,72,0.12)";
    if (isSameRowCol || isSameBox) return "#161616";
    return "#1a1a1a";
  }

  function getCellColor(r, c) {
    if (errors.has(`${r}-${c}`)) return "#e74c3c";
    if (data.puzzle[r][c] !== 0) return "#888";
    return "#f0e6c8";
  }

  return (
    <Wrapper>
      {won && (
        <div
          style={{
            color: "#f7c948",
            fontFamily: "monospace",
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          Puzzle solved!
        </div>
      )}

      <StatsRow>
        <StatBlock>
          <div className="label">Score</div>
          <div className="value">---</div>
        </StatBlock>
        <StatBlock>
          <div className="label">Status</div>
          <div className="value">{won ? "✓" : "●"}</div>
        </StatBlock>
      </StatsRow>

      <GridWrapper>
        <Grid>
          {userGrid.map((row, r) =>
            row.map((val, c) => (
              <Cell
                key={`${r}-${c}`}
                onClick={() => handleCellClick(r, c)}
                $fixed={data.puzzle[r][c] !== 0}
                $bg={getCellBg(r, c)}
                $color={getCellColor(r, c)}
                $thickRight={(c + 1) % 3 === 0 && c !== 8}
                $thickBottom={(r + 1) % 3 === 0 && r !== 8}
              >
                {val !== 0 ? val : ""}
              </Cell>
            )),
          )}
        </Grid>
      </GridWrapper>

      <Numpad>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <NumButton
            key={n}
            $active={selVal === n}
            onClick={() => handleNumber(n)}
          >
            {n}
          </NumButton>
        ))}
      </Numpad>

      <ActionRow>
        {!won && (
          <PrimaryButton onClick={checkSolution}>
            {checking ? "Checking..." : "Check"}
          </PrimaryButton>
        )}
        <GhostButton onClick={init}>New puzzle</GhostButton>
      </ActionRow>

      {errors.size > 0 && !won && (
        <ErrorMsg>
          {errors.size} mistake{errors.size > 1 ? "s" : ""}
        </ErrorMsg>
      )}
      <Hint>Tap a cell, then tap a number. Hit Check when ready.</Hint>
    </Wrapper>
  );
}
