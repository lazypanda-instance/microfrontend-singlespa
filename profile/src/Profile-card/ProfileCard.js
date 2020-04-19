import React, { Component } from 'react'
import { Scoped } from 'kremling';
import Styles from './profile-card.krem.css';

class ProfileCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const profileDetails = this.props.profile;

        const txtColor = {
            color: 'white'
        }

        return (
            <Scoped css={Styles}>
                <div className='row'>
                    <div className='col-sm col-md'>
                        <div className='panel'>
                            <div className="d-none d-md-block d-sm-block">
                                <div className="widget-header bg-primary">
                                    <label style={txtColor}>App -3: Profile (React)</label>
                                </div>
                                <div className="widget-body text-center">
                                    <img alt="Profile Picture" className="widget-img img-circle img-border-light" src={profileDetails.profileImage} />
                                    <h4 className="mar-no">{profileDetails?.profileName}</h4>
                                    <p className="text-muted">{profileDetails?.role}</p>

                                    {/* <div className="d-flex pad-ver">
                                            <button className="btn btn-primary">Follow</button>
                                            <button className="btn btn-success">Message</button>
                                    </div> */}

                                    <div className='row'>
                                        <div className='col-4'>
                                            <div className='lbl-top'>Posts</div>
                                            <div className='lbl-text'>{profileDetails?.post?.noOfPost}</div>
                                        </div>
                                        <div className='col-4'>
                                            <div className='lbl-top'>Visitors</div>
                                            <div className='lbl-text'>{profileDetails?.visitors?.noOfVisitors}</div>
                                        </div>
                                        <div className='col-4'>
                                            <div className='lbl-top'>Likes</div>
                                            <div className='lbl-text'>{profileDetails?.likes?.noOfLikes}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-block d-sm-none mobile-header-style'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <div className='lbl-top'>Posts</div>
                                        <div className='lbl-text'>{profileDetails?.post?.noOfPost}</div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='lbl-top'>Visitors</div>
                                        <div className='lbl-text'>{profileDetails?.visitors?.noOfVisitors}</div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='lbl-top'>Likes</div>
                                        <div className='lbl-text'>{profileDetails?.likes?.noOfLikes}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Scoped>
        )
    }
}

export default ProfileCard;
