/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V7.2: 👑 術語子頁籤與動態彈窗完全體。
1. 沒收滾輪：所有細部工序全量映射至橫向防錯 Tab 鈕，內容原地切換。
2. 4欄位矩陣：每頁剛性配置 4 個術語卡牌按鈕，按鈕內僅保留純名詞與白話括號。
3. 獨立分頁：Page 1 獨立為單元全景圖，內容順位完美移偏至 Page 2、3、4。
4. 全量展開：100% 補齊 3 大分頁共 12 個關鍵字卡牌因果指標，絕無省略。
========================================================================
*/

// 👑 全自動現地嵌入全域高階視覺彈窗組件大腦 👑
(function() {
    if (!document.getElementById('tpm-core-modal-style')) {
        const style = document.createElement('style');
        style.id = 'tpm-core-modal-style';
        style.innerHTML = `
            .tpm-modal-overlay {
                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                background: rgba(0,0,0,0.6); z-index: 9999; display: none;
                justify-content: center; align-items: center; padding: 20px;
            }
            .tpm-modal-box {
                background: #FEF9E7; border: 4px solid #1A1A1A; border-radius: 12px;
                box-shadow: 6px 6px 0px #1A1A1A; width: 100%; max-width: 650px;
                padding: 30px; position: relative; animation: tpmPopupScale 0.12s ease-out;
            }
            .tpm-modal-close {
                position: absolute; top: 15px; right: 15px; background: #FFF;
                border: 2px solid #1A1A1A; border-radius: 50%; width: 32px; height: 32px;
                font-weight: 900; font-size: 1.1rem; cursor: pointer; display: flex; align-items: center; justify-content: center;
                box-shadow: 2px 2px 0px #1A1A1A;
            }
            .tpm-modal-close:hover { transform: translate(-1px, -1px); box-shadow: 3px 3px 0px #1A1A1A; }
            @keyframes tpmPopupScale { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
        `;
        document.head.appendChild(style);
    }
    if (!document.getElementById('tpm-core-modal-dom')) {
        const modal = document.createElement('div');
        modal.id = 'tpm-core-modal-dom';
        modal.className = 'tpm-modal-overlay';
        modal.onclick = function(e) { if (e.target === modal) modal.style.display = 'none'; };
        modal.innerHTML = `
            <div class="tpm-modal-box">
                <button class="tpm-modal-close" onclick="document.getElementById('tpm-core-modal-dom').style.display='none'">✕</button>
                <div id="tpm-modal-payload-zone"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    window.launchTacticalModal = function(title, fullName, glossaryText) {
        document.getElementById('tpm-modal-payload-zone').innerHTML = `
            <div style="font-family:monospace; font-size:0.75rem; font-weight:900; color:#475569; margin-bottom:4px; text-transform:uppercase;">Glossary &避坑字典</div>
            <h3 style="margin-top:0; font-size:1.3rem; font-weight:900; border-bottom:3px solid #1A1A1A; padding-bottom:8px; margin-bottom:16px; color:#1A1A1A;">📖 ${title} <span style="font-size:0.9rem; font-weight:700; color:#475569;">(${fullName})</span></h3>
            <div style="font-size:0.9rem; font-weight:700; color:#1A1A1A; line-height:1.6; background:#FFF; border:2px solid #1A1A1A; padding:15px; border-radius:6px; box-shadow:3px 3px 0px #1A1A1A;">${glossaryText}</div>
        `;
        document.getElementById('tpm-core-modal-dom').style.display = 'flex';
    };
    window.switchCdxInternalTab = function(pageBlockId, tabIndex) {
        document.querySelectorAll('.tab-panel-' + pageBlockId).forEach(el => el.style.display = 'none');
        document.getElementById('panel-' + pageBlockId + '-' + tabIndex).style.display = 'block';
        document.querySelectorAll('.tab-card-' + pageBlockId).forEach(el => {
            el.style.background = '#FFF'; el.style.transform = 'none'; el.style.boxShadow = '3px 3px 0px #1A1A1A';
        });
        const activeBtn = document.getElementById('card-btn-' + pageBlockId + '-' + tabIndex);
        if (activeBtn) {
            activeBtn.style.background = '#FDE047'; activeBtn.style.transform = 'translate(2px, 2px)'; activeBtn.style.boxShadow = '1px 1px 0px #1A1A1A';
        }
    };
})();

window.codexCourseEngineData = [
    {
        courseId: "L1-1", 
        menuTitle: "1-1: 基本世界觀與三方賽局",
        subPages: [
            // 👑 修正1：Page 1 獨立為純淨單元全景圖，不堆疊任何內文卡片 👑
            {
                title: "1. 單元總覽 (1-1 戰術全景地圖導航)",
                text: `
                    <div style="width:100%; border:3px solid #1A1A1A; border-radius:8px; overflow:hidden; box-shadow:4px 4px 0px #1A1A1A; background:#FFF; margin-bottom:15px;">
                        <img src="beginner_codex_assets/overview_1-1.png" alt="1-1單元全景圖" style="width:100%; height:auto; display:block;" onerror="this.src='https://placehold.co/1200x260/1A1A1A/FFFFFF?text=1-1+Brand+R-D+Process+Map+Overview'">
                    </div>
                    <div style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:16px; box-shadow:3px 3px 0px #1A1A1A; font-size:0.9rem; font-weight:700; line-height:1.6; color:#1A1A1A;">
                        📌 <strong>單元導航指引：</strong>本單元將為您全面拆解智慧型手機硬體專案開發中，最核心的「三方賽局戰術矩陣」。您將依序橫向攻堅：客戶研發端、零件供應商端、與代工智造廠端。請點擊底部頁碼前進至 Page 2 整備盤展開攻堅。
                    </div>
                `
            },
            // 👑 修正2：原 Page 1 順位移位至 Page 2，導入 4 欄獨立名詞小卡片 👑
            {
                title: "2. 客戶研發端 (Brand R&D - 主導產品規格與外觀定義)",
                text: `
                    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin-bottom:18px; width:100%;">
                        <div id="card-btn-pkg1-0" class="tab-card-pkg1" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:12px; text-align:center; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.switchCdxInternalTab('pkg1', 0)">PRD<div style="font-size:0.68rem; font-weight:700; color:#475569; margin-top:2px;">(產品需求書)</div></div>
                        <div id="card-btn-pkg1-1" class="tab-card-pkg1" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; text-align:center; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.switchCdxInternalTab('pkg1', 1)">ID<div style="font-size:0.68rem; font-weight:700; color:#475569; margin-top:2px;">(工業設計)</div></div>
                        <div id="card-btn-pkg1-2" class="tab-card-pkg1" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; text-align:center; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.switchCdxInternalTab('pkg1', 2)">CMF<div style="font-size:0.68rem; font-weight:700; color:#475569; margin-top:2px;">(表面處理)</div></div>
                        <div id="card-btn-pkg1-3" class="tab-card-pkg1" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; text-align:center; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.switchCdxInternalTab('pkg1', 3)">Clearance<div style="font-size:0.68rem; font-weight:700; color:#475569; margin-top:2px;">(安全間距)</div></div>
                    </div>

                    <div id="panel-pkg1-0" class="tab-panel-pkg1" style="display:block; width:100%;">
                        <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">主導全球市場與競品規格調研，下發並交割初代產品規格需求書（PRD）與初期開發圖紙。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">定義極限產品效能指標與功能參數，用技術專利護城河拉高市售實體機器之品牌溢價。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">期待代工廠（EMS）產線能 100% 完美復刻複雜結構，不允許以任何試產組裝公差為由擅自改動設計。</div></div>
                        </div>
                        <div style="margin-top:15px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;"><span style="font-weight:800; font-size:0.8rem; color:#1A1A1A;">💡 已為新手準備該術語的精確解讀與極限避坑策略。</span><button style="background:#FDE047; border:2px solid #1A1A1A; padding:6px 14px; border-radius:4px; font-weight:900; font-size:0.78rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.launchTacticalModal('PRD', 'Product Requirement Document', '【PRD 規格防線】：TPM 必須在開模前剛性攔截不切實際的幻想規格。清查 CMF 文件是否具備產線現有流水線的量產加工製程能力，在出圖前阻絕改模風險。')">點擊彈窗說明 ➔</button></div>
                    </div>

                    <div id="panel-pkg1-1" class="tab-panel-pkg1" style="display:none; width:100%;">
                        <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">設計產品微觀美學線條，包含手機中框弧度、按鍵回彈觸感、與後置鏡頭火山突起視覺比例。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">打造具備強烈辨識度的極簡外部視覺與握持比例，死守凡間店面櫃檯的第一眼購買衝動。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">量產表面達到物理零刮傷，不允許因模具開模頂出工藝而在機殼表面產生任何注塑塑料收縮痕。</div></div>
                        </div>
                        <div style="margin-top:15px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;"><span style="font-weight:800; font-size:0.8rem; color:#1A1A1A;">💡 已為新手準備該術語的精確解讀與極限避坑策略。</span><button style="background:#FDE047; border:2px solid #1A1A1A; padding:6px 14px; border-radius:4px; font-weight:900; font-size:0.78rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.launchTacticalModal('ID', 'Industrial Design', '【ID 結構干涉防線】：ID 團隊常因盲目追求極致美感而強行壓縮內部結構件間距。TPM 在開發期必須召集結構 ME 出具 3D 疊加公差分析，守住物理防線。')">點擊彈窗說明 ➔</button></div>
                    </div>

                    <div id="panel-pkg1-2" class="tab-panel-pkg1" style="display:none; width:100%;">
                        <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Color, Material, Finishing。調配打樣外觀色彩、挑選特殊原物料材質、定義陽極氧化或噴砂工藝。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">利用高光 C 角或特種 PVD 鍍膜視覺紋理，建立產品細緻、高級的實體物理金屬與玻璃觸感。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">大批量生產出貨時，各批次原物料表面色差（Delta E）剛性受控，不發生任何肉眼可察覺色偏。</div></div>
                        </div>
                        <div style="margin-top:15px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;"><span style="font-weight:800; font-size:0.8rem; color:#1A1A1A;">💡 已為新手準備該術語的精確解讀與極限避坑策略。</span><button style="background:#FDE047; border:2px solid #1A1A1A; padding:6px 14px; border-radius:4px; font-weight:900; font-size:0.78rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.launchTacticalModal('CMF', 'Color, Material, Finishing', '【外觀黃金限度樣本】：高階表面工藝初始良率極低。TPM 必須在 DVT 前，由客戶 ID、品保與工廠三方共同簽字封樣「限度樣本 (Limit Sample)」，否則量產判定必將陷入災難扯皮。')">點擊彈窗說明 ➔</button></div>
                    </div>

                    <div id="panel-pkg1-3" class="tab-panel-pkg1" style="display:none; width:100%;">
                        <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在 3D CAD 工程模擬環境內，精密審查主板電子原件、軟板（FPC）與外部金屬殼體間的 3D 避讓間距。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">預留公差疊加安全緩衝帶，防範手機遭受外部物理撞擊變形時，內部晶片當場被外殼硬擠壓短路毀損。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">將 Clearance 間距死守在標準 0.3mm 綠燈水位，絕不允許結構為追求超薄而擅自跨越物理安全界限。</div></div>
                        </div>
                        <div style="margin-top:15px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;"><span style="font-weight:800; font-size:0.8rem; color:#1A1A1A;">💡 已為新手準備該術語的精確解讀與極限避坑策略。</span><button style="background:#FDE047; border:2px solid #1A1A1A; padding:6px 14px; border-radius:4px; font-weight:900; font-size:0.78rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.launchTacticalModal('Clearance', 'Safety Mechanical Clearance', '【Clearance 疊加崩潰】：若此間距被強行壓縮至極限 0.1mm，PVT 試產爬坡大批量總裝時，微小公差堆疊將引發高達 40% 的擠壓變形與電路短路海嘯。')">點擊彈窗說明 ➔</button></div>
                    </div>
                `
            },
            // 👑 修正3：原 Page 2 順位移位至 Page 3，導入 4 欄獨立名詞小卡片 👑
            {
                title: "3. 零件供應商端 (Vendors - 掌控高精晶圓交期與原物料進料檢驗品質)",
                text: `
                    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin-bottom:18px; width:100%;">
                        <div id="card-btn-pkg2-0" class="tab-card-pkg2" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:12px; text-align:center; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.switchCdxInternalTab('pkg2', 0)">Lead Time<div style="font-size:0.68rem; font-weight:700; color:#475569; margin-top:2px;">(物料交期)</div></div>
                        <div id="card-btn-pkg2-1" class="tab-card-pkg2" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; text-align:center; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.switchCdxInternalTab('pkg2', 1)">COA<div style="font-size:0.68rem; font-weight:700; color:#475569; margin-top:2px;">(出廠證明)</div></div>
                        <div id="card-btn-pkg2-2" class="tab-card-pkg2" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; text-align:center; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.switchCdxInternalTab('pkg2', 2)">Second Source<div style="font-size:0.68rem; font-weight:700; color:#475569; margin-top:2px;">(二線材料)</div></div>
                        <div id="card-btn-pkg2-3" class="tab-card-pkg2" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; text-align:center; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.switchCdxInternalTab('pkg2', 3)">IQC<div style="font-size:0.68rem; font-weight:700; color:#475569; margin-top:2px;">(進料檢驗)</div></div>
                    </div>

                    <div id="panel-pkg2-0" class="tab-panel-pkg2" style="display:block; width:100%;">
                        <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">掌控從工廠下採購單（PO），到該關鍵原物料完全送抵智造廠倉庫的整體物理物流週轉沙漏時間。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">物理控制並打破長料期物料對時程之卡死，確保各階段拉速試產開線當天現場有實物料可用。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">向專案組交割無無料期偏位的排產預測，將交期超 12 週的核心晶圓元件提早進行動態風控。</div></div>
                        </div>
                        <div style="margin-top:15px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;"><span style="font-weight:800; font-size:0.8rem; color:#1A1A1A;">💡 已為新手準備該術語的精確解讀與極限避坑策略。</span><button style="background:#FDE047; border:2px solid #1A1A1A; padding:6px 14px; border-radius:4px; font-weight:900; font-size:0.78rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.launchTacticalModal('Lead Time', 'Material Procurement Lead Time', '【長料期物料對決】：稀缺晶片交期極長。TPM 必須在 EVT 評審未正式召開前引導團隊執行 Pre-order（提前採購），並剛性鎖定 ECO 變更範圍以防火耗報廢。')">點擊彈窗說明 ➔</button></div>
                    </div>

                    <div id="panel-pkg2-1" class="tab-panel-pkg2" style="display:none; width:100%;">
                        <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Certificate of Analysis。原物料發貨進廠前，由供應商質量實驗室簽發出的實測物理特性特徵報告。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">白紙黑字以大廠品質實驗室數據自證零件公差未超標，保障出廠原物料品質不汙染代工廠線體。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">進廠檢驗數據與原廠報告數據 100% 齒輪咬合，嚴防任何夾帶不良原件引發流水線故障。</div></div>
                        </div>
                        <div style="margin-top:15px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;"><span style="font-weight:800; font-size:0.8rem; color:#1A1A1A;">💡 已為新手準備該術語的精確解讀與極限避坑策略。</span><button style="background:#FDE047; border:2px solid #1A1A1A; padding:6px 14px; border-radius:4px; font-weight:900; font-size:0.78rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.launchTacticalModal('COA', 'Certificate of Analysis', '【COA 數據陷阱】：部分供應商會修改 COA 良率報告以掩蓋二線物料晶圓製程偏移。TPM 應主導工廠 IQC 盲測抽檢覆核，鎖死首道品質閘門。')">點擊彈窗說明 ➔</button></div>
                    </div>

                    <div id="panel-pkg2-2" class="tab-panel-pkg2" style="display:none; width:100%;">
                        <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">認證並技術導入第二家具備相同電路相容、引腳完全相容（Pin-to-Pin）的代償二線零件供應商。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">破除獨家原廠的產能技術壟斷，提高採購商議價權，防範單一上游爆發不可抗力災難時卡死專案。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">二線零件在開發期通過高低溫可靠性複審點亮，在大線上具備隨時無時延動態切換之實力。</div></div>
                        </div>
                        <div style="margin-top:15px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;"><span style="font-weight:800; font-size:0.8rem; color:#1A1A1A;">💡 已為新手準備該術語的精確解讀與極限避坑策略。</span><button style="background:#FDE047; border:2px solid #1A1A1A; padding:6px 14px; border-radius:4px; font-weight:900; font-size:0.78rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.launchTacticalModal('Second Source', 'Alternative Dual Sourcing', '【二線備援策略】：若 DVT 里程碑摔落測試遭遇特定零件脆斷，且日本原廠配方調試需 1 個月時程，此時應立即激活二線備料認證防線，頂替過關。')">點擊彈窗說明 ➔</button></div>
                    </div>

                    <div id="panel-pkg2-3" class="tab-panel-pkg2" style="display:none; width:100%;">
                        <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Incoming Quality Control。元件運抵工廠碼頭後，由工廠品保團隊架設光學儀器發動進料抽樣檢驗。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">嚴格遵循 AQL 品質抽樣水準，在廠門口將瑕疵原件就地擊落退貨，死守第一道進料防線。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">攔截進料不良。防範因工廠進料檢驗（IQC）規格與原廠不對齊、或探針針床應力不當引發非缺陷毀損。</div></div>
                        </div>
                        <div style="margin-top:15px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;"><span style="font-weight:800; font-size:0.8rem; color:#1A1A1A;">💡 已為新手準備該術語的精確解讀與極限避坑策略。</span><button style="background:#FDE047; border:2px solid #1A1A1A; padding:6px 14px; border-radius:4px; font-weight:900; font-size:0.78rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.launchTacticalModal('IQC', 'Incoming Quality Control', '【IQC 品質熔斷點】：一旦 IQC 抽樣發現特定 Lot 批號原物料虛焊短路率超標，TPM 應立即啟動現地全單拒收熔斷，不允許其流入大線上。')">點擊彈窗說明 ➔</button></div>
                    </div>
                `
            },
            // 👑 修正4：原 Page 3 順位移位至 Page 4，導入 4 欄獨立名詞小卡片 👑
            {
                title: "4. 代工製造廠端 (EMS Factory - 大智造流水線總裝、拉速與直通率防禦)",
                text: `
                    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin-bottom:18px; width:100%;">
                        <div id="card-btn-pkg3-0" class="tab-card-pkg3" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:12px; text-align:center; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.switchCdxInternalTab('pkg3', 0)">FPY<div style="font-size:0.68rem; font-weight:700; color:#475569; margin-top:2px;">(直通率防線)</div></div>
                        <div id="card-btn-pkg3-1" class="tab-card-pkg3" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; text-align:center; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.switchCdxInternalTab('pkg3', 1)">UPH<div style="font-size:0.68rem; font-weight:700; color:#475569; margin-top:2px;">(小時產速)</div></div>
                        <div id="card-btn-pkg3-2" class="tab-card-pkg3" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; text-align:center; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.switchCdxInternalTab('pkg3', 2)">WIP<div style="font-size:0.68rem; font-weight:700; color:#475569; margin-top:2px;">(在線在製品)</div></div>
                        <div id="card-btn-pkg3-3" class="tab-card-pkg3" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; text-align:center; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:3px 3px 0px #1A1A1A;" onclick="window.switchCdxInternalTab('pkg3', 3)">Line Balance<div style="font-size:0.68rem; font-weight:700; color:#475569; margin-top:2px;">(線平衡率)</div></div>
                    </div>

                    <div id="panel-pkg3-0" class="tab-panel-pkg3" style="display:block; width:100%;">
                        <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🛠️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">First Pass Yield。精算機器不經歷任何在線手動拆解修補、一次性全檢通關之剛性概率良率。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">真實暴露大流水線製程健康度，將夾帶有維修「二度高溫微觀內傷」的手機瑕疵品阻絕在包裝前。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">消滅任何形式的「偽良率欺瞞」，專案總結時嚴格執行剛性鐵律：『不斬入庫良率，只斬首檢直通率！』。</div></div>
                        </div>
                        <div style="margin-top:15px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;"><span style="font-weight:800; font-size:0.8rem; color:#1A1A1A;">💡 已為新手準備該術語的精確解讀與極限避坑策略。</span><button style="background:#FDE047; border:2px solid #1A1A1A; padding:6px 14px; border-radius:4px; font-weight:900; font-size:0.78rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.launchTacticalModal('FPY', 'First Pass Yield', '【FPY 內傷解讀】：工廠主管常用重工後的入庫良率邀功。但若 FPY 只有 35%，代表大批機器被用烙鐵二次高溫手動修補過，PCB 銅箔脆化，流入凡間必爆發客退海嘯。')">點擊彈窗說明 ➔</button></div>
                    </div>

                    <div id="panel-pkg3-1" class="tab-panel-pkg3" style="display:none; width:100%;">
                        <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Units Per Hour。在大線上架設計實時看板，動態精算全流水線每小時穩定吐出的最終成品下線總量。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">用極速拉速平攤車間固定折舊與人工成本，在緊迫的交期內，死死卡位捍衛代工廠智造利潤。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">爬坡期完成 UPH 速率總驗收，消除手工與機器動作瓶頸，順利過渡到大量量產階段。</div></div>
                        </div>
                        <div style="margin-top:15px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;"><span style="font-weight:800; font-size:0.8rem; color:#1A1A1A;">💡 已為新手準備該術語的精確解讀與極限避坑策略。</span><button style="background:#FDE047; border:2px solid #1A1A1A; padding:6px 14px; border-radius:4px; font-weight:900; font-size:0.78rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.launchTacticalModal('UPH', 'Units Per Hour', '【產速瓶頸與拉速】：若功能測試站 UPH 低於預期，產線後端必將爆發集體堆料（WIP）。TPM 必須介入督導自動化 ME 拆解軟體執行線程，釋放瓶頸。')">點擊彈窗說明 ➔</button></div>
                    </div>

                    <div id="panel-pkg3-2" class="tab-panel-pkg3" style="display:none; width:100%;">
                        <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">Work In Process。滯留在流水線各工位、或堆積在維修室內等待更換晶片、Debug 拆解的在製品單板。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">清查死鎖在線體上的高價值原物料與半成品資產，嚴防其囤積變成呆料，進而在季末被強制發動報廢。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">在階段試產結關前，剛性發起「維修室 WIP 清空計劃」，徹底排除淤泥，逼出隱性不良的 Root Cause。</div></div>
                        </div>
                        <div style="margin-top:15px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;"><span style="font-weight:800; font-size:0.8rem; color:#1A1A1A;">💡 已為新手準備該術語的精確解讀與極限避坑策略。</span><button style="background:#FDE047; border:2px solid #1A1A1A; padding:6px 14px; border-radius:4px; font-weight:900; font-size:0.78rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.launchTacticalModal('WIP', 'Work In Process', '【維修室 WIP 淤積】：當大批主板死鎖在後端時，會掩蓋真實的生產線缺陷。TPM 必須強行推動 WIP 清零，強制工廠找出針床治具公差偏離的核心缺陷。')">點擊彈窗說明 ➔</button></div>
                    </div>

                    <div id="panel-pkg3-3" class="tab-panel-pkg3" style="display:none; width:100%;">
                        <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼 (工作範疇)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">精算整條大流水線上各個手工組裝與自動化檢測工位（如扣排線、打螺絲、過功能測試站）作業工時。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的 (戰術核心目標)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">精確找出 Cycle Time 最長的瓶頸工位（Bottle-neck），平衡整線流速，消除人體疲勞導致的內耗。</div></div>
                            <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果 (團隊終極期待)</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">整流水線平衡率剛性死守在 85% 以上黃金水平線，打通一秒一機、流暢連貫的爬坡拉速脈絡。</div></div>
                        </div>
                        <div style="margin-top:15px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;"><span style="font-weight:800; font-size:0.8rem; color:#1A1A1A;">💡 已為新手準備該術語的精確解讀與極限避坑策略。</span><button style="background:#FDE047; border:2px solid #1A1A1A; padding:6px 14px; border-radius:4px; font-weight:900; font-size:0.78rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.launchTacticalModal('Line Balance', 'Line Balancing Rate', '【線平衡率控制】：平衡率低於 85% 會引發產線集體堆料、垮台。TPM 應主導工業工程（IE）介入重新拆解工步 SOP，釋放線體瓶頸。')">點擊彈窗說明 ➔</button></div>
                    </div>
                `
            }
        ],
        // 隨機題庫
        examVault: [
            { q: "當研發端要求 0.1mm 的極限間距，但工廠稱設備公差疊加會撞車，TPM 最佳路徑是？", o: ["當傳話筒告知兩邊各自開會", "調閱歷史 Cpk 與公差數據，主導跨功能技術代償談判", "全盤聽從客戶 RD 的最高指令"], a: 1 },
            { q: "工廠最終入庫良率 99.2%，但大流水線直通率 (FPY) 只有 35%，這代表？", o: ["製程非常完美受控", "大批機器在線體被手工反覆拆解重工，帶有物理內傷，客退風險極高", "可以直接開閘放水大量生產"], a: 1 },
            { q: "大流水線各個工位操作時間不平均，線平衡率低於 85% 時，流水線會發生何種狀況？", o: ["產線拉速全線暴增", "存在嚴重的瓶頸工位，引發產線集體堆料（WIP）、拉速垮台", "產品的電路系統訊號完整性大幅提高"], a: 1 }
        ]
    }
];

// 互鎖底層 V6.3 洗牌演算法
(function() {
    if (!window.codexCourseEngineData || window.codexCourseEngineData.length === 0) return;
    const vault = window.codexCourseEngineData[0].examVault;
    for (let i = vault.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vault[i], vault[j]] = [vault[j], vault[i]];
    }
    window.codexCourseEngineData[0].examVault = vault.slice(0, 3);
})();
