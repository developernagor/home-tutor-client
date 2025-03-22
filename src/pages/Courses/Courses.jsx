import React from 'react'
import CoursesHero from '../../components/CoursesPage/CoursesHero'
import CourseSearch from '../../components/CoursesPage/CourseSearch'
import FeaturedCourses from '../../components/CoursesPage/FeaturedCourses'
import CourseCategory from '../../components/CoursesPage/CourseCategory'
import TopInstructors from '../../components/CoursesPage/TopInstructors'
import EnrollNow from '../../components/CoursesPage/EnrollNow'

function Courses() {
  return (
    <div>
      <CoursesHero></CoursesHero>
      <CourseSearch></CourseSearch>
      <FeaturedCourses></FeaturedCourses>
      <CourseCategory></CourseCategory>
      <TopInstructors></TopInstructors>
      <EnrollNow></EnrollNow>
    </div>
  )
}

export default Courses
