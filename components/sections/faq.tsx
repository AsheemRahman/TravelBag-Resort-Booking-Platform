import { faqs } from "@/data/content";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="section-pad bg-white">
      <div className="container max-w-3xl">
        <p className="eyebrow text-center">Good to know</p>
        <h2 className="mt-2 text-center text-3xl md:text-4xl">Frequently asked questions</h2>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f) => (
            <AccordionItem key={f.question} value={f.question}>
              <AccordionTrigger>{f.question}</AccordionTrigger>
              <AccordionContent>{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
