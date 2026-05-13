import { WHATSAPP_URL } from "@/lib/contact";

interface Props {
  children?: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export function WhatsAppButton({
  children = "Enviar mensagem",
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-colors";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-primary/40 text-primary hover:border-primary hover:bg-primary/5";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
