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
    imageSrc: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2aacc7e-de0d-4f5d-a7c2-1c47b586afb1/dey2pa5-d6c8aa7d-9971-43ed-9415-c739ea904788.jpg/v1/fill/w_1192,h_670,q_70,strp/byakuya_kuchiki_by_housecakes_dey2pa5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjJhYWNjN2UtZGUwZC00ZjVkLWE3YzItMWM0N2I1ODZhZmIxXC9kZXkycGE1LWQ2YzhhYTdkLTk5NzEtNDNlZC05NDE1LWM3MzllYTkwNDc4OC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mZ2JsH3DDfI6JE8IScsjmOscXll_1GD6CqAvPZPwJvU",
    reiatsuColor: "reiatsu-purple",
  },
  {
    id: 5,
    name: "Kenpachi Zaraki",
    role: "Captain of 11th Division",
    zanpakuto: "Nozarashi",
    quote: "The only thing I want is to become stronger.",
    icon: Sword,
    imageSrc: "https://cdna.artstation.com/p/assets/images/images/061/729/656/large/little_warri0r-kenpachi-zaraki-bleach.jpg?1681483769",
    reiatsuColor: "reiatsu-red",
  },
  {
    id: 6,
    name: "Uryu Ishida",
    role: "Quincy",
    zanpakuto: "Heilig Bogen",
    quote: "I am the last Quincy.",
    icon: Shield,
    imageSrc: "http://static1.cbrimages.com/wordpress/wp-content/uploads/2020/07/5283367-1215691212-tumbl-Cropped.jpg",
    reiatsuColor: "reiatsu-gold",
  },
  {
    id: 7,
    name: "Tōshirō Hitsugaya",
    role: "Captain of 10th Division",
    zanpakuto: "Hyorinmaru",
    quote: "Bankai, Daiguren Hyorinmaru.",
    icon: Snowflake,
    imageSrc: "https://i.pinimg.com/originals/25/2f/0c/252f0cea752d50254c626ad03274320f.jpg",
    reiatsuColor: "reiatsu-blue",
  },
  {
    id: 8,
    name: "Sosuke Aizen",
    role: "Former Captain of 5th Division / Antagonist",
    zanpakuto: "Kyoka Suigetsu",
    quote: "Admiration is the furthest thing from understanding.",
    icon: Skull,
    imageSrc: "https://wallpapers.com/images/featured/aizen-pictures-te2bc2mv4wrztb6e.jpg",
    reiatsuColor: "reiatsu-purple",
  },
  {
    id: 9,
    name: "Kisuke Urahara",
    role: "Former Captain of 12th Division / Shopkeeper",
    zanpakuto: "Benihime",
    quote: "There’s no such thing as a perfect plan.",
    icon: Shield,
    imageSrc: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f349855e-89c7-490a-b53b-03a3912049e2/d219quv-28665b75-8108-4b06-b82c-0b3cb8393682.jpg/v1/fill/w_900,h_594,q_75,strp/kisuke_urahara_by_kitty_23_d219quv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk0IiwicGF0aCI6IlwvZlwvZjM0OTg1NWUtODljNy00OTBhLWI1M2ItMDNhMzkxMjA0OWUyXC9kMjE5cXV2LTI4NjY1Yjc1LTgxMDgtNGIwNi1iODJjLTBiM2NiODM5MzY4Mi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Sq4fl2t75g4egGaUO_SLu0XkFC6il3jmNPvqenGJVFc",
    reiatsuColor: "reiatsu-red",
  },
  {
    id: 10,
    name: "Mayuri Kurotsuchi",
    role: "Captain of 12th Division",
    zanpakuto: "Ashisogi Jizo",
    quote: "Perfection is me.",
    icon: Skull,
    imageSrc: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed2fa36f-a4b9-4dfc-b51f-92f388df4ca9/dfl2brv-1cf8b7a8-060a-4ca9-a8bf-d9a4e5ee3065.png/v1/fill/w_1280,h_960,q_80,strp/mayuri_kurotsuchi_by_leoleonomi_dfl2brv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvZWQyZmEzNmYtYTRiOS00ZGZjLWI1MWYtOTJmMzg4ZGY0Y2E5XC9kZmwyYnJ2LTFjZjhiN2E4LTA2MGEtNGNhOS1hOGJmLWQ5YTRlNWVlMzA2NS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4TV3KnAJlj4J21Nru9BdCMhMPiaEvfK57dPhn5WpjRo",
    reiatsuColor: "reiatsu-green",
  },
  {
    id: 11,
    name: "Genryūsai Shigekuni Yamamoto",
    role: "Former Head Captain of the Gotei 13",
    zanpakuto: "Ryujin Jakka",
    quote: "All things in the universe turn to ashes.",
    icon: Flame,
    imageSrc: "https://e0.pxfuel.com/wallpapers/361/482/desktop-wallpaper-genryuusai-shigekuni-yamamoto-from-bleach-genryusai-shigekuni-yamamoto.jpg",
    reiatsuColor: "reiatsu-orange",
  },
  {
    id: 12,
    name: "Shinji Hirako",
    role: "Captain of 5th Division",
    zanpakuto: "Sakanade",
    quote: "Invert their senses.",
    icon: User,
    imageSrc: "https://i.pinimg.com/736x/97/94/29/979429f547b8ac79c5d325d8b2011e40.jpg",
    reiatsuColor: "reiatsu-pink",
  },
  {
    id: 13,
    name: "Renji Abarai",
    role: "Lieutenant of 6th Division",
    zanpakuto: "Zabimaru",
    quote: "Roar, Zabimaru!",
    icon: Sword,
    imageSrc: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b4aed535-ee3d-450f-8bf6-577a4114dd55/d2qqvs2-b77ba657-842e-402c-b0f4-9c29dd444b8b.jpg/v1/fill/w_1025,h_780,q_70,strp/bleach___abarai_renji___dsc_by_washu_m_d2qqvs2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODgxIiwicGF0aCI6IlwvZlwvYjRhZWQ1MzUtZWUzZC00NTBmLThiZjYtNTc3YTQxMTRkZDU1XC9kMnFxdnMyLWI3N2JhNjU3LTg0MmUtNDAyYy1iMGY0LTljMjlkZDQ0NGI4Yi5qcGciLCJ3aWR0aCI6Ijw9MTE1OCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6RLkn6QIv0Ffic6vZyli1XyCe-FovY7uRTkT_NsBblE",
    reiatsuColor: "reiatsu-red",
  },
  {
    id: 14,
    name: "Orihime Inoue",
    role: "Human / Healer",
    zanpakuto: "Shun Shun Rikka",
    quote: "I reject!",
    icon: Heart,
    imageSrc: "https://i.pinimg.com/564x/10/17/b1/1017b1c100ee2e8e2d77efae9d141341.jpg",
    reiatsuColor: "reiatsu-orange",
  },
  {
    id: 15,
    name: "Yasutora Sado",
    role: "Human / Fullbringer",
    zanpakuto: "Brazo Derecha de Gigante",
    quote: "I’ll protect you with my life.",
    icon: Shield,
    imageSrc: "https://comicvine.gamespot.com/a/uploads/scale_medium/5/57845/1591637-chad.jpg",
    reiatsuColor: "reiatsu-brown",
  },
  {
    id: 16,
    name: "Yoruichi Shihouin",
    role: "Former Captain of 2nd Division / Stealth Force Commander",
    zanpakuto: "Shunko",
    quote: "Speed is my weapon.",
    icon: User,
    imageSrc: "https://i.pinimg.com/474x/f7/23/a6/f723a6e19bf2ca5a26b956bbe2fc3489.jpg",
    reiatsuColor: "reiatsu-purple",
  },
];
