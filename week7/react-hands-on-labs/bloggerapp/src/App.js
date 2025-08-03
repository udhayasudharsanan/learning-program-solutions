
import { useState } from 'react';

function App() {
  const [view, setView] = useState("book");

  const renderComponent = () => {
    switch(view) {
      case "book": return <BookDetails />;
      case "blog": return <BlogDetails />;
      case "course": return <CourseDetails />;
      default: return <BookDetails />;
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Blogger App</h1>
      <button onClick={() => setView("book")}>Book</button>
      <button onClick={() => setView("blog")}>Blog</button>
      <button onClick={() => setView("course")}>Course</button>
      {renderComponent()}
    </div>
  );
}

function BookDetails() { return <div>Book Details Component</div>; }
function BlogDetails() { return <div>Blog Details Component</div>; }
function CourseDetails() { return <div>Course Details Component</div>; }

export default App;
