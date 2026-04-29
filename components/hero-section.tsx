import { Phone, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-background pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">זמינים 24/6 (לא בשבת)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            הצפה בבית?
            <br />
            <span className="text-primary">ד.ש אינסטלציה</span> בדרך אליכם!
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
            מומחים בכל סוגי עבודות האינסטלציה, איתור נזילות ופתיחת סתימות. 
            שירות מקצועי, אמין ומהיר.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" asChild className="gap-2 text-lg px-8 py-6 w-full sm:w-auto shadow-lg shadow-primary/20">
              <a href="tel:0534980979">
                <Phone className="w-5 h-5" />
                <span>התקשרו עכשיו</span>
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="gap-2 text-lg px-8 py-6 w-full sm:w-auto border-primary/20 hover:bg-primary/5"
            >
              <a href="https://wa.me/972534980979">
                <span>דברו איתנו בוואטסאפ</span>
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm">אחריות על העבודה</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="text-sm">זמן הגעה מהיר</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-xs text-secondary font-bold">₪</span>
              </div>
              <span className="text-sm">מחירים הוגנים</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/30 rounded-full" />
        </div>
      </div>
    </section>
  )
}