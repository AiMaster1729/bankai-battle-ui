import { 
  User, 
  Shield, 
  Sword, 
  Droplet, 
  Skull, 
  Crown, 
  Heart, 
  Snowflake, 
  Flame 
} from "lucide-react";

export type CharacterType = {
  id: number;
  name: string;
  role: string;
  zanpakuto: string;
  quote: string;
  icon: React.ElementType;
  imageSrc: string;
  reiatsuColor: string;
};

export const characters: CharacterType[] = [
  // Existing characters
  {
    id: 1,
    name: "Ichigo Kurosaki",
    role: "Substitute Shinigami",
    zanpakuto: "Zangetsu",
    quote: "I'll defeat you. I'll defeat you all.",
    icon: User,
    imageSrc: "https://images5.alphacoders.com/851/thumb-1920-851062.png",
    reiatsuColor: "reiatsu-red",
  },
  {
    id: 2,
    name: "Yhwach",
    role: "Emperor of the Quincy",
    zanpakuto: "The Almighty",
    quote: "I can see everything. Every future.",
    icon: Crown,
    imageSrc: "https://wallpapercave.com/wp/wp4563299.png",
    reiatsuColor: "reiatsu-gold",
  },
  {
    id: 3,
    name: "Rukia Kuchiki",
    role: "Captain of 13th Division",
    zanpakuto: "Sode no Shirayuki",
    quote: "Dance, Sode no Shirayuki.",
    icon: Snowflake,
    imageSrc: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2025/02/mixcollage-24-feb-2025-01-55-pm-4307.jpg",
    reiatsuColor: "reiatsu-blue",
  },
  {
    id: 4,
    name: "Byakuya Kuchiki",
    role: "Captain of 6th Division",
    zanpakuto: "Senbonzakura",
    quote: "Scatter, Senbonzakura Kageyoshi.",
    icon: Droplet,
    imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    reiatsuColor: "reiatsu-purple",
  },
  {
    id: 5,
    name: "Kenpachi Zaraki",
    role: "Captain of 11th Division",
    zanpakuto: "Nozarashi",
    quote: "The only thing I want is to become stronger.",
    icon: Sword,
    imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    reiatsuColor: "reiatsu-red",
  },
  {
    id: 6,
    name: "Uryu Ishida",
    role: "Quincy",
    zanpakuto: "Heilig Bogen",
    quote: "I am the last Quincy.",
    icon: Shield,
    imageSrc: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=600&q=80",
    reiatsuColor: "reiatsu-gold",
  },
  // New characters
  {
    id: 7,
    name: "Tōshirō Hitsugaya",
    role: "Captain of 10th Division",
    zanpakuto: "Hyorinmaru",
    quote: "Bankai, Daiguren Hyorinmaru.",
    icon: Snowflake,
    imageSrc: "https://example.com/hitsugaya.jpg",
    reiatsuColor: "reiatsu-blue",
  },
  {
    id: 8,
    name: "Sosuke Aizen",
    role: "Former Captain of 5th Division / Antagonist",
    zanpakuto: "Kyoka Suigetsu",
    quote: "Admiration is the furthest thing from understanding.",
    icon: Skull,
    imageSrc: "https://example.com/aizen.jpg",
    reiatsuColor: "reiatsu-purple",
  },
  {
    id: 9,
    name: "Kisuke Urahara",
    role: "Former Captain of 12th Division / Shopkeeper",
    zanpakuto: "Benihime",
    quote: "There’s no such thing as a perfect plan.",
    icon: Shield,
    imageSrc: "https://example.com/urahara.jpg",
    reiatsuColor: "reiatsu-red",
  },
  {
    id: 10,
    name: "Mayuri Kurotsuchi",
    role: "Captain of 12th Division",
    zanpakuto: "Ashisogi Jizo",
    quote: "Perfection is me.",
    icon: Skull,
    imageSrc: "https://example.com/mayuri.jpg",
    reiatsuColor: "reiatsu-green",
  },
  {
    id: 11,
    name: "Genryūsai Shigekuni Yamamoto",
    role: "Former Head Captain of the Gotei 13",
    zanpakuto: "Ryujin Jakka",
    quote: "All things in the universe turn to ashes.",
    icon: Flame,
    imageSrc: "https://example.com/yamamoto.jpg",
    reiatsuColor: "reiatsu-orange",
  },
  {
    id: 12,
    name: "Shinji Hirako",
    role: "Captain of 5th Division",
    zanpakuto: "Sakanade",
    quote: "Invert their senses.",
    icon: User,
    imageSrc: "https://example.com/shinji.jpg",
    reiatsuColor: "reiatsu-pink",
  },
  {
    id: 13,
    name: "Renji Abarai",
    role: "Lieutenant of 6th Division",
    zanpakuto: "Zabimaru",
    quote: "Roar, Zabimaru!",
    icon: Sword,
    imageSrc: "https://example.com/renji.jpg",
    reiatsuColor: "reiatsu-red",
  },
  {
    id: 14,
    name: "Orihime Inoue",
    role: "Human / Healer",
    zanpakuto: "Shun Shun Rikka",
    quote: "I reject!",
    icon: Heart,
    imageSrc: "https://example.com/orihime.jpg",
    reiatsuColor: "reiatsu-orange",
  },
  {
    id: 15,
    name: "Yasutora Sado",
    role: "Human / Fullbringer",
    zanpakuto: "Brazo Derecha de Gigante",
    quote: "I’ll protect you with my life.",
    icon: Shield,
    imageSrc: "https://example.com/chad.jpg",
    reiatsuColor: "reiatsu-brown",
  },
  {
    id: 16,
    name: "Yoruichi Shihouin",
    role: "Former Captain of 2nd Division / Stealth Force Commander",
    zanpakuto: "Shunko",
    quote: "Speed is my weapon.",
    icon: User,
    imageSrc: "https://example.com/yoruichi.jpg",
    reiatsuColor: "reiatsu-purple",
  },
];
