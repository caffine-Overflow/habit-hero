// scripts/seedTopics.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Topic from "../models/Topic.js";

// Load environment variables
dotenv.config({ path: ".env.local" });

console.log("MONGODB_URI from env:", process.env.MONGODB_URI);

// Replace this with your MongoDB URI
const MONGODB_URI = process.env.MONGODB_URI;

const topics = [
  {
    id: "stoicism-1",
    subjectId: "stoicism",
    text: "Read one Stoic quote every morning.",
  },
  {
    id: "stoicism-2",
    subjectId: "stoicism",
    text: "Write down 1 thing you can control today.",
  },
  {
    id: "stoicism-3",
    subjectId: "stoicism",
    text: "Imagine one thing going wrong, and how you'd calmly handle it.",
  },
  {
    id: "anxiety-1",
    subjectId: "anxiety",
    text: "Take 3 deep breaths when you feel tense.",
  },
  {
    id: "anxiety-2",
    subjectId: "anxiety",
    text: "Write 1 sentence about what’s stressing you out.",
  },
  {
    id: "anxiety-3",
    subjectId: "anxiety",
    text: "Stretch for 2 minutes before or after work.",
  },
  {
    id: "environment-1",
    subjectId: "environment",
    text: "Bring a reusable bag when shopping.",
  },
  {
    id: "environment-2",
    subjectId: "environment",
    text: "Fill one reusable water bottle instead of plastic.",
  },
  {
    id: "environment-3",
    subjectId: "environment",
    text: "Turn off unused lights for the day.",
  },
  {
    id: "balance-1",
    subjectId: "balanced-life",
    text: "Write down 1 thing you enjoyed today.",
  },
  {
    id: "balance-2",
    subjectId: "balanced-life",
    text: "Set a 15-minute break for yourself during the day.",
  },
  {
    id: "balance-3",
    subjectId: "balanced-life",
    text: "Say 'no' to one non-essential task today.",
  },
  {
    id: "parenthood-1",
    subjectId: "parenthood",
    text: "Ask your child 1 question about their day.",
  },
  {
    id: "parenthood-2",
    subjectId: "parenthood",
    text: "Read 1 page of a parenting book or article.",
  },
  {
    id: "parenthood-3",
    subjectId: "parenthood",
    text: "Hug your child and say “I love you.”",
  },
  {
    id: "productivity-1",
    subjectId: "productivity",
    text: "Write down your top 1–3 tasks for the day.",
  },
  {
    id: "productivity-2",
    subjectId: "productivity",
    text: "Set a 25-minute timer and work on 1 task.",
  },
  {
    id: "productivity-3",
    subjectId: "productivity",
    text: "Review your day in 1 minute: What worked?",
  },
  {
    id: "sleep-1",
    subjectId: "better-sleep",
    text: "Turn off screens 30 minutes before bed.",
  },
  {
    id: "sleep-2",
    subjectId: "better-sleep",
    text: "Dim the lights 1 hour before sleep.",
  },
  {
    id: "sleep-3",
    subjectId: "better-sleep",
    text: "Keep your bedroom dark and quiet.",
  },
  {
    id: "finance-1",
    subjectId: "financial-habits",
    text: "Record one purchase you made today.",
  },
  {
    id: "finance-2",
    subjectId: "financial-habits",
    text: "Look at your bank account for 1 minute.",
  },
  {
    id: "finance-3",
    subjectId: "financial-habits",
    text: "Put a small coin/bill into savings daily.",
  },
  {
    id: "discipline-1",
    subjectId: "self-discipline",
    text: "Do 1 thing immediately without delay.",
  },
  {
    id: "discipline-2",
    subjectId: "self-discipline",
    text: "Avoid 1 temptation (e.g., sweets, social media).",
  },
  {
    id: "discipline-3",
    subjectId: "self-discipline",
    text: "Write a reason to stay disciplined today.",
  },
  {
    id: "pets-1",
    subjectId: "pet-lovers",
    text: "Pet or play with your pet for 5–10 minutes.",
  },
  {
    id: "pets-2",
    subjectId: "pet-lovers",
    text: "Refill clean water and check their food.",
  },
  {
    id: "pets-3",
    subjectId: "pet-lovers",
    text: "Give them a new toy or treat once a week.",
  },
  {
    id: "org-1",
    subjectId: "structure-organization",
    text: "Spend 2 minutes organizing your desk.",
  },
  {
    id: "org-2",
    subjectId: "structure-organization",
    text: "Plan tomorrow’s 3 top tasks tonight.",
  },
  {
    id: "org-3",
    subjectId: "structure-organization",
    text: "Put away one thing out of place.",
  },
  {
    id: "purpose-1",
    subjectId: "purpose",
    text: "Say or write one sentence of your life purpose.",
  },
  {
    id: "purpose-2",
    subjectId: "purpose",
    text: "Do 1 small task that supports your goal.",
  },
  {
    id: "purpose-3",
    subjectId: "purpose",
    text: "Recall a moment you felt proud.",
  },
  {
    id: "selflove-1",
    subjectId: "self-love",
    text: "Look in the mirror and say 1 kind thing.",
  },
  {
    id: "selflove-2",
    subjectId: "self-love",
    text: "Write down 1 thing you did well today.",
  },
  {
    id: "selflove-3",
    subjectId: "self-love",
    text: "Treat yourself kindly when you make a mistake.",
  },
  {
    id: "creativity-1",
    subjectId: "creativity",
    text: "Doodle, write, or build for 10 minutes.",
  },
  {
    id: "creativity-2",
    subjectId: "creativity",
    text: "Take 1 photo of something beautiful.",
  },
  {
    id: "creativity-3",
    subjectId: "creativity",
    text: "Keep a small 'idea' notebook or note on your phone.",
  },
  {
    id: "aging-1",
    subjectId: "aging",
    text: "Stretch for 5 minutes each day.",
  },
  {
    id: "aging-2",
    subjectId: "aging",
    text: "Write 1 memory from your past.",
  },
  {
    id: "aging-3",
    subjectId: "aging",
    text: "Call or message an older/younger friend or relative.",
  },
  {
    id: "behavior-1",
    subjectId: "behavior-change",
    text: "Track 1 behavior with a ✔️ or ❌.",
  },
  {
    id: "behavior-2",
    subjectId: "behavior-change",
    text: "Notice 1 trigger and write it down.",
  },
  {
    id: "behavior-3",
    subjectId: "behavior-change",
    text: "Celebrate with a fist pump for any success.",
  },
  {
    id: "mindfulness-1",
    subjectId: "mindfulness",
    text: "Focus on your breath for 60 seconds.",
  },
  {
    id: "mindfulness-2",
    subjectId: "mindfulness",
    text: "Eat 3 bites of food slowly and fully aware.",
  },
  {
    id: "mindfulness-3",
    subjectId: "mindfulness",
    text: "Notice 1 sound or smell you usually ignore.",
  },
  {
    id: "detox-1",
    subjectId: "detox",
    text: "Replace 1 bad habit with a neutral/positive one.",
  },
  {
    id: "detox-2",
    subjectId: "detox",
    text: "Don’t check your phone during 1 specific time.",
  },
  {
    id: "detox-3",
    subjectId: "detox",
    text: "Delete 1 app or distraction from your phone.",
  },
  {
    id: "reading-1",
    subjectId: "reading-studying",
    text: "Read 1 page or study for 5–10 minutes.",
  },
  {
    id: "reading-2",
    subjectId: "reading-studying",
    text: "Highlight 1 important point or idea.",
  },
  {
    id: "reading-3",
    subjectId: "reading-studying",
    text: "Explain what you learned to yourself or someone.",
  },
  {
    id: "relationships-1",
    subjectId: "better-relationships",
    text: "Say 'thank you' or 'I appreciate you' to someone.",
  },
  {
    id: "relationships-2",
    subjectId: "better-relationships",
    text: "Message someone just to check in.",
  },
  {
    id: "relationships-3",
    subjectId: "better-relationships",
    text: "Give someone your full attention for 5 minutes.",
  },
  {
    id: "eating-1",
    subjectId: "mindful-eating",
    text: "Eat 1 meal without your phone or TV.",
  },
  {
    id: "eating-2",
    subjectId: "mindful-eating",
    text: "Chew 5 times more than you usually do.",
  },
  {
    id: "eating-3",
    subjectId: "mindful-eating",
    text: "Take a deep breath before you start eating.",
  },
  {
    id: "wellness-1",
    subjectId: "physical-wellness",
    text: "Do 10 jumping jacks or a 5-minute walk.",
  },
  {
    id: "wellness-2",
    subjectId: "physical-wellness",
    text: "Drink 1 full glass of water first thing.",
  },
  {
    id: "wellness-3",
    subjectId: "physical-wellness",
    text: "Stretch your arms, back, or legs briefly.",
  },
  {
    id: "emotion-1",
    subjectId: "emotional-wellness",
    text: "Ask yourself: 'How do I feel right now?'",
  },
  {
    id: "emotion-2",
    subjectId: "emotional-wellness",
    text: "Write 1 sentence about your mood or experience.",
  },
  {
    id: "emotion-3",
    subjectId: "emotional-wellness",
    text: "Do one thing that lifts your mood—even if small.",
  },
  {
    id: "gratitude-1",
    subjectId: "gratitude",
    text: "Write 1 thing you’re grateful for.",
  },
  {
    id: "gratitude-2",
    subjectId: "gratitude",
    text: "Thank 1 person out loud or by message.",
  },
  {
    id: "gratitude-3",
    subjectId: "gratitude",
    text: "Smile and notice something good in your day.",
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    await Topic.deleteMany(); // Optional: clear existing data
    await Topic.insertMany(topics);
    console.log("✅ Seeded topics successfully");

    process.exit();
  } catch (error) {
    console.error("❌ Error seeding topics:", error);
    process.exit(1);
  }
}

seed();
