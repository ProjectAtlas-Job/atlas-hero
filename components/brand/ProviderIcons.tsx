type IconProps = { className?: string; size?: number };

/** Monochrome Google "G" — inherits `currentColor` to match the app's icon style. */
export function GoogleIcon({ className, size = 18 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.27 10.09v3.96h5.49a4.7 4.7 0 0 1-2.04 3.08v2.56h3.3c1.93-1.78 3.04-4.4 3.04-7.52 0-.73-.06-1.43-.18-2.08h-9.61Z" opacity="0.55" />
      <path d="M12.27 22c2.76 0 5.07-.91 6.76-2.47l-3.3-2.56c-.92.62-2.1.98-3.46.98-2.66 0-4.92-1.8-5.72-4.21H3.14v2.64A10.2 10.2 0 0 0 12.27 22Z" opacity="0.8" />
      <path d="M6.55 13.74a6.13 6.13 0 0 1 0-3.92V7.18H3.14a10.2 10.2 0 0 0 0 9.2l3.41-2.64Z" opacity="0.65" />
      <path d="M12.27 5.62c1.5 0 2.85.52 3.91 1.53l2.93-2.93C17.33 2.5 15.02 1.5 12.27 1.5A10.2 10.2 0 0 0 3.14 7.18l3.41 2.64c.8-2.41 3.06-4.2 5.72-4.2Z" />
    </svg>
  );
}

/** GitHub mark — inherits `currentColor`. */
export function GitHubIcon({ className, size = 18 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}
