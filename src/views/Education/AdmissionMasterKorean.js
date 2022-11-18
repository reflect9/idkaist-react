import React, { Component } from 'react';
import "./AdmissionMaster.scss";
import { useTranslation, Trans } from "react-i18next";

function AdmissionMasterKorean(){
    const { t, i18n, ready } = useTranslation();
    return (
    <div className="section_content">
        <h2>지원 요강</h2>
        <p>이 페이지는 한국에서 학부 과정을 마친 학생들을 위한 지원 요강입니다. 외국에서 학부를 마친 학생들은 왼편 메뉴에서 
            언어를 영어(En)로 바꿔주세요.</p>
        <h3>지원 자격</h3>
        <ul className="disc">
            <li>석사 과정 지원자는 현재 학사 학위를 소지하고 있거나, 입학 전까지 취득 예정이어야 합니다.</li>
            <li>박사 과정 지원자는 학/석사 확위를 전부 소지하고 있거나, 입학 전까지 취득 예정이어야 합니다.</li>
            <li>대한민국 시민이거나 재외국민이 아닌 지원자는 링크된 페이지의 <a href="https://admission.kaist.ac.kr/intl-graduate/Eligibility/">지원 요건</a>을 확인하세요.</li>
        </ul>
        
        <h3>대학원 지원 방식 (석사, 석/박사 연계과정, 박사 과정)</h3>
        <p>지원자는 해당 학과에 직접 지원해야합니다. 지원서류에 대한 자세한 내용은 <a href="https://admission.kaist.ac.kr/intl-graduate/required-application/" target="_blank">카이스트 입학처 페이지</a>에서 확인하실 수 있습니다. 하지만 산업디자인학과의 특성을 고려한 아래 내용을 <b>반드시 확인</b>하시기 바랍니다.</p>
            
        <h4>1단계 - 온라인 지원</h4>
            <ul>
                <li>1.a) 온라인 지원서를 작성 완료하세요</li>
                <li>1.b) 완성된 지원서를 출력해서 보관하세요</li>
                <li>1.c) 지원비(한화 8만원; 미화 80달러 가량)가 필요할 수 있습니다</li>
            </ul>
        <h4>2단계 - 출력된 지원서와 아래 서류를 우편으로 보내기</h4>
            <ul>
                <li>2.a) 지원 동기 (아래 설명 참고할 것)</li>
                <li>2.b) 최소 3명의 추천인 리스트</li>
                <li>2.c) 포트폴리오 (아래 설명 참고할 것)</li>
                <li>2.d) 재정 증명 서류 (불필요?)</li>
                <li>2.e) 추천서 2부</li>
                <li>2.f) 졸업 증명서류</li>
                <li>2.g) 성적표</li>
                <li>2.h) 영어 성적 증명서</li>
                <li>2.i) 이력서</li>
                <li>2.j) 시민권 증명서 (불필요?)</li>
                <li>2.k) 기타 서류 (선택사항)</li>
                <ul>
                    <li>(1) 장학금 및 공모전 수상 경력</li>
                    <li>(2) 재직 증명서</li>
                    <li>(3) 학/석사 졸업 학교 정보 (불필요?)</li>
                </ul>
            </ul>
        <p>
            모든 문서를 취합하여 아래 주소로 우편 송달해주시기 바랍니다. 
        </p>
        <pre>
            <code>
                대학원 입학처, 한국과학기술원 <br/><br/>
                주소: 대전광역시 유성구 대학로 291, E16-1, #110, 대학원 입학팀<br/><br/>
                전화번호: +82-42-350-2352, 2354 <br/><br/>
                이메일: advanced.adm@kaist.ac.kr
            </code>
        </pre>
        <h3>지원 서류 상세</h3>
        <h4>2.a) 지원 동기</h4>
        <p>본 학과에 지원하는 목적과 동기에 대해서 자세하고 정확하게 기술해주세요. 아래 리스트에 대한 내용을 포함할 것을 권장합니다.</p>
        <ul className="disc">
            <li>이전 학위과정에서 공부한 내용</li>
            <li>카이스트 산업디자인학과 지원하는 동기</li>
            <li>대학원 과정에서 지도받기를 원하는 교수님들(최대3명)의 이름과 그 이유</li>
            <li>대략적인 학업 계획</li>
            <li>대학원 졸업 후 계획</li>
            <li>장학금 및 공모전, 논문 발표 등 실적</li>
            <li>학위를 취득한 학교에 대한 간략한 소개</li>
        </ul>
        <h4>최대 3명의 지도 교수를 명시해주세요</h4>
        <p>
            본 학과의 대학원 과정은 대부분 지도교수의 연구실에서 이루어집니다. <a href="/research">연구실 소개</a>페이지를 참고해서,함께 연구하고 싶은 교수님들을 최대 3명 적어주세요. 지원 전에 관심가는 교수님들께 미리 이메일이나 전화로 상담하는 것을 추천드립니다. 이 내용은 별도의 문서로 제출되거나, 지원 동기에 포함할 수 있습니다. 
        </p>
        <h4>포트폴리오</h4>
        <p>
            산업디자인학과의 교수님들이 제출된 포트폴리오에 기반해서 지원자의 능력과 해당 랩에 적합한지 여부를 결정하므로, 포트폴리오는 산업디자인학과 입학 여부를 결정하는데 매우 중요한 근거자료로 쓰입니다. 포트폴리오는 지원자가 지금까지 만들어낸 다양한 디자인, 연구, 그 외 다양한 형태의 결과물을 포함합니다. 여러분의 능력과 관심사, 그리고 잠재가능성을 보여줄 수 있다면 시각 디자인 결과물, 발표 슬라이드, 리포트, 소스코드, 웹사이트 등을 자유 형식으로 정리해서 제출하시기 바랍니다. 
        </p>
        
        <h4>추가 정보</h4>
        <p>
            더 자시한 정보는 카이스트 입합처의 <a href="https://admission.kaist.ac.kr/intl-graduate/required-application/">공식 입학 요강</a>을 참고하세요. 
        </p>
    </div>);
}

export default AdmissionMasterKorean;