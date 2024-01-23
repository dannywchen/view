import { create } from "zustand";

const useCameraTransitionState = create((set, get) => ({
    position: [-0.02, -0.01, 0.02],
    previousPosition: [0, 0, 0],
    setPosition: (position) => {
        set({ previousPosition: get().position });
        set({ position: position });
    },
    rotation: -0.2,
    previousRotation: -0.2,
    setRotation: (rotation) => {
        set({ previousRotation: get().rotation });
        set({ rotation: rotation });
    },
    scale: 150,
    previousScale: 150,
    setScale: (scale) => {
        set({ previousScale: get().scale });
        set({ scale: scale });
    },
}));

export default useCameraTransitionState;