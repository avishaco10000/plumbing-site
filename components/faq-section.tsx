import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10">שאלות נפוצות</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-right">תוך כמה זמן תגיעו אליי?</AccordionTrigger>
            <AccordionContent className="text-right">
              אנחנו מתחייבים להגעה מהירה תוך 30-60 דקות באזור המרכז לקריאות דחופות.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-right">האם יש אחריות על התיקון?</AccordionTrigger>
            <AccordionContent className="text-right">
              בוודאי. כל עבודה שלנו מגיעה עם אחריות מלאה על התיקון והחלקים שהוחלפו.
            </AccordionContent>
          </AccordionItem>
          {/* הוסיפי כאן עוד שאלות לפי הצורך */}
        </Accordion>
      </div>
    </section>
  )
}