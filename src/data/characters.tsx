
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
    imageSrc: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=600&q=80",
    reiatsuColor: "reiatsu-gold",
  },
  {
    id: 3,
    name: "Rukia Kuchiki",
    role: "Captain of 13th Division",
    zanpakuto: "Sode no Shirayuki",
    quote: "Dance, Sode no Shirayuki.",
    icon: Snowflake,
    imageSrc: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=600&q=80",
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
];
