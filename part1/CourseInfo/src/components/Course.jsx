import CourseHeader from "./CourseHeader";
import Content from "./Content";
const Course = ({ course }) => {
    console.log(course);

  return (
      <>
      <h1>Web development curriculum</h1>
        {course.map(courses => (
            <aside key={courses.id}>
            <CourseHeader  header={courses.name} />
            <Content  content={courses.parts} />
            </aside>
        ))}
    </>
  );
};

export default Course;
