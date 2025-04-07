import React from 'react'
import FindTutorsHero from '../../components/FindTutorsPage/FindTutorsHero'
// import SearchTutors from './SearchTutors'
import TutorList from './TutorList'
import BecomeTutor from './BecomeTutor'

function FindTutors() {
  return (
    <div>
      <FindTutorsHero></FindTutorsHero>
      {/* <SearchTutors></SearchTutors> */}
      <TutorList></TutorList>
      <BecomeTutor></BecomeTutor>
    </div>
  )
}

export default FindTutors;
