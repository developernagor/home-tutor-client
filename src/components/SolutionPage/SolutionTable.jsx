import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router";

const SolutionTable = () => {

  const classListAndSubjectList = [
    {
      "class": "One",
      "subjects": ["Bangla", "Englist", "Math"]
    },
    {
      "class": "Two",
      "subjects": ["Bangla", "Englist", "Math"]
    },
    {
      "class": "Three",
      "subjects": ["Bangla", "Englist","Math", "Science", "BGS", "Islam"]
    },
    {
      "class": "Four",
      "subjects": ["Bangla", "Englist","Math", "Science", "BGS", "Islam"]
    },
    {
      "class": "Five",
      "subjects": ["Bangla", "Englist","Math", "Science", "BGS", "Islam"]
    },
    {
      "class": "Six",
      "subjects": ["Bangla 1st Paper", "Bangla 2nd Paper", "Englist 1st paper", "Englist 2nd paper", "Mathematics", "Science", "BGS", "Islam"]
    },
    {
      "class": "Seven",
      "subjects": ["Bangla 1st Paper", "Bangla 2nd Paper", "Englist 1st paper", "Englist 2nd paper", "Mathematics", "Science", "BGS", "Islam"]
    },
    {
      "class": "Eight",
      "subjects": ["Bangla 1st Paper", "Bangla 2nd Paper", "Englist 1st paper", "Englist 2nd paper", "Mathematics", "Science", "BGS", "Islam"]
    },
  ]


  const {
    data: subjectWiseSolution,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["subjectWiseSolution"],
    queryFn: async() => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/subject-wise-solution`);
        console.log(response.data);
        return response.data;
      
    },
  });

  if (isLoading) {
    return <p className="text-center text-blue-500">Loading solutions...</p>;
  }
  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }



  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Subject Wise Solutions</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Class</th>
              <th className="border px-4 py-2">Subject</th>
              <th className="border px-4 py-2">Chapter</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {subjectWiseSolution.map((solution) => (
              <tr key={solution._id}>
                <td className="border px-4 py-2">{solution.solutionClass}</td>
                <td className="border px-4 py-2">{solution.solutionSubject}</td>
                <td className="border px-4 py-2">{solution.solutionChapter}</td>
                <td className="border px-4 py-2">
                  <Link
                    to={`/subject-wise-solution/${solution.solutionId}`}
                    className="text-blue-500 underline"
                  >
                    View Solution
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
};

export default SolutionTable;
