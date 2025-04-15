
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
    imageSrc: "https://example.com/zangetsu.jpg",
    reiatsuColor: "reiatsu-red",
  },
  {
    id: 2,
    name: "Sode no Shirayuki",
    owner: "Rukia Kuchiki",
    description: "Rukia's Hakka no Togame in TYBW freezes everything to absolute zero, turning her body into ice and creating a beautiful realm of absolute stillness.",
    shikai: "Sode no Shirayuki",
    bankai: "Hakka no Togame",
    imageSrc: "https://staticg.sportskeeda.com/editor/2022/10/0fa7b-16657221703104-1920.jpg",
    reiatsuColor: "reiatsu-blue",
  },
  {
    id: 3,
    name: "Senbonzakura",
    owner: "Byakuya Kuchiki",
    description: "Byakuya's Senbonzakura Kageyoshi creates billions of tiny blades that move at his will, forming a dome of lethal cherry blossoms that cut enemies to pieces.",
    shikai: "Senbonzakura",
    bankai: "Senbonzakura Kageyoshi",
    imageSrc: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/318df4da-1f4d-472c-84b4-74c73f492824/dew2wl5-2e068d75-3e0d-4d71-a0f6-1b4aeb856ee9.jpg/v1/fill/w_1192,h_670,q_70,strp/byakuya_by_waywardheronstairs_dew2wl5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMzE4ZGY0ZGEtMWY0ZC00NzJjLTg0YjQtNzRjNzNmNDkyODI0XC9kZXcyd2w1LTJlMDY4ZDc1LTNlMGQtNGQ3MS1hMGY2LTFiNGFlYjg1NmVlOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.pM2O_N6Tv81kbwRh60KBvOXLRh-R-r5s58_9_yYLCR8",
    reiatsuColor: "reiatsu-purple",
  },
  {
    id: 4,
    name: "Katen Kyokotsu",
    owner: "Shunsui Kyoraku",
    description: "Shunsui's Katen Kyokotsu: Karamatsu Shinju creates a theatrical stage where reality bends, forcing enemies into deadly games.",
    shikai: "Katen Kyokotsu",
    bankai: "Katen Kyokotsu: Karamatsu Shinju",
    imageSrc: "https://preview.redd.it/anime-original-manga-or-the-colored-manga-which-one-do-you-v0-k2d8244kfc4e1.jpg?width=640&crop=smart&auto=webp&s=67d599910b25ee7487d9c070aea33dcae9a62848",
    reiatsuColor: "reiatsu-pink",
  },
  
  {
    id: 5,
    name: "Hyorinmaru",
    owner: "Tōshirō Hitsugaya",
    description: "Hitsugaya's Daiguren Hyorinmaru summons a massive ice dragon, freezing everything in its path and controlling the weather.",
    shikai: "Hyorinmaru",
    bankai: "Daiguren Hyorinmaru",
    imageSrc: "https://nerz.jp/wp-content/uploads/2022/10/07261d33a2ce8454471b1b361808fb72.jpg",
    reiatsuColor: "reiatsu-blue",
  },
  {
    id: 6,
    name: "Ashisogi Jizo",
    owner: "Mayuri Kurotsuchi",
    description: "Mayuri's Konjiki Ashisogi Jizo transforms into a giant, poisonous caterpillar that can paralyze and kill enemies with its venom.",
    shikai: "Ashisogi Jizo",
    bankai: "Konjiki Ashisogi Jizo",
    imageSrc: "https://i.pinimg.com/originals/8d/89/62/8d89622c33e97a70aac0dec67f773eed.jpg",
    reiatsuColor: "reiatsu-green",
  },
  {
    id: 7,
    name: "Suzumebachi",
    owner: "Soi Fon",
    description: "Soi Fon's Jakuho Raikoben is a massive missile launcher that can obliterate targets with a single, devastating blast.",
    shikai: "Suzumebachi",
    bankai: "Jakuho Raikoben",
    imageSrc: "https://i.pinimg.com/originals/97/77/d5/9777d5d3e94da76dcbca48fa0746aa67.jpg",
    reiatsuColor: "reiatsu-yellow",
  },
  {
    id: 8,
    name: "Shinso",
    owner: "Gin Ichimaru",
    description: "Gin's Kamishini no Yari extends at lightning speed, piercing through enemies with lethal precision and leaving a trail of poison.",
    shikai: "Shinso",
    bankai: "Kamishini no Yari",
    imageSrc: "https://i.pinimg.com/originals/54/64/f5/5464f5c2755c6a972e69cb85009b9943.jpg",
    reiatsuColor: "reiatsu-silver",
  },
  {
    id: 9,
    name: "Suzumushi",
    owner: "Kaname Tosen",
    description: "Tosen's Suzumushi Tsuishiki: Enma Korogi creates a massive dome that deprives enemies of their senses, leaving them helpless.",
    shikai: "Suzumushi",
    bankai: "Suzumushi Tsuishiki: Enma Korogi",
    imageSrc: "https://i.pinimg.com/originals/61/54/ac/6154ac4deec53e14af80dd2da7d55c9e.jpg",
    reiatsuColor: "reiatsu-black",
  },
  {
    id: 10,
    name: "Tenken",
    owner: "Sajin Komamura",
    description: "Komamura's Kokujo Tengen Myo'o summons a giant armored warrior that mirrors his movements, delivering crushing blows.",
    shikai: "Tenken",
    bankai: "Kokujo Tengen Myo'o",
    imageSrc: "https://i.pinimg.com/originals/3d/e3/7c/3de37c6c4d01cea9ecfdbc3aaa7a394b.jpg",
    reiatsuColor: "reiatsu-brown",
  },
  {
    id: 11,
    name: "Nozarashi",
    owner: "Kenpachi Zaraki",
    description: "Kenpachi's Bankai transforms him into a demonic figure with immense destructive power, able to cut through anything with wild, uncontrollable force.",
    shikai: "Nozarashi",
    bankai: "Unnamed",
    imageSrc: "https://c.wallhere.com/photos/19/0c/anime_Bleach_Zaraki_Kenpachi_bankai_manga-1754419.jpg!d",
    reiatsuColor: "reiatsu-red",
  },
  {
    id: 12,
    name: "Sakanade",
    owner: "Shinji Hirako",
    description: "Shinji's Sakashima Yokoshima Happofusagari reverses the perception of friend and foe, causing chaos among enemies.",
    shikai: "Sakanade",
    bankai: "Sakashima Yokoshima Happofusagari",
    imageSrc: "https://i.pinimg.com/originals/d0/73/39/d0733929f1e0e82856c1dba2c47b284b.jpg",
    reiatsuColor: "reiatsu-orange",
  },
  {
    id: 13,
    name: "Tachikaze",
    owner: "Kensei Muguruma",
    description: "Kensei's Tekken Tachikaze enhances his fists with explosive energy, delivering devastating punches.",
    shikai: "Tachikaze",
    bankai: "Tekken Tachikaze",
    imageSrc: "https://i.pinimg.com/originals/84/8e/96/848e96d1e696fdb54b3c48b6c5e6f1e6.jpg",
    reiatsuColor: "reiatsu-green",
  },
  {
    id: 14,
    name: "Kinshara",
    owner: "Rose Otoribashi",
    description: "Rose's Kinshara Butodan uses music to create illusions and manipulate sound waves for attacks.",
    shikai: "Kinshara",
    bankai: "Kinshara Butodan",
    imageSrc: "https://i.pinimg.com/originals/20/ba/e9/20bae9c726f415aead0d7e5b84cffbeb.jpg",
    reiatsuColor: "reiatsu-yellow",
  },
  {
    id: 15,
    name: "Benihime",
    owner: "Kisuke Urahara",
    description: "Urahara's Kannonbiraki Benihime Aratame can restructure anything it touches, healing or destroying with precision.",
    shikai: "Benihime",
    bankai: "Kannonbiraki Benihime Aratame",
    imageSrc: "https://i.pinimg.com/originals/b3/47/43/b347430c3a4fca926a4a0e2c38ba6e65.jpg",
    reiatsuColor: "reiatsu-red",
  },
  {
    id: 16,
    name: "Zabimaru",
    owner: "Renji Abarai",
    description: "Renji's Soo Zabimaru transforms into a massive skeletal snake, capable of crushing enemies with its powerful jaws.",
    shikai: "Zabimaru",
    bankai: "Soo Zabimaru",
    imageSrc: "https://i.pinimg.com/originals/68/44/cb/6844cba5f0341fe9f8c395e60c03a1e7.jpg",
    reiatsuColor: "reiatsu-red",
  },
  {
    id: 17,
    name: "Hozukimaru",
    owner: "Ikkaku Madarame",
    description: "Ikkaku's Ryumon Hozukimaru consists of three large blades connected by chains, spinning like a buzzsaw to slice through foes.",
    shikai: "Hozukimaru",
    bankai: "Ryumon Hozukimaru",
    imageSrc: "https://i.pinimg.com/originals/7d/21/a1/7d21a1de2f19a7e5feab2949cc1e2613.jpg",
    reiatsuColor: "reiatsu-orange",
  },
  {
    id: 18,
    name: "Gonryomaru",
    owner: "Chojiro Sasakibe",
    description: "Chojiro's Koko Gonryo Rikyu summons lightning storms, striking enemies with bolts of electricity.",
    shikai: "Gonryomaru",
    bankai: "Koko Gonryo Rikyu",
    imageSrc: "https://i.pinimg.com/originals/c9/bb/9e/c9bb9e50d22be11e47df84eb7f2f4efa.jpg",
    reiatsuColor: "reiatsu-yellow",
  },
];
