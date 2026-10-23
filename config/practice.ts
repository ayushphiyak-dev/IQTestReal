export type PracticeQuestion = {
  id: string;
  title: string;
  prompt: string;
  diagram?: string;
  diagramDescription?: string;
  answer: string;
  explanation: string;
  check: string;
};

export type PracticeResource = {
  slug: string;
  title: string;
  description: string;
  skill: string;
  introduction: string;
  method: string[];
  questions: PracticeQuestion[];
  related: { href: string; title: string }[];
};

// Small, reviewed collections rather than generated keyword/age combinations.
// These are learning activities, not calibrated or population-normed tests.
export const practiceResources: PracticeResource[] = [
  {
    slug: 'spatial-reasoning',
    title: 'Free Spatial Reasoning Practice With Answers',
    description:
      'Work through six spatial reasoning questions on rotation, reflection, coordinates and cube faces. Reveal worked answers and check your method. No signup.',
    skill: 'Spatial reasoning',
    introduction:
      'Spatial reasoning means keeping track of where parts of an object go when the object moves. These six untimed exercises separate rotation, reflection and position so you can practise one operation at a time. Use paper if it helps; this is a learning activity, not an IQ measurement.',
    method: [
      'Choose one distinctive corner or marked square and follow it through the transformation before moving the rest.',
      'Keep the operation precise: a clockwise turn and a mirror reflection are different. A reflection reverses handedness; a rotation does not.',
      'Check a second feature. The number of occupied squares and the distances between them should stay the same under a rigid movement.',
    ],
    questions: [
      {
        id: 'quarter-turn',
        title: '1. Follow a marked square',
        prompt:
          'Rotate this 3 × 3 board 90 degrees clockwise around its centre. Where does X land? Rows are numbered from top to bottom and columns from left to right.',
        diagram: 'X · ·\n· · ·\n· · ·',
        diagramDescription:
          'A three-by-three board with X in row 1, column 1; every other cell is empty.',
        answer: 'Row 1, column 3: the top-right corner.',
        explanation:
          'The top-left corner travels to the top-right corner on a clockwise quarter-turn. On a three-by-three board, the row-column rule is (row, column) → (column, 4 − row). Applying it to (1, 1) gives (1, 3).',
        check:
          'A second clockwise quarter-turn would take X to the bottom-right, not back to its starting position.',
      },
      {
        id: 'mirror',
        title: '2. Reflect, do not rotate',
        prompt:
          'Reflect the marked square in the vertical mirror line through the middle column. Where does X land?',
        diagram: '· · ·\nX · ·\n· · ·',
        diagramDescription: 'A three-by-three board with X in row 2, column 1.',
        answer: 'Row 2, column 3: the middle-right cell.',
        explanation:
          'A vertical mirror swaps left and right while preserving the row. Column 1 becomes column 3; column 2 would stay on the mirror line. Do not move X up or down.',
        check:
          'Reflect the result again in the same line. It should return to row 2, column 1.',
      },
      {
        id: 'l-shape',
        title: '3. Rotate an entire shape',
        prompt:
          'Rotate this board 90 degrees clockwise. List the three occupied cells in the rotated board.',
        diagram: 'X · ·\nX X ·\n· · ·',
        diagramDescription:
          'A three-by-three board with occupied cells at row 1 column 1, row 2 column 1, and row 2 column 2.',
        answer: '(1, 2), (1, 3), and (2, 2).',
        explanation:
          'Apply the same rule to every cell: (1, 1) becomes (1, 3); (2, 1) becomes (1, 2); and the centre (2, 2) stays fixed. The rotated shape has two squares across the top, with one below the left of those two.',
        check:
          'There must still be exactly three squares. Rotating only the first square and guessing the rest can accidentally turn the L into its mirror image.',
      },
      {
        id: 'opposite-face',
        title: '4. Follow a cube net',
        prompt:
          'Fold this net into a cube without overlapping faces. Which letter is opposite C? Each letter represents one square face.',
        diagram: '  A\nB C D E\n  F',
        diagramDescription:
          'Four squares B, C, D, E run left to right. A is immediately above C and F immediately below C.',
        answer: 'E is opposite C.',
        explanation:
          'Keep C as the base. A, B, D and F fold up to become its four neighbouring faces. E is attached to D, so it folds across the remaining opening, opposite the base. Faces sharing an edge with C cannot be opposite C.',
        check:
          'A is opposite F, and B is opposite D. There are three opposite pairs, using all six faces once.',
      },
      {
        id: 'translate',
        title: '5. Move without turning',
        prompt:
          'A triangle has corners (1, 1), (1, 3) and (2, 1). Move every corner three units right and two units up on a standard x-y grid. What are the new corners?',
        answer: '(4, 3), (4, 5), and (5, 3).',
        explanation:
          'Moving right adds 3 to each x coordinate; moving up adds 2 to each y coordinate. Apply (+3, +2) consistently to all three points. Unlike a rotation, this translation does not change the direction of any side.',
        check:
          'The vertical side still has length 2 and the horizontal side still has length 1. Changing those lengths would distort the triangle.',
      },
      {
        id: 'two-operations',
        title: '6. Keep the order of operations',
        prompt:
          'X starts in the top-left cell of a 3 × 3 board. First rotate the board 90 degrees clockwise, then reflect it across the vertical centre line. Where is X? Would reversing these operations give the same result?',
        answer:
          'X ends at the top-left. Reversing the operations puts it at the bottom-right.',
        explanation:
          'In the stated order, the clockwise turn moves top-left to top-right, then the reflection moves it back left. In the reverse order, reflection moves top-left to top-right first; a clockwise turn then moves it to bottom-right. The operations do not commute.',
        check:
          'Write down the intermediate position after the first operation. Combining two instructions mentally without that checkpoint can hide an order error.',
      },
    ],
    related: [
      {
        href: '/practice/pattern-recognition',
        title: 'Pattern recognition practice',
      },
      {
        href: '/articles/reasoning-categories-explained',
        title: 'Compare five reasoning categories with worked puzzles',
      },
      {
        href: '/articles/how-to-prepare-for-reasoning-test',
        title: 'Prepare for a reasoning practice session',
      },
    ],
  },
  {
    slug: 'pattern-recognition',
    title: 'Pattern Recognition Practice With Explained Answers',
    description:
      'Try six free pattern-recognition questions on sequences, alternating rules, rotations and grids, with clear worked answers. Untimed practice; no account.',
    skill: 'Pattern recognition',
    introduction:
      'A convincing pattern rule explains every step, not just the last pair. These six exercises help you separate changing features, test a proposed rule and notice when a short sequence admits other interpretations. Try each problem before opening its answer; no timer, account or score label is needed.',
    method: [
      'Describe what changes: quantity, position, direction or symbol. Hold the other features constant while checking one rule.',
      'Test each transition. If one step breaks your rule, examine alternating operations or separate odd and even positions.',
      'State the assumed continuation. A finite sequence can fit many rules; these exercises ask for the simple repeated rule described in the solution, not proof of a unique mathematical continuation.',
    ],
    questions: [
      {
        id: 'growing-gaps',
        title: '1. Inspect the gaps',
        prompt:
          'Using a rule in which the gap increases by the same amount each time, continue: 3, 7, 13, 21, 31, …',
        answer: '43.',
        explanation:
          'The gaps are 4, 6, 8 and 10. They grow by 2, so the next gap is 12 and 31 + 12 = 43. The terms themselves do not have a constant difference; their differences do.',
        check:
          'Subtract neighbouring terms first. Adding 10 again would ignore the growth in the gaps.',
      },
      {
        id: 'alternating',
        title: '2. Separate two operations',
        prompt:
          'Continue the repeating two-operation pattern: 4, 7, 14, 17, 34, 37, …',
        answer: '74.',
        explanation:
          'The operations alternate: add 3, multiply by 2, add 3, multiply by 2, add 3. The next operation is multiply by 2, giving 74. Check the rule from the beginning rather than inferring it from only 34 and 37.',
        check:
          'Write +3 and ×2 between the numbers. The next operation after 74 would be +3, giving 77.',
      },
      {
        id: 'interleaved',
        title: '3. Split odd and even positions',
        prompt:
          'The odd-position terms and even-position terms each follow their own constant-step sequence. Find the missing term: 2, 20, 5, 18, 8, 16, ?, 14.',
        answer: '11.',
        explanation:
          'Odd positions contain 2, 5, 8 and the missing value: add 3 each time. Even positions contain 20, 18, 16 and 14: subtract 2 each time. The missing value belongs to the odd-position sequence, so it is 8 + 3.',
        check:
          'Number the positions 1 through 8. Treating every adjacent pair as one sequence makes this question unnecessarily complicated.',
      },
      {
        id: 'directions',
        title: '4. Follow a rotation cycle',
        prompt:
          'An arrow turns by one clockwise quarter-turn each step: up, right, down, left, up, … Which direction follows?',
        diagram: '↑  →  ↓  ←  ↑  ?',
        diagramDescription:
          'Arrows point up, right, down, left, then up, followed by a missing arrow.',
        answer: 'Right.',
        explanation:
          'The orientation repeats every four turns. The fifth arrow points up just like the first; the sixth therefore points right just like the second. Counting complete cycles is easier than mentally rotating a long series.',
        check:
          'A clockwise turn from left points up. If your rule gives down there, you have switched rotation direction.',
      },
      {
        id: 'grid',
        title: '5. Test the same row rule',
        prompt:
          'In each row, the third value is the sum of the first two. Find the missing value.',
        diagram: '2   5   7\n4   6  10\n7   8   ?',
        diagramDescription:
          'A three-row grid: 2, 5, 7; 4, 6, 10; 7, 8, missing.',
        answer: '15.',
        explanation:
          'The rule works in both complete rows: 2 + 5 = 7 and 4 + 6 = 10. Apply the same operation to the last row: 7 + 8 = 15. The prompt gives a row rule, so there is no need to invent a separate column pattern.',
        check:
          'Validate your operation on every complete row before using it to fill the missing cell.',
      },
      {
        id: 'repeat-block',
        title: '6. Locate a position in a repeated block',
        prompt:
          'The block circle, square, square, triangle repeats without change. What is the 14th symbol? Count the first circle as position 1.',
        answer: 'Square: the second position in the block.',
        explanation:
          'Each block has four symbols. Three complete blocks use positions 1–12. Position 13 starts the next block with a circle, so position 14 is its first square. Equivalently, 14 divided by 4 leaves a remainder of 2.',
        check:
          'A remainder of zero means the fourth symbol, not a nonexistent position zero. For example, the 12th symbol is a triangle.',
      },
    ],
    related: [
      {
        href: '/articles/number-sequences-explained',
        title: 'Number sequences: differences, ratios and alternating rules',
      },
      {
        href: '/practice/spatial-reasoning',
        title: 'Spatial reasoning practice',
      },
      {
        href: '/articles/logic-puzzles-for-beginners',
        title:
          'Logic puzzles: distinguish a possibility from a necessary conclusion',
      },
    ],
  },
];
