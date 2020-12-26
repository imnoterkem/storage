import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { firebase, auth, storage } from './firebase'
import File from './file'

const Home = () => {

    const history = useHistory()
    const [name, setname] = useState();
    const [uid, setuid] = useState();
    const [files, setFiles] = useState([])

    useEffect(() => {
        const listRef = storage.ref(`${uid}`)
        setFiles([])
        listRef.listAll().then((res) => {
            setFiles(res.items)
        });
    }, [uid])

    const signout = () => {
        firebase.auth().signOut()
    }

    auth.onAuthStateChanged((user) => {
        if (user) {
            setname(user.email);
            setuid(user.uid)
        }
        else {
            history.push('/')
        }
    })

    const upload = (e) => {
        const fileup = e.target.files[0];
        const storageRef = storage.ref()
        if (uid && fileup) {
            storageRef.child(`${uid}/${fileup.name}`).put(fileup).then(()=>{
                window.location.reload();
            });
        }
    }


    return (
        <>
            <div>{name}</div>
            <button onClick={() => signout()}>sign out</button>
            <input type='file' onChange={upload} />
            <div>
                {files.map(el =><File  file={el}/>)}
            </div>
        </>
    )
}

export default Home