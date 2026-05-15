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
    "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md";
  const styles =
    variant === "primary"
      ? "bg-[#25D366] text-white hover:bg-[#1ebe5d]"
      : "border border-[#25D366]/60 text-[#128C7E] bg-[#25D366]/5 hover:bg-[#25D366]/15 hover:border-[#25D366]";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M19.11 17.21c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.74.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.13 2.84.14.18 1.95 2.98 4.72 4.18.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.18-.52-.32zM16.02 5C9.94 5 5 9.94 5 16c0 1.94.51 3.84 1.49 5.51L5 27l5.67-1.48A10.97 10.97 0 0 0 16.02 27C22.1 27 27 22.06 27 16S22.1 5 16.02 5zm0 19.93c-1.74 0-3.45-.47-4.94-1.35l-.35-.21-3.36.88.9-3.27-.23-.36A8.93 8.93 0 0 1 7.07 16c0-4.94 4.02-8.96 8.95-8.96 2.39 0 4.64.93 6.33 2.62a8.92 8.92 0 0 1 2.63 6.34c0 4.94-4.02 8.96-8.96 8.96z" />
      </svg>
      {children}
    </a>
  );
}
