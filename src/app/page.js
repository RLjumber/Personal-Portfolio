import Header from "./components/Header";

export default function Home() {
  return (
    <main class="px-3 py-2 w-screen">
      <Header />
      <div class="h-screen border-2">

        <div class="flex flex-col justify-center">
          <h1 class="font-display border border-red-500 text-9xl pb-2" >Hi, I`m Luke</h1>
          <h2 class="font-thin text-4xl border border-red-500">Frontend, Fullstack, UI/UX, Design</h2>
        </div>

        <div>
          <h3>More content here! Not sure why putting this here messed up the centering of the above content</h3>
        </div>
        
      </div>
    </main>
  )
}
