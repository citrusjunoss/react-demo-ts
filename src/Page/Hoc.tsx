import React from 'react'


interface HocProps {
    children: React.ReactNode
}

/**
 * @names hoc
 */

class Hoc extends React.Component {
    constructor(props: HocProps) {
        super(props)
    }
    // 是否更新
    shouldComponentUpdate() {
        return false
    }

    render() {
        return <div>
            Hoc
        </div>
    }
}

export default Hoc;