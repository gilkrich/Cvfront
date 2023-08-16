import React from 'react'
import { useEffect, useState, useRef } from 'react'
// import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
// import {Cloudinary} from "@cloudinary/url-gen";

const Upload = ({onUpload}) => {

    const cloud = useRef()
    const widget = useRef()
    useEffect(()=>{
        cloud.current = window.cloudinary
    widget.current =  cloud.current.createUploadWidget({
             cloudName :"df5ugguab" ,
             uploadPreset : "hhnju0dj"},
             function (err,results) {
                if (!err&&results&&results.event == 'success') {
                   onUpload(results.info.url)
                }
        })
    },[])


    return (
        <div>
            <button onClick={()=>widget.current.open()}>
                upload
            </button>
        </div>

    )

}

export default Upload
