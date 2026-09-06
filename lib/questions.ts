export const domains = ['Pattern', 'Verbal', 'Quantitative', 'Logic'] as const;
export type Domain = (typeof domains)[number];

export type Question = {
  id: number;
  domain: Domain;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const questions: Question[] = [
  { id: 1, domain: 'Pattern', prompt: 'Which number completes the sequence: 2, 6, 12, 20, 30, ?', options: ['36', '40', '42', '44'], correctIndex: 2, explanation: 'The gaps are +4, +6, +8, +10, then +12.' },
  { id: 2, domain: 'Pattern', prompt: 'Complete the alternating sequence: A, C, B, D, C, ?', options: ['D', 'E', 'F', 'G'], correctIndex: 1, explanation: 'Two interleaved sequences advance A–B–C and C–D–E.' },
  { id: 3, domain: 'Pattern', prompt: 'A symbol rotates 90° clockwise, then 180° clockwise, repeating. If it starts pointing up, where does it point after three moves?', options: ['Up', 'Right', 'Down', 'Left'], correctIndex: 0, explanation: 'Up → right (+90°) → left (+180°) → up (+90°).' },
  { id: 4, domain: 'Verbal', prompt: 'Blueprint is to building as recipe is to…', options: ['Kitchen', 'Ingredient', 'Meal', 'Chef'], correctIndex: 2, explanation: 'A blueprint guides the creation of a building; a recipe guides the creation of a meal.' },
  { id: 5, domain: 'Verbal', prompt: 'Which word is the closest opposite of “scarce”?', options: ['Hidden', 'Abundant', 'Fragile', 'Costly'], correctIndex: 1, explanation: 'Scarce means limited or insufficient; abundant means plentiful.' },
  { id: 6, domain: 'Verbal', prompt: 'Which item does not belong with the others?', options: ['Sonnet', 'Haiku', 'Novel', 'Limerick'], correctIndex: 2, explanation: 'A novel is prose; the other three are poetic forms.' },
  { id: 7, domain: 'Quantitative', prompt: 'A €60 item is discounted by 25%. What is its sale price?', options: ['€35', '€40', '€45', '€48'], correctIndex: 2, explanation: '25% of 60 is 15, so the sale price is 60 − 15 = 45.' },
  { id: 8, domain: 'Quantitative', prompt: 'If 4 machines make 4 parts in 4 minutes, how many parts do 8 machines make in 8 minutes?', options: ['8', '12', '16', '32'], correctIndex: 2, explanation: 'Each machine makes one part every four minutes, so each makes two parts in eight minutes.' },
  { id: 9, domain: 'Quantitative', prompt: 'The average of 8, 12, 16, and x is 14. What is x?', options: ['18', '20', '22', '24'], correctIndex: 1, explanation: 'The required total is 56. The known values total 36, leaving 20.' },
  { id: 10, domain: 'Logic', prompt: 'All lumes are quiet. No quiet things are alarms. Which conclusion must be true?', options: ['No lumes are alarms', 'Some alarms are lumes', 'All alarms are loud', 'Some quiet things are lumes'], correctIndex: 0, explanation: 'If every lume is quiet and no quiet thing is an alarm, no lume can be an alarm.' },
  { id: 11, domain: 'Logic', prompt: 'Mira is older than Theo. Theo is older than Nia. Which statement must be true?', options: ['Nia is older than Mira', 'Mira is older than Nia', 'Theo and Mira are the same age', 'Nothing can be concluded'], correctIndex: 1, explanation: 'The greater-than relationship is transitive: Mira > Theo > Nia.' },
  { id: 12, domain: 'Logic', prompt: 'If a report is approved, Mira or Theo signed it. The report was approved, and Mira did not sign. What must be true?', options: ['Theo signed it', 'No one signed it', 'Mira signed it', 'The report was rejected'], correctIndex: 0, explanation: 'At least one of the two people signed. Since it was not Mira, it must have been Theo.' },
];
