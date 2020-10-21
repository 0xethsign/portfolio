import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Post = (props) => {
    const reponame = props.match.params.post_id

    const [repo, setRepo] = useState([])
    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://api.github.com/repos/smrpn/${reponame}`)
            console.log(res.data)
            setRepo(res.data)
        })()
    }, [reponame])


    return (
        <div>
            <div className="card">
                <div className="card-header">
                    {repo.name}
                </div>
                <div className="card-body">
                    <p className="card-text">{repo.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Post
