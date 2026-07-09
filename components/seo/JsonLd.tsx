import * as React from "react";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export const JsonLd: React.FC = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rishabhjain.dev";

  // 1. Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    "name": profile.name,
    "url": siteUrl,
    "email": profile.email,
    "telephone": profile.phone,
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": profile.location,
      },
    },
    "jobTitle": "Computer Science Student & Full Stack Developer",
    "description": profile.shortIntro,
    "image": `${siteUrl}${profile.profilePhoto}`,
    "sameAs": [
      "https://github.com/rishabhjain071130-glitch",
      "https://www.linkedin.com/in/rishabh-jain-40079a396/",
    ],
  };

  // 2. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "name": `${profile.name} | CS Student, Cyber Security & AI Enthusiast`,
    "url": siteUrl,
    "description": profile.shortIntro,
    "publisher": {
      "@id": `${siteUrl}/#person`,
    },
  };

  // 3. ProfilePage Schema
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile`,
    "url": siteUrl,
    "mainEntity": {
      "@id": `${siteUrl}/#person`,
    },
  };

  // 4. Projects Schema (ItemList of SoftwareApplication/CreativeWork)
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Projects by ${profile.name}`,
    "description": "A showcase of engineering case studies, software applications, and technical builds.",
    "url": `${siteUrl}/#projects`,
    "numberOfItems": projects.length,
    "itemListElement": projects.map((project, index) => {
      const isApp =
        project.category.toLowerCase().includes("application") ||
        project.category.toLowerCase().includes("ai") ||
        project.category.toLowerCase().includes("web");
      return {
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": isApp ? "SoftwareApplication" : "CreativeWork",
          "name": project.title,
          "description": project.description,
          "applicationCategory": isApp ? "DeveloperApplication" : undefined,
          "operatingSystem": isApp ? "All" : undefined,
          "url": project.liveDemo || `${siteUrl}/#projects`,
          "codeRepository": project.github || undefined,
          "creator": {
            "@id": `${siteUrl}/#person`,
          },
          "offers": isApp
            ? {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
              }
            : undefined,
        },
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
    </>
  );
};
