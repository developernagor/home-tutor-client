import React from 'react';

// Raw tutor data (simulate what you might get from an API)
const tutor = {
  _id: "67ffed0e05431635e69a318c",
  tutorName: "Md. Mehedi Hassan Nagor",
  tutorSubject: "Physics",
  tutorExperience: "12",
  tutorRating: "4",
  tutorLocation: "Pabna, Rajshahi, Bangladesh",
  tutorAvailability: "Not available",
  tutorContact: "+8801575439591",
  tutorDescription: `{
    "tutorDOB": "10th Feb, 1999",
    "tutorGender": "Male",
    "tutorEmail": "mehedihassannagor@gmail.com",
    "preferredTeachingMethod": "Online & In-person",
    "teachingDays": "Sunday to Thursday",
    "teachingHours": "4:00 PM – 8:00 PM",
    "tutorQualification": "B.Sc & M.Sc in Physics, National University",
    "tutorLanguages": ["Bangla", "English"],
    "tutorHourlyRate": "1000 BDT/hour",
    "tutorDescription": "Passionate physics tutor with over a decade of experience in simplifying complex concepts for high school and college students. Focused on building strong fundamentals and boosting student confidence."
  }`
};

// Parse the nested JSON from tutorDescription
let details = {};
try {
  details = JSON.parse(tutor.tutorDescription);
} catch (e) {
  console.error("Failed to parse tutorDescription", e);
}

function TutorProfile() {
  return (
    <section className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-3xl mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        {tutor.tutorName}
      </h2>

      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-gray-700">
        <div>
          <dt className="font-semibold">Subject</dt>
          <dd>{tutor.tutorSubject}</dd>
        </div>
        <div>
          <dt className="font-semibold">Experience</dt>
          <dd>{tutor.tutorExperience} years</dd>
        </div>
        <div>
          <dt className="font-semibold">Rating</dt>
          <dd>⭐ {tutor.tutorRating} / 5</dd>
        </div>
        <div>
          <dt className="font-semibold">Date of Birth</dt>
          <dd>{details.tutorDOB}</dd>
        </div>
        <div>
          <dt className="font-semibold">Gender</dt>
          <dd>{details.tutorGender}</dd>
        </div>
        <div>
          <dt className="font-semibold">Location</dt>
          <dd>{tutor.tutorLocation}</dd>
        </div>
        <div>
          <dt className="font-semibold">Availability</dt>
          <dd>{tutor.tutorAvailability}</dd>
        </div>
        <div>
          <dt className="font-semibold">Contact</dt>
          <dd>{tutor.tutorContact}</dd>
        </div>
        <div>
          <dt className="font-semibold">Email</dt>
          <dd>{details.tutorEmail}</dd>
        </div>
        <div>
          <dt className="font-semibold">Preferred Teaching Method</dt>
          <dd>{details.preferredTeachingMethod}</dd>
        </div>
        <div>
          <dt className="font-semibold">Teaching Days</dt>
          <dd>{details.teachingDays}</dd>
        </div>
        <div>
          <dt className="font-semibold">Teaching Hours</dt>
          <dd>{details.teachingHours}</dd>
        </div>
        <div>
          <dt className="font-semibold">Qualification</dt>
          <dd>{details.tutorQualification}</dd>
        </div>
        <div>
          <dt className="font-semibold">Languages Spoken</dt>
          <dd>{details.tutorLanguages?.join(", ")}</dd>
        </div>
        <div>
          <dt className="font-semibold">Hourly Rate</dt>
          <dd>{details.tutorHourlyRate}</dd>
        </div>
        <div className="md:col-span-2">
          <dt className="font-semibold">About</dt>
          <dd>{details.tutorDescription}</dd>
        </div>
      </dl>
    </section>
  );
}

export default TutorProfile;
