// Blog post cover (16:9) — the post's image, or a branded placeholder while it has none
import Image from "next/image";

interface Props {
  image: string | null;
  alt: string;
  // Responsive width hint for next/image, e.g. "(min-width: 768px) 288px, 100vw"
  sizes: string;
  // Above-the-fold covers (the post page) load eagerly
  priority?: boolean;
  className?: string;
}

export default function PostCover({ image, alt, sizes, priority = false, className = "" }: Props) {
  return (
    <div className={`relative aspect-video overflow-hidden rounded-xl bg-dark ${className}`}>
      {image ? (
        <Image src={image} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          {/* Decorative circles — same language as the hero */}
          <div className="absolute w-[70%] aspect-square rounded-full bg-primary/10 -bottom-1/3 -right-1/4" />
          <div className="absolute w-[35%] aspect-square rounded-full bg-gold/10 -top-1/4 left-[8%]" />
          <Image src="/logo.png" alt="" width={96} height={96} className="relative w-1/5 h-auto opacity-90" />
        </div>
      )}
    </div>
  );
}
