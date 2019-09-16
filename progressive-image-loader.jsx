import React, { Component } from 'react';
import './progressive-image-loader.css';

class ProgressiveImageLoader extends Component {
    state = {  }

    constructor (props) {
        super(props);
        this.img = new Image();
        this.imgWrapperRef = React.createRef();
    }

    componentDidMount () {
        this.imgWrapperRef.current.style.backgroundImage = `url(${this.props.lowResSrc})`;
        this.imgWrapperRef.current.style.backgroundSize = this.props.size ? this.props.size : '100% 100%';
        this.imgWrapperRef.current.style.width = this.img.style.width = this.props.size ? this.props.size.split(' ')[0] : '100%'
        this.imgWrapperRef.current.style.height = this.img.style.height = this.props.size ? this.props.size.split(' ')[1] : '100%'
        
        this.img.onload = () => {
            this.imgWrapperRef.current.append(this.img);
            this.imgWrapperRef.current.style.backgroundImage = 'none';
        }
        this.img.src = this.props.src;
    }

    render() { 
        return (<div ref={this.imgWrapperRef} className="progressive-image-loader"></div>);
    }
}

export default ProgressiveImageLoader;
