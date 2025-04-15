
import { CharacterType } from "./characters";
import { BankaiType } from "./bankais";

export type QuizQuestion = {
  id: number;
  question: string;
  options: QuizOption[];
};

export type QuizOption = {
  key: string;
  text: string;
};

export type QuizResult = {
  key: string;
  character: string;
  description: string;
  bankai: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "When faced with a challenge, you:",
    options: [
      { key: "a", text: "Rush in to protect others, no matter the cost." },
      { key: "b", text: "Assess the situation calmly and strike with precision." },
      { key: "c", text: "Let your instincts guide you, seeking the thrill of battle." },
      { key: "d", text: "Use your intelligence and strategy to outsmart the opponent." },
      { key: "e", text: "Stand firm and face it head-on with determination." },
      { key: "f", text: "Take a step back and let your experience guide your actions." },
      { key: "g", text: "Manipulate the situation to your advantage, staying several steps ahead." },
    ],
  },
  {
    id: 2,
    question: "Your friends would describe you as:",
    options: [
      { key: "a", text: "Passionate and protective." },
      { key: "b", text: "Disciplined and honorable." },
      { key: "c", text: "Fearless and battle-ready." },
      { key: "d", text: "Mature and strategic." },
      { key: "e", text: "Compassionate and dutiful." },
      { key: "f", text: "Laid-back but wise." },
      { key: "g", text: "Confident and charismatic." },
    ],
  },
  {
    id: 3,
    question: "Your role in a group is:",
    options: [
      { key: "a", text: "The hero who saves the day." },
      { key: "b", text: "The noble who upholds honor." },
      { key: "c", text: "The warrior who lives for battle." },
      { key: "d", text: "The prodigy who excels beyond their years." },
      { key: "e", text: "The heart who keeps everyone together." },
      { key: "f", text: "The mentor who shares wisdom." },
      { key: "g", text: "The strategist who manipulates events from behind the scenes." },
    ],
  },
  {
    id: 4,
    question: "When it comes to rules, you:",
    options: [
      { key: "a", text: "Follow your own moral code, even if it breaks rules." },
      { key: "b", text: "Adhere strictly to the code of conduct." },
      { key: "c", text: "Ignore rules if they get in the way of a good fight." },
      { key: "d", text: "Respect rules but know when to bend them." },
      { key: "e", text: "Follow rules to maintain order and protect others." },
      { key: "f", text: "See rules as flexible, using them to your advantage." },
      { key: "g", text: "See rules as tools to be used or discarded as needed." },
    ],
  },
  {
    id: 5,
    question: "Your greatest fear is:",
    options: [
      { key: "a", text: "Failing to protect those you care about." },
      { key: "b", text: "Losing your honor or dignity." },
      { key: "c", text: "A life without worthy opponents." },
      { key: "d", text: "Not living up to your potential." },
      { key: "e", text: "Letting down your friends or family." },
      { key: "f", text: "The weight of responsibility and loss." },
      { key: "g", text: "Being outsmarted or losing control." },
    ],
  },
];

export const quizResults: QuizResult[] = [
  {
    key: "a",
    character: "Ichigo Kurosaki",
    description: "Your Bankai, Tensa Zangetsu, enhances your speed and strength, reflecting your passionate and protective nature. Like Ichigo, you charge into challenges to safeguard those you love, guided by a strong personal moral code.",
    bankai: "Tensa Zangetsu",
  },
  {
    key: "b",
    character: "Byakuya Kuchiki",
    description: "Your Bankai, Senbonzakura Kageyoshi, creates a storm of blade petals, symbolizing your precision and discipline. Like Byakuya, you value honor and maintain a calm, controlled approach to life's battles.",
    bankai: "Senbonzakura Kageyoshi",
  },
  {
    key: "c",
    character: "Kenpachi Zaraki",
    description: "Your Bankai unleashes raw, berserker power, matching your fearless and battle-hungry spirit. Like Kenpachi, you thrive on instinct and the thrill of a challenge, brushing aside rules that don't suit you.",
    bankai: "Unnamed",
  },
  {
    key: "d",
    character: "Toshiro Hitsugaya",
    description: "Your Bankai, Daiguren Hyorinmaru, commands ice and snow, mirroring your strategic and mature demeanor. Like Toshiro, you excel through intelligence and strive to reach your full potential.",
    bankai: "Daiguren Hyorinmaru",
  },
  {
    key: "e",
    character: "Rukia Kuchiki",
    description: "Your Bankai, Hakka no Togame, freezes everything in its path, reflecting your compassionate yet determined heart. Like Rukia, you stand firm for duty and those you care about, keeping everyone united.",
    bankai: "Hakka no Togame",
  },
  {
    key: "f",
    character: "Shunsui Kyoraku",
    description: "Your Bankai, Katen Kyokotsu: Karamatsu Shinju, weaves a theatrical tale of despair, embodying your wise and laid-back approach. Like Shunsui, you use experience and flexibility to navigate life's complexities.",
    bankai: "Katen Kyokotsu: Karamatsu Shinju",
  },
  {
    key: "g",
    character: "Sosuke Aizen",
    description: "Your Shikai, Kyoka Suigetsu, creates perfect illusions, reflecting your cunning and manipulative nature. Like Aizen, you are always several steps ahead, using intelligence and strategy to achieve your goals. You see the world as a game to be mastered, bending reality to your will.",
    bankai: "Kyoka Suigetsu (Shikai)",
  },
];

export const instructions = `
Bleach: Thousand-Year Blood War Bankai Character Quiz
Discover which Bleach character you align with based on their Bankai (or Shikai, in Aizen's case) and personality!
Instructions:

For each question, choose the option (a, b, c, d, e, f, or g) that best describes you.
At the end, count how many times you chose each letter and check the Results section to find your character.

What to Do Next

Tally your answers.
The letter you picked most often determines your character.
If you have a tie (e.g., 2 a's, 2 g's), you might share traits with both—pick the one that resonates more, or enjoy being a blend of two awesome characters!

Enjoy the quiz and let me know who you get!
`;
