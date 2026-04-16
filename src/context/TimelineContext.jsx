'use client'

import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

// Create context.
export const UserTimeline = createContext()

// custom hook for UserTimeline;
export const useTimeline = () => useContext(UserTimeline);

// create provider
export const UserTimelineProvider = ({ children }) => {

    // handle call
    const [call, setCall] = useState([])
    const HandleCall = (newCall) => {
        setCall([...call, newCall]);
        toast.success(`Call with ${newCall}`)
    }

    // handle text
    const [text, setText] = useState([])
    const HandleText = (newText) => {
        setCall([...text, newText]);
        toast.success(`Text with ${newText}`)
    }

    // handle video
    const [video, setVideo] = useState([])
    const HandleVideo = (newVideo) => {
        setCall([...video, newVideo]);
        toast.success(`Video call with ${newVideo}`)
    }

    const values = {
        HandleCall,
        call,
        setCall,
        HandleText,
        text,
        setText,
        HandleVideo,
        video,
        setVideo
    }

    return (
        <UserTimeline.Provider value={values} >
            {children}
        </UserTimeline.Provider>
    )
}