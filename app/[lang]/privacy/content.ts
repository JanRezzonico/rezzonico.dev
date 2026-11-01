import type { LinkPart, PageContent, SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  lastUpdated: "2026-11-01",
  organizationName: "Jan Rezzonico - rezzonico.dev",
  privacyEmail: "privacy@rezzonico.dev",
  responseTime: "about 30 days",
};

const { organizationName, privacyEmail, responseTime } = siteConfig;
const mail: LinkPart = { href: `mailto:${privacyEmail}`, label: privacyEmail };

export const pageContent: PageContent = {
  title: "Privacy Policy",
  intro: `
  This policy describes how users' personal data is collected, used and protected.
  This policy is only available in English. If you need a translation or have questions about it,
  please use the contact information provided.
  `,

  sections: [
    {
      id: "controller",
      title: "Data controller",
      blocks: [
        { type: "paragraph", text: organizationName },
        { type: "paragraph", text: ["Contact: ", mail] },
      ],
    },

    {
      id: "data-categories",
      title: "Categories of data processed",
      blocks: [
        {
          type: "paragraph",
          text: "Depending on how you interact with the site, we collect different categories of personal data. These include:",
        },
        { type: "heading", text: "Data you provide voluntarily" },
        {
          type: "list",
          items: [
            "The website currently does not collect any personal data voluntarily provided by users.",
          ],
        },
        { type: "heading", text: "Technical data" },
        {
          type: "list",
          items: [
            "IP address",
            "Browser type and version",
            "Operating system",
            "Browsing, security and error logs",
            "Any other technical data collected and handled by the security provider, CDN or reverse proxy",
          ],
        },
        {
          type: "paragraph",
          text: "Note: if you do not use a certain features, you may not provide some of this data.",
        },
      ],
    },

    {
      id: "purposes",
      title: "Purposes of processing",
      blocks: [
        {
          type: "paragraph",
          text: "We use the data we collect for the following purposes:",
        },
        {
          type: "list",
          items: [
            "Maintaining and improving the site",
            "Preventing abuse, protecting data and investigating suspicious activity",
            "Complying with legal obligations",
          ],
        },
        { type: "heading", text: "Legal basis" },
        {
          type: "table",
          columns: ["Activity", "Legal basis", "Purpose"],
          rows: [
            [
              "Logging of IP addresses, errors and security events",
              "Legitimate interest",
              "Protecting data and infrastructure, and preventing abuse and cyber attacks.",
            ],
            [
              "Use of a CDN / reverse proxy",
              "Legitimate interest",
              "Protecting data and infrastructure, preventing abuse and attacks, and improving site performance.",
            ],
          ],
        },
      ],
    },

    {
      id: "cookies",
      title: "Cookies and tracking tools",
      blocks: [
        {
          type: "paragraph",
          text: "This site does not use cookies or any other tracking tools that collect personal data.",
        },
      ],
    },

    {
      id: "recipients",
      title: "Recipients and data sharing",
      blocks: [
        {
          type: "paragraph",
          text: "Your data may be shared with the following recipients:",
        },
        { type: "heading", text: "Hosting Provider" },
        {
          type: "paragraph",
          text: [
            "Hosting services are provided by Netlify. For more information, see the ",
            {
              href: "https://www.netlify.com/privacy/",
              label: "hosting provider's privacy policy",
            },
            ".",
          ],
        },
      ],
    },

    {
      id: "transfers",
      title: "International data transfers",
      blocks: [
        {
          type: "paragraph",
          text: "Netlify is based in the United States. Data may therefore be transferred to and processed in the United States.",
        },
      ],
    },

    {
      id: "retention",
      title: "Data retention",
      blocks: [
        {
          type: "paragraph",
          text: "Data is generally kept only for as long as needed for the purposes it was collected for, and then deleted. In detail:",
        },
        {
          type: "table",
          columns: ["Data", "Retention period"],
          rows: [
            [
              "Browsing, security and error logs used to protect the site and prevent abuse",
              "According to the provider's data retention policy.",
            ],
            [
              "Technical data processed by the security provider",
              "According to the provider's data retention policy.",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "You can request deletion of your data at any time by contacting us through the channels listed below.",
        },
      ],
    },

    {
      id: "rights",
      title: "Your rights",
      blocks: [
        {
          type: "paragraph",
          text: "Depending on your legal situation, you may have the following rights regarding your personal data:",
        },
        {
          type: "list",
          items: [
            [
              { bold: "Access" },
              ": the right to confirm whether your personal data is being processed and to receive a copy of it.",
            ],
            [
              { bold: "Rectification" },
              ": the right to correct inaccurate or incomplete personal data.",
            ],
            [
              { bold: "Erasure" },
              " (right to be forgotten): the right to request deletion of your personal data where permitted by law.",
            ],
            [
              { bold: "Restriction of processing" },
              ": the right to ask for processing to be temporarily suspended, for example while you verify accuracy or have objected.",
            ],
            [
              { bold: "Objection" },
              ": the right to object to processing based on legitimate interest.",
            ],
            [
              { bold: "Portability" },
              ": the right to receive your data in a structured, commonly used, machine-readable format and to transmit it to another controller where technically feasible.",
            ],
            [
              { bold: "Withdrawal of consent" },
              ": where processing is based on consent, the right to withdraw it at any time without affecting the lawfulness of earlier processing.",
            ],
            [
              { bold: "No automated decision-making" },
              ": the right not to be subject to decisions based solely on automated processing, including profiling, that have legal or similarly significant effects. (We do not use such processes.)",
            ],
            [
              { bold: "Complaint" },
              ": the right to lodge a complaint with the competent supervisory authority.",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "To exercise your rights, contact us through the channels listed below.",
        },
      ],
    },

    {
      id: "security",
      title: "Security measures",
      blocks: [
        {
          type: "paragraph",
          text: "We apply technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure or destruction.",
        },
        {
          type: "list",
          items: [
            [
              { bold: "Encryption" },
              ": data is encrypted to ensure confidentiality.",
            ],
            [
              { bold: "Access controls" },
              ": access to data is limited to authorized people.",
            ],
            [
              { bold: "Monitoring and logging" },
              ": access to and use of data is monitored and recorded.",
            ],
            [
              { bold: "Data minimization" },
              ": we collect and use only the data strictly needed for each purpose.",
            ],
            [
              { bold: "Security technologies" },
              ": our security provider protects against cyber attacks using firewalls, intrusion detection and encryption of data in transit.",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "No method of transmission or storage is completely secure, but we are committed to following best practices to protect your data.",
        },
      ],
    },

    {
      id: "profiling",
      title: "Automated profiling",
      blocks: [
        {
          type: "paragraph",
          text: "We do not use automated profiling algorithms that produce legal or similarly significant effects.",
        },
      ],
    },

    {
      id: "minors",
      title: "Children's data",
      blocks: [
        {
          type: "paragraph",
          text: "We do not offer services aimed specifically at minors and have no way of determining users' ages.",
        },
        {
          type: "paragraph",
          text: "If you believe a minor's personal data has been collected, please contact us so we can delete it.",
        },
      ],
    },

    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may change this privacy policy at any time. Changes take effect as soon as they are published on this site.",
        },
        {
          type: "paragraph",
          text: "The date of the last update is shown at the top of this policy.",
        },
        {
          type: "paragraph",
          text: "We recommend reviewing this policy periodically to stay informed of any changes.",
        },
      ],
    },

    {
      id: "contact",
      title: "Contact",
      blocks: [
        {
          type: "paragraph",
          text: "For any question, clarification or request about privacy or data handling, contact us at:",
        },
        { type: "paragraph", text: [mail] },
        { type: "paragraph", text: `Response time: ${responseTime}` },
      ],
    },
  ],
};
