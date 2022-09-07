import Layout from '../../components/layouts/article'
import works from '../../lib/works';
import collaborations from '../../lib/collaborations';
import { useParams, Link } from 'react-router-dom';
import Error from '../Error'

const SingleWork = () => {
    const { work } = useParams()
    const currentProject = works.concat(collaborations)
        .find(project => project.title === work)

    if (!currentProject) return <Error/>

    return (
        <Layout title={currentProject?.title}>
            <div className="flex flex-row items-center justify-left mb-2">
                <Link to='/works'>
                    <h3 className="text-vs-purple text-lg ml-4 mr-2 hover:cursor-pointer hover:text-2xl hover:transition-all">
                        {currentProject?.type}
                    </h3>
                </Link>
                <p>{'>'}</p>
                <p className="ml-2 text-2xl text-vs-green">{currentProject?.title}</p>
            </div>
            
            <div>
                <div 
                    style={{background: `url('${currentProject?.cover}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                    className="h-72 rounded-xl mx-4 my-3">
                </div>
                <p className="mx-4 my-3">{currentProject?.narrative}</p>

                <div className="flex flex-row">
                    <p className="ml-4 my-3 text-vs-bg bg-vs-teal font-semibold rounded w-[80px] h-[24px] text-center">Platform</p>
                    <p  className="ml-4 my-3">{currentProject?.platform}</p>
                </div>

                <div className="flex flex-row">
                    <p className="ml-4 my-3 text-vs-bg bg-vs-teal font-semibold rounded w-[80px] h-[24px] text-center">Stack</p>
                    <p  className="ml-4 my-3">{currentProject?.stack}</p>
                </div>

                {currentProject?.website ? 
                    <div className="flex flex-row">
                        <p className="ml-4 my-3 text-vs-bg bg-vs-teal font-semibold px-2 rounded w-[80px] h-[24px] text-center">Website</p>
                        <a
                            target="_blank" 
                            rel="noopener noreferrer"
                            href={currentProject?.website} 
                            className="ml-4 my-3 text-vs-green underline underline-offset-4 decoration-1"> Take me to the website!
                        </a>
                    </div> : null
                }
                <div className="flex flex-row">
                    <p className="ml-4 my-3 text-vs-bg bg-vs-teal font-semibold px-2 rounded w-[80px] h-[24px] text-center">Github</p>
                    <a
                        target="_blank" 
                        rel="noopener noreferrer"
                        href={currentProject?.github} 
                        className="ml-4 my-3 text-vs-green underline underline-offset-4 decoration-1"> See source code here.
                    </a>
                </div>
            </div>
        </Layout>
    )
}

export default SingleWork;