/* ========================================================================
REVISION HISTORY / VERSION LOG
========================================================================
2026-06-03 V8.00-MRK14: 👑 子單元 1-4 市場調查與規格定義互動完全體。
1. 互動式開發：Page 2 全新內建【預言者天平】交互狀態機，學員現地增減規格，超載當場引發天平崩塌、預算熔斷。
2. 數據視覺化：Page 3 內建【市場慾望五維雷達能量圖】，將價格、效能、重量等極限邊界動態呈現。
3. 全域 4 分法網格：Keywords 卡牌完美繼承 1-1 的 repeat(4, 1fr) 拓撲，寬度絕對固定不變形。
4. 唯讀大考題庫：內建 12 道全新市場預言術硬核題庫，附帶雙層動態隨機洗牌選項引擎，尾端括號完美導通。
========================================================================
*/

// 👑 全自動現地註冊：全域防崩潰雙層動態切換大腦 👑
(function() {
    window.tpmSwitchMainTab = function(blockScope, activeIdx, totalCount) {
        for (let i = 0; i < totalCount; i++) {
            const panel = document.getElementById(`tpm-main-panel-${blockScope}-${i}`);
            const btn = document.getElementById(`tpm-main-btn-${blockScope}-${i}`);
            if (panel) panel.style.display = (i === activeIdx) ? 'block' : 'none';
            if (btn) {
                if (i === activeIdx) {
                    btn.style.background = '#FDE047';
                    btn.style.transform = 'translate(2px, 2px)';
                    btn.style.boxShadow = '1px 1px 0px #1A1A1A';
                } else {
                    btn.style.background = '#FFFFFF';
                    btn.style.transform = 'none';
                    btn.style.boxShadow = '3px 3px 0px #1A1A1A';
                }
            }
        }
    };

    window.tpmSwitchSubKwd = function(blockScope, panelIdx, kwdIdx, fullName, definition) {
        document.querySelectorAll(`.kbtn-${blockScope}-${panelIdx}`).forEach(btn => {
            btn.style.background = '#FFFFFF';
            btn.style.transform = 'none';
            btn.style.boxShadow = '2px 2px 0px #1A1A1A';
        });
        const activeBtn = document.getElementById(`kbtn-${blockScope}-${panelIdx}-${kwdIdx}`);
        if (activeBtn) {
            activeBtn.style.background = '#FDE047';
            activeBtn.style.transform = 'translate(1px, 1px)';
            activeBtn.style.boxShadow = '1px 1px 0px #1A1A1A';
        }
        const titleEl = document.getElementById(`ktxt-title-${blockScope}-${panelIdx}`);
        const descEl = document.getElementById(`ktxt-desc-${blockScope}-${panelIdx}`);
        if (titleEl) titleEl.innerHTML = `<b>全稱：</b>${fullName}`;
        if (descEl) descEl.innerHTML = `<b>意思：</b>${definition}`;
    };

    // ⚖️ 1-4 獨家特殊戰術：預言者天平計算核心
    window.tpm_MRK_ToggleSpec = function(specId, costValue, desireValue) {
        const check = document.getElementById(`mspec-chk-${specId}`);
        const block = document.getElementById(`mspec-block-${specId}`);
        if (!check || !block) return;

        // 切換狀態
        const isChecked = check.checked;
        check.checked = !isChecked;

        if (check.checked) {
            block.style.background = '#FDE047';
            block.style.transform = 'translate(1px, 1px)';
            block.style.boxShadow = '1px 1px 0px #1A1A1A';
        } else {
            block.style.background = '#FFFFFF';
            block.style.transform = 'none';
            block.style.boxShadow = '3px 3px 0px #1A1A1A';
        }

        // 重新清算全盤資產
        let totalCost = 0;
        let totalDesire = 0;
        const limitBudget = 100;

        const allSpecs = [
            { id: 'cpu', c: 45, d: 35 },
            { id: 'frame', c: 30, d: 20 },
            { id: 'battery', c: 35, d: 25 },
            { id: 'camera', c: 40, d: 30 }
        ];

        allSpecs.forEach(spec => {
            const chk = document.getElementById(`mspec-chk-${spec.id}`);
            if (chk && chk.checked) {
                totalCost += spec.c;
                totalDesire += spec.d;
            }
        });

        // 驅動 UI 顯影刷新
        const costValEl = document.getElementById('scale-cost-value');
        const desireValEl = document.getElementById('scale-desire-value');
        const fillEl = document.getElementById('scale-budget-fill');
        const statusEl = document.getElementById('scale-alert-status');
        const armEl = document.getElementById('scale-balance-arm');

        if (costValEl) costValEl.innerText = totalCost;
        if (desireValEl) desireValEl.innerText = totalDesire;
        
        let barPct = Math.min((totalCost / limitBudget) * 100, 100);
        if (fillEl) {
            fillEl.style.width = `${barPct}%`;
            fillEl.style.background = (totalCost > limitBudget) ? '#EF4444' : '#22C55E';
        }

        if (totalCost > limitBudget) {
            // 💥 規格超載，天平崩塌！
            if (statusEl) statusEl.innerHTML = `<span style="color:#EF4444; font-weight:900;">⚠️ 規格大爆炸！天平徹底崩塌！成本超支報廢！</span>`;
            if (armEl) armEl.style.transform = 'rotate(12deg)'; // 右側沉底
        } else if (totalCost === 0) {
            if (statusEl) statusEl.innerHTML = `<span style="color:#64748B;">⚖️ 天平處於空載狀態，請投入市場規格積木。</span>`;
            if (armEl) armEl.style.transform = 'rotate(0deg)';
        } else {
            // 🟢 安全水位
            if (statusEl) statusEl.innerHTML = `<span style="color:#22C55E; font-weight:900;">🟢 規格高度受控。黃金利潤空間代償安全。</span>`;
            // 根據慾望與成本輕微傾斜
            let tilt = (totalCost / limitBudget) * 6;
            if (armEl) armEl.style.transform = `rotate(${tilt}deg)`;
        }
    };
})();

window.codexCourseEngineData = [
    {
        courseId: "L1-4", 
        menuTitle: "1-4: 市場調查與產品規格定義",
        subPages: [
            // ==========================================
            // PAGE 1: 市場預言術大廳導讀 (Scope: intro)
            // ==========================================
            {
                title: "1. 核心大廳導讀 (終端市場的權力解碼)",
                text: `
                    <div style="display:flex; gap:12px; margin-bottom:15px; border-bottom:3px solid #1A1A1A; padding-bottom:12px; width:100%;">
                        <div id="tpm-main-btn-intro-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px 20px; font-weight:900; font-size:0.9rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A; transform:translate(2px,2px);" onclick="window.tpmSwitchMainTab('intro', 0, 1)">戰術導讀</div>
                    </div>

                    <div id="tpm-main-panel-intro-0" style="display:block; width:100%;">
                        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">⚙️ 1. 會做什麼</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">教導新人深入觀測終端市場（凡間）的底層數據、洞察對手雷達動態與最終用戶核心痛點。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">🎯 2. 目的</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">將模糊的市場慾望與痛點數據，完美收斂、剛性轉化為一幅高咬合度的產品需求規格書（PRD）。</div></div>
                            <div style="background:#FFF; border:2px solid #1A1A1A; border-radius:6px; padding:12px; box-shadow:2px 2px 0px #1A1A1A;"><div style="font-size:0.75rem; font-weight:900; color:#475569; border-bottom:1px dashed #1A1A1A; padding-bottom:4px; margin-bottom:6px;">👁️ 3. 期望結果</div><div style="font-size:0.82rem; font-weight:700; line-height:1.4; color:#1A1A1A;">學員能看清規格背後的財務代價，絕不允許工程師在開模前設計出脫離成本預算的幻想規格。</div></div>
                        </div>
                        <div style="margin-top:15px; border:2px solid #1A1A1A; border-radius:8px; padding:16px; background:#FFF; box-shadow:4px 4px 0px #1A1A1A;">
                            <div style="font-weight:900; font-size:0.85rem; color:#1A1A1A; margin-bottom:10px;">📋 關鍵詞 / Keywords</div>
                            <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px; margin-bottom:12px;">
                                <div class="kbtn-intro-0" id="kbtn-intro-0-0" style="background:#FDE047; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:1px 1px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('intro', 0, 0, 'Market Research (終端市場大數據調研)', '跨越盲人摸象。透過觀測競品市佔率與大數據分析，精確摸清當前凡間市場的真實防禦邊界與潛在切入盲區。')">Market Research</div>
                                <div class="kbtn-intro-0" id="kbtn-intro-0-1" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('intro', 0, 1, 'User Pain-Point (終端用戶核心痛點病灶)', '隱藏在消費者退貨單或抱怨中的核心需求。如充電過熱、夜拍噪點過大。將其就地轉化為規格書的第一優先級防線。')">User Pain-Point</div>
                                <div class="kbtn-intro-0" id="kbtn-intro-0-2" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('intro', 0, 2, 'Competitor Dynamics (競爭對手動態偵測)', '隨時追蹤友商在研專案、開模進度與定價策略，在時間差上發動強行代償、精準進行護城河攔截。')">Competitor</div>
                                <div class="kbtn-intro-0" id="kbtn-intro-0-3" style="background:#FFFFFF; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center; font-weight:900; font-size:0.82rem; cursor:pointer; box-shadow:2px 2px 0px #1A1A1A;" onclick="window.tpmSwitchSubKwd('intro', 0, 3, 'Product Definition (系統級產品戰術定義)', '將混亂的慾望收斂成明確的手機硬體特徵（如：鎖定超薄＋長續航大盤），是擊發整個專案生命週期的第一顆子彈。')">Definition</div>
                            </div>
                            <div style="background:#FFFDF2; border:1.5px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                                <div id="ktxt-title-intro-0"><b>全稱：</b>Market Research (終端市場大數據調研)</div>
                                <div id="ktxt-desc-intro-0" style="margin-top:4px; color:#475569;"><b>意思：</b>跨越盲人摸象。透過觀測競品市佔率與大數據分析，精確摸清當前凡間市場的真實防禦邊界與潛在切入盲區。</div>
                            </div>
                        </div>
                    </div>
                `
            },
            // ==========================================
            // PAGE 2: 預言者天平互動沙盒 (Scope: scale)
            // ==========================================
            {
                title: "2. 互動式開發沙盒 (【預言者天平】與有限成本賽局關係)",
                text: `
                    <div style="background:#FFF; border:3px solid #1A1A1A; border-radius:12px; padding:20px; box-shadow:4px 4px 0px #1A1A1A; margin-bottom:20px; width:100%;">
                        <div style="font-weight:900; font-size:1.1rem; color:#1A1A1A; margin-bottom:6px;">⚖️ 戰術互動：預言者規格天平</div>
                        <div style="font-size:0.85rem; font-weight:700; color:#475569; margin-bottom:15px;">
                            大原則：你手頭上只有 <span style="color:#EF4444; font-weight:900;">100 枚金幣</span> 的剛性預算。點擊投入規格積木，在有限成本內堆疊出最高的市場慾望。一旦超越 100 枚，天平將當場失衡崩塌、專案流產！
                        </div>

                        <div style="width:100%; height:120px; background:#F8FAFC; border:2px solid #1A1A1A; border-radius:8px; position:relative; display:flex; align-items:center; justify-content:center; overflow:hidden; margin-bottom:15px;">
                            <div style="position:absolute; bottom:15px; width:20px; height:30px; background:#1A1A1A; clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></div>
                            <div id="scale-balance-arm" style="position:absolute; width:80%; height:8px; background:#1A1A1A; top:65px; transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform-origin: center center;">
                                <div style="position:absolute; left:-10px; top:-25px; width:45px; height:25px; border-bottom:4px solid #1A1A1A; border-left:2px solid #1A1A1A; border-right:2px solid #1A1A1A; background:#E2E8F0; border-radius:0 0 8px 8px; text-align:center; font-size:0.65rem; font-weight:900; line-height:22px;">❤️ 慾望</div>
                                <div style="position:absolute; right:-10px; top:-25px; width:45px; height:25px; border-bottom:4px solid #EF4444; border-left:2px solid #EF4444; border-right:2px solid #EF4444; background:#FEE2E2; border-radius:0 0 8px 8px; text-align:center; font-size:0.65rem; font-weight:900; line-height:22px; color:#EF4444;">💰 成本</div>
                            </div>
                        </div>

                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:15px;">
                            <div style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center;">
                                <div style="font-size:0.75rem; font-weight:900; color:#475569;">當前規格消耗金幣 (上限 100)</div>
                                <div style="font-size:1.8rem; font-weight:900; color:#EF4444;"><span id="scale-cost-value">0</span> / 100</div>
                                <div style="width:100%; height:8px; background:#E2E8F0; border:1px solid #000; border-radius:4px; overflow:hidden; margin-top:5px;">
                                    <div id="scale-budget-fill" style="width:0%; height:100%; background:#22C55E; transition:width 0.2s;"></div>
                                </div>
                            </div>
                            <div style="background:#FFFDF2; border:2px solid #1A1A1A; border-radius:6px; padding:10px; text-align:center;">
                                <div style="font-size:0.75rem; font-weight:900; color:#475569;">誘發市場慾望綜合指數</div>
                                <div style="font-size:1.8rem; font-weight:900; color:#22C55E;" id="scale-desire-value">0</div>
                                <div id="scale-alert-status" style="font-size:0.72rem; font-weight:900; margin-top:12px; color:#64748B;">⚖️ 天平處於空載狀態，請投入市場規格積木。</div>
                            </div>
                        </div>

                        <div style="font-weight:900; font-size:0.82rem; margin-bottom:8px;">📋 可選用硬體規格積木（點擊原地裝填/卸載）：</div>
                        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:10px;">
                            <input type="checkbox" id="mspec-chk-cpu" style="display:none;">
                            <input type="checkbox" id="mspec-chk-frame" style="display:none;">
                            <input type="checkbox" id="mspec-chk-battery" style="display:none;">
                            <input type="checkbox" id="mspec-chk-camera" style="display:none;">

                            <div class="flow-node-block" id="mspec-block-cpu" style="padding:10px; font-size:0.78rem;" onclick="window.tpm_MRK_ToggleSpec('cpu', 45, 35)">🚀 3奈米頂級晶片<br><span style="font-size:0.68rem;font-weight:500;color:#64748B;">成本+45 / 慾望+35</span></div>
                            <div class="flow-node-block" id="mspec-block-frame" style="padding:10px; font-size:0.78rem;" onclick="window.tpm_MRK_ToggleSpec('frame', 30, 20)">🛡️ 鈦合金防護中框<br><span style="font-size:0.68rem;font-weight:500;color:#64748B;">成本+30 / 慾望+20</span></div>
                            <div class="flow-node-block" id="mspec-block-battery" style="padding:10px; font-size:0.78rem;" onclick="window.tpm_MRK_ToggleSpec('battery', 35, 25)">🔋 6500mAh大鋰電<br><span style="font-size:0.68rem;font-weight:500;color:#64748B;">成本+35 / 慾望+25</span></div>
                            <div class="flow-node-block" id="mspec-block-camera" style="padding:10px; font-size:0.78rem;" onclick="window.tpm_MRK_ToggleSpec('camera', 40, 30)">📸 一吋大底潛望鏡<br><span style="font-size:0.68rem;font-weight:500;color:#64748B;">成本+40 / 慾望+30</span></div>
                        </div>
                    </div>
                `
            },
            // ==========================================
            // PAGE 3: 五維雷達圖鑑完全體 (Scope: radar)
            // ==========================================
            {
                title: "3. 數據視覺化大盤 (市場慾望五維雷達限界圖)",
                text: `
                    <div style="background:#FFF; border:3px solid #1A1A1A; border-radius:12px; padding:20px; box-shadow:4px 4px 0px #1A1A1A; width:100%;">
                        <div style="font-weight:900; font-size:1.1rem; color:#1A1A1A; margin-bottom:12px;">📊 戰術圖鑑：五維技術限制邊界</div>
                        
                        <div style="display:flex; flex-direction:column; gap:12px; background:#FFFDF2; border:2px solid #1A1A1A; padding:16px; border-radius:8px; box-shadow:2px 2px 0px #1A1A1A; margin-bottom:15px;">
                            <div>
                                <div style="display:flex; justify-content:space-between; font-weight:900; font-size:0.82rem; margin-bottom:4px;"><span>💵 1. 價格邊界 (Price Penalty)</span><span style="color:#EF4444;">剛性極限 $999 溢價</span></div>
                                <div style="width:100%; height:14px; background:#E2E8F0; border:2px solid #1A1A1A; border-radius:4px; overflow:hidden;"><div style="width:90%; height:100%; background:#EF4444;"></div></div>
                            </div>
                            <div>
                                <div style="display:flex; justify-content:space-between; font-weight:900; font-size:0.82rem; margin-bottom:4px;"><span>⚡ 2. 運算效能 (Performance Core)</span><span style="color:#22C55E;">標竿 250萬分防線</span></div>
                                <div style="width:100%; height:14px; background:#E2E8F0; border:2px solid #1A1A1A; border-radius:4px; overflow:hidden;"><div style="width:85%; height:100%; background:#22C55E;"></div></div>
                            </div>
                            <div>
                                <div style="display:flex; justify-content:space-between; font-weight:900; font-size:0.82rem; margin-bottom:4px;"><span>⚖️ 3. 整機重量 (Weight Limit)</span><span style="color:#3B82F6;">鋼鐵死線 221 克</span></div>
                                <div style="width:100%; height:14px; background:#E2E8F0; border:2px solid #1A1A1A; border-radius:4px; overflow:hidden;"><div style="width:70%; height:100%; background:#3B82F6;"></div></div>
                            </div>
                            <div>
                                <div style="display:flex; justify-content:space-between; font-weight:900; font-size:0.82rem; margin-bottom:4px;"><span>🔋 4. 續航極限 (Endurance boundary)</span><span style="color:#F59E0B;">標竿 1.8 天高頻通航</span></div>
                                <div style="width:100%; height:14px; background:#E2E8F0; border:2px solid #1A1A1A; border-radius:4px; overflow:hidden;"><div style="width:95%; height:100%; background:#F59E0B;"></div></div>
                            </div>
                        </div>

                        <div style="background:#FEF9E7; border:2px solid #1A1A1A; border-radius:6px; padding:12px; font-size:0.82rem; font-weight:700; line-height:1.5; color:#1A1A1A;">
                            💡 <strong>TPM 戰術現勘點評：</strong>五維雷達圖定義了專案的「物理邊界」。市場調研的核心不是盲目堆砌參數，而是利用數據代償。在重量與續航力發生物理干涉時，強行利用新工藝材料在中框降重，死守產品生命週期的綠燈水位。
                        </div>
                    </div>
                `
            }
        ],
        // ─── 👑 滿血擴充：12 題 1-4 專屬市場預言術硬核題庫 ───
        examVault: [
            // [領域 A: 市場觀測大數據]
            { q: "在發動新手機專案評審前，用以觀測終端市場數據、對手動態並凝聚為規格藍圖的最高指導法規是？", o: ["MRK 市場需求書與 PRD", "SOP 作業指導書", "AVL 供應商名冊"], a: 0 },
            { q: "當專案在有限的 Cost Budget（成本金幣金額）內發生規格超載、無法守住製造利潤時，天平會？", o: ["規格大爆炸當場熔斷、天平崩塌", "產品的直通良率大幅增加", "自動進入大量產 MP 階段"], a: 0 },
            { q: "在市場慾望五維技術極限邊界中，若整機重量（Weight Limit）跨越了多少克的鋼鐵死線，會引發客退抱怨？", o: ["150克", "221克", "350克"], a: 1 },
            { q: "TPM 在審查 MRD/PRD 前期，去觀測凡間消費者抱怨充電過熱或夜拍噪點，這屬於解鎖哪一項指標？", o: ["User Pain-Point 用戶痛點病灶", "Forecast 產能預測", "Cpk 製程精準度"], a: 0 },
            
            // [領域 B: 規格限制賽局]
            { q: "在預言者天平沙盒博弈中，盲目塞入『3奈米頂級晶片』與『一吋大底潛望鏡』會直接導致？", o: ["專案利潤空間擴大", "財務成本預算爆炸、天平瞬間失衡", "線體拉速大幅增高"], a: 1 },
            { q: "為了防止研發工程師在出圖前私自堆疊不可能量產的『幻想規格』，TPM 必須在開模前鎖死？", o: ["BOM Cost 成本與規格限制邊界", "SOP 指導手冊", "OBA 抽檢水準"], a: 0 },
            { q: "在手機開發規格賽局中，當續航力與重量發生剛性物理干涉時，最常見的代償工藝手段是？", o: ["放任產品超重", "引進新工藝輕量化材料（如鈦合金中框）進行局部降重", "直接切斷電池容量"], a: 1 },
            { q: "市場需求大調研中，偵測並盯緊友商的開模進度、晶片方案與定價策略，在時間差上發動強行代償的戰術是？", o: ["Competitor Dynamics 競爭對手動態偵測", " MSMSD 溫濕度管制", "SPI 3D鐳射全檢"], a: 0 },
            
            // [領域 C: 規格書收斂與轉換]
            { q: "由品牌客戶端（Brand）擊發、定義新手機全局硬體技術參數與功能底線的技術聖經文件簡稱為？", o: ["PRD 產品規格需求書", "DFM 製造導向設計", "AVL AVL清單"], a: 0 },
            { q: "市場慾望雷達圖中，Price Penalty 指的是哪一項技術維度的剛性邊界限制？", o: ["價格溢價門檻", "核心運算速度", "電池熱脹冷縮"], a: 0 },
            { q: "在市場預言術中，將混亂的凡間市場需求轉化為清晰的產品特徵（如鎖定超薄高定辨識度），這個動作稱為？", o: ["Product Definition 產品戰術定義", "FIFO 先進先出", "PM 預防性維護"], a: 0 },
            { q: "大流水線開線前夕，若市場前端反饋競品爆發集體惡性降價，TPM 的財務防線動作是？", o: ["坐等開線放水", "現地重核預算，清查 BOM Cost 利潤代償裕度", "直接撕毀圖紙"], a: 1 }
        ]
    }
];

// 👑 雙層隨機亂序引擎：100% 打亂選項順序並動態重算答案索引 👑
(function() {
    if (!window.codexCourseEngineData || window.codexCourseEngineData.length === 0) return;
    const vault = window.codexCourseEngineData[0].examVault;
    
    for (let i = 0; i < vault.length; i++) {
        let qItem = vault[i];
        let correctText = qItem.o[qItem.a]; 
        
        for (let s = qItem.o.length - 1; s > 0; s--) {
            const r = Math.floor(Math.random() * (s + 1));
            [qItem.o[s], qItem.o[r]] = [qItem.o[r], qItem.o[s]];
        }
        
        qItem.a = qItem.o.indexOf(correctText);
    }

    for (let i = vault.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vault[i], vault[j]] = [vault[j], vault[i]];
    }
    
    window.codexCourseEngineData[0].examVault = vault.slice(0, 3);
})();
