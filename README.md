# NEW-ECM-MODEL (Frontend)

Socrates ECM 週期預測模型的前端（React + Vite + TypeScript）。後端 API 位於獨立的 repo，本專案透過 Vite proxy 將 `/api/*` 轉發到後端。

## 前置需求
- Node.js（本專案以 v24 測試）
- 後端 server 已在本機 `http://localhost:3000` 執行（負責 Gemini / DeepSeek / Jev 的 API key）

## 本機執行
```bash
npm install
npm run dev
```
開啟 http://localhost:5173 （`/api/*` 會自動 proxy 到 `http://localhost:3000`）。

## Firebase
- client config 在 `firebase-applet-config.json`（專案 `socrates-ecm`）
- Firestore 規則在 `firestore.rules`（`users/{userId}/trades`、`users/{userId}/watchlist`）

## LLM 供應商切換
右上角「LLM」下拉選單可切換 Gemini / DeepSeek（存在 localStorage `ecm_llm_provider`，對下一次請求生效）。Jev 決策模型由後端 `/api/jev/decide` 提供。
