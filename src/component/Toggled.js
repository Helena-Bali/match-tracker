import React from 'react';
import avatar from '../assets/avatar_global.png'
import './toggledStyles.css';

const Toggled = ({match}) => {
    return (
        <div className="toggled-parent">
            <div className="inner-toggled-parent">
                <div className="team-container">
                    <div className="user-parent-cont">
                        {match.awayTeam.players.map((player, i) => (
                            <div key={i} className="user-container">
                                <div className="avatar-container">
                                    <img
                                        src={avatar}
                                        alt="avatar"
                                        className="avatar"/>
                                    <span className="text-white">
                                            {player.username}
                                     </span>
                                </div>
                                <span className="murders-container">
                                        Убийств:
                                        <span className="text-white ml-1">{player.kills}</span>
                                    </span>
                            </div>
                        ))}
                    </div>
                    <div className="score-container">
                        <div className="score-item">Points:
                            <span className="score-number">
                                    {match.awayTeam.points}
                                </span>
                        </div>
                        <div className="score-item">Место:
                            <span className="score-number">
                                    {match.awayTeam.place}
                                </span>
                        </div>
                        <div className="score-item">Всего убийств:
                            <span className="score-number">
                                    {match.awayTeam.total_kills}
                                </span>
                        </div>
                    </div>
                </div>
                <div className="team-container">
                    <div className="user-parent-cont">
                        {match.homeTeam.players.map((player, i) => (
                            <div key={i} className="user-container">
                                <div className="avatar-container w-[48%]">
                                    <img
                                        src={avatar}
                                        alt="avatar"
                                        className="avatar"/>
                                    <span className="text-white">
                                           {player.username}
                                     </span>
                                </div>
                                <span className="murders-container">
                                        Убийств:
                                        <span className=" text-white ml-1">{player.kills}</span>
                                    </span>
                            </div>
                        ))}
                    </div>
                    <div className="score-container">
                        <div className="score-item">Points:
                            <span className="score-number">
                                    {match.homeTeam.points}
                                </span>
                        </div>
                        <div className="score-item">Место:
                            <span className="score-number">
                                    {match.homeTeam.place}
                                </span>
                        </div>
                        <div className="score-item">Всего убийств:
                            <span className="score-number">
                                    {match.homeTeam.total_kills}
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toggled;
