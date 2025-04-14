
export type BankaiType = {
  id: number;
  name: string;
  owner: string;
  description: string;
  shikai: string;
  bankai: string;
  imageSrc: string;
  reiatsuColor: string;
};

export const bankais: BankaiType[] = [
  {
    id: 1,
    name: "Zangetsu",
    owner: "Ichigo Kurosaki",
    description: "Ichigo's Tensa Zangetsu in TYBW fuses Hollow and Quincy power, unleashing devastating black Getsuga Tensho that can cleave through dimensions.",
    shikai: "Zangetsu",
    bankai: "Tensa Zangetsu",
    imageSrc: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=80",
    reiatsuColor: "reiatsu-red",
  },
  {
    id: 2,
    name: "Sode no Shirayuki",
    owner: "Rukia Kuchiki",
    description: "Rukia's Hakka no Togame in TYBW freezes everything to absolute zero, turning her body into ice and creating a beautiful realm of absolute stillness.",
    shikai: "Sode no Shirayuki",
    bankai: "Hakka no Togame",
    imageSrc: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=600&q=80",
    reiatsuColor: "reiatsu-blue",
  },
  {
    id: 3,
    name: "Senbonzakura",
    owner: "Byakuya Kuchiki",
    description: "Byakuya's Senbonzakura Kageyoshi in TYBW creates billions of tiny blades that move at his will, forming a dome of lethal cherry blossoms that cut enemies to pieces.",
    shikai: "Senbonzakura",
    bankai: "Senbonzakura Kageyoshi",
    imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    reiatsuColor: "reiatsu-purple",
  },
  {
    id: 4,
    name: "Nozarashi",
    owner: "Kenpachi Zaraki",
    description: "Kenpachi's Bankai transforms him into a demonic figure with immense destructive power, able to cut through anything with wild, uncontrollable force.",
    shikai: "Nozarashi",
    bankai: "Unnamed",
    imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    reiatsuColor: "reiatsu-red",
  },
];
