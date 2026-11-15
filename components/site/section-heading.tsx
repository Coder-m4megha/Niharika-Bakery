import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
}: SectionHeadingProps) {
  const isDark = tone === 'dark';
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      )}
    >
      <p
        className={cn(
          'mb-4 text-xs font-semibold uppercase tracking-[0.25em]',
          isDark ? 'text-gold-300' : 'text-caramel-500'
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'text-4xl font-medium sm:text-5xl',
          isDark ? 'text-cream-100' : 'text-cocoa-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-base leading-[1.5] sm:text-lg',
            isDark ? 'text-cream-300' : 'text-cocoa-500'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
