import { IUser } from "@/interfaces/IUser";

export const usersData: IUser[] = [
  {
    id: "1",
    name: "Agustín",
    surname: "Ancona",
    email: "agustinanconadev@gmail.com",
    idNumber: "ARG-2001-0001",
    phone: "+54 11 33792293",
    birthdate: "2001-02-12",
    location: "Buenos Aires",
    role: "user",
    status: "Activo",
    password: "$2b$10$abcd1234efgh5678ijkl",
    newsletter: true,
    updatedAt: "2024-02-28 14:30:00",
  },
  {
    id: "2",
    name: "Lautaro",
    surname: "Gando",
    email: "lautarogandodev@gmail.com",
    idNumber: "ARG-2001-0002",
    phone: "+54 11 32692245",
    birthdate: "2001-05-22",
    location: "Buenos Aires",
    role: "user",
    status: "Activo",
    password: "$2b$10$abcd5678efgh1234ijkl",
    newsletter: false,
    updatedAt: "2024-02-25 11:15:30",
  },
  {
    id: "3",
    name: "Rocio",
    surname: "Bonin",
    email: "rociobonindev@gmail.com",
    idNumber: "ARG-1999-0003",
    phone: "+54 11 38155148",
    birthdate: "1999-08-03",
    location: "Buenos Aires",
    role: "user",
    status: "Activo",
    password: "$2b$10$mnop5678qrst1234uvwx",
    newsletter: true,
    updatedAt: "2024-02-20 09:50:10",
  },
  {
    id: "4",
    name: "Jhon",
    surname: "Doe",
    email: "jhonDoe@gmail.com",
    idNumber: "ARG-1994-0004",
    phone: "+54 11 38155148",
    birthdate: "1994-08-03",
    location: "Buenos Aires",
    role: "carrier",
    status: "Desactivado",
    password: "$2b$10$ijkl5678mnop1234qrst",
    newsletter: false,
    updatedAt: "2024-01-15 18:22:45",
  },
  {
    id: "5",
    name: "Mariana",
    surname: "López",
    email: "mariana.lopez@gmail.com",
    idNumber: "ARG-1995-0005",
    phone: "+54 11 55556666",
    birthdate: "1995-06-15",
    location: "Córdoba",
    role: "user",
    status: "Activo",
    password: "$2b$10$uvwx5678yzab1234cdef",
    newsletter: true,
    updatedAt: "2024-02-27 16:10:20",
  },
  {
    id: "6",
    name: "Carlos",
    surname: "Rodríguez",
    email: "carlos.rodriguez@gmail.com",
    idNumber: "ARG-1988-0006",
    phone: "+54 11 44447777",
    birthdate: "1988-09-20",
    location: "Mendoza",
    role: "admin",
    status: "Desactivado",
    password: "$2b$10$cdef5678ghij1234klmn",
    newsletter: false,
    updatedAt: "2024-01-05 08:00:15",
  },
  {
    id: "7",
    name: "Sofía",
    surname: "Méndez",
    email: "sofia.mendez@gmail.com",
    idNumber: "ARG-2000-0007",
    phone: "+54 11 22223333",
    birthdate: "2000-12-05",
    location: "Rosario",
    role: "user",
    status: "Desactivado",
    password: "$2b$10$klmn5678opqr1234stuv",
    newsletter: true,
    updatedAt: "2024-01-28 12:45:55",
  },
  {
    id: "8",
    name: "Fernando",
    surname: "García",
    email: "fernando.garcia@gmail.com",
    idNumber: "ARG-1985-0008",
    phone: "+54 11 99998888",
    birthdate: "1985-07-30",
    location: "Salta",
    role: "carrier",
    status: "Activo",
    password: "$2b$10$wxyz5678abcd1234efgh",
    newsletter: false,
    updatedAt: "2024-02-18 20:12:40",
  },
  {
    id: "9",
    name: "Camila",
    surname: "Fernández",
    email: "camila.fernandez@gmail.com",
    idNumber: "ARG-1997-0009",
    phone: "+54 11 77776666",
    birthdate: "1997-03-18",
    location: "Neuquén",
    role: "user",
    status: "Desactivado",
    password: "$2b$10$ijkl5678mnop1234qrst",
    newsletter: true,
    updatedAt: "2024-01-30 15:30:05",
  },
  {
    id: "10",
    name: "Esteban",
    surname: "Ramírez",
    email: "esteban.ramirez@gmail.com",
    idNumber: "ARG-1992-0010",
    phone: "+54 11 66665555",
    birthdate: "1992-11-25",
    location: "Tucumán",
    role: "admin",
    status: "Desactivado",
    password: "$2b$10$qrst5678uvwx1234yzab",
    newsletter: false,
    updatedAt: "2024-02-10 17:40:30",
  },
];

export default usersData;
