import React, { useState } from 'react'
import Axios from "axios";
import { Image } from "cloudinary-react"

export default function Upload() {
    const [imageSelect, setImageSelect] = useState("")
    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelect)
        formData.append("upload_present", "SkateD8")
        Axios.post("https://api.cloudinary.com/v1_1/dqfrxpfw5/image/upload", formData)
            .then((response) => {
                console.log(response)
            });
    };

    return (
        <div>
            <input
                type="file"
                onChange={(event) => {
                    setImageSelect(event.target.files[0]);
                }}
            />
            <button onClick={uploadImage}>Upload Profile image</button>
            <Image style={{ width: 200 }} cloudName="dqfrxpfw5" publicId="" />
        </div>
    )
}
