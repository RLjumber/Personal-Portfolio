import Header from "../home/components/Header";

export default function Work() {

    const languages = ["Javascript", "HTML", "CSS", "SQL", "Express", "Git", "Node.js"]
    const languageList = languages.map((language, index) => {
        return <li key={index}>{language}</li>
    })

    const tools = ["React", "Flutter", "Figma", "PostgreSQL", "Wordpress", "Adobe Illustrator", "Adobe Photoshop"]
    const toolsList = tools.map((tool, index) => {
        return <li key={index}>{tool}</li>
    })

    return (
        <main className=" bg-slate-500 h-screen">
            <Header />
            <main>
                <h1>Work</h1>
                <section>
                    <h2>Languages</h2>
                    <ul>{languageList}</ul>
                    <ul>{toolsList}</ul>
                </section>
                <section>
                    <h2>Projects</h2>
                </section>
            </main>
            
        </main>
    )
}