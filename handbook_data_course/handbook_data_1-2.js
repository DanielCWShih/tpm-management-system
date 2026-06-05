/**
 ========================================================================
 FILE: handbook_data_course/handbook_data_1-2.js
 VERSION: 2026-06-05 V1.10-CORE-ALIGN
 DESCRIPTION: 👑 系統 TPM 冒險者手冊 1-2 獨立沙盒劇本物料（精準文字對位版）
 TITLE: 1-2: 防水結構 Worst-Case 模擬與幾何流產盲區
 ========================================================================
 */

window.tpmSandboxScriptTree = {
    "START-NODE": {
        id: "START-NODE",
        type: "story",
        title: "08:30 氣密測試集體流產",
        text: `<h3>🚨 突發災難：IPX8 氣密全面熔斷</h3>
               <p>你剛到 FATP（總裝現場）防水測試站，生管（PC）就面色鐵青地攔住你。今天剛開線的防水旗艦機型，氣密測試（Acoustic Air Leak Test）失效值突然飆高到 <b>35%</b>！全線被 SFC 系統自動 Hold 住，產線瞬間陷入癱瘓。</p>
               <p>生管咬牙切齒地對你說：『 Daniel 部長今天拿著出貨大盤在盯進度！這肯定是測試機台的治具漏氣，你先把 SFC 的防水站路由（Routing）強行 Skip 掉，讓我們刷產量，晚點再校正機台！』</p>`,
        nextNodes: ["DECISION-NODE-01"]
    },

    "DECISION-NODE-01": {
        id: "DECISION-NODE-01",
        type: "decision",
        title: "⚡ 抉擇點：生管的剛性出貨施壓",
        question: "此時身為線體最高 System TPM 負責人，你的下一個戰術動作是？",
        options: [
            { text: "同意生管PC，為了 Daniel 部長的出貨指標，在 SFC 後台按下 Skip放行", target: "FAIL-NODE-SKIP" },
            { text: "剛性回絕 PC，現場怒拍桌子大吵，堅決不放行，讓線體停工死磕", target: "WARN-NODE-FIGHT" },
            { text: "嫌疑幾何流產，開啟 4M1E 點檢，並下線抓取「實體壓縮特徵」數據進行對位", target: "QUIZ-NODE-STACKUP" }
        ]
    },

    "FAIL-NODE-SKIP": {
        id: "FAIL-NODE-SKIP",
        type: "end_fail",
        title: "💥 結局：Daniel 部長之震怒雷霆",
        text: `<h3>❌ 通關失敗：盲目放行的盲區代價</h3>
               <p>你向 PC 的出貨施壓妥協，在 SFC 偷偷 Skip 氣密測試放行了 2,000 台產品。3 週後，這批機器抵達北美港口，客戶抽檢驚覺<b>集體進水、主機板短路燒毀</b>！</p>
               <p>Daniel 部長在週會上怒摔馬克杯，當場咆哮：『 哪一個工程師 Skip 路由的？拉出來嚴肅檢討！』你的品質操守亮起紅燈，職能試煉失敗。</p>`,
        nextNodes: []
    },

    "WARN-NODE-FIGHT": {
        id: "WARN-NODE-FIGHT",
        type: "end_fail",
        title: "⚠️ 結局：跨部門溝通僵局",
        text: `<h3>❌ 通關失敗：缺乏科學溝通的對立</h3>
               <p>你選擇跟 PC 怒拍桌子互吼：『 我是 TPM，不符合規格就是不准放行！』現場 PC 直接擺爛，宣布產線全體下班停工，造成今日出貨指標直接掛零。</p>
               <p>PC 聯合廠長聯名發信檢討你『 缺乏客觀數據佐證，工作態度粗暴，缺乏跨部門協調力 』。你雖然守住了品質紅線，但也陷入了合作僵局，職能試煉失敗。</p>`,
        nextNodes: []
    },

    "QUIZ-NODE-STACKUP": {
        id: "QUIZ-NODE-STACKUP",
        type: "quiz",
        title: "限制技術排查：尺寸堆疊與幾何盲區",
        question: "你要向廠區高層證明這不是「機台誤判」，而是實體防水結構發生了「幾何流產（Worst-Case 尺寸堆疊崩潰）」，你第一時間應該調閱並核對以下哪一組物料數據？",
        options: [
            { text: "A. 點檢 O-Ring 供應商今天進料的 CPK 曲線與實體斷面硬度（Hardness）數據", isCorrect: false },
            { text: "B. 下線用二次次元（OMM）測量機殼溝槽，動態計算【溝槽深度最大值】與【防水膠條直徑最小值】的 Worst-Case 相對擠壓率", isCorrect: true },
            { text: "C. 打開 FAMS 系統，查看前段 SMT 打件站的爐後 AOI 良率回報曲線", isCorrect: false }
        ],
        explanation: `<h3>🎯 執行官大腦詳解：</h3>
                      <p>正解為 <b>B</b>！防水結構失效的本質是幾何賽局。當『溝槽太深（公差上限）』碰上『膠條太細（公差下限）』時，實體壓縮率會直接跌破 <b>15%</b> 的物理紅線，造成氣密集體崩潰。調出 Worst-Case 實測比對，PC 和廠長在科學鐵證面前只能配合停機排查！</p>`,
        nextNodes: ["WIN-NODE-CONQUER"]
    },

    "WIN-NODE-CONQUER": {
        id: "WIN-NODE-CONQUER",
        type: "end_win",
        title: "🏆 通關成功：防水結構防線導通",
        text: `<h3>✅ 成功通關：參透實體與數據的合流</h3>
               <p>你用 Worst-Case 尺寸對位數據成功找到盲區，廠長緊急下令徹查，抓出是 CNC 機殼工廠今天治具鬆動、導致溝槽私自挖深了 0.08mm 的幾何流產工程異常！</p>
               <p>線體緊急修正並全面復線。Daniel 部長在出貨戰報中特別批示：『 TPM 團隊科學排查、有勇有謀，挽救公會資產風險，各記大功一次！』</p>`,
        nextNodes: []
    }
};
