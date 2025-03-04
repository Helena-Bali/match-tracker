import React, {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {useState} from "react";
import {useMatches, useStore} from '../hooks/useStore';
import Toggled from "./Toggled"
import {statusColors} from './mainUtils'
import Error from './Error'
import "./mainStyles.css"
import logo from "../assets/illustrations_role.svg"
import arrowUp from "../assets/arrowUp.png"
import arrowDown from "../assets/arrowDown.svg"
import {getMatches} from "../redux/dataSlice"

export default function Main() {
    const [expandedMatches, setExpandedMatches] = useState(new Set())
    const dispatch = useDispatch()
    const fetchMatches = useCallback(() => {
        dispatch(getMatches());
    }, [dispatch]);

    useEffect(() => {
        fetchMatches()
    },[fetchMatches])

    const matches = useMatches()
    const store = useStore()
    const status = store.status

    const toggleExpand = useCallback((index) => {
        setExpandedMatches((prev) => {
            const newExpanded = new Set(prev);
            if (newExpanded.has(index)) {
                newExpanded.delete(index);
            } else {
                newExpanded.add(index);
            }
            return newExpanded;
        });
    }, []);

    return (
        <div className="main-parent">
            <div className="top">
                <h1 className="name">Match Tracker</h1>
                {status === 'failed' && <Error onRetry={() => dispatch(getMatches())} />}
            </div>

            <div className="matches-block">
                {matches.map((match, index) => (
                    <div>
                    <div key={index} className="matches-div">
                        <div className="command-div">
                            <img
                                src={logo}
                                alt="Team 1 Logo"
                                className="team-logo"
                            />
                            {match.awayTeam.name}
                        </div>

                        <div className="score-block">
                            <div className="score">
                                {match.awayScore} : {match.homeScore}</div>
                            <div
                                className={`status-bg ${statusColors[match.status]}`}
                            >
                                <span className="status">{match.status}</span>
                            </div>
                        </div>
                        <div className="command2-div">
                            {match.homeTeam.name}
                            <img
                                src={logo}
                                alt="Team 2 Logo"
                                className="team-logo"
                            />
                            <button onClick={() => toggleExpand(index)}>
                                <img
                                    src={expandedMatches.has(index) ? arrowUp : arrowDown}
                                    alt="expand"
                                    className="expand-arrow"
                                />
                            </button>
                        </div>
                    </div>
                {expandedMatches.has(index) && <Toggled match={match}/>}
                    </div>
                ))}
            </div>
        </div>
    );
}
