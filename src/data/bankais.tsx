
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
    imageSrc: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/318df4da-1f4d-472c-84b4-74c73f492824/dew2wl5-2e068d75-3e0d-4d71-a0f6-1b4aeb856ee9.jpg/v1/fill/w_1192,h_670,q_70,strp/byakuya_by_waywardheronstairs_dew2wl5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMzE4ZGY0ZGEtMWY0ZC00NzJjLTg0YjQtNzRjNzNmNDkyODI0XC9kZXcyd2w1LTJlMDY4ZDc1LTNlMGQtNGQ3MS1hMGY2LTFiNGFlYjg1NmVlOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.pM2O_N6Tv81kbwRh60KBvOXLRh-R-r5s58_9_yYLCR8",
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
