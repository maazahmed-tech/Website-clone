import type { CaseStudyPageData } from '@/data/types';

export const caseStudies: CaseStudyPageData[] = [
  {
    slug: 'pauseitive-case-study',
    title: 'Pauseitive — Mental Wellness Reimagined',
    client: 'Pauseitive Inc.',
    metaTitle: 'Pauseitive Case Study | Mental Health App by Cubix',
    metaDescription: 'How Cubix built Pauseitive, a mental wellness app with guided meditation, mood tracking, and therapy resources that reached 500K+ downloads.',
    heroImage: '/case-studies/pauseitive-hero.jpg',
    category: 'Healthcare & Wellness',
    overview: 'Pauseitive is a mental wellness mobile application designed to help users manage stress, anxiety, and emotional well-being through guided meditation, mood tracking, and personalized therapy resources. Cubix partnered with the Pauseitive team to design, develop, and launch the platform across iOS and Android.',
    challenge: 'The mental health app market is crowded with generic solutions that fail to sustain engagement. Pauseitive needed a product that felt deeply personal—adapting to individual emotional patterns while maintaining clinical credibility. The founding team also required HIPAA-compliant infrastructure and a content delivery system capable of streaming high-quality guided sessions with minimal latency, even in regions with poor connectivity.',
    solution: 'Cubix designed a calming, accessibility-first user interface validated through user research with licensed therapists. We built an adaptive recommendation engine that personalizes meditation and therapy content based on mood journal entries and usage patterns. The back end leverages AWS with HIPAA-compliant storage, and audio content is delivered through a global CDN with offline caching for uninterrupted access. Push notification schedules are tailored to each user\'s preferred wellness routine.',
    results: [
      { metric: 'Downloads', value: '500K+', description: 'Organic downloads within the first 12 months across iOS and Android.' },
      { metric: 'Daily Active Users', value: '120K', description: 'Consistent daily engagement driven by personalized push reminders.' },
      { metric: 'Session Duration', value: '18 min', description: 'Average session length, well above the industry benchmark of 8 minutes.' },
      { metric: 'App Store Rating', value: '4.8', description: 'Maintained a 4.8-star average rating with over 12,000 reviews.' },
    ],
    technologies: ['Swift', 'Kotlin', 'Node.js', 'AWS', 'TensorFlow Lite', 'PostgreSQL', 'Redis', 'CloudFront CDN'],
    testimonial: {
      quote: 'Cubix didn\'t just build an app—they helped us create a movement. Their technical expertise and genuine care for our mission made all the difference.',
      name: 'Dr. Sarah Mitchell',
      role: 'Co-Founder & CEO, Pauseitive Inc.',
    },
  },
  {
    slug: 'party-shark',
    title: 'PartyShark — Event Planning Made Effortless',
    client: 'PartyShark LLC',
    metaTitle: 'PartyShark Case Study | Event Management App by Cubix',
    metaDescription: 'Discover how Cubix built PartyShark, an event management app that simplifies party planning with invitations, RSVPs, and vendor coordination.',
    heroImage: '/case-studies/partyshark-hero.jpg',
    category: 'Events & Entertainment',
    overview: 'PartyShark is an event management application that simplifies party planning by combining digital invitations, RSVP tracking, vendor coordination, and budget management into one seamless mobile experience. Cubix handled full-cycle product development from ideation through App Store launch.',
    challenge: 'Event planning involves coordinating multiple moving parts—guest lists, vendors, timelines, and budgets—across fragmented tools like spreadsheets, group chats, and email threads. PartyShark\'s founders wanted a single platform that made planning feel fun rather than stressful, while also providing a marketplace connecting hosts with local vendors. The technical challenge included real-time RSVP synchronization, in-app payments for vendor bookings, and a recommendation engine that matches vendors to event types.',
    solution: 'Cubix designed a playful, vibrant UI that reflects the celebratory nature of event planning. We built a Flutter-based cross-platform app backed by Firebase for real-time data sync, enabling instant RSVP updates and chat between hosts and guests. A vendor marketplace with Stripe Connect handles split payments and commission processing. The recommendation engine uses collaborative filtering to surface relevant vendors based on event type, budget, and location. Push notifications keep all stakeholders aligned on timelines.',
    results: [
      { metric: 'Events Created', value: '85K+', description: 'Events planned through the platform in the first year after launch.' },
      { metric: 'Vendor Partners', value: '2,500+', description: 'Local vendors onboarded across 15 metropolitan areas.' },
      { metric: 'User Satisfaction', value: '94%', description: 'Positive satisfaction score from post-event surveys.' },
      { metric: 'Revenue Growth', value: '3x', description: 'Quarter-over-quarter revenue growth within the first six months.' },
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Functions', 'Stripe Connect', 'Algolia', 'Google Maps API'],
    testimonial: {
      quote: 'Working with Cubix felt like having a co-founder who happened to be an entire engineering team. They challenged our assumptions and delivered a product that exceeded our vision.',
      name: 'Jason Rivera',
      role: 'Founder, PartyShark LLC',
    },
  },
  {
    slug: 'oomco',
    title: 'Oomco — On-Demand Fuel Delivery',
    client: 'Oomco Petroleum',
    metaTitle: 'Oomco Case Study | On-Demand Fuel Delivery App by Cubix',
    metaDescription: 'Learn how Cubix developed Oomco\'s on-demand fuel delivery app with real-time tracking, fleet management, and a seamless customer experience.',
    heroImage: '/case-studies/oomco-hero.jpg',
    category: 'Logistics & Transportation',
    overview: 'Oomco is a pioneering on-demand fuel delivery platform operating in the Middle East. Cubix developed a comprehensive three-app ecosystem—a customer app, a driver app, and an operations dashboard—that enables consumers to order fuel delivered directly to their vehicle\'s location.',
    challenge: 'On-demand fuel delivery presents unique logistical and safety challenges. The system needed to handle real-time GPS tracking of fuel trucks, enforce safety protocols for hazardous material transport, manage dynamic pricing based on fuel type and delivery distance, and scale across multiple cities with varying regulations. Additionally, Oomco required seamless integration with their existing petroleum distribution infrastructure and payment gateways popular in the Gulf region.',
    solution: 'Cubix built a React Native customer app with an intuitive booking flow that lets users pin their vehicle location, select fuel type and quantity, and track delivery in real time. The driver app includes route optimization, digital safety checklists, and electronic delivery confirmations. The operations dashboard provides fleet managers with live maps, driver performance metrics, and demand forecasting. We integrated with local payment providers including Apple Pay, Samsung Pay, and cash-on-delivery options prevalent in the region.',
    results: [
      { metric: 'Deliveries Completed', value: '200K+', description: 'Successful fuel deliveries within the first 18 months of operation.' },
      { metric: 'Average Delivery Time', value: '28 min', description: 'From order placement to fuel delivery at the customer location.' },
      { metric: 'Customer Retention', value: '78%', description: 'Repeat order rate among registered users after their first delivery.' },
      { metric: 'Fleet Utilization', value: '92%', description: 'Truck utilization rate achieved through AI-driven dispatching.' },
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps Platform', 'Socket.io', 'AWS', 'Redis', 'Stripe'],
    testimonial: {
      quote: 'Cubix understood the complexity of fuel logistics from day one. Their solution handles everything from safety compliance to customer delight, and it scales beautifully across our markets.',
      name: 'Ahmed Al-Rashidi',
      role: 'Chief Digital Officer, Oomco Petroleum',
    },
  },
  {
    slug: 'foodly',
    title: 'Foodly — Smart Food Ordering & Delivery',
    client: 'Foodly Technologies',
    metaTitle: 'Foodly Case Study | Food Delivery Platform by Cubix',
    metaDescription: 'How Cubix built Foodly, a food ordering and delivery platform with AI-powered recommendations, real-time tracking, and restaurant management tools.',
    heroImage: '/case-studies/foodly-hero.jpg',
    category: 'Food & Beverage',
    overview: 'Foodly is a food ordering and delivery platform that connects diners with local restaurants through a polished mobile experience. Cubix developed the full technology stack including the consumer app, restaurant dashboard, rider app, and administrative back end.',
    challenge: 'Foodly entered a competitive market dominated by well-funded incumbents. To differentiate, they needed a technically superior product with faster order processing, smarter delivery routing, and deeper restaurant analytics than existing players. The platform also had to support high order volumes during peak hours without performance degradation, handle complex menu customization, and provide restaurants with actionable business intelligence to optimize their operations.',
    solution: 'Cubix engineered a microservices architecture that handles thousands of concurrent orders with sub-second response times. The consumer app features an AI recommendation engine that learns individual taste preferences and dietary restrictions. We built a restaurant management dashboard with real-time order tracking, menu management, revenue analytics, and peak-hour staffing suggestions. The rider app uses a proprietary batching algorithm that groups nearby deliveries to reduce wait times and increase rider earnings.',
    results: [
      { metric: 'Restaurant Partners', value: '1,200+', description: 'Restaurants onboarded across three major cities within the first year.' },
      { metric: 'Orders Processed', value: '2M+', description: 'Total orders processed through the platform during the first 18 months.' },
      { metric: 'Delivery Speed', value: '24 min', description: 'Average delivery time, 30% faster than the regional industry average.' },
      { metric: 'Platform Uptime', value: '99.97%', description: 'System availability maintained even during peak dinner-hour traffic.' },
    ],
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Kubernetes', 'Elasticsearch', 'Google Maps API'],
    testimonial: {
      quote: 'Cubix gave us the technical edge we needed to compete with the big players. Their architecture handles our growth without breaking a sweat, and the analytics they built for our restaurant partners are a genuine competitive advantage.',
      name: 'Priya Sharma',
      role: 'CTO, Foodly Technologies',
    },
  },
  {
    slug: 'forest-fusion',
    title: 'Forest Fusion — Environmental Monitoring Platform',
    client: 'Forest Fusion Foundation',
    metaTitle: 'Forest Fusion Case Study | Environmental Monitoring by Cubix',
    metaDescription: 'Explore how Cubix built Forest Fusion, an IoT-powered environmental monitoring platform that tracks deforestation, air quality, and biodiversity.',
    heroImage: '/case-studies/forest-fusion-hero.jpg',
    category: 'Environment & Sustainability',
    overview: 'Forest Fusion is an IoT-powered environmental monitoring platform that combines satellite imagery, ground-based sensor networks, and citizen science data to track deforestation, air quality, and biodiversity across protected ecosystems. Cubix developed the full technology platform including the data ingestion pipeline, analytics engine, and public-facing dashboard.',
    challenge: 'Environmental monitoring generates massive volumes of heterogeneous data—satellite imagery, IoT sensor readings, weather feeds, and field observations—that must be ingested, correlated, and visualized in near real time. Forest Fusion needed a platform capable of processing terabytes of geospatial data daily, detecting deforestation events within hours rather than weeks, and presenting complex environmental data in a format accessible to policymakers, researchers, and the general public.',
    solution: 'Cubix designed a cloud-native data pipeline using AWS Lambda and Kinesis for real-time stream processing of IoT sensor data. Satellite imagery from Sentinel-2 and Landsat is processed through custom computer vision models that detect vegetation change at 10-meter resolution. A geospatial analytics engine correlates multiple data sources to generate comprehensive ecosystem health scores. The public dashboard uses Mapbox GL for interactive map visualizations, while a mobile app enables field researchers to submit geotagged observations and photographs.',
    results: [
      { metric: 'Area Monitored', value: '50K km\u00B2', description: 'Protected forest area under continuous satellite and IoT surveillance.' },
      { metric: 'Detection Speed', value: '6 hrs', description: 'Time to detect and alert on deforestation events, down from 2-3 weeks previously.' },
      { metric: 'Sensor Network', value: '8,000+', description: 'IoT sensors deployed and streaming environmental data in real time.' },
      { metric: 'Data Points Daily', value: '12M+', description: 'Environmental data points ingested and processed every 24 hours.' },
    ],
    technologies: ['Python', 'AWS Lambda', 'Kinesis', 'TensorFlow', 'PostgreSQL/PostGIS', 'Mapbox GL', 'React', 'Docker'],
    testimonial: {
      quote: 'Cubix turned our vision of a connected forest into reality. Their engineering team tackled the hardest geospatial and IoT challenges we threw at them, and the platform is now our most powerful tool for conservation advocacy.',
      name: 'Dr. Elena Vasquez',
      role: 'Executive Director, Forest Fusion Foundation',
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyPageData | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
