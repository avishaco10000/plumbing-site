import { Wrench, Droplets, Search, Bath } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Wrench,
    title: "תיקון צנרת",
    description: "תיקון והחלפת צנרת מים וביוב, פתיחת סתימות ואיתור תקלות בצנרת.",
  },
  {
    icon: Droplets,
    title: "התקנת ברזים",
    description: "התקנה והחלפה של ברזים, מערבלים וראשי מקלחת בכל סוגי הברזים.",
  },
  {
    icon: Search,
    title: "איתור נזילות",
    description: "איתור נזילות סמויות בעזרת ציוד מתקדם ללא פירוק מיותר.",
  },
  {
    icon: Bath,
    title: "כלים סניטריים",
    description: "התקנה, תיקון והחלפה של אסלות, כיורים, אמבטיות ומקלחונים.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            השירותים שלנו
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            פתרונות אינסטלציה מקצועיים
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            אנו מספקים מגוון רחב של שירותי אינסטלציה לבית ולעסק, עם דגש על מקצועיות ושירות אדיב.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-border/50 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 bg-card"
            >
              <CardContent className="p-6 md:p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-secondary/20 flex items-center justify-center mb-5 transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
