import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export default function Page() {
  console.log('빵에에요! 퀴즈에요!');
  return (
    <div>
      <div className="mb-3 rounded-lg bg-[#738660] px-5 pb-7">
        <h4 className="p-3 text-2xl font-bold text-[#ded29a]">Question</h4>
        <div className="min-h-40 rounded-lg bg-[#ded29a] p-3">
          <p>객체지향이란 무엇인가요?</p>
        </div>
      </div>
      <div className="flex gap-5">
        <Button className="w-full">알고있어요</Button>
        <Button className="w-full">몰루?</Button>
      </div>
      <Accordion
        type="single"
        collapsible>
        <AccordionItem
          value="item-1"
          className="overflow-hidden">
          <AccordionTrigger className="rounded-3xl rounded-b-none bg-[#738660] px-5 data-[state=open]:rounded-b-none">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="rounded-b-3xl bg-orange-600 delay-1000">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
