import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Menu from '@components/Menu/Menu.js';
import PageHeader from '@components/Page/PageHeader.js';
import Grid from '@components/Grid/Grid.js';
import FeaturedItem from '@components/FeaturedItem/FeaturedItem.js';
import "./Home.scss";


let Home = ({ }) => {
	// 한/영 변환 모듈 초기화
	const { t, i18n, ready } = useTranslation();
	const changeLanguage = (m) => {
		i18n.changeLanguage(m);
	}
	// END OF 한영 변환
	const [filterMode, setFilterMode] = useState("All");

	return (
		<div className="Home">
			<PageHeader Section="Home" />
			<div className="HomeWrapper">
				<div className="HomeContent">
					<div className="section">
						<div className="sticky_half slogan">
							<div className="dept_title_thick">KAIST</div>
							<div className="dept_title_thin">Industrial<br /> Design</div>
							<div className="dept_title_korean">한국과학기술원 산업디자인학과</div>
							<div className="shortcuts_wrapper">
								<ul className="shortcuts">
									<li><Link to='/'>{t("Shortcuts.Graduate_Program")}</Link></li>
									<li><Link to='/'>{t("Shortcuts.Research Labs")}</Link></li>
									<li><Link to='/'>{t("Shortcuts.Notice")}</Link></li>
								</ul>
								<div className="upcoming">
									<label>Upcoming</label>
									<div className="event_title">Apply for the ID graduate program by April 9th</div>
									<a className="learn_more">{t("General.learn_more")}</a>
								</div>
							</div>
						</div> {/* END OF sticky_half */}
						<div className="scrolling_half">
							<div className="featured_items">
								<div className="main_feature">
									<div className="item_image">
										<img src="https://source.unsplash.com/random/600x800" />
									</div>
									<div className="item_details">
										<div className="item_kind">
											AWARD
										</div>
										<div className="item_title">
											Lee's Design Team Wins Red Dot Design Award
										</div>
										<div className="item_desc">
											우리 대학 이상수 산업디자인학과 교수가 이끄는 디자인팀이 ʻ레드닷 디자인 어워드(Red Dot Design Award) 2021ʼ의 브랜드&커뮤니케이션 부문에서 2개의 본상(Winner)을 수상했다. 레드닷 디자인 어워드는 iF 디자인어워드와 함께 세계 최고 권위의 디자인상으로 꼽히며, 지난 4월에 제품 디자인 수상작을 발표한 데 이어 최근 브랜드&커뮤니케이션 부문 입상작을 발표했다. 이 교수 연구팀의 첫 번째 수상작인 ʻ얼라인(ALINE)’은 새로운 개념의 투자를 돕는 모바일 애플리케이션 솔루션이다. 최근 화두로 떠오르고 있는 사회적 책임 투자(ESG)를 기반으로 기존의 수익률 중심의 투자 방식에서 벗어나 사용자의 가치관을 반영해 소비를 유도하는 서비스다. 서비스 개발 및 디자인에 정은희, 남서우, 박수연, 황영주, 에드윈 트루먼(Edwin Truman), 이선옥, 최다솜 학생이 참여했고, NH투자증권과의 산학협력을 통해 진행됐다.
										</div>
										<a class="read_more" href="">{t("General.read_more")}</a>
									</div>
								</div>
								{/* 작은 아이템들 */}
								<div className="semi_featured">
									<div className="item_details">
										<div className="item_kind">NEWS</div>
										<div className="item_title">주한미국대사관 산업디자인학과 방문 </div>
									</div>
									<div className="item_image"><img src="https://source.unsplash.com/random/160x180" /></div>
								</div>
								<div className="semi_featured">
									<div className="item_details">
										<div className="item_kind">NEWS</div>
										<div className="item_title">남택진 교수팀의 MCM(이동형 음압병동)이 부족한 음압병상 부족 사태 해결에 기여</div>
									</div>
									<div className="item_image"><img src="https://source.unsplash.com/random/160x180" /></div>
								</div>
								<div className="semi_featured">
									<div className="item_details">
										<div className="item_kind">NEWS</div>
										<div className="item_title">2019년 첫 수요 융합포럼 개최 </div>
									</div>
									<div className="item_image"><img src="https://source.unsplash.com/random/160x180" /></div>
								</div>
								<div className="semi_featured">
									<div className="item_details">
										<div className="item_kind">NEWS</div>
										<div className="item_title">주한미국대사관 산업디자인과 방문</div>
									</div>
									<div className="item_image"><img src="https://source.unsplash.com/random/160x180" /></div>
								</div>
							</div>

						</div>
					</div>

					{/* 두번째 섹션 시작 */}
					<div className="section">
						<div className="sticky_half poster">
							<img src="https://source.unsplash.com/random/800x800"/>
						</div>
						<div className="scrolling_half">
							{/* 공지사항 (날짜포함) */}
							<div className="events">
								<label>NOTICE</label>
								<div className="event_item">
									<div className="date">2022.7.1 - 7.12</div>
									<div className="title">2023학년 봄학기 대학원과정 신입생 모집</div>
								</div>
								<div className="event_item">
									<div className="title">Catch the Future 세미나</div>
									<div className="description">
										주제: 원격근무(Remote Work)는 우리의 미래가 될 수 있을까? <br/>
										연사: 최종우
									</div>
								</div>
								<div className="event_item">
									<div className="date">2022.7.1 - 7.12</div>
									<div className="title">2023학년 봄학기 대학원과정 신입생 모집</div>
								</div>
								<div className="event_item">
									<div className="date">2022.8.12</div>
									<div className="title">2023학년 신입생 제출서류 목록 및 오리엔테이션</div>
								</div>
								<div className="event_item">
									<div className="date">2022.8.12</div>
									<div className="title">2023학년 신입생 제출서류 목록 및 오리엔테이션</div>
								</div>
							</div>

						</div>
					</div>

					{/* 두번째 섹션 끝 */}

					{/* 섹션:하이라이트 시작 */}
					<div className="section">
						<div className="HighlightsWrapper">
							<div className="Highlights">
								<div className="filterUI hidden">
									<ul>
										<li className={filterMode == "All" ? "active" : ""} onClick={() => { setFilterMode("All") }}>All</li>
										<li className={filterMode == "Awards" ? "active" : ""} onClick={() => { setFilterMode("Awards") }}>Awards</li>
										<li className={filterMode == "Events" ? "active" : ""} onClick={() => { setFilterMode("Events") }}>Events</li>
										<li className={filterMode == "News" ? "active" : ""} onClick={() => { setFilterMode("News") }}>News</li>
										<li className={filterMode == "Notice" ? "active" : ""} onClick={() => { setFilterMode("Notice") }}>Notice</li>
									</ul>
								</div>
								<Grid />
							</div>
						</div>
					</div>

				</div> {/* END OF HomeContent*/}

			</div>

		</div >
	);
}


export default Home;
