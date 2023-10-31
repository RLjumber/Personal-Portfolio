export default function Landing() {
    return (
        <section class="">

            <div class="h-screen flex flex-col justify-center pb-10">
                <h1 class="font-display text-9xl" >Hi, I`m Luke</h1>
                <h2 class=" font-light text-4xl">Welcome To My Digital Portfolio</h2>
            </div>

            <div class=" h-screen flex flex-col">
                <h2 class="font-display text-5xl">What I Do</h2>
                <ul class="h-1/2 border flex flex-col justify-between items-end text-5xl font-light">
                    <li><h3 class="">Frontend</h3></li>
                    <li><h3 class="">Fullstack</h3></li>
                    <li><h3 class="">Design</h3></li>
                </ul>
                <div class="h-1/2">
                    <h2 class="font-display text-5xl">Who I Am</h2>
                    <ul></ul>
                </div>
            </div>
        
      </section>
    )
}