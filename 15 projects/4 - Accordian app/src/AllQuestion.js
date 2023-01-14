import React, { useState } from "react";
import data from "./data";
import List from "./List";

const AllQuestion = () => {
    const [questions , setquestions] = useState(data)
    
  return (
    <div className="Main">
      <div className="Left">
        <h3>Questions And Answers About Login</h3>
      </div>
      <div className="Right">
        {questions.map((question) => {
          return (
            <List key={question.id} {...question}/>
          );
        })}
      </div>
    </div>
  );
};

export default AllQuestion;
