'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const faqs = [
  ['Is this a real IQ test?', 'No. Arc IQ is a short practice assessment. It is not normed, clinically validated, or suitable for admissions, employment, diagnosis, or treatment.'],
  ['What does the Arc Index mean?', 'It is simply the percentage of questions answered correctly in the current 12-question set, shown on a 0–100 scale.'],
  ['Where are my results stored?', 'Attempt history is stored in your browser on this device. Clearing site data removes it. We do not require an account for the free assessment.'],
  ['Can I retake it?', 'Yes. Retakes help you learn the format, but practice effects mean scores from repeated attempts should not be treated as independent measurements.'],
];
export function Faq() { return <Accordion className="faq-list">{faqs.map(([q, a]) => <AccordionItem key={q} value={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent><p>{a}</p></AccordionContent></AccordionItem>)}</Accordion>; }
