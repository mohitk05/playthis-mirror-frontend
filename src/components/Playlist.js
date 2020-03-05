import React from 'react'
import { Button } from 'antd';

class Playlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playlist: []
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="playlist">
                {!this.props.isMirror && <div style={{ display: 'flex' }}><h2>Playlist</h2> &nbsp;&nbsp;
                <Button icon="reload" onClick={this.props.refresh} /></div>}
                <div className="innerPlaylist">
                    {this.props.videoDetails.map((p, i) => {
                        return (
                            <div key={i} className={this.props.isOwner ? "playlistItem hoverpointer" : "playlistItem"} onClick={() => this.props.isOwner ? this.props.shiftCurrentActive(i) : null}>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}><img style={i !== this.props.currentVideoId ? { filter: 'grayscale(1)' } : {}} src={p.thumbnails.default.url} />
                                    <h6 style={{ marginLeft: '1rem', maxWidth: '60%', opacity: i === this.props.currentVideoId ? 1 : 0.6, color: this.props.isMirror ? 'white' : 'black' }}>{p.title}</h6></div>
                                {this.props.isOwner && !this.props.isMirror ? <Button icon="close" onClick={() => this.props.modifyPlaylist('remove', { id: i })} /> : null}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Playlist