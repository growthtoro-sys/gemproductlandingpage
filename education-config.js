/* Hidden Gem · Shop page config. Edit only this file.
   checkout: paste the Stripe link (https://buy.stripe.com/...). null = button disabled.
   tier: "feature" (big card), "premium" (big card, highlighted) or "small". Order = display order. */
window.EDU_CONFIG = {
  resources: {
    course:   { name: "Custom Online Course", d: "Explore Gem’s approach to custom lash artistry through 50+ prerecorded videos. Revisit the lessons as you practice, with lifetime access and 3–5 new videos added each month." },
    h24:      { name: "Beyond the 24-Hour Rule Guide", d: "Take a closer look at lash retention with a dedicated reference you can return to alongside your training." },
    cpm:      { name: "THE CLIENT PSYCHOLOGY METHOD™", d: "Explore the thinking behind a meaningful consultation, connecting what your client asks for with how she wants to look and feel." },
    brain:    { name: "The Lash Artist’s Second Brain™", d: "A collection of ChatGPT prompts for Instagram and TikTok to help you develop content ideas and communicate your artistry." },
    audit:    { name: "Express 1:1 Instagram Content Audit", d: "Spend 30 minutes with Gem reviewing your Instagram content and identifying ways to improve it, so you can plan your own content with more direction." },
    calendar: { name: "Personalized Content Calendar", d: "Receive a content calendar tailored to you, giving you a clearer plan for what to create and share." },
    manual:   { name: "A-to-Z Lash Manual", d: "An additional lash education reference to support your learning throughout your private mentorship." },
    kit:      { name: "Kit with Content Equipment", d: "Receive a kit that includes equipment to support your content creation alongside your training." },
    lists:    { name: "Lash Vendor & Amazon Lists", d: "Access Gem’s curated lists of lash suppliers and Amazon resources." },
    models:   { name: "Four Models Together", d: "Apply what you’re learning while working through four models with Gem’s guidance." }
  },

  products: [
    { id: "mastery", tier: "feature", kind: "4-week group mentorship", badge: "Most popular",
      name: "Custom Lash Mastery", price: "797",
      tagline: "Four weeks to connect your knowledge with your decisions.",
      blurb: "You already know how to apply lashes. Now learn to think through the design. Explore how client psychology, identity, visual intention, anatomy, and styling decisions work together, with weekly group guidance from Gem and resources you can return to as you practice.",
      includes: ["Four weeks of group mentorship", "One 40-minute group call each week", "Custom Online Course with 50+ prerecorded videos", "One 30-minute Express 1:1 Instagram Content Audit", "Beyond the 24-Hour Rule Guide", "THE CLIENT PSYCHOLOGY METHOD™", "The Lash Artist’s Second Brain™", "Lifetime course access, monthly check-ins, and 3–5 new videos each month"],
      resources: ["course", "audit", "h24", "cpm", "brain"],
      cta: "Join Custom Lash Mastery — $797", checkout: null },

    { id: "private", tier: "premium", kind: "6-week private mentorship", badge: "Private · 1:1",
      name: "Private Custom Mentorship", price: "2,000",
      tagline: "Personal guidance. Hands-on practice. Your artistry.",
      blurb: "Work directly with Gem for six weeks to apply intentional custom design to your own work. With two private calls each week and four models worked on together, you’ll have more opportunities to ask questions, work through decisions, and receive personal feedback. Bring that same intention into your content with a personalized calendar and a kit that includes content equipment.",
      includes: ["Six weeks of private mentorship", "Two 40-minute private calls each week", "Four models worked on together", "Personalized content calendar", "Kit with content equipment, valued by Gem at $600", "Custom Online Course with 50+ prerecorded videos", "All three digital guides included in the group mentorship", "A-to-Z Lash Manual", "Lash vendor list and Amazon list", "Lifetime course access, monthly check-ins, and 3–5 new videos each month", "10% off Gem’s products launching in November"],
      resources: ["models", "calendar", "kit", "manual", "lists", "course", "h24", "cpm", "brain"],
      cta: "Choose Private Mentorship — $2,000", checkout: null },

    { id: "ebook", tier: "small", kind: "Ebook",
      name: "Custom Lash Ebook", price: "69.99",
      tagline: "Start designing with more intention.",
      blurb: "Ready to move beyond copying inspiration photos? Gem’s Custom Lash Ebook introduces her approach to intentional custom styling, helping you think about the client in front of you and the result you want to create. A starting point for artists who want to explore Gem’s approach before joining a mentorship.",
      cta: "Get the Custom Ebook — $69.99", checkout: null },

    { id: "replay", tier: "small", kind: "Webinar replay · 48-hour access",
      name: "Webinar Replay", price: "9.99",
      tagline: "Missed the training? Let’s run it back.",
      blurb: "Watch The Custom Lash Blueprint webinar with 48-hour access. Revisit Gem’s teaching before choosing your next step.",
      cta: "Get the Replay — $9.99", checkout: null }
  ]
};
