// utils/contractGenerator.js
export default function contractGenerator(answers, name = "User") {
  return `
  ${name}'s Habit Contract
  
  I, ${name}, commit to improving my life by focusing on the following:
  
  - 🧠 Mental Wellness
  - ⚡ Productivity
  - 💪 Fitness
  - 🤝 Building a support system
  
  Based on my recent assessment, I recognize the need for positive change and agree to take meaningful steps toward building better habits.
  
  I will strive to remain consistent, focused, and kind to myself as I progress on this journey.
  
  Signed,
  ${name}
    `;
}
