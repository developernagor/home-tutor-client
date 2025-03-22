import React from 'react'
import JoinCommunity from '../../components/QuestionsPage/JoinCommunity'
import TutorResponsesQuestions from '../../components/QuestionsPage/TutorResponsesQuestions'
import SearchQuestions from '../../components/QuestionsPage/SearchQuestions'
import RecentlyAskedQuestions from '../../components/QuestionsPage/RecentlyAskedQuestions'
import PopularQuestions from '../../components/QuestionsPage/PopularQuestions'
import QuestionSubmission from '../../components/QuestionsPage/QuestionSubmission'
import QuestionsHero from '../../components/QuestionsPage/QuestionsHero'

function AskQuestions() {
  return (
    <div>
      <QuestionsHero></QuestionsHero>
      <QuestionSubmission></QuestionSubmission>
      <RecentlyAskedQuestions></RecentlyAskedQuestions>
      <PopularQuestions></PopularQuestions>
      <SearchQuestions></SearchQuestions>
      <TutorResponsesQuestions></TutorResponsesQuestions>
      <JoinCommunity></JoinCommunity>
    </div>
  )
}

export default AskQuestions
