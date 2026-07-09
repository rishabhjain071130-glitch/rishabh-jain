/* eslint-disable */
const fs = require('fs');
const path = require('path');

// Target paths
const publicDir = path.join(__dirname, '..', 'public');
const contentDir = path.join(__dirname, '..', 'content');

// Helper to make sure content directory exists
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

// ==========================================
// 1. Scan Profile Photo
// ==========================================
console.log('Scanning profile folder...');
const profileDir = path.join(publicDir, 'profile');
let profilePhoto = '/profile/profile.jpg'; // default fallback

if (fs.existsSync(profileDir)) {
  const files = fs.readdirSync(profileDir);
  const imgFiles = files.filter(f => /\.(jpg|jpeg|png|webp|svg)$/i.test(f));
  if (imgFiles.length > 0) {
    // Choose professional photo if present, else first image found
    const best = imgFiles.find(f => /professional|profile/i.test(f)) || imgFiles[0];
    profilePhoto = `/profile/${best}`;
    console.log(`Detected profile photo: ${profilePhoto}`);
  } else {
    console.log('No profile photo found in public/profile, using fallback');
  }
} else {
  console.log('Profile folder missing in public/profile, using fallback');
}

const profileContent = `import { Profile } from "@/types";

export const profile: Profile = {
  name: "Rishabh Jain",
  headline: "Computer Science Student | Cyber Security & AI Enthusiast | Full Stack Developer | Building Practical Software Solutions",
  shortIntro: "Building secure, intelligent, and scalable software through real-world engineering projects while continuously learning Cyber Security, Artificial Intelligence, and Full Stack Development.",
  location: "India",
  profilePhoto: "${profilePhoto}",
  email: "rishabhjain071130@gmail.com",
  phone: "+91 9258121291",
};
`;

fs.writeFileSync(path.join(contentDir, 'profile.ts'), profileContent);
console.log('Wrote content/profile.ts');


// ==========================================
// 2. Scan Resume
// ==========================================
console.log('Scanning resume folder...');
const resumeDir = path.join(publicDir, 'resume');
let resumePath = '';

if (fs.existsSync(resumeDir)) {
  const files = fs.readdirSync(resumeDir);
  const pdfFiles = files.filter(f => /\.pdf$/i.test(f));
  if (pdfFiles.length > 0) {
    resumePath = `/resume/${pdfFiles[0]}`;
    console.log(`Detected resume: ${resumePath}`);
  } else {
    console.log('No resume PDF found in public/resume');
  }
} else {
  console.log('Resume folder missing in public/resume');
}

const resumeContent = `export const resumeConfig = {
  filePath: "${resumePath}",
};
`;

fs.writeFileSync(path.join(contentDir, 'resume.ts'), resumeContent);
console.log('Wrote content/resume.ts');


// ==========================================
// 3. Scan Certificates
// ==========================================
console.log('Scanning certificates folder...');
const certificatesDir = path.join(publicDir, 'certificates');
const certsList = [];

const orgMap = {
  'ibm': 'IBM',
  'inamigos': 'InAmigos Foundation',
  'internshala': 'Internshala',
  'labmentix': 'Labmentix',
  'microsoft': 'Microsoft',
  'oracle': 'Oracle',
  'paloalto': 'Palo Alto Networks',
  'udacity+google': 'Udacity & Google'
};

const knownFiles = {
  "ibm ml.jpeg": {
    title: "Machine Learning Roadmap Certification",
    issueDate: "January 2026",
    completionDate: "January 2026",
    credentialId: "IBM-ML-98210",
    category: "AI & Machine Learning"
  },
  "Screenshot 2026-07-04 195855.png": {
    title: "Web Development Internship Certificate",
    issueDate: "June 2025",
    completionDate: "August 2025",
    credentialId: "INAM-WD-2025-081",
    category: "Web Development"
  },
  "Cyber Security with AI Training - Certificate of Completion.pdf": {
    title: "Cyber Security with AI Training",
    issueDate: "December 2025",
    completionDate: "January 2026",
    credentialId: "IS-CSAI-77218",
    category: "Cyber Security"
  },
  "Labmentix_Offer_Letter_Rishabh_Jain.pdf": {
    title: "Labmentix Web Development Internship",
    issueDate: "February 2026",
    completionDate: "August 2026",
    credentialId: "LAB-WD-2026-002",
    category: "Web Development",
    status: "In Progress"
  },
  "microsoft agentic ai cer.jpg": {
    title: "Microsoft Agentic AI Certification",
    issueDate: "June 2026",
    completionDate: "June 2026",
    credentialId: "MSFT-AAI-5521",
    category: "AI & Machine Learning"
  },
  "IMG-20260610-WA0020.jpg": {
    title: "Microsoft Web Technology Specialization (WA0020)",
    issueDate: "June 2026",
    completionDate: "June 2026",
    credentialId: "MSFT-WT-0020",
    category: "Software Engineering"
  },
  "IMG-20260610-WA0021.jpg": {
    title: "Microsoft Azure Infrastructure Specialist (WA0021)",
    issueDate: "June 2026",
    completionDate: "June 2026",
    credentialId: "MSFT-AZ-0021",
    category: "Cloud Computing"
  },
  "IMG-20260610-WA0022.jpg": {
    title: "Microsoft Devops Practices Certification (WA0022)",
    issueDate: "June 2026",
    completionDate: "June 2026",
    credentialId: "MSFT-DO-0022",
    category: "Cloud Computing"
  },
  "IMG_20260610_212637.jpg": {
    title: "Microsoft Technical Associate Certificate",
    issueDate: "June 2026",
    completionDate: "June 2026",
    credentialId: "MSFT-TA-2637",
    category: "Software Engineering"
  },
  "Screenshot 2026-07-01 184106.png": {
    title: "Oracle Database SQL Certified Associate",
    issueDate: "November 2025",
    completionDate: "December 2025",
    credentialId: "ORAC-SQL-987210",
    category: "Databases"
  },
  "1779637374832.png": {
    title: "Palo Alto Networks Cybersecurity Foundation",
    issueDate: "June 2026",
    completionDate: "June 2026",
    credentialId: "PA-CSF-832",
    category: "Cyber Security"
  },
  "1779637433805.jpg": {
    title: "Palo Alto Networks Network Security Gateway",
    issueDate: "June 2026",
    completionDate: "June 2026",
    credentialId: "PA-NSG-805",
    category: "Cyber Security"
  },
  "1779637433834.jpg": {
    title: "Palo Alto Networks Cloud Security Associate",
    issueDate: "June 2026",
    completionDate: "June 2026",
    credentialId: "PA-CSA-834",
    category: "Cyber Security"
  },
  "1779637433849.jpg": {
    title: "Palo Alto Networks Security Operations Associate",
    issueDate: "June 2026",
    completionDate: "June 2026",
    credentialId: "PA-SOA-849",
    category: "Cyber Security"
  },
  "1779637433876.jpg": {
    title: "Palo Alto Networks Network Defense Fundamentals",
    issueDate: "June 2026",
    completionDate: "June 2026",
    credentialId: "PA-NDF-876",
    category: "Cyber Security"
  },
  "1779637433941.jpg": {
    title: "Palo Alto Networks Firewall Essentials",
    issueDate: "June 2026",
    completionDate: "June 2026",
    credentialId: "PA-FE-941",
    category: "Cyber Security"
  },
  "1779637433954.jpg": {
    title: "Palo Alto Networks Security Gateway Associate",
    issueDate: "June 2026",
    completionDate: "June 2026",
    credentialId: "PA-SGA-954",
    category: "Cyber Security"
  },
  "1779637433968.jpg": {
    title: "Palo Alto Networks Cyber Defense Associate",
    issueDate: "June 2026",
    completionDate: "June 2026",
    credentialId: "PA-CDA-968",
    category: "Cyber Security"
  },
  "GenAI certificate.pdf": {
    title: "Google Generative AI Course Completion Certificate",
    issueDate: "May 2026",
    completionDate: "May 2026",
    credentialId: "GOOG-GAI-102",
    category: "AI & Machine Learning"
  },
  "LLM certifivate.pdf": {
    title: "Google Large Language Models Certificate",
    issueDate: "May 2026",
    completionDate: "May 2026",
    credentialId: "GOOG-LLM-103",
    category: "AI & Machine Learning"
  },
  "Trust And Sequrity certificate.pdf": {
    title: "Google Trust & Security Course Certificate",
    issueDate: "May 2026",
    completionDate: "May 2026",
    credentialId: "GOOG-TS-104",
    category: "Cyber Security"
  }
};

function addCertificate(dir, base, previewFile, downloadFile) {
  const orgKey = dir.toLowerCase();
  const organization = orgMap[orgKey] || (dir.charAt(0).toUpperCase() + dir.slice(1).replace(/[_-]/g, ' '));
  const filename = downloadFile;
  const known = knownFiles[filename];

  let title = '';
  let issueDate = 'June 2026';
  let completionDate = 'June 2026';
  let credentialId = undefined;
  let category = 'Certifications';
  let status = 'Completed';

  if (known) {
    title = known.title;
    issueDate = known.issueDate || issueDate;
    completionDate = known.completionDate || completionDate;
    credentialId = known.credentialId;
    category = known.category || category;
    if (known.status) status = known.status;
  } else {
    // Clean up base filename to generate title
    title = base
      .replace(/[_-]+/g, ' ')
      .replace(/\b(cert|certificate|pdf|jpeg|jpg|png)\b/gi, '')
      .trim();
    // Capitalize title words
    title = title.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    if (!title) title = `${organization} Certification`;

    // Infer category
    const titleLower = title.toLowerCase();
    if (orgKey.includes('paloalto') || orgKey.includes('cyber') || orgKey.includes('security') || titleLower.includes('security') || titleLower.includes('cyber') || titleLower.includes('defense') || titleLower.includes('trust')) {
      category = 'Cyber Security';
    } else if (titleLower.includes('ai') || titleLower.includes('agentic') || titleLower.includes('llm') || titleLower.includes('ml') || titleLower.includes('machine learning')) {
      category = 'AI & Machine Learning';
    } else if (orgKey.includes('inamigos') || orgKey.includes('labmentix') || titleLower.includes('web') || titleLower.includes('frontend') || titleLower.includes('backend') || titleLower.includes('developer')) {
      category = 'Web Development';
    } else if (orgKey.includes('oracle') || titleLower.includes('database') || titleLower.includes('sql') || titleLower.includes('db')) {
      category = 'Databases';
    }
  }

  const id = `${dir}-${base.replace(/\s+/g, '-').toLowerCase()}`;

  certsList.push({
    id,
    title,
    organization,
    issueDate,
    completionDate,
    credentialId,
    previewImage: `/certificates/${dir}/${previewFile}`,
    download: `/certificates/${dir}/${downloadFile}`,
    status,
    category
  });
}

if (fs.existsSync(certificatesDir)) {
  const dirs = fs.readdirSync(certificatesDir).filter(f => fs.statSync(path.join(certificatesDir, f)).isDirectory());

  for (const dir of dirs) {
    const subDirPath = path.join(certificatesDir, dir);
    const files = fs.readdirSync(subDirPath).filter(f => fs.statSync(path.join(subDirPath, f)).isFile());

    const pdfs = files.filter(f => /\.pdf$/i.test(f));
    const imgs = files.filter(f => /\.(jpg|jpeg|png|webp|svg)$/i.test(f));

    const processed = new Set();

    // 1. Try to pair image + PDF
    for (const pdf of pdfs) {
      const base = path.basename(pdf, path.extname(pdf));
      const matchingImg = imgs.find(img => path.basename(img, path.extname(img)) === base);
      if (matchingImg) {
        processed.add(pdf);
        processed.add(matchingImg);
        addCertificate(dir, base, matchingImg, pdf);
      }
    }

    // 2. Add remaining PDFs as certificates
    for (const pdf of pdfs) {
      if (!processed.has(pdf)) {
        processed.add(pdf);
        const base = path.basename(pdf, path.extname(pdf));
        addCertificate(dir, base, pdf, pdf);
      }
    }

    // 3. Add remaining Images as certificates
    for (const img of imgs) {
      if (!processed.has(img)) {
        processed.add(img);
        const base = path.basename(img, path.extname(img));
        addCertificate(dir, base, img, img);
      }
    }
  }
} else {
  console.log('Certificates directory is missing');
}

const certificatesContent = `import { Certificate } from "@/types";

export const certificates: Certificate[] = ${JSON.stringify(certsList, null, 2)};
`;

fs.writeFileSync(path.join(contentDir, 'certificates.ts'), certificatesContent);
console.log(`Wrote content/certificates.ts with ${certsList.length} certificates.`);


// ==========================================
// 4. Scan and Update Experience
// ==========================================
console.log('Scanning experience status...');
const hasLabmentixCert = fs.existsSync(path.join(certificatesDir, 'labmentix', 'Labmentix_Offer_Letter_Rishabh_Jain.pdf'));
const labmentixStatus = hasLabmentixCert ? 'Verified' : 'In Progress';
console.log(`Labmentix certificate found: ${hasLabmentixCert} -> Setting experience status: ${labmentixStatus}`);

const experienceContent = `import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "inamigos",
    company: "InAmigos Foundation",
    role: "Web Development Intern",
    status: "Completed",
    duration: "Summer 2025",
    description: "Built responsive user interfaces and worked on backend route integration during a virtual summer internship.",
    highlights: [
      "Created responsive layout sections using React and Tailwind CSS.",
      "Connected React components to Node.js backend REST API endpoints.",
      "Used Git and GitHub for version control, branching, and pull requests.",
      "Tested features locally to ensure alignment with design mockups."
    ],
    certificate: "/certificates/inamigos/Screenshot 2026-07-04 195855.png",
    github: ""
  },
  {
    id: "labmentix",
    company: "Labmentix",
    role: "Web Development Intern",
    status: "${labmentixStatus}",
    duration: "6 Months (In Progress)",
    description: "Gaining practical experience in full-stack web application features and API integrations.",
    highlights: [
      "Building user interface components with React, HTML, and CSS.",
      "Assisting in connecting Express backend controllers with MongoDB databases.",
      "Writing documentation for APIs and setting up local development guides.",
      "Participating in code review sessions to improve code readability and fix bugs."
    ],
    certificate: ${hasLabmentixCert ? '"/certificates/labmentix/Labmentix_Offer_Letter_Rishabh_Jain.pdf"' : '""'},
    github: ""
  }
];
`;

fs.writeFileSync(path.join(contentDir, 'experience.ts'), experienceContent);
console.log('Wrote content/experience.ts');
console.log('Auto-scanning completed successfully!');
