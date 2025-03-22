import React from 'react'
import SolutionHero from '../../components/SolutionPage/SolutionHero'
import SolutionFilterBar from '../../components/SolutionPage/SolutionFilterBar'
import SolutionSubmission from '../../components/SolutionPage/SolutionSubmission'
import DownloadQuestion from '../../components/SolutionPage/DownloadQuestion'

function Solution() {
  return (
    <div>
      <SolutionHero></SolutionHero>
      <DownloadQuestion></DownloadQuestion>
      <SolutionFilterBar></SolutionFilterBar>
      <SolutionSubmission></SolutionSubmission>
    </div>
  )
}

export default Solution
