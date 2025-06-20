import visibilityDilemma from '../assets/images/visibility-dilemma.jpg'
import engagementGap from '../assets/images/engagement-gap.jpg'
import resultsInHibernation from '../assets/images/results-in-hibernation.jpg'

import plumbing from '../assets/images/plumb.avif'
import arborists from '../assets/images/arborists.avif'

const services = [
  {
    title: 'Dependable Local Expertise',
    features: [
      'Deep understanding of your specific needs.',
      'Established reputation',
      'Quick response times within the local area.'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`
  },
  {
    title: 'Comprehensive Service Range',
    features: [
      'Handles diverse maintenance tasks efficiently',
      'Reduces the need for multiple contractors',
      'Offers tailored solutions for various property types'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>`
  },
  {
    title: 'Quality and Professionalism',
    features: [
      'Skilled and trained maintenance personnel',
      'Commitment to high standards of workmanship',
      'Use of reliable materials and techniques'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>`
  },
  {
    title: 'Proactive Property Care',
    features: [
      'Regular inspections to prevent issues',
      'Focus on long-term property preservation',
      'Helps avoid costly emergency repairs'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"/></svg>`
  },
  {
    title: 'Transparent and Trustworthy',
    features: [
      'Clear communication and fair pricing',
      'Reliable service delivery as promised',
      'Focus on building lasting client relationships'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`
  },
  {
    title: 'Enhanced Property Value',
    features: [
      'Well-maintained properties attract better tenants',
      'Regular upkeep preserves asset integrity',
      'Contributes to a positive property image'
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`
  }
]

const solutions = [
  {
    title: 'Top-Tier plumbing services',
    painPoint:
      "At Unitech Builder, we understand that efficient plumbing is essential to your property's daily operations.",
    agitatepainPoint:
      "That's why we offer comprehensive plumbing services, backed by a commitment to quality and responsive customer care. Our expert team is dedicated to resolving your plumbing needs promptly and effectively, safeguarding your investment and providing you with peace of mind.",
    solution:
      'Choose Unitech Builder for a partnership built on reliability and excellence.',
    img: plumbing
  },
  {
    title: 'Tree Services by Trusted Arborists',
    painPoint:
      'Unitech Builder provides professional and comprehensive tree care services designed to enhance the safety and aesthetics of your property.',
    agitatepainPoint:
      'Our team of certified arborists delivers expert tree management solutions, including precision pruning, safe tree removal, and responsive emergency services.',
    solution:
      'We utilize state-of-the-art equipment and advanced techniques to promote the long-term health and vitality of your trees.',
    img: arborists
  },
  {
    title: 'Lawn Care and Maintenance Services',
    painPoint:
      "Unitech Builder delivers professional lawn care and maintenance services designed to elevate your property's aesthetic appeal.",
    agitatepainPoint:
      'Our expert team provides a comprehensive suite of services, including precision mowing, detailed edging, targeted fertilization, and effective weed control.',
    solution:
      'We are committed to fostering healthy, vibrant lawns through the application of environmentally friendly products and sustainable techniques.',
    img: resultsInHibernation
  },
  {
    title: 'Interior Design and Renovation',
    painPoint:
      "Unitech Builder's interior design and renovation services are tailored to meet your unique needs and style preferences.",
    agitatepainPoint:
      'Our team of experts works closely with you to create a space that reflects your personality and lifestyle.',
    solution:
      'From concept to completion, we handle every aspect of the project with precision and care, ensuring a beautiful and functional result.',
    img: resultsInHibernation
  },
  {
    title: 'Fixing & Support',
    painPoint:
      'Our team of skilled professionals provides reliable fixing and support services to address a wide range of issues in your home or business.',
    agitatepainPoint:
      'From minor repairs to major renovations, we have the expertise and tools to get the job done right.',
    solution:
      'We offer prompt and efficient service to ensure your property is safe and functional.',
    img: resultsInHibernation
  },
  {
    title: 'Roofing Services',
    painPoint:
      'Unitech Builder offers top-tier roofing services that are designed to protect your property from the elements.',
    agitatepainPoint:
      'Our team of certified roofers and installers provides efficient and cost-effective solutions to keep your roof looking its best.',
    solution:
      'Committed to the highest standards of safety and workmanship, we meticulously utilize top-tier tools and materials sourced from our comprehensive inventory.',
    img: resultsInHibernation
  },
  {
    title: 'HVAC Services',
    painPoint:
      'We offer Heating, Ventilation, and Air Conditioning (HVAC) services to keep your home or business comfortable and energy-efficient.',
    agitatepainPoint:
      'Our experienced technicians install and maintain HVAC systems, ensuring a comfortable and healthy environment for your occupants.',
    solution:
      'We provide regular maintenance and emergency repair services to keep your HVAC system running smoothly year-round.',
    img: resultsInHibernation
  },
  {
    title: 'Electrical Services',
    painPoint:
      'Out top grade electrical expertise are ready to serve you with all your needs.',
    agitatepainPoint:
      'We have a team of experienced electricians who are ready to provide you with the best services for your electrical needs.',
    solution:
      'Our team is dedicated to providing you with the best service possible, ensuring that your electrical systems are safe and efficient.',
    img: resultsInHibernation
  },
  {
    title: 'Appliances Services',
    painPoint:
      'We offer offers top-tier appliances services, Our team of experts are ready to provide you with the best services for your appliances needs, from installation to repair.',
    agitatepainPoint:
      'Our team of experts are ready to provide you with the best services for your appliances needs, from installation to repair.',
    solution:
      'We are dedicated to providing you with the best service possible, ensuring that your appliances are running smoothly and efficiently.',
    img: resultsInHibernation
  },
  {
    title: 'Siding Services',
    painPoint:
      'Unitech Builder offers professional siding services to enhance the exterior of your property.',
    agitatepainPoint:
      'Our team of skilled professionals provides high-quality siding installation and repair services to protect your home from the elements.',
    solution:
      'We use durable materials and advanced techniques to ensure your siding is both functional and aesthetically pleasing.',
    img: resultsInHibernation
  },
  {
    title: 'Drywall Services',
    painPoint:
      'Unitech Builder offers top-tier drywall services, Our team of experts are ready to provide you with the best services for your drywall needs, from installation to repair.',
    agitatepainPoint:
      'Our team of experts are ready to provide you with the best services for your drywall needs, from installation to repair.',
    solution:
      'We are dedicated to providing you with the best service possible, ensuring that your drywall is installed and repaired to the highest standards.',
    img: resultsInHibernation
  }
]

const faqs = [
  {
    question: 'How does Unitech Builder pay?',
    answer:
      'BSS pays on a weekly basis through direct deposit from Bank to Bank, Zelle, or CashApp.'
  },
  {
    question: 'Does Unitech Builder pay gas money?',
    answer:
      'Yes, Unitech Builder will pay for gas or travel fees for inspections based on the property distance.'
  },
  {
    question: 'After completing work order when will be the payment remitted?',
    answer:
      'Our payments are generally remitted within 7 days. For rush work orders or equipment rental issues, payment will be remitted immediately upon communication.'
  },
  {
    question: 'Does Unitech Builder pay for rental equipment?',
    answer:
      'Certainly! Unitech Builder will provide the equipment rental cost for work order completion.'
  },
  {
    question: 'Does Unitech Builder provide vehicles?',
    answer:
      'Unfortunately, Unitech Builder does not provide vehicles for work orders. Contractors are expected to have their own transportation.'
  },
  {
    question: 'Does Unitech Builder cover insurance?',
    answer: 'Yes, BSS will cover the insurance for the co-workers.'
  },
  {
    question: 'What social media platforms do yo',
    answer:
      'We work with a wide range of social media platforms, including but not limited to Facebook, Instagram, Twitter, LinkedIn, Pinterest, and TikTok. Our strategies are adaptable to the platforms most relevant to your target audience.'
  },
  {
    question: 'Is the company only work for tenant occupied/rental properties?',
    answer:
      'No, our company works for both types of clients: Property preservation (vacant properties) and Maintenance (tenant occupied/rental properties).'
  }
]

export { services, solutions, faqs }
