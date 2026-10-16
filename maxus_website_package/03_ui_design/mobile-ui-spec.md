# Mobile UI Specification

## Reference viewport
- Design and test at 390 × 844 px and 360 × 800 px.
- Side padding: 20 px.
- No horizontal overflow at any breakpoint.

## Header
- Compact logo and accessible menu button.
- Menu opens/closes with keyboard and touch.
- Contact CTA remains easy to find without crowding the header.

## Hero
- Stack content first, artwork second.
- H1 approximately 36–52 px using responsive clamp().
- Description readable at 16–18 px.
- Primary CTA full-width or comfortably tappable.
- Secondary CTA below or adjacent if space allows.
- Artwork should crop gracefully and never cover the headline.
- Reduce animation and avoid heavy 3D/parallax on small devices.

## Content
- Service cards: one column on narrow phones; two columns only where labels remain readable.
- Portfolio cards: one column on narrow phones; two columns on wider phones if comfortable.
- Case-study images full width with captions and appropriate alt text.
- Forms: one column, clear labels, appropriate input types and visible validation.
- Contact actions: phone, email and WhatsApp buttons with minimum comfortable touch targets.
- Footer: stacked groups or accessible disclosure sections.

## Accessibility and performance
- Keyboard-visible focus.
- Semantic headings and landmarks.
- Reduced-motion support.
- Lazy-load below-the-fold images.
- Prioritize the hero visual appropriately.
- Keep text contrast strong and forms usable at zoom.
