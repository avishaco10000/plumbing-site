import { Phone, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
         {/* Logo & Copyright */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <img 
                src="/logo.jpg" 
                alt="לוגו" 
                className="h-12 w-auto object-contain" 
              />
            </div>
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} ד.ש אינסטלציה. כל הזכויות שמורות.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex items-center gap-4">
            <a
              href="tel:0534980979"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">053-498-0979</span>
            </a>
            <span className="text-primary-foreground/30">|</span>
            <a
              href="https://wa.me/972534980979"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>וואטסאפ</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
