import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";
import clinic from "@/assets/clinic-interior.jpg";

export type PostData = {
  title: string;
  cat: string;
  date: string;
  read: string;
  img: { src: string };
  body: string[];
};

export const POSTS: Record<string, PostData> = {
  "modern-clinics": { title: "Why we built a clinic that feels like a hotel lobby", cat: "Inside Klaria", date: "May 2, 2026", read: "5 min", img: clinic,
    body: [
      "The first decision we made when designing Klaria wasn't medical. It was architectural.",
      "We removed the reception counter. We added daylight, real plants, and warm wood. We replaced the rows of waiting chairs with a small library and a quiet tea bar. And then — only then — we started planning the consultation rooms.",
      "Calm is not a perk. For a nervous patient, calm is medication. Lower cortisol leads to clearer conversation, better diagnosis, and faster recovery. The lobby is part of the treatment.",
      "Six years in, the data agrees: our average wait is under three minutes, our consultations run 28% longer than industry average, and our re-visit anxiety scores are the lowest we've ever measured.",
    ]
  },
  "nutrition-101": { title: "The 12 vegetables your gut wishes you ate this week", cat: "Nutrition", date: "Apr 24, 2026", read: "6 min", img: b1, body: ["Diversity beats perfection. The simplest gut-friendly habit isn't eating one superfood — it's eating thirty different plants a week.", "Here's the practical framework we share with patients: pick three colors, three textures, three flavors per meal. That's it. Variety, not virtue."] },
  "morning-routine": { title: "A 10-minute morning routine that actually changes things", cat: "Mental wellness", date: "Apr 18, 2026", read: "4 min", img: b2, body: ["Forget the 5 AM stack. Most people who keep a morning routine for more than 90 days share one trait: theirs is short.", "Two minutes of breathing, three of stretching, five of slow tea or coffee — without a screen. The simplest ritual is the only one you'll actually keep."] },
  "ai-and-care": { title: "How AI is quietly making your doctor a better listener", cat: "Innovation", date: "Apr 09, 2026", read: "7 min", img: b3, body: ["When charting becomes ambient, eye contact returns. Our doctors no longer type during your visit — the conversation itself becomes the record.", "The result is more than convenience. It's a return to the original technology of medicine: presence."] },
  "kids-checkups": { title: "How to make a clinic visit something kids look forward to", cat: "Pediatrics", date: "Mar 28, 2026", read: "5 min", img: clinic, body: ["Children remember rituals more than rooms. A short, predictable sequence — name tag, sticker draw, 'doctor's helper' moment — turns clinical fear into clinical play."] },
  "eye-strain": { title: "The 20-20-20 rule, and four others your eyes will thank you for", cat: "Optometry", date: "Mar 14, 2026", read: "3 min", img: b3, body: ["Every 20 minutes, look 20 feet away for 20 seconds. The eye is a muscle. Treat it like one."] },
};