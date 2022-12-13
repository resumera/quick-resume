import { useEffect, useState } from 'react'
import CreateCard from '../components/CreateCard'
import Layout from '../components/Layout'
import PreviewCard from '../components/PreviewCard'
import { resumeLocalStore } from '../utils/localStorage'

export default function Home() {
  const [resumes, setResumes] = useState([])

  useEffect(() => {
    setResumes(resumeLocalStore.all())
  }, [])

  return (
    <Layout>
      <div className='section py-10'>
        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-6'>
          {resumes.map(resume => (
            <PreviewCard key={resume.id} data={resume} />
          ))}
          <CreateCard />
        </div>
      </div>
    </Layout>
  )
}

// export async function getStaticProps(context) {
//   return {
//     props: {
//       resumes: data.resumes,
//     },
//   }
// }
