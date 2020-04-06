import React, {useContext, useEffect} from 'react'
import {GithubContext} from "../context/github/githubContext";
import {Link} from "react-router-dom";

export const Profile = ({match}) => {

    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)

    const urlName = match.params.name

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <p className='text-center'>Идет загрузка...</p>
    }

    const {
        name, company, avatar_url, location,
        bio, blog, login, html_url, followers,
        public_repos, public_gists, following
    } = user

    return (
        <React.Fragment>
            <Link to='/' className='btn btn-link'>На главную</Link>

            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img className='mb-3' style={{maxWidth: '100%'}} src={avatar_url} alt={name}/>
                            <h2>{name}</h2>
                            {location && <p>Местоположение: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <React.Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </React.Fragment>
                            }
                            <ul>
                                {login && <li><strong>Username:</strong> {login}</li>}
                                {company && <li><strong>Компания:</strong> {company}</li>}
                                {blog && <li><strong>Website:</strong> {blog}</li>}
                            </ul>
                            <div className='mb-3'>
                                <a href={html_url} rel="noopener noreferrer" target='_blank' className='btn btn-dark'>Открыть профиль</a>
                            </div>
                            <div className='badge badge-primary mr-3'>Подписчики: {followers}</div>
                            <div className='badge badge-success mr-3'>Подписан: {following}</div>
                            <div className='badge badge-info mr-3'>Репозитории: {public_repos}</div>
                            <div className='badge badge-dark'>Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            {repos.join(' ')}
        </React.Fragment>
    )
}