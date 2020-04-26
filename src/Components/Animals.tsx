import React, { useEffect, useState } from "react";

const Animals = () => {

    var [image, setImage] = useState({
        id: 0,
        url: "",
        tags: ""
    });
    var [count, setCount] = useState(0);


    useEffect(() => {

        const url: string = 'https://mlemapi.p.rapidapi.com/randommlem';
        const specs: object = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mlemapi.p.rapidapi.com",
                "x-rapidapi-key": "ed72fe8d65msh9f0ecb50dd7c28fp1dabd8jsn14921d62feb3"
            }
        }

        fetch(url, specs)
            .then((response: any) => {
                return response.json();
            })
            .then((json: any) => {
                setImage(json)
            })
    }, [count])



    const loaded = < div ><button onClick={() => { setCount(count + 1) }}>New Image</button><div>< img key={image.id} src={image.url} alt={image.tags} /></div></div >


    const loading = <div><p>Click for an Image</p><button onClick={() => { setCount(count + 1) }}>New Image</button></div>

    if (count === 0) return loading

    return (

        < div >


            {loaded}

        </div >

    )
}

export default Animals;