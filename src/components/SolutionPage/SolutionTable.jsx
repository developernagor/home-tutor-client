import { Link } from "react-router";

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
  return (
    <>
      <table className="w-full text-center border-collapse">
        <thead>
          <tr>
            <th className="p-2 border-b">Class</th>
            <th className="p-2 border-b">Subject</th>
          </tr>
        </thead>
        <tbody>
          {classListAndSubjectList.map((item, index) => (
            <tr key={index}>
              <td className="w-1/12 p-2 border-b border-r">{item.class}</td>
              <td className="w-11/12 p-2 border-b">
                <div className="flex justify-center gap-2">
                  {
                    item.subjects.map((subject, idx) => (
                      <Link key={idx} to="/subject-wise-solution">
                    <button className="btn">{subject}</button>
                  </Link>
                    ))
                  }
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SolutionTable;
