export default function Landing() {
    return (
        <main className=" bg-neutral-600">
            <section id="intro" class=" h-screen">
                <div class="h-full flex flex-col justify-center pb-20 pb">
                    <h1 class="font-display text-9xl" >Hi, I`m Luke</h1>
                    <h2 class=" font-light text-4xl">Welcome To My Digital Portfolio</h2>
                </div>
            </section>
            <section id="who-and-what" class="border-t-2 pt-10">
                <div class="flex flex-col">
                    <h3 class="font-display text-5xl pb-10">What I Do</h3>
                    <ul class="flex flex-col h-full w-full items-end text-5xl font-light justify-evenly">
                        <li><h3 class="border p-5 hover:bg-red-400 w-full">Frontend</h3></li>
                        <li><h3 class="p-5">Fullstack</h3></li>
                        <li><h3 class="p-5">Design</h3></li>
                    </ul>
                </div>
                <div class="font-display text-5xl pt-10">
                    <h3 class="pb-10">Who I am</h3>
                </div>
            </section>
      </main>
    )
}