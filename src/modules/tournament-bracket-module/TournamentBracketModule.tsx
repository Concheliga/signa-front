import "./css/tournament-bracket-module.css";

const TournamentBracketModule: React.FC = () => {
    return (
        <main className="main">
            <h1 className="page-name">Название турнира</h1>
            <ul className="tabs">
                <li className="tab"><a href="#" className="tab-link">Основная информация</a></li>
                <li className="tab"><a href="#" className="tab-link">Участники</a></li>
                <li className="tab active"><a href="#" className="tab-link">Турнирная сетка</a></li>
                <li className="tab"><a href="#" className="tab-link">Результаты турнира</a></li>
            </ul>
            <h2 className="groups-title">Групповой этап</h2>
            <div className="table-container">
                <div className="table">
                    <h3 className="group-name-title">Группа А</h3>
                    <div className="table-row">
                        <div className="team">Команда 1</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 2</div>
                        <div className="score">1</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 3</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 4</div>
                        <div className="score">1</div>
                    </div>
                </div>
            
                <div className="table">
                    <h3 className="group-name-title">Группа Б</h3>
                    <div className="table-row">
                        <div className="team">Команда 1</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 2</div>
                        <div className="score">1</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 3</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 4</div>
                        <div className="score">1</div>
                    </div>
                </div>

                <div className="table">
                    <h3 className="group-name-title">Группа В</h3>
                    <div className="table-row">
                        <div className="team">Команда 1</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 2</div>
                        <div className="score">1</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 3</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 4</div>
                        <div className="score">1</div>
                    </div>
                </div>

                <div className="table">
                    <h3 className="group-name-title">Группа Г</h3>
                    <div className="table-row">
                        <div className="team">Команда 1</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 2</div>
                        <div className="score">1</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 3</div>
                        <div className="score">3</div>
                    </div>
                    <div className="table-row">
                        <div className="team">Команда 4</div>
                        <div className="score">1</div>
                    </div>
                </div>
            </div>
            <div className="round-table round">
                <ul>
                    <li className="round">
                        <ul>
                            <li className="round">
                                <ul>
                                    <li>
                                        <p>team 1.1</p>
                                    </li>
                                    <li>
                                        <p>team 1.2</p>
                                    </li>
                                </ul>
                                <p>winner1</p>
                            </li>
                            <li className="round">
                                <ul>
                                    <li>
                                        <p>team 2.1</p>
                                    </li>
                                    <li>
                                        <p>team 2.2</p>
                                    </li>
                                </ul>
                                <p>winner 2</p>
                            </li>
                        </ul>
                        <p>winner 1-2</p>
                    </li>
                    <li className="round">
                        <ul>
                            <li className="round">
                                <ul>
                                    <li>
                                        <p>team 3.1</p>
                                    </li>
                                    <li>
                                        <p>team 3.2</p>
                                    </li>
                                </ul>
                                <p>winner 3</p>
                            </li>
                            <li className="round">
                                <ul>
                                    <li>
                                        <p>team 4.1</p>
                                    </li>
                                    <li>
                                        <p>team 4.2</p>
                                    </li>
                                </ul>
                                <p>winner 4</p>
                            </li>
                        </ul>
                        <p>winner 3-4</p>
                    </li>
                </ul>
                <p>final winner</p>
            </div>
        </main>
    );
};

export default TournamentBracketModule;