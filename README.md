# CarePulse

**Your Health, Our Priority**  
CarePulse is a full-stack B2B healthcare management platform aimed at reducing OPD congestion, streamlining hospital workflows, and improving patient care through real-time data and smart digital tools.

---

## Features

- Doctor and Test Booking
- Real-time Bed Status
- Organised Health Records with auto-upload of reports
- Inventory & Machinery Tracking for hospitals
- Smart Admin Dashboard for real-time insights
- Queue Management and Scheduling
- Modular design for patients and hospitals
- Scalable, privacy-compliant infrastructure
- Future plans include: Ambulance Integration, AI-based Appointment Suggestions, Govt. Tie-ups

---

## Tech Stack

- **Frontend**: ReactJS, Next.js, TypeScript, TailwindCSS
- **Backend**: Appwrite
- **Authentication**: Clerk
- **Monitoring**: Sentry
- **Hosting**: Vercel

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Aftab48/carepulse.app.git
cd carepulse
```

### 2. Install Dependencies

Make sure you have Node.js v18+ and npm installed.

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file at the root and add your credentials:

```env
NEXT_PUBLIC_ENDPOINT=your-appwrite-endpoint
PROJECT_ID=your-appwrite-project-id
API_KEY=your-clerk-publishable-key
DATABASE_ID=your-appwrite-db-id
PATIENT_COLLECTION_ID=your-appwrite-patient-collection-id
DOCTOR_COLLECTION_ID=your-appwrite-doctor-collection-id
APPOINTMENT_COLLECTION_ID=your-appwrite-appointment-collection-id
NEXT_PUBLIC_BUCKET_ID=your-appwrite-bucket-id
NEXT_PUBLIC_ADMIN_PASSKEY=passkey-for-admin-access
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn **(optional)**
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Project Structure

```
/components    → Reusable UI Components
/pages         → App Routes (Next.js routing)
/styles        → TailwindCSS + Global Styles
/lib           → Appwrite/Clerk Utility Functions
/public        → Static Assets
```

---

## Deployment

We recommend deploying via **Vercel**:

1. Connect the GitHub repo to Vercel
2. Set environment variables in the dashboard
3. Deploy!

---

## Contributing

We welcome pull requests!

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

---

## License

This project is licensed under the MIT License.

---

## Authors

- Aftab Alam : https://github.com/Aftab48 → mdalam4884@gmail.com
- Ayushi Mandal : https://github.com/ayushi-stacks → ayushistacks@gmail.com
- Team **Pair-a-dox**
  

---

## Live App

[https://app-carepulse.vercel.app](https://app-carepulse.vercel.app)

```

---

Let me know if you want a separate `CONTRIBUTING.md`, `LICENSE`, or deployment guide for Appwrite setup too.
```
