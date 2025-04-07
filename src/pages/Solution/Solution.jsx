import SolutionHero from '../../components/SolutionPage/SolutionHero'
import SolutionTable from '../../components/SolutionPage/SolutionTable'
import SolutionSubmission from '../../components/SolutionPage/SolutionSubmission'
import DownloadQuestion from '../../components/SolutionPage/DownloadQuestion'

function Solution() {
  
  return (
    <div>
      <SolutionHero></SolutionHero>
      <DownloadQuestion></DownloadQuestion>
      <SolutionTable></SolutionTable>
      <SolutionSubmission></SolutionSubmission>
    </div>
  )
}

export default Solution;
