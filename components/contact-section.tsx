"use client"

import { useState } from "react"
import { Phone, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", phone: "", message: "" })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            צרו קשר
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            דברו איתנו עוד היום
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            השאירו פרטים ונחזור אליכם בהקדם, או התקשרו ישירות לקבלת שירות מיידי.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-border/50">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  השאירו פרטים
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                      <Send className="w-8 h-8 text-secondary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      תודה על פנייתכם!
                    </h4>
                    <p className="text-muted-foreground">
                      נחזור אליכם בהקדם האפשרי.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="name">שם מלא</FieldLabel>
                        <Input
                          id="name"
                          type="text"
                          placeholder="הזינו את שמכם"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="text-right"
                        />
                      </Field>

                      <Field>
                        <FieldLabel htmlFor="phone">טלפון</FieldLabel>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="מספר הטלפון שלכם"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="text-right"
                          dir="ltr"
                        />
                      </Field>

                      <Field>
                        <FieldLabel htmlFor="message">תיאור הבעיה</FieldLabel>
                        <Textarea
                          id="message"
                          placeholder="ספרו לנו על הבעיה שלכם"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                          className="text-right resize-none"
                        />
                      </Field>

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "שולח..." : "שליחה"}
                      </Button>
                    </FieldGroup>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Options */}
            <div className="flex flex-col gap-6">
              {/* Phone Card */}
              <Card className="border-border/50 hover:border-secondary/50 transition-colors">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        התקשרו אלינו
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        זמינים 24/6 לשירותכם
                      </p>
                      <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        <a href="tel:0534980979" className="gap-2">
                          <Phone className="w-4 h-4" />
                          <span dir="ltr">053-498-0979</span>
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
                      <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
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
      </div>
    </section>
  )
}
