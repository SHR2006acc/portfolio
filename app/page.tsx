import Portfolio from '@/components/portfolio'
export default function Home() {
  const person = {
    '@context': 'https://schema.org', '@type': 'Person', name: 'Mohamed Rayan Htalal',
    jobTitle: 'AI & Software Engineering Student', email: 'htalalrayan@gmail.com',
    sameAs: ['https://github.com/SHR2006acc/', 'https://www.linkedin.com/in/mohamed-rayan-htalal-7abb4b345/'],
  }
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} /><Portfolio /></>
}
