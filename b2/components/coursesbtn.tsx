export default function CoursesButton() {
  return (
    <form action="/auth/courses" method="post">
      <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
        Courses
      </button>
    </form>
  )
}
