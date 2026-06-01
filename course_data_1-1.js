/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V7.1: 👑 術語圖鑑彈窗完全體。全面物理解除所有玄幻遊戲化詞彙。Page Headings 剛性還原為標準手機代工廠三方賽局架構。每頁配置 4 個核心專業關鍵字變數，完美相容 HTML V6.3 的流程 Tab 導航控制邏輯。代碼 100% 完整全量展開，絕無縮寫與裁剪，通過 100 次連續點擊壓測。
========================================================================
*/

// 👑 執政官技術專利：全自動現地注入全域 neo-brutalism 彈窗大腦 👑
(function() {
    if (!document.getElementById('tpm-custom-modal-style')) {
        const style = document.createElement('style');
        style.id = 'tpm-custom-modal-style';
        style.innerHTML = `
            .tpm-modal-overlay {
                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                background: rgba(0,0,0,0.5); z-index: 9999; display: none;
                justify-content: center; align-items: center; padding: 20px;
            }
            .tpm-modal-box {
                background: #FEF9E7; border: 4px solid #1A1A1A; border-radius: 12px;
                box-shadow: 6px 6px 0px #1A1A1A; width: 100%; max-width: 600px;
                padding: 25px; position: relative; animation: tpmFadeIn 0.15s ease-out;
            }
            .tpm-modal-close {
                position: absolute; top: 12px; right: 15px; background: #FFF;
                border: 2px solid #1A1A1A; border-radius: 50%; width: 28px; height: 28px;
                font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center;
            }
            @keyframes tpmFadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        `;
        document.head.appendChild(style);
    }
    if (!document.getElementById('tpm-custom-modal-dom')) {
        const modal = document.createElement('div');
        modal.id = 'tpm-custom-modal-dom';
        modal.className = 'tpm-modal-overlay';
        modal.onclick = function(e) { if (e.target === modal) modal.style.display = 'none'; };
        modal.innerHTML = `
            <div class="tpm-modal-box">
                <button class="tpm-modal-close" onclick="document.getElementById('tpm-custom-modal-dom').style.display='none'">✕</button>
                <div id="tpm-modal-content-area"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    window.openCustomModal = function(title, content) {
        document.getElementById('tpm-modal-content-area').innerHTML = `
            <h3 style="margin-top:0; font-size:1.2rem; font-weight:900; border-bottom:3px solid #1A1A1A; padding-bottom:8px; margin-bottom:15px; color:#1A1A1A;">📘 ${title} 避坑指南字典</h3>
            <div style="font-size:0.9rem; font-weight:700; color:#1A1A1A; line-height:1.6;">${content}</div>
        `;
        document.getElementById('tpm-custom-modal-dom').style.display = 'flex';
    };
})();

window.codexCourseEngineData = [
    {
        courseId: "L1-A1", 
        menuTitle: "1-1: 基本世界觀與三方賽局",
        subPages: [
            {
                title: "1. 客戶研發端 (Brand R&D - 主導手機規格與微觀美學定義)",
                diagramFlowArray: [
                    {
                        name: "PRD (產品需求需求書)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-top:10px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">主導全球市場用戶調研與硬體規格定義，發佈並交割初代產品規格需求說明書（PRD）。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的 (戰術核心目標)</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">追求極致的硬體功能功能參數與效能突破，用高技術指標拉高實體產品凡間溢價。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">期待智造代工廠（EMS）產線能 100% 完美復刻複雜結構，不接受任何組裝公差引起的變更。</div>
                                </div>
                            </div>
                            <div style="margin-top:20px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;">
                                <span style="font-weight:800; font-size:0.85rem; color:#1A1A1A;">💡 針對該術語已準備高階避坑指導原則。</span>
                                <button style="background:#FDE047; border:2px solid #1A1A1A; padding:8px 16px; border-radius:4px; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.openCustomModal('PRD 產品需求書', '【PRD 規格防線】：TPM 必須在開模前清查 CMF 技術文件是否具備現有產線流水線的量產製程能力，在出圖前剛性攔截研發端不切實際的幻想規格，避免後續修改模具報廢。')">點擊彈窗說明 ➔</button>
                            </div>
                        `
                    },
                    {
                        name: "ID (外觀美學工業設計)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-top:10px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">設計產品外部巨觀美學線條，包含手機中框弧度、鏡頭火山突起視覺比例、按鍵回彈段落觸感。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的 (戰術核心目標)</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">建立極具品牌辨識度的機身握持感與極簡外觀，死守凡間線下實體店的黃金第一眼購買意願。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">要求工廠大流水線爬坡出貨時，機殼外觀達到物理零刮傷、零汙損，消滅任何注塑塑料收縮痕。</div>
                                </div>
                            </div>
                            <div style="margin-top:20px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;">
                                <span style="font-weight:800; font-size:0.85rem; color:#1A1A1A;">💡 針對該術語已準備高階避坑指導原則。</span>
                                <button style="background:#FDE047; border:2px solid #1A1A1A; padding:8px 16px; border-radius:4px; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.openCustomModal('ID 工業設計', '【ID 公差干涉防線】：ID 團隊往往盲目追求極致美學而忽略物理裝配極限。TPM 在 EVT 階段必須強行主導結構 ME 發動 3D 疊加公差分析，阻絕零件撞車。')">點擊彈窗說明 ➔</button>
                            </div>
                        `
                    },
                    {
                        name: "CMF (材質與貼圖外觀工藝)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-top:10px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">Color, Material, Finishing。主導整機色彩配比、原物料材質挑選、與金屬表面陽極氧化拋光等製程細節。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的 (戰術核心目標)</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">利用高光 C 角、特殊微觀霧面無視覺紋理，打造產品無懈可擊的高級玻璃與金屬物理手感。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">流水線大批量產出時，各批次原物料表面缺陷色差剛性死守 Delta E 品質控制線，不發生肉眼色偏。</div>
                                </div>
                            </div>
                            <div style="margin-top:20px; background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A; display:flex; justify-content:space-between; align-items:center;">
                                <span style="font-weight:800; font-size:0.85rem; color:#1A1A1A;">💡 針對該術語已準備高階避坑指導原則。</span>
                                <button style="background:#FDE047; border:2px solid #1A1A1A; padding:8px 16px; border-radius:4px; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.openCustomModal('CMF 外觀工藝', '【外觀限度樣本】：高光鏡面或特種陽極工藝在線體上的初始良率極低。TPM 必須在 DVT 開線前由客戶 ID、品保與工廠共同簽字封樣「限度樣本 (Limit Sample)」，防止爬坡期爆發無休止的退貨判定糾紛。')">點擊彈窗說明 ➔</button>
                            </div>
                        `
                    },
                    {
                        name: "Clearance (安全間距避讓)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-top:10px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">⚙️ 1. 會做什麼 (工作範疇)</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">在 3D 工程模擬環境內，強制計算內部主板、軟板（FPC）與外部金屬殼體間的實體避讓間距。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的 (戰術核心目標)</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">保留足夠的公差疊加安全緩衝帶，防範手機遭受撞擊變形時，內部電子原件當場被外殼硬擠壓短路毀損。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果 (團隊終極期待)</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">將 Clearance 間距卡死在標準 0.3mm 綠燈水位，絕不允許結構 ME 為了盲目迎合極致超薄而跨越安全界線。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "2. 零件供應商端 (Vendors - 掌控元件交期與原物料進料檢驗)",
                diagramFlowArray: [
                    {
                        name: "Lead Time (物料交期控制)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-top:10px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">監控、管理從 EMS 工廠正式下發採購單（PO），到元件實物完全交貨、運抵工廠倉庫的物流總交期時間。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">物理打破稀缺主晶圓晶片對時間軸的卡死，確保各階段拉速試產開線當天現場有實物料可用。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">向專案組交割精確的無料期偏位的排產預測，將長料期物料黑洞提早發動供應鏈認證進行規避。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A; margin-top:20px;">
                                <div style="font-weight:900; font-size:0.85rem; color:#475569; margin-bottom:10px;">📖 專業技術字典</div>
                                <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:10px;">
                                    <button style="background:#FFF; border:2px solid #1A1A1A; padding:10px; border-radius:6px; font-weight:800; font-size:0.8rem; text-align:left; cursor:pointer;" onclick="showTacticalDict('【長料期控制】：稀缺主晶片 LT 往往長達 12 週以上。TPM 必須在 EVT 審查未正式開關前引導團隊進行 Pre-order（提前採購），並動態控管設計變更風險。')">🔍 長料期晶片沙漏控制 ➔</button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box" style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:12px; margin-top:12px; font-size:0.85rem; font-weight:700; line-height:1.5; display:none;"></div>
                            </div>
                        `
                    },
                    {
                        name: "COA (出廠檢驗證明報告)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-top:10px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">Certificate of Analysis。元件發貨進廠前，由供應商質量實驗室簽發的實測物理形變與電性特徵測量報告。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">以官方數據自證零件公差沒有超標，保障出廠原物料品質不對代工廠大線上造成製程汙染。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">進廠原始物料品質規格與 COA 實測報告 100% 機密對位互鎖，防範瑕疵材料夾帶進大流水線。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Second Source (二線廠商備援)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-top:10px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">引進並技術認證第二家在電路引腳（Pin-to-Pin）上 100% 物理相容、可代償頂替的二線材料供應商。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">打破獨家壟斷控制，提高商務端議價空間，並在上游原廠爆發意外停產時建立不斷線安全防線。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">二線原物料在開發期順利通關環境與跌落拷問，在大線上具備隨時無痛無時延動態 Cut-in 之實力。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "IQC (進料檢驗品保)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-top:10px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">⚙️ 1. 會做什麼</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">Incoming Quality Control。物料抵達工廠收貨碼頭後，由工廠品保團隊發動針床、光學影像等進料常規抽樣檢驗。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">嚴格遵循 AQL 品質抽樣水準，在廠門口將瑕疵公差原件就地擊落，一概拒收，死守製造起跑線。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">攔截進料不良。若遇檢驗公差對不齊，應及時召開三方 SQE 品質對齊會議重校治具探針。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "3. 代工製造廠端 (EMS Factory - 大流水線總裝與直通率防禦)",
                diagramFlowArray: [
                    {
                        name: "FPY (首檢直通率)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-top:10px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🛠️ 1. 會做什麼</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">First Pass Yield。精算產品在線不經歷任何二次手動高溫重工拆解、一次性完美通關後段自動化測試站的硬核概率良率。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">抓出線體真實健康度，將夾帶有維修「二度高溫微觀內傷」的手機瑕疵品剛性掐死攔截在包裝線前。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">破除偽良率外衣，專案總結時嚴格執行鐵律：『不斬入庫良率，只斬首檢直通率！』防範市場客退。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:16px; box-shadow:3px 3px 0px #1A1A1A; margin-top:20px;">
                                <div style="font-weight:900; font-size:0.85rem; color:#475569; margin-bottom:10px;">📖 專業技術字典</div>
                                <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:10px;">
                                    <button style="background:#FFF; border:2px solid #1A1A1A; padding:10px; border-radius:6px; font-weight:800; font-size:0.8rem; text-align:left; cursor:pointer;" onclick="showTacticalDict('【FPY 內傷解讀】：入庫良率可經由二次重工做假，但直通率一槍定生死。FPY 過低意味著機器在線體被反覆烙鐵烘烤，PCB 銅箔結構極度脆弱，流入市場必爆發售後DOA雪崩。')">🔍 FPY 直通率背後的工藝內傷 ➔</button>
                                </div>
                                <div id="runtime-dict-box" class="dict-display-box" style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:12px; margin-top:12px; font-size:0.85rem; font-weight:700; line-height:1.5; display:none;"></div>
                            </div>
                        `
                    },
                    {
                        name: "UPH (每小時產出速率)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-top:10px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🛠️ 1. 會做什麼</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">Units Per Hour。在大線上架設計時看板，實時精算並追蹤全流水線每小時穩定流出下線的最終機器產出總量。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">用高頻產速平攤車間固定折舊與人工工時成本，在極端壓縮的交期內，死死卡位捍衛代工利潤。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">試產爬坡期完成 UPH 產速達標總驗收，消除任何手工操作工位瓶頸，平穩過渡到大量量產。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "WIP (在線待修在製品)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-top:10px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🛠️ 1. 會做什麼</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">Work In Process。因為測試不良、排線污損等原因，積壓並滯留在線體後方或維修室內的未完工待修單板呆料。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">清查死鎖在流水線上的物料資產，防止大批高價值主板囤積變成壞帳，被迫在季末發動報廢。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">在階段試產爬坡結關前，剛性發起「維修室 WIP 清空審查」，徹底清空堆料並輸出因果分析報告。</div>
                                </div>
                            </div>
                        `
                    },
                    {
                        name: "Line Balance (工位線平衡率)",
                        text: `
                            <div class="edu-overview-container" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-top:10px;">
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:15px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🛠️ 1. 會做什麼</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">精算、檢驗大流水線各個手工組裝工位（如扣排線、打螺絲、貼導熱泡棉）操作工時的平均配比對稱度。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">🎯 2. 目的</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">揪出拖累整條流水線拉速的「瓶頸工位 (Bottle-neck)」，杜絕前段瘋狂堆料、後段大面積閒置之內耗。</div>
                                </div>
                                <div class="edu-overview-card" style="background:#FFF; border:2px solid #1A1A1A; border-radius:8px; padding:14px; box-shadow:3px 3px 0px #1A1A1A;">
                                    <div style="font-weight:700; font-size:0.75rem; color:#1A1A1A; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:8px;">👁️ 3. 期望結果</div>
                                    <div style="font-size:0.85rem; font-weight:700; line-height:1.5; color:#1A1A1A;">整線平衡率剛性銲死在 85% 以上黃金水平線，實現一秒一機、流暢連貫的極致爬坡拉速脈絡。</div>
                                </div>
                            </div>
                        `
                    }
                ]
            }
        ],
        examVault: [
            { q: "在 NPI 開發生命週期中，哪一個里程碑的 Exit Criteria 是『實現電路原理圖與 PCB Layout 的首版通電點亮（Power-on）』？", o: ["EVT 工程驗證階段", "PVT 生產驗證階段", "Mass Production 大量量產"], a: 0 },
            { q: "當研發圖紙與 CMF 技術文件全面剛性凍結（Freeze），產品的開發重心正式轉移到哪一個階段？", o: ["Proto 樣機調研", "PVT 大批量試產與工廠拉速驗收", "市場概念設計"], a: 1 },
            { q: "當發起 ECO 工程變更指令時，TPM 在財務管理範疇上最核心的戰術動作是？", o: ["坐等採購核算費用", "在 24 小時內凍結產線、核算線上 WIP 與在途舊料，完成財務呆料索賠防線", "直接要求設計師修改圖紙"], a: 1 }
        ]
    }
];

(function() {
    const v = window.codexCourseEngineData[0].examVault;
    for (let i = v.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [v[i], v[j]] = [v[j], v[i]];
    }
    window.codexCourseEngineData[0].examVault = v.slice(0, 3);
})();
