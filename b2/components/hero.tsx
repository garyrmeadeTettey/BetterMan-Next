export default function Hero() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
        You Have Hero
      </button>
    </form>
    
  )
}
