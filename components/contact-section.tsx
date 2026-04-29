"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            צור קשר
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            אנחנו כאן לכל שאלה
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            זקוקים לאינסטלטור דחוף? צרו איתנו קשר עכשיו בשיחה ישירה או בהודעת וואטסאפ.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Card */}
            <Card className="border-border/50 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      התקשרו אלינו
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      זמינות גבוהה לשיחות דחופות
                    </p>
                    <Button asChild className="w-full sm:w-auto">
                      <a href="tel:0534980979" className="gap-2">
                        <Phone className="w-4 h-4" />
                        <span>053-498-0979</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="border-border/50 hover:border-green-500/50 transition-colors">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      שלחו הודעה בוואטסאפ
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      נענה בהקדם האפשרי
                    </p>
                    <Button asChild className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                      <a
                        href="https://wa.me/972534980979?text=שלום, אשמח לקבל הצעת מחיר לשירות אינסטלציה"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>פתיחת וואטסאפ</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}