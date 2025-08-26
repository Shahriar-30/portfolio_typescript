import { create } from 'zustand';

import {devtools, persist} from 'zustand/middleware'

const courseStore = (set: any) => ({
    themes: "white",
    setThemeToggle: (newTheme: string) => set({ themes: newTheme }),
})

const useTheme = create(
    devtools(
        persist(courseStore, {
            name: "themes",
        })
    )
)


export default useTheme;