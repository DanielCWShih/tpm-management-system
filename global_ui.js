/**
 * System TPM Guild - Global Navigation & Auth Injection Engine
 * 定版代碼代號: 0528-V1.1 // 30次極限除錯優化定版
 */

const globalUiTranslations = {
    tw: { "nav-home": "首頁", "auth-locked": "🔒 未讀取公會憑證", "rank-default": "冒險者", "logo-mark": "GUILD HQ / LEVEL 2026", "main-title": "System TPM 公會總部", "subtitle": "Daniel Shih | 2026 年度高效管理與團隊修煉套件" },
    en: { "nav-home": "Home", "auth-locked": "🔒 No Credentials", "rank-default": "Adventurer", "logo-mark": "GUILD HQ / LEVEL 2026", "main-title": "System TPM Guild", "subtitle": "Daniel Shih | 2026 Tactical Management & Training Suite" }
};

document.addEventListener('DOMContentLoaded', () => {
    const pagePath = window.location.pathname;
    const pageName = pagePath.substring(pagePath.lastIndexOf('/') + 1) || 'index.html';
    const currentLang = localStorage.getItem('tpm-lang-pref') || 'tw';

    // 智能判定 A：首頁大廳
    if (pageName === 'index.html' || pageName === '') {
        let homeHeaderSection = document.getElementById('global-injected-home-header');
        if (!homeHeaderSection) {
            homeHeaderSection = document.createElement('header');
            homeHeaderSection.id = 'global-injected-home-header';
            homeHeaderSection.style.cssText = "text-align: center; margin-bottom: 30px; width: 100%; padding-top: 40px; position: relative;";
            
            homeHeaderSection.innerHTML = `
                <div class="lang-switcher-wrapper" style="position: absolute; top: 20px; right: 40px; z-index: 100;">
                    <button class="lang-btn-core" id="global-btn-tw" onclick="executeGlobalLangSwitch('tw')">TW</button>
                    <button class="lang-btn-core" id="global-btn-en" onclick="executeGlobalLangSwitch('en')">EN</button>
                </div>
                <div id="global-user-profile-card" class="auth-panel" style="position: absolute; top: 20px; right: 160px; z-index: 100;">🔒 認證讀取中...</div>
                
                <div class="logo-mark" id="home-logo-mark-text" style="font-size: 0.9rem; font-weight: 900; letter-spacing: 5px; text-transform: uppercase; margin-bottom: 12px; color: var(--text-secondary); font-family: monospace;">GUILD HQ / LEVEL 2026</div>
                <h1 style="font-size: 3.2rem; margin: 0; font-weight: 900; letter-spacing: -1px;" id="home-main-title-text">System TPM 公會總部</h1>
                <div class="subtitle" id="home-subtitle-text" style="font-size: 1.1rem; color: var(--text-secondary); font-weight: 700; margin-top: 15px;">Daniel Shih | 2026 年度高效管理與團隊修煉套件</div>
            `;
            
            const pageContainer = document.querySelector('.page-container');
            if (pageContainer) pageContainer.insertBefore(homeHeaderSection, pageContainer.firstChild);
        }
    } 
    // 智能判定 B：子網頁地圖
    else {
        let targetHeader = document.querySelector('.tactical-header');
        if (!targetHeader) {
            targetHeader = document.createElement('div');
            targetHeader.className = 'tactical-header';
            document.body.insertBefore(targetHeader, document.body.firstChild);
        }

        let sysTag = "SYS.MAIN_PORTAL"; let sysTitleTw = "System TPM 公會總部";
        if (pageName.includes('talent_tree')) { sysTag = "SYS.ATLAS_TREE"; sysTitleTw = "公會技能星盤天賦樹"; }
        else if (pageName.includes('beginner_codex')) { sysTag = "SYS.BEGINNER_CODEX"; sysTitleTw = "初心者寶典大廳"; }
        else if (pageName.includes('handbook')) { sysTag = "SYS.HANDBOOK"; sysTitleTw = "冒險者手冊大廳"; }
        else if (pageName.includes('Library')) { sysTag = "SYS.LEXICON_LIBRARY"; sysTitleTw = "大圖書館術語圖鑑庫"; }

        targetHeader.innerHTML = `
            <div>
                <span style="font-family: monospace; font-weight: 900; color: var(--text-secondary);">${sysTag} V1.2</span>
                <h1 style="margin: 5px 0 0 0; font-size: 2.2rem; font-weight: 900;" id="global-inject-title">${sysTitleTw}</h1>
            </div>
            <div class="header-controls">
                <div class="lang-switcher-wrapper">
                    <button class="lang-btn-core" id="global-btn-tw" onclick="executeGlobalLangSwitch('tw')">TW</button>
                    <button class="lang-btn-core" id="global-btn-en" onclick="executeGlobalLangSwitch('en')">EN</button>
                </div>
                <div id="global-user-profile-card" class="auth-panel">🔒 認證讀取中...</div>
                <a href="index.html" class="back-btn" id="global-nav-home-btn">首頁</a>
            </div>
        `;
    }

    syncGlobalLanguageState(currentLang);
});

function syncGlobalLanguageState(lang) {
    const twBtn = document.getElementById('global-btn-tw');
    const enBtn = document.getElementById('global-btn-en');
    if (twBtn && enBtn) {
        twBtn.classList.remove('active'); enBtn.classList.remove('active');
        document.getElementById(`global-btn-${lang}`).classList.add('active');
    }

    const homeBtn = document.getElementById('global-nav-home-btn');
    if (homeBtn) homeBtn.innerText = globalUiTranslations[lang]["nav-home"];

    const homeMark = document.getElementById('home-logo-mark-text');
    const homeTitle = document.getElementById('home-main-title-text');
    const homeSub = document.getElementById('home-subtitle-text');
    if (homeMark && homeTitle && homeSub) {
        homeMark.innerText = globalUiTranslations[lang]["logo-mark"];
        homeTitle.innerText = globalUiTranslations[lang]["main-title"];
        homeSub.innerText = globalUiTranslations[lang]["subtitle"];
        // 👑 擴充：同步連動更新首頁瀏覽器分頁 Tab 標籤
        document.title = globalUiTranslations[lang]["main-title"];
    }

    const titleEl = document.getElementById('global-inject-title');
    if (titleEl) {
        const pageName = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
        if (pageName.includes('talent_tree')) { titleEl.innerText = lang === 'tw' ? "公會技能星盤天賦樹" : "Adventurer Talent Tree"; document.title = titleEl.innerText; }
        else if (pageName.includes('beginner_codex')) { titleEl.innerText = lang === 'tw' ? "初心者寶典大廳" : "Beginner's Codex Hall"; document.title = titleEl.innerText; }
        else if (pageName.includes('handbook')) { titleEl.innerText = lang === 'tw' ? "冒險者手冊大廳" : "Adventurer's Handbook Hall"; document.title = titleEl.innerText; }
        else if (pageName.includes('Library')) { titleEl.innerText = lang === 'tw' ? "大圖書館術語圖鑑庫" : "Knowledge Lexicon Library"; document.title = titleEl.innerText; }
    }

    const cachedName = localStorage.getItem('tpm-user-name');
    const cachedRank = localStorage.getItem('tpm-user-rank') || globalUiTranslations[lang]["rank-default"];
    const profileCard = document.getElementById('global-user-profile-card');
    
    if (profileCard) {
        if (cachedName) {
            let rankTag = cachedRank;
            if (rankTag === "冒險者" || rankTag === "Adventurer") { rankTag = (lang === 'tw') ? "冒險者" : "Adventurer"; }
            profileCard.innerHTML = `👤 ${rankTag}：${cachedName}`;
        } else {
            profileCard.innerText = globalUiTranslations[lang]["auth-locked"];
        }
    }

    if (typeof window.setLang === 'function') { window.setLang(lang); }
}

function executeGlobalLangSwitch(lang) {
    localStorage.setItem('tpm-lang-pref', lang);
    syncGlobalLanguageState(lang);
    const pageName = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    
    // 👑 終極修正：大圖書館不再採取低效白閃重新整理，直接就地執行本地 setLang 渲染，保證體驗絲滑
    if ((pageName.includes('beginner_codex') || pageName.includes('handbook')) && typeof window.routeController === 'function') {
        window.routeController();
    } else if (pageName.includes('Library') && typeof window.setLang === 'function') {
        window.setLang(lang); 
    }
}
