import logo from "../../public/images/logo.png";

export const FooterMock = {
  FooterMainContent: {
    Logo: {
      src: logo,
      alt: "Footer Logo",
    },
    Description:
      "Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.",
    Icons: [
      {
        Icon: "facebook",
        Link: "https://www.facebook.com",
      },
      {
        Icon: "twitter",
        Link: "https://www.twitter.com",
      },
      {
        Icon: "linkedin",
        Link: "https://www.linkedin.com/in",
      },
    ],
  },
  Department: { Heading: "Department" },
  DepartmentList: [
    {
      Name: "Surgery",
      Link: "/services",
    },
    {
      Name: "Woman's Health",
      Link: "/services",
    },
    {
      Name: "Radiology",
      Link: "/services",
    },
    {
      Name: "Cardioc",
      Link: "/services",
    },
    {
      Name: "Medicine",
      Link: "/services",
    },
  ],
  Support: { Heading: "Support" },
  SupprtList: [
    {
      Name: "Terms & Conditions",
      Link: "/services",
    },
    {
      Name: "Privacy Policy",
      Link: "/services",
    },
    {
      Name: "Company Support",
      Link: "/services",
    },
    {
      Name: "FAQuestions",
      Link: "/services",
    },
    {
      Name: "Company Licence",
      Link: "/services",
    },
  ],
  ContactDetails: {
    Heading: "Get In Touch",
    ContactAvailabilty: "Support Available For 24/7",
    ContactEmail: "Support@email.com",
    ContactTiming: "Mon to Fri : 8:30 - 18:00",
    ContactNumber: "+23-456-7890",
  },

  FooterEndDetails: {
    CopyrightText: "@ Copyright Reserved to Navena by BED",
    NewsletterPlaceholder: "Your Email Address",
    NewsletterCTAText: "Subscribe",
    NewsletterCTALink: "/",
  },
};
