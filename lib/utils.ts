// utils.ts - just a tiny file for utility stuff!
// If you ever need to add more helpers, toss them in here.
// TODO: Maybe split this up if it gets too big, but for now, it's chill :)

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Combines class names, merges Tailwind classes, and generally keeps things tidy.
// If you ever wonder "why isn't my class working?", check here first!
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
