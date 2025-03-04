import React from 'react';
import "./mainStyles.css"
import alertTriangle from '../assets/alert-triangle.svg';
import refresh from '../assets/Refresh.png';

const Error = ({onRetry}) => {
    return (
        <div>
            <div className="parent-error">
                <div className="error ">
                    <img
                        src={alertTriangle}
                        alt="alertTriangle"
                        className="alert-triangle"
                    /> <span className="h-[22px] w-[394px]">Ошибка: не удалось загрузить информацию</span>
                </div>
                <button className="refresh-button"
                        onClick={onRetry}>
                                <span className="refresh-arrow">
                                    Обновить <img
                                    src={refresh}
                                    alt="refreshImage"
                                    className="refresh-img"
                                />
                                </span>
                </button>
            </div>
        </div>
    );
};

export default Error;
