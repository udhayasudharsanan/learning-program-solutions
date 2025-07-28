
import React from 'react';
import '../Stylesheets/mystyle.css';
function CalculateScore() {
  const name = "John";
  const school = "ABC School";
  const total = 450;
  const goal = 500;
  const avg = total / 5;
  return (
    <div className="box">
      <h3>Student Score Card</h3>
      <p>Name: {name}</p>
      <p>School: {school}</p>
      <p>Total: {total}</p>
      <p>Goal: {goal}</p>
      <p>Average Score: {avg}</p>
    </div>
  );
}
export default CalculateScore;
