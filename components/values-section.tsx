import { Sparkles, BadgeDollarSign, Clock } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    title: "עבודה נקייה",
    description: "אנו מקפידים על סדר וניקיון בכל עבודה. מסיימים את העבודה ומשאירים את המקום נקי כמו שהיה.",
  },
  {
    icon: BadgeDollarSign,
    title: "מחירים הוגנים",
    description: "מחירים שקופים וללא הפתעות. הצעת מחיר לפני תחילת העבודה ובלי עלויות נסתרות.",
  },
  {
    icon: Clock,
    title: "זמינות גבוהה",
    description: "זמינים עבורכם 24 שעות ביממה, 6 ימים בשבוע. מגיעים מהר ופותרים את הבעיה ביעילות.",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            למה לבחור בנו
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            הערכים שמנחים אותנו
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            אנחנו מאמינים שאינסטלציה טובה מתחילה בשירות טוב. לכן אנחנו שמים דגש על הערכים הבאים:
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                <value.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
