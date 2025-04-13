export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "Passport",
  "Pan Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};

export const Menudata = [
  {
    title: "Call an Ambulance",
    image: "ph:ambulance",
  },
  {
    title: "OPD Booking and Reports",
    image: "carbon:report",
  },
  {
    title: "Medicine Delivery",
    image: "game-icons:medicine-pills",
  },
  {
    title: "Doctors Availability",
    image: "healthicons:doctor-male",
  },
  {
    title: "Bed Availability",
    image: "mdi:bed",
  },
  {
    title: "Book a Medical Test",
    image: "bx:injection",
  },
];

export const AdminMenudata = [
  {
    title: "Requested Appointments and Lab Tests",
    image: "carbon:report",
  },
  {
    title: "Inventory Management",
    image: "bx:injection",
  },
];

export const DoctorsData = [
  {
    image: "/assets/images/dr-green.png",
    doctor: "Dr. John Green",
    hospital: "CrossRoads Hospital",
    speciality: "Pediatrician",
    days: "Monday, Tuesday, Thursday",
    timings: "5:30PM - 8:00PM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-cameron.png",
    doctor: "Dr. Leila Cameron",
    hospital: "Little River Hospital",
    speciality: "ENT",
    days: "Monday, Wednesday, Friday",
    timings: "6:00PM - 7:30PM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-livingston.png",
    doctor: "Dr. David Livingston",
    hospital: "United Hospital",
    speciality: "ENT",
    days: "All Weekdays",
    timings: "8:30AM - 10:00AM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-peter.png",
    doctor: "Dr. Evan Peter",
    hospital: "Hopevale Hospital",
    speciality: "Gastroenterologists",
    days: "Saturday, Sunday",
    timings: "7:00PM - 8:30PM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-powell.png",
    doctor: "Dr. Jane Powell",
    hospital: "Morningside General Hospital",
    speciality: "General",
    days: "Tuesday, Thursday",
    timings: "7:30AM - 10:00AM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-remirez.png",
    doctor: "Dr. Alex Ramirez",
    hospital: "CrossRoads Hospital",
    speciality: "Orthopedic",
    days: "Monday, Tuesday, Thursday",
    timings: "5:30PM - 8:00PM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-lee.png",
    doctor: "Dr. Jasmine Lee",
    hospital: "United Hospital",
    speciality: "General",
    days: "Saturday, Sunday",
    timings: "8:30AM - 10:00AM",
  },
  {
    image: "/assets/images/dr-cruz.png",
    doctor: "Dr. Alyana Cruz",
    hospital: "Morningside General Hospital",
    speciality: "Pediatrician",
    days: "All Weekdays",
    timings: "7:00PM - 8:30PM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-sharma.png",
    doctor: "Dr. Hardik Sharma",
    hospital: "Hopevale Hospital",
    speciality: "Orthopedic",
    days: "Tuesday, Thursday",
    timings: "7:30AM - 10:00AM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-green.png",
    doctor: "Dr. John Green",
    hospital: "CrossRoads Hospital",
    speciality: "Pediatrician",
    days: "Monday, Tuesday, Thursday",
    timings: "5:30PM - 8:00PM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-cameron.png",
    doctor: "Dr. Leila Cameron",
    hospital: "Little River Hospital",
    speciality: "ENT",
    days: "Monday, Wednesday, Friday",
    timings: "6:00PM - 7:30PM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-livingston.png",
    doctor: "Dr. David Livingston",
    hospital: "United Hospital",
    speciality: "ENT",
    days: "All Weekdays",
    timings: "8:30AM - 10:00AM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-peter.png",
    doctor: "Dr. Evan Peter",
    hospital: "Hopevale Hospital",
    speciality: "Gastroenterologists",
    days: "Saturday, Sunday",
    timings: "7:00PM - 8:30PM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-powell.png",
    doctor: "Dr. Jane Powell",
    hospital: "Morningside General Hospital",
    speciality: "General",
    days: "Tuesday, Thursday",
    timings: "7:30AM - 10:00AM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-remirez.png",
    doctor: "Dr. Alex Ramirez",
    hospital: "CrossRoads Hospital",
    speciality: "Orthopedic",
    days: "Monday, Tuesday, Thursday",
    timings: "5:30PM - 8:00PM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-lee.png",
    doctor: "Dr. Jasmine Lee",
    hospital: "United Hospital",
    speciality: "General",
    days: "Saturday, Sunday",
    timings: "8:30AM - 10:00AM",
  },
  {
    image: "/assets/images/dr-cruz.png",
    doctor: "Dr. Alyana Cruz",
    hospital: "Morningside General Hospital",
    speciality: "Pediatrician",
    days: "All Weekdays",
    timings: "7:00PM - 8:30PM",
    color: "#000",
  },
  {
    image: "/assets/images/dr-sharma.png",
    doctor: "Dr. Hardik Sharma",
    hospital: "Hopevale Hospital",
    speciality: "Orthopedic",
    days: "Tuesday, Thursday",
    timings: "7:30AM - 10:00AM",
    color: "#000",
  },
];

export const BedsData = [
  {
    hospital: "CrossRoads Hospital",
    status: "Yes",
    beds: 18,
  },
  {
    hospital: "Little River Hospital",
    status: "Yes",
    beds: 14,
  },
  {
    hospital: "United Hospital",
    status: "No",
    beds: 0,
  },
  {
    hospital: "Hopevale Hospital",
    status: "Yes",
    beds: 7,
  },
  {
    hospital: "Morningside General Hospital",
    status: "No",
    beds: 0,
  },
  {
    hospital: "Citrus Community Hospital",
    status: "Yes",
    beds: 18,
  },
  {
    hospital: "Lakeside Hospital",
    status: "Yes",
    beds: 14,
  },
  {
    hospital: "Rosemary Medical Clinic",
    status: "No",
    beds: 0,
  },
  {
    hospital: "Silverwood Hospital",
    status: "Yes",
    beds: 7,
  },
  {
    hospital: "Grand View Clinic",
    status: "No",
    beds: 0,
  },
];

export const TestsData = [
  {
    test: "Thyroid Profile (t 3, T 4, Tsh)",
    price: "₹ 2070",
  },
  {
    test: "Fasting Blood Sugar (fbs)",
    price: "₹ 310",
  },
  {
    test: "Post Prandial Blood Sugar (ppbs)",
    price: "₹ 310",
  },
  {
    test: "Random Blood Sugar (rbs)",
    price: "₹ 280",
  },
  {
    test: "Lipid Profile (chol ,trig ,hdl ,ldl ,vldl)",
    price: "₹ 1850",
  },
  {
    test: "Complete Blood Count (cbc)",
    price: "₹ 790",
  },
  {
    test: "Liver Function Test (lft )",
    price: "₹ 950",
  },
];

export const MockTests = [
  {
    hospital: "CrossRoads Hospital",
    test: "Thyroid Profile (t 3, T 4, Tsh)",
    schedule: "15/09/24",
    report: "report",
    status: "scheduled",
  },
  {
    hospital: "Lakeside Hospital",
    test: "Fasting Blood Sugar (fbs)",
    schedule: "15/09/24",
    report: "report",
    status: "scheduled",
  },
  {
    hospital: "Rosemary Medical Clinic",
    test: "Post Prandial Blood Sugar (ppbs)",
    schedule: "22/08/24",
    report: "report",
    status: "cancelled",
  },
  {
    hospital: "Silverwood Hospital",
    test: "Random Blood Sugar (rbs)",
    schedule: "20/08/24",
    report: "report",
    status: "completed",
  },
  {
    hospital: "Grand View Clinic",
    test: "Complete Blood Count (cbc)",
    schedule: "14/08/24",
    report: "report",
    status: "completed",
  },
];
