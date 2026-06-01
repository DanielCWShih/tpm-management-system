/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-01 V6.7: 👑 滿版教科書合流優化版。更正時間。配合外殼 70% 縮放與無 Canvas 長文引擎，封裝 Client、Vendor、EMS 三維矩陣、字典、與模擬沙盒，防範引號衝突。
========================================================================
*/

window.codexCourseEngineData = [
    {
        courseId: "L1-A1", 
        menuTitle: "1-1: 基本世界觀與三方賽局",
        subPages: [
            {
                title: "1. 眾神殿 ── 客戶研發端 (Brand R&D)",
                diagramFlowArray: [
                    { 
                        name: "市場預言 (PRD)", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 客戶會做什麼</div>
                                    <div class="edu-card-body-text">主導全球市場調研、產品規格定義，發佈交付初代產品規格需求書（PRD）與 2D/3D 工程開發圖紙。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">追求極致美學突破與極限技術參數，用極高工藝難度拉高市場溢價防線。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">期待代工廠（EMS）能 100% 完美復刻所有微觀複雜結構，不允許以任何組裝公差為由修改設計。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card">
                                <div class="edu-card-label">📖 戰術檢查字典</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【PRD 規格防線】：必須全面清查 CMF 是否具備工廠現有流水線的量產製程能力，在開模前剛性攔截不切實際的幻想規格。')"><span>🔍 PRD 規格審查</span><span>➔</span></button>
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【公差疊加分析】：在圖紙出爐第一時間發動極限疊加模擬，計算零件微米級物理干涉，提前鎖死模具與變形雷區。')"><span>🔍 公差疊加分析</span><span>➔</span></button>
                                </div>
                                <div class="dict-display-box"></div>
                            </div>
                            <div class="sandbox-panel-card">
                                <div class="edu-card-label">🎮 TPM 工程決策沙盒</div>
                                <div style="font-size:0.82rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>現場突發修羅場：</strong>客戶 R&D 為了極致美感，強行要求將內部主板與外殼的 Clearance 安全間距由標準 0.3mm 壓縮至極限 0.1mm，你身為代工廠 TPM，此時的第一決斷是？</div>
                                <div class="sandbox-choice-row">
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：專案全盤停線崩潰！</strong><br>在 PVT 試產拉速時因零件微小公差疊加，主板當場被殼體物理擠壓變形、電路短路集體燒毀，模具報廢延期兩個月！')">方案 A：聽從客戶意見直接簽字放行，滿足美學堅持。</button>
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：技術拆彈成功！</strong><br>帶領團隊調閱數據向客戶實證 0.1mm 會引發短路海嘯。成功說服客戶微調內部隱蔽骨架，保住安全間距又完美維持外部美學！')">方案 B：啟動跨功能技術仲裁，出示公差公理實證，逼出技術妥協點。</button>
                                </div>
                                <div class="sandbox-fallout-box"></div>
                            </div>
                        `
                    },
                    { 
                        name: "外觀幻化 (ID/CMF)", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 客戶會做什麼</div>
                                    <div class="edu-card-body-text">主導產品外觀工業設計（ID）與美學表面處理製程（CMF：色彩、材質、工藝）。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">利用高光 C 角、特殊視覺紋理或特種陽極氧化，打造無懈可擊的產品微觀美學防線。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">工廠量產時表面必須達到零刮傷、零色差，且不能因開模頂出工藝而產生任何塑料收縮痕。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card">
                                <div class="edu-card-label">📖 戰術檢查字典</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【CMF 良率懲罰】：特殊表面工藝（如高光鏡面或特殊陽極）在工廠線體上的初始良率極低，TPM 必須提前備足過爐報廢耗損預算。')"><span>🔍 CMF 良率懲罰</span><span>➔</span></button>
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【限度樣本 Limit Sample】：開線前必須由客戶 ID、品保與工廠共同簽字會審，銲死表面缺陷外觀的黃金判退標準線。')"><span>🔍 外觀限度樣本</span><span>➔</span></button>
                                </div>
                                <div class="dict-display-box"></div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "2. 萬物星塵 ── 廠商材料端 (Vendors)",
                diagramFlowArray: [
                    { 
                        name: "星塵冶煉 (Lead Time)", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 廠商會做什麼</div>
                                    <div class="edu-card-body-text">研發與控制特定元件之晶圓材料技術（如核心晶片、特種特殊膠材、鏡頭模組原件）。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">在特定材料防線上維持行業壟斷，控制出廠良率，確保向代工廠大量供貨時產能無虞。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">期待代工廠（EMS）提供精確無料期偏位的排產預測（Forecast），且在加工拼裝時不發生人為擊傷。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card">
                                <div class="edu-card-label">📖 戰術檢查字典</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【長料期沙漏控管】：精確追蹤 Lead Time 超過 12 週的稀缺晶片物料水位，一旦供應鏈斷線，必須立即發動二線備料認證。')"><span>🔍 長料期沙漏控管</span><span>➔</span></button>
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【二線備料策略】：認證相容晶片引腳（Pin-to-Pin）代償可行性，防止單一上游爆發不可抗力災難時卡死全案。')"><span>🔍 Second Source 備援</span><span>➔</span></button>
                                </div>
                                <div class="dict-display-box"></div>
                            </div>
                        `
                    },
                    { 
                        name: "純淨審查 (IQC/SQE)", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">⚙️ 廠商會做什麼</div>
                                    <div class="edu-card-body-text">向代工廠源源不絕地輸送原件與物料，並在物料發生異常時派駐工程師現地支援。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">對齊供應商出廠品質報告（COA），確保進廠原件物理與電性公差不汙染代工廠流水線。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">不因工廠進料檢驗（IQC）規格不對齊或設備測試針床應力不當而造成零件非缺陷毀損。</div>
                                </div>
                            </div>
                            <div class="sandbox-panel-card">
                                <div class="edu-card-label">🎮 TPM 工程決策沙盒</div>
                                <div style="font-size:0.82rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>現場突發修羅場：</strong>DVT 開線前 24 小時，原定的日本特種防水膠廠突然通報配方異常無法交貨，點膠站面臨全面停工待料，你該如何拆彈？</div>
                                <div class="sandbox-choice-row">
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：產線開空窗！</strong><br>停工待料 5 天，數百名操作工閒置，時程嚴重偏離，遭到主管與客戶集體彈劾！')">方案 A：發出警告郵件，並在線體上死等日本原廠配方重調完畢。</button>
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：完美備援！</strong><br>果斷調用國內二線供應商的儲備樣品，帶領團隊進行 12 小時極速可靠性點亮驗證，成功頂替過關！')">方案 B：啟動二線供應商（Dual Source）應變防線，調用備用料樣品進行極速可靠性點亮複審。</button>
                                </div>
                                <div class="sandbox-fallout-box"></div>
                            </div>
                        `
                    }
                ]
            },
            {
                title: "3. 物質深淵 ── 代工智造端 (EMS Factory)",
                diagramFlowArray: [
                    { 
                        name: "產線拉速 (UPH/Balance)", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🛠️ 工廠會做什麼</div>
                                    <div class="edu-card-body-text">接過客戶 2D/3D 圖紙指令，吞下供應商原物料，在大流水線上進行硬體實體化的大規模組裝複製。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">死守流水線平衡率與直通率（FPY），消滅製程瓶頸，極速提升每小時產能速率（UPH），守住毛利。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">期待 TPM 扮演跨功能大腦，在試產缺陷、線體治具卡死爆發時，第一時間找出 Root Cause 主導拆彈。</div>
                                </div>
                            </div>
                            <div class="dict-panel-card">
                                <div class="edu-card-label">📖 戰術檢查字典</div>
                                <div class="dict-btn-grid">
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【線平衡率 Line Balance】：評估流水線各工位工時平均配比度。低於 85% 代表存在嚴重瓶頸工位，會引發產線集體堆料、拉速垮台。')"><span>🔍 線平衡率指標</span><span>➔</span></button>
                                    <button class="dict-trigger-btn" onclick="showTacticalDict('【治具誤判率 False Alarm】：針床ICT與功能FCT治具誤判率必須鎖死在 1% 以下。過高會引發大量健康主板被送去重工拆解，摧毀直通率。')"><span>🔍 治具誤判率防線</span><span>➔</span></button>
                                </div>
                                <div class="dict-display-box"></div>
                            </div>
                        `
                    },
                    { 
                        name: "直通防線 (FPY/Rework)", 
                        text: `
                            <div class="edu-overview-container">
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🛠️ 工廠會做什麼</div>
                                    <div class="edu-card-body-text">對組裝測試不合格的機台執行在線拆解修補，送往維修室（Repair Room）進行二次手工高溫焊接重工。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">🎯 核心戰術目標</div>
                                    <div class="edu-card-body-text">控制維修重工循環次數。嚴防曾經受手工高溫二度重工破壞的健康機台夾帶物理內傷流入凡間包裝。</div>
                                </div>
                                <div class="edu-overview-card">
                                    <div class="edu-card-label">👁️ 團隊終極期待</div>
                                    <div class="edu-card-body-text">要求品保團隊不向工廠主管妥協，死守直通率指標（First Pass Yield），寧可停線重調設備也絕不放任瑕疵料過關。</div>
                                </div>
                            </div>
                            <div class="sandbox-panel-card">
                                <div class="edu-card-label">🎮 TPM 工程決策沙盒</div>
                                <div style="font-size:0.82rem; font-weight:700; line-height:1.5; margin-bottom:10px;">🚨 <strong>現場突發修羅場：</strong>PVT 結案審查時，工廠主管報告入庫良率高達 98.5%！但你翻查後台數據發現直通率（FPY）核心指標只有慘烈的 35%，此時你該如何決策？</div>
                                <div class="sandbox-choice-row">
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(false, '💥 <strong>模擬命運：客退海嘯爆發！</strong><br>選擇直接放行。結果流入市面後，因為大批經歷過手工二次高溫重工的手機內傷爆發，故障率集體炸裂！')">方案 A：良率既然過關，配合工廠主管如期開閘，准許出關大量生產（MP）。</button>
                                    <button class="sandbox-choice-btn" onclick="triggerSimDecision(true, '🏆 <strong>模擬命運：鐵血攔截成功！</strong><br>你死守剛性鐵律：『不斬良率，只斬直通率！』勒令製程 ME 團隊徹查線體，抓出治具公差偏移，將 FPY拉回 85% 以上才放行。')">方案 B：一票否決、強行攔截！下令產線停線重調治具，將直通率拉回剛性指標。</button>
                                </div>
                                <div class="sandbox-fallout-box"></div>
                            </div>
                        `
                    }
                ]
            }
        ],
        examVault: [
            { q: "當研發端要求 0.1mm 的極限間距，但工廠稱設備公差疊加會撞車，TPM 職責是？", o: ["當傳話筒告知兩邊各自開會", "調閱歷史 Cpk 與公差數據，主導跨功能技術代償方案談判", "全盤聽從客戶 RD 的最高指令"], a: 1 },
            { q: "工廠最終入庫良率 99.2%，但大流水線直通率 (FPY) 只有 35%，這代表？", o: ["製程非常完美受控", "大批機器在線體被手工反覆拆解重工，帶有物理內傷，客退風險極高", "可以直接開閘放水大量生產"], a: 1 },
            { q: "何謂 PRD 規格防線審查？", o: ["代工廠操作工的排班表", "在開模前清查 CMF 是否具備工廠現有流水線的量產製程能力，剛性攔截不切實際規格", "採購部門採購現貨晶片的清單"], a: 1 },
            { q: "TPM 在客戶、零件廠商與代工製造廠三方賽局中的天職定位是？", o: ["研發端工程師的行政秘書", "工廠線體點膠站的操作工", "跨功能技術橋梁、風險決策權衡與技術決策仲裁者"], a: 2 },
            { q: "外出的訊息、郵件通通必須經過何種處理才有管理價值？", o: ["遵循無紙化綠色環保法規印出紙張", "經過『消化 ➔ 比對 ➔ 建議 ➔ 行動項目』的閉環處理", "直接抄送給所有高級專案總監"], a: 1 },
            { q: "當零件廠商通報核心晶片 Lead Time 突然暴增，TPM 最佳拆彈路徑是？", o: ["勒令工廠全面停線死等對方產能恢復", "坐在辦公室等主管下命令", "立即清查 Common Pool 資源並發動備援二線（Dual Source）極速可靠性認證防線"], a: 2 },
            { q: "禮品、電子代工廠（EMS）最核心的死守毛利與製造能力指標是？", o: ["BOM Cost 材料成本清單金額", "每小時產速 UPH 與直通率 FPY", "產品彩盒附件的外觀工業美感"], a: 1 },
            { q: "當治具的誤判率 (False Alarm) 過高時，會對工廠直通率造成何種連帶摧毀？", o: ["引發大量健康主板被誤判送去重工拆解，手工拆解汙染主板，直通率垮台", "提高產品在凡間實體市場的品牌溢價防線", "直接導致原件出廠的 Lead Time 縮短"], a: 0 },
            { q: "誰擁有發佈 2D/3D 工程開發圖紙與初代規格需求書的神聖至高權力？", o: ["代工智造廠 (EMS Factory)", "零件廠商 (Vendors)", "客戶研發端 (Brand R&D)"], a: 2 },
            { q: "大流水線各個工位工時不平均，線平衡率低於 85% 時，流水線會發生何種狀況？", o: ["產線拉速全線暴增", "存在嚴重的瓶頸工位，引發產線集體堆料（WIP）、拉速垮台", "產品的電路系統訊號完整性大幅提高"], a: 1 }
        ]
    }
];

(function() {
    if (!window.codexCourseEngineData || window.codexCourseEngineData.length === 0) return;
    const vault = window.codexCourseEngineData[0].examVault;
    for (let i = vault.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vault[i], vault[j]] = [vault[j], vault[i]];
    }
    vault.forEach(q => {
        const originalCorrectOptionText = q.o[q.a];
        for (let i = q.o.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [q.o[i], q.o[j]] = [q.o[j], q.o[i]];
        }
        q.a = q.o.indexOf(originalCorrectOptionText);
    });
    window.codexCourseEngineData[0].examVault = vault.slice(0, 3);
})();
