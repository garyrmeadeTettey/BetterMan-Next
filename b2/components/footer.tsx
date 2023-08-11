export default function Footer() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className="mt-10 py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
        footer
      </button>
    </form>
    
  )
}
