export const CLINIC_NAME = "Armoor Skin & Hair Clinic";
export const DOCTOR_NAME = "Dr. Raghavendhra";
export const QUALIFICATION = "MD, DVL";
export const SPECIALTY = "Dermatologist";

export const PHONE = "9603 752 752";
export const PHONE_TEL = "+919603752752";
export const WHATSAPP = "919603752752";

export const ADDRESS = {
  street: "Opposite VR Hospital, Beside LK Hospital, Mahalaxmi Colony",
  city: "Armoor",
  district: "Nizamabad",
  state: "Telangana",
  country: "India",
  full: "Opposite VR Hospital, Beside LK Hospital, Mahalaxmi Colony, Armoor, Telangana, India",
};

export const HOURS = {
  weekday: "11:00 AM – 6:00 PM",
  weekdayDays: "Monday – Saturday",
  sunday: "Closed",
};

export const COORDINATES = {
  latitude: 18.796,
  longitude: 78.289,
};

export const MAP_LINK = "https://maps.app.goo.gl/fKuVMvEnVS5Pjtne8?g_st=aw";

export const SITE_URL = "https://armoorskinclinic.com";
export const SITE_NAME = CLINIC_NAME;
export const SITE_DESCRIPTION =
  "Expert dermatology care for acne, hair loss, psoriasis, eczema, fungal infections, pigmentation, and more by Dr. Raghavendhra MD, DVL in Armoor, Telangana.";

export const SOCIAL = {
  facebook: "https://www.facebook.com/people/Armoor-Skin-and-Hair-Clinic/61591523830492/",
  instagram: "https://www.instagram.com/armoorskinclinic?utm_source=qr",
  twitter: "https://twitter.com/armoorskinclinic",
};

export interface Mandal {
  name: string;
  villages: string[];
}

export const MANDALS: Mandal[] = [
  {
    name: "Armoor",
    villages: [
      "Alur",
      "Amdapur",
      "Ankapur",
      "Armur (M + OG)",
      "Bardipur",
      "Chepur",
      "Degaon",
      "Fathepur",
      "Gaggupalle",
      "Govindpet",
      "Issapalle",
      "Khanapur",
      "Komanpalle",
      "Kotha Armur",
      "Macherla",
      "Magdi",
      "Mamidipalle (OG)",
      "Manthani",
      "Merdepalle",
      "Perkit (OG)",
      "Pipri",
      "Rampur",
      "Surbiriyal",
    ],
  },
  {
    name: "Balkonda",
    villages: [
      "Balkonda",
      "Bodepalle",
      "Bussapur",
      "Chakeriyal",
      "Chittapur",
      "Doodgaon",
      "Jalalpur",
      "Keshapur",
      "Kisannagar",
      "Kodecherla",
      "Kojan Kothur",
      "Kothapalle",
      "Mendora",
      "Mukpal",
      "Nagampet",
      "Nagapur",
      "Nallur",
      "Ratnapur",
      "Renjarla",
      "Sangam",
      "Savel",
      "Soanpet (CT)",
      "Vannel Bashirabad",
      "Velgatur",
      "Vempalle",
      "Venchariyal",
    ],
  },
  {
    name: "Bheemgal",
    villages: [
      "Babanagar",
      "Babapur",
      "Bachanpalle",
      "Bejjora",
      "Bheemgal",
      "Changal",
      "Devakkapet",
      "Devan Palle",
      "Gangarai",
      "Gongappul",
      "Jagriyal",
      "Karepalle",
      "Kupkal",
      "Lingapurchouth",
      "Mendhora",
      "Muchkur",
      "Pallikonda",
      "Pedda Bheemgal",
      "Pipri",
      "Puranipet",
      "Rahathnagar",
      "Salampur",
      "Sikandrapur",
      "Thallapalle",
    ],
  },
  {
    name: "Mortad",
    villages: [
      "Battapur",
      "Dharmora",
      "Domchanda",
      "Donkal",
      "Donpal",
      "Gumeriyal",
      "Mortad",
      "Palem",
      "Ramannapet",
      "Shetpalle",
      "Sunkat",
      "Tadla Rampur",
      "Tadpakal",
      "Thimmapur",
      "Thurat",
      "Vaddiyat",
      "Yergatla",
    ],
  },
  {
    name: "Kammarpalle",
    villages: [
      "Basheerabad",
      "Belur",
      "Choutupalle",
      "Dammannapet",
      "Dammanpet (Ameernagar)",
      "Gudilingapur",
      "Guntepalle",
      "Hasakothur",
      "Inayat Nagar",
      "Kammar Palle",
      "Konapur",
      "Konasamandar",
      "Lakshmapur",
      "Manal",
      "Nagapur",
      "Narsapur",
      "Reachpalle",
      "Uploor",
    ],
  },
  {
    name: "Mupkal",
    villages: [
      "Mupkal",
      "Nalloor",
      "Renjarla",
      "Vempally",
      "Kothapalli",
      "Nagampet",
      "Venchiryal",
    ],
  },
  {
    name: "Nizamabad",
    villages: ["Nizamabad"],
  },
];

export const MANDAL_NAMES = MANDALS.map((m) => m.name);

export const ALL_VILLAGES = MANDALS.flatMap((m) => m.villages);

export interface AreaServed {
  name: string;
  isLocal?: boolean;
}

export const AREAS_WE_SERVE: AreaServed[] = [
  { name: "Armoor", isLocal: true },
  { name: "Balkonda" },
  { name: "Bheemgal" },
  { name: "Mortad" },
  { name: "Kammarpalle" },
  { name: "Mupkal" },
  { name: "Nizamabad" },
];
