import React from "react"
import { useSpring, animated, config } from 'react-spring'

export default function FadeIn({ children }) {
    const styles = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100,
        config: config.molasses,
    })

    return (
        <animated.div style={styles}>{children}</animated.div>
    );
}