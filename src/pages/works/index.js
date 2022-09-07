import Layout from '../../components/layouts/Article'
import works from "../../lib/works"
import collaborations from "../../lib/collaborations"
import { Link } from 'react-router-dom'

const Works = () => {
    return (
        <Layout title="Works">
            <h4 className='text-2xl text-vs-teal ml-4 mt-4'>Collaborations</h4>
            <div className="flex flex-row flex-wrap justify-center mb-10"> 
            {collaborations.map(collab => (
                <Link to={`/works/${collab.title}`} key={collab.title}>
                    <div className="flex flex-col mx-3 my-5">
                        <div 
                            style={{background: `url('${collab.cover}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                            className={'w-56 h-36 rounded-xl bg-no-repeat bg-cover bg-center hover:cursor-pointer'}>
                        </div>
                        <p className="m-1 w-56 text-vs-green">{collab.title}</p>
                        <p className="m-1 w-56">{collab.description}</p>
                    </div>
                </Link>
            ))}
            </div>

            <h3 className='text-2xl text-vs-teal ml-4'>Works</h3>
            <div className="flex flex-row flex-wrap justify-center"> 
            {works.map(work=> (
                <Link to={`/works/${work.title}`} key={work.title}>
                    <div className="flex flex-col mx-3 my-5">
                        <div
                            style={{background: `url('${work.cover}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                            className={'w-56 h-36 rounded-xl bg-no-repeat bg-cover bg-center hover:cursor-pointer'}>
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