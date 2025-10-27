# Testimonials Configuration Guide

This directory contains configuration files for various features of the Smetovi website.

## Testimonials System

The testimonials system allows you to easily manage customer reviews and testimonials displayed on the About page.

### Quick Start

#### To Enable/Disable Testimonials

Open `testimonials.ts` and change the `TESTIMONIALS_ENABLED` constant:

```typescript
export const TESTIMONIALS_ENABLED = true; // Show testimonials
// or
export const TESTIMONIALS_ENABLED = false; // Hide testimonials
```

#### To Add a New Testimonial

1. Open `testimonials.ts`
2. Add a new object to the `testimonials` array following this structure:

```typescript
{
  name: "Full Name",
  location: {
    bs: "City Name (Bosnian)",
    en: "City Name (English)"
  },
  rating: 5,  // Number from 1-5
  text: {
    bs: "Your testimonial text in Bosnian",
    en: "Your testimonial text in English"
  }
}
```

### Example

```typescript
{
  name: "John Doe",
  location: {
    bs: "Sarajevo",
    en: "Sarajevo"
  },
  rating: 5,
  text: {
    bs: "Odlično iskustvo! Preporučujem svima.",
    en: "Great experience! I recommend it to everyone."
  }
}
```

### Important Notes

- **Rating**: Must be a number between 1 and 5 (inclusive)
- **Bilingual**: Always provide both Bosnian (bs) and English (en) versions
- **Location**: City names can be the same in both languages if they don't change
- **Order**: Testimonials appear in the order they're listed in the array
- **HTML**: Don't include HTML tags in the testimonial text - use plain text only

### Features

✅ **Easy Toggle**: Turn testimonials on/off with a single variable  
✅ **Bilingual Support**: Automatic language switching based on site language  
✅ **Star Ratings**: Visual star ratings from 1-5  
✅ **Responsive Design**: Automatically adapts to different screen sizes  
✅ **Type Safety**: TypeScript ensures data structure consistency

### File Structure

```
src/
└── config/
    ├── testimonials.ts  - Main configuration file
    └── README.md        - This documentation file
```

### Testing Your Changes

After adding or modifying testimonials:

1. Save the `testimonials.ts` file
2. Make sure `TESTIMONIALS_ENABLED` is set to `true`
3. Restart your development server (if running)
4. Visit the About page (`/about` or `/en/about`)
5. Verify your testimonials appear correctly

### Future Enhancements

Possible future improvements:

- Add photos/avatars for testimonials
- Include date of visit
- Add verification badges
- Filter by rating
- Display average rating
