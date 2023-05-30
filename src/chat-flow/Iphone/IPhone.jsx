import React from 'react'
import './iPhone.css'

import { icons } from '../../react-flow/Shapes/icons';

const Stats = icons.stats;
const Wifi = icons.wifi;
const Battery = icons.battery;
const BackButton = icons.back;
const Video = icons.video;
const Audio = icons.audio;
const Emoji = icons.emoji;
const Attachment = icons.attachment;
const Camera = icons.cam;
const Mic = icons.mic;

const IPhone = ({ children }) => {
    return (
        <div className="device device-iphone-14-pro device-silver1">
            <div className="device-frame">
                <div className="device-screen">
                    <div className="device-head">
                        <div className="device-header-section">
                            <div className="time">
                                <span>10:00</span>
                            </div>
                            <div className="device-header-cell">
                            </div>

                            <div className="stats">
                                <Stats />
                                <Wifi />
                                <Battery />
                            </div>
                        </div>

                        <div className="chat-header">
                            <div className="back-button">
                                <span><BackButton /></span>
                                <span>12</span>
                            </div>


                            <div className="profile-info">
                                <div className="profile-pic">
                                    <span>DK</span>
                                </div>

                                <div className="profile-details">
                                    <div className="profile-name">
                                        <span>ACME Bank</span>
                                    </div>
                                    <div className="status">online</div>
                                </div>

                            </div>

                            <div className="profile-actions">
                                <Video />
                                <Audio />
                            </div>
                        </div>
                    </div>

                    <div className="device-body">
                        {children}
                    </div>

                    <div className="device-footer">
                        <div className="chat-input">
                            <Emoji />
                            <div className="chat-placeholder">Type your message here...</div>
                            <Attachment />
                            <Camera />
                        </div>


                        <div className="mic-input">
                            <Mic />
                        </div>
                    </div>
                </div>
            </div>
            <div className="device-stripe"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
        </div>
    )
}

export default IPhone;