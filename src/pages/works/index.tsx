import Layout from '../../components/layouts/article'
import projects from "../../lib/projects.json"
import collaborations from "../../lib/collaborations.json"
import { Link } from 'react-router-dom'
import { classNames } from '../../lib/utility_fns'
import smallProjects from "../../lib/small_projects.json"

const Works: React.FC = () => { 
    return (
        <Layout title="Works">
            <h4 className='text-2xl text-vs-teal ml-4 mt-4'>Collaborations</h4>
            <div className="flex flex-row flex-wrap justify-center mb-10"> 
            {collaborations.map(collab => (
                <Link to={`/works/${collab.title}`} key={collab.title}>
                    <div className="flex flex-col mx-3 my-5">
                        <div 
                            style={{ backgroundImage: `url(${collab.cover})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                            className={classNames(
                                "w-[325px] h-[175px] md:w-56 md:h-36 rounded-xl bg-center hover:cursor-pointer",
                            )}>
                        </div>
                        <p className="m-1 w-56 text-vs-green">{collab.title}</p>
                        <p className="m-1 w-56">{collab.description}</p>
                    </div>
                </Link>
            ))}
            </div>

            <h4 className='text-2xl text-vs-teal ml-4'>Projects</h4>
            <div className="flex flex-row flex-wrap justify-start ml-4"> 
            {projects.map(work=> (
                <Link to={`/works/${work.title}`} key={work.title}>
                    <div className="flex flex-col mx-3 my-5">
                        <div
                            style={{ backgroundImage: `url(${work.cover})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                            className={classNames(
                                "w-[325px] h-[175px] md:w-56 md:h-36 rounded-xl bg-center hover:cursor-pointer",
                            )}>
                        </div>
                        <p className="m-1 w-56 text-vs-green">{work.title}</p>
                        <p className="m-1 w-56">{work.description}</p>
                    </div>
                </Link>
            ))}
            </div>

            <h4 className='text-2xl text-vs-teal ml-4'>Mini Projects</h4>
            <div className="flex flex-row flex-wrap justify-center"> 
            {smallProjects.map(work=> (
                <Link to={`/works/${work.title}`} key={work.title}>
                    <div className="flex flex-col mx-3 my-5">
                        <div
                            style={{ backgroundImage: `url(${work.cover})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                            className={classNames(
                                "w-[325px] h-[175px] md:w-56 md:h-36 rounded-xl bg-center hover:cursor-pointer",
                            )}
                        >
                        </div>
                        <p className="m-1 w-56 text-vs-green">{work.title}</p>
                        <p className="m-1 w-56">{work.description}</p>
                    </div>
                </Link>
            ))}
            </div>
        </Layout>
    )
}

export default Works;