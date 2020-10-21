import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

    const [repos, setRepos] = useState([])
    useEffect(() => {
        (async () => {
            const res = await axios.get('https://api.github.com/users/smrpn/repos')
            setRepos(res.data)
        })()
    }, [])


    const listMarkup = repos.length > 0 ? (
        repos.map(repo => (!repo.fork) ? (
            <div className="card shadow p-3 mb-5 bg-white rounded" key={repo.id}>
                <div className="card-body">
                    <Link to={`/${repo.name}`}>
                        <h5 className="btn btn-primary">{repo.name}</h5></Link>
                    <p className="card-text">{repo.description}</p>
                    <p className="card-text">{repo.id}</p>

                </div>
            </div >
        ) : <div style={{ display: "none" }}>..</div>
        )
    ) : (<div className='center'>No posts found</div>)
    return (
        <div className='container'>
            <h4 className='center'>Home</h4>
            <p>this is the home page</p>

            {listMarkup}
        </div>
    )
}

export default Home
