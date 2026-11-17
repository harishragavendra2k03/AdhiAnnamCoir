
const WHATSAPP_PHONE_NUMBER = "919566294433";

const WHATSAPP_MESSAGE =
  "Hello Adhi Annam Coir Comforts, I would like to know more about your products.";

const WhatsAppFloat = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <>
      <style>{`
        @keyframes whatsapp-ring {
          0% {
            opacity: 0.45;
            transform: scale(1);
          }
          75%, 100% {
            opacity: 0;
            transform: scale(1.7);
          }
        }

        .whatsapp-pulse-ring {
          animation: whatsapp-ring 2.6s ease-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .whatsapp-pulse-ring {
            animation: none;
          }
        }
      `}</style>

      <div className="fixed bottom-5 right-5 z-[100] sm:bottom-6 sm:right-6">
        <span
          aria-hidden="true"
          className="whatsapp-pulse-ring pointer-events-none absolute inset-0 rounded-full bg-[#25D366]"
        />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Adhi Annam Coir Comforts on WhatsApp"
          className="group relative z-10 flex size-[54px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(24,61,44,0.28)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_12px_30px_rgba(24,61,44,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#183D2C] active:scale-95 sm:size-[60px] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100"
        >
          <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-[#183D2C] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none sm:block">
            Chat with us on WhatsApp
          </span>

          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-8 fill-current sm:size-9"
          >
            <path d="M12.04 2C6.58 2 2.14 6.43 2.14 11.89c0 1.75.46 3.45 1.34 4.95L2.05 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.43 9.9-9.89C22 6.47 17.5 2 12.04 2zm5.77 14.14c-.24.68-1.39 1.3-1.92 1.39-.5.08-1.13.12-1.83-.1-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.18-4.94-4.37-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.42.26-.29.57-.37.76-.37h.55c.17 0 .41-.06.64.49.24.57.83 2 .9 2.14.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.37-.44.5-.15.15-.3.31-.13.6.17.29.76 1.26 1.63 2.05 1.12.99 2.05 1.3 2.34 1.45.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.3.39-.25.66-.15.27.1 1.7.8 1.99.94.29.15.49.22.56.34.07.13.17.71-.17 1.38z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default WhatsAppFloat;
