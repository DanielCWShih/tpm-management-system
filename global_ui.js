/**
 * System TPM Guild - Global Navigation & Auth Injection Engine
 * 定版代碼代號: 0528-V1.0
 * 權責範圍: 全網域動態注入頂部控制列、多國語系零像素位移持久化同步、身分安全識別
 */

// 中央共通雙語文字矩陣模型
const globalUiTranslations = {
    tw: { "nav-home": "首頁", "auth-locked": "🔒 未讀取公會憑證", "rank-default": "冒險者" },
    en: { "nav-home": "Home", "auth-locked": "🔒 No Credentials", "rank-default": "Adventurer" }
};

/**
 * 👑 全自動動態結構注入核心
 * 說明：網頁一旦載入本腳本，會自動在 <body> 的最前方生出剛性頂部控制列，免去手動維修結構的痛苦。
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. 偵測或建立頂部注入掛載點
    let targetHeader = document.querySelector('.tactical-header');
    if (!targetHeader) {
        targetHeader = document.createElement('div');
        targetHeader.className = 'tactical-header';
        document.body.insertBefore(targetHeader, document.body.firstChild);
    }

    // 2. 獲取目前網頁檔案名稱，用來自動給予對應的系統版本編碼標記
    const pagePath = window.location.pathname;
    const pageName = pagePath.substring(pagePath.lastIndexOf('/') + 1) || 'index.html';
    
    let sysTag = "SYS.MAIN_PORTAL";
    let sysTitleTw = "System TPM 公會總部";
    let sysTitleEn = "System TPM Guild";

    if (pageName.includes('talent_tree')) {
        sysTag = "SYS.ATLAS_TREE"; sysTitleTw = "公會技能星盤天賦樹"; sysTitleEn = "Adventurer Talent Tree";
    } else if (pageName.includes('beginner_codex')) {
        sysTag = "SYS.BEGINNER_CODEX"; sysTitleTw = "初心者寶典大廳"; sysTitleEn = "Beginner's Codex";
    } else if (pageName.includes('handbook')) {
        sysTag = "SYS.HANDBOOK"; sysTitleTw = "冒險者手冊大廳"; sysTitleEn = "Adventurer's Handbook";
    } else if (pageName.includes('Library')) {
        sysTag = "SYS.LEXICON_LIBRARY"; sysTitleTw = "大圖書館術語圖鑑庫"; sysTitleEn = "Knowledge Lexicon Library";
    } else if (pageName.includes('resource_allocation')) {
        sysTag = "SYS.STRATEGY_DESK"; sysTitleTw = "G.M. 公會長戰略調度室"; sysTitleEn = "G.M. Strategy Desk";
    }

    // 3. 剛性結構 HTML 拼裝注入 (銲死 50px 按鈕，徹底消滅中英佈局移位)
    targetHeader.innerHTML = `
        <div>
            <span style="font-family: monospace; font-weight: 900; color: var(--text-secondary);">${sysTag} V1.0</span>
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

    // 4. 啟動語系持久化繼承監聽器
    syncGlobalLanguageState(localStorage.getItem('tpm-lang-pref') || 'tw');
});

/**
 * 👑 多國語系持久化同步引擎 (0 像素位移調校)
 */
function syncGlobalLanguageState(lang) {
    // A. 修正按鈕 active 樣式
    const twBtn = document.getElementById('global-btn-tw');
    const enBtn = document.getElementById('global-btn-en');
    if (twBtn && enBtn) {
        twBtn.classList.remove('active');
        enBtn.classList.remove('active');
        document.getElementById(`global-btn-${lang}`).classList.add('active');
    }

    // B. 自動翻譯控制列頂層靜態元素
    const homeBtn = document.getElementById('global-nav-home-btn');
    if (homeBtn) homeBtn.innerText = globalUiTranslations[lang]["nav-home"];

    // C. 自動連動大頁面標題
    const titleEl = document.getElementById('global-inject-title');
    if (titleEl) {
        const pageName = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
        if (pageName.includes('talent_tree')) { titleEl.innerText = lang === 'tw' ? "公會技能星盤天賦樹" : "Adventurer Talent Tree"; }
        else if (pageName.includes('beginner_codex')) { titleEl.innerText = lang === 'tw' ? "初心者寶典大廳" : "Beginner's Codex Hall"; }
        else if (pageName.includes('handbook')) { titleEl.innerText = lang === 'tw' ? "冒險者手冊大廳" : "Adventurer's Handbook Hall"; }
        else if (pageName.includes('Library')) { titleEl.innerText = lang === 'tw' ? "大圖書館術語圖鑑庫" : "Knowledge Lexicon Library"; }
        else if (pageName.includes('resource_allocation')) { titleEl.innerText = lang === 'tw' ? "G.M. 公會長戰略調度室" : "G.M. Strategy Desk"; }
    }

    // D. 👑 核心優化：身分卡認證狀態動態轉換（維持頭銜＋名稱，嚴格遮蔽 Email 顯示）
    const cachedName = localStorage.getItem('tpm-user-name');
    const cachedRank = localStorage.getItem('tpm-user-rank') || globalUiTranslations[lang]["rank-default"];
    const profileCard = document.getElementById('global-user-profile-card');
    
    if (profileCard) {
        if (cachedName) {
            let rankTag = cachedRank;
            if (window.location.pathname.includes('resource_allocation')) { rankTag = "G.M."; }
            else if (rankTag === "冒險者" || rankTag === "Adventurer") { rankTag = (lang === 'tw') ? "冒險者" : "Adventurer"; }
            
            profileCard.innerHTML = `👤 ${rankTag}：${cachedName}`;
        } else {
            profileCard.innerText = globalUiTranslations[lang]["auth-locked"];
        }
    }

    // E. 觸發各子頁面專屬的本地翻譯回呼（如果子網頁內建有 setLang 函式話）
    if (typeof window.setLang === 'function') {
        window.setLang(lang);
    }
}

/**
 * 點擊按鈕觸發全域廣播
 */
function executeGlobalLangSwitch(lang) {
    localStorage.setItem('tpm-lang-pref', lang);
    syncGlobalLanguageState(lang);
    
    // 如果子網頁內建有特殊的分頁或菜單渲染，強行觸發重新整理或重新渲染
    const pageName = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    if (pageName.includes('beginner_codex') && typeof window.routeController === 'function') {
        window.routeController();
    } else if (pageName.includes('handbook') && typeof window.routeController === 'function') {
        window.routeController();
    } else if (pageName.includes('Library') && typeof window.renderLexicon === 'function') {
        location.reload(); // 大圖書館直接刷新防範資料流卡死
    }
}
