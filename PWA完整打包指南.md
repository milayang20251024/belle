# Belle 記帳本 - PWA 完整打包指南 📱

## 🎯 三種方案比較

### 方案 1：PWA（推薦）⭐⭐⭐⭐⭐
- ✅ **優點：** 免費、簡單、跨平台、無需審核
- ✅ **安裝方式：** 瀏覽器直接安裝到主畫面
- ✅ **體驗：** 像原生 App 一樣（全螢幕、有圖示、離線可用）
- ❌ **限制：** 無法上架 App Store/Google Play

### 方案 2：Capacitor 打包 ⭐⭐⭐⭐
- ✅ **優點：** 真正的原生 App、可上架商店
- ✅ **功能：** 可使用原生 API（相機、通知等）
- ❌ **缺點：** 需要 Xcode/Android Studio、開發者帳號
- ❌ **成本：** iOS 開發者 $99/年

### 方案 3：WebView App ⭐⭐⭐
- ✅ **優點：** 簡單、可上架
- ❌ **缺點：** 功能較少、需要開發環境

---

## 🚀 方案 1：PWA 安裝（最簡單）

### 📋 已完成的工作

#### ✅ 1. HTML 已添加 PWA 支援
```html
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="default"/>
<meta name="theme-color" content="#cec6f3"/>
<link rel="manifest" href="manifest.json"/>
```

#### ✅ 2. manifest.json 已創建
```json
{
  "name": "Belle的每日記帳本",
  "short_name": "Belle記帳",
  "display": "standalone",
  ...
}
```

#### ✅ 3. Service Worker 已創建
```javascript
// service-worker.js
- 離線緩存
- 自動更新
- 快取策略
```

---

### 🎨 Step 1：創建 App 圖示

#### 需要的圖示尺寸
```
icon-192.png  (192x192)
icon-512.png  (512x512)
```

#### 方法 A：使用線上工具（推薦）

**1. 去 Canva 創建圖示：**
```
1. 訪問 canva.com
2. 搜尋 "App Icon"
3. 選擇 512x512 模板
4. 設計你的圖示：
   - 背景：薰衣草紫 #cec6f3
   - 主圖：錢幣圖示或筆記本圖示
   - 文字：Belle 或 💰
5. 下載為 PNG
```

**2. 調整尺寸：**
```
1. 訪問 iloveimg.com/resize-image
2. 上傳你的圖示
3. 調整為 512x512 → 下載為 icon-512.png
4. 調整為 192x192 → 下載為 icon-192.png
```

#### 方法 B：使用圖片編輯軟體

**Photoshop/GIMP：**
```
1. 新建文件：512x512 px
2. 背景填充：#cec6f3
3. 添加圖示（emoji 或圖形）
4. 導出為 PNG：icon-512.png
5. 縮小為 192x192：icon-192.png
```

#### 方法 C：使用簡單的 HTML 生成

我可以幫你生成一個簡單的圖示：

```html
<!-- 複製到瀏覽器，右鍵保存為圖片 -->
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <!-- 背景 -->
  <rect width="512" height="512" fill="#cec6f3" rx="80"/>
  
  <!-- 錢幣圖示 -->
  <circle cx="256" cy="220" r="100" fill="#fff" opacity="0.9"/>
  <text x="256" y="250" font-size="80" text-anchor="middle" fill="#7e61e7">💰</text>
  
  <!-- 文字 -->
  <text x="256" y="380" font-size="60" font-weight="bold" text-anchor="middle" fill="#fff">Belle</text>
  <text x="256" y="430" font-size="32" text-anchor="middle" fill="#fff">記帳本</text>
</svg>
```

---

### 📤 Step 2：上傳到伺服器

#### 選項 A：GitHub Pages（免費、推薦）

**1. 創建 GitHub 帳號**
```
訪問 github.com → Sign up
```

**2. 創建新 Repository**
```
1. 點擊右上角 "+" → New repository
2. 名稱：belle-accounting
3. 勾選 "Public"
4. 勾選 "Add a README file"
5. Create repository
```

**3. 上傳文件**
```
1. 點擊 "Add file" → "Upload files"
2. 拖入以下文件：
   ✓ Belle_5_0薰衣紫_完整修正版.html
   ✓ manifest.json
   ✓ service-worker.js
   ✓ icon-192.png
   ✓ icon-512.png
3. 點擊 "Commit changes"
```

**4. 啟用 GitHub Pages**
```
1. 進入 Settings
2. 側邊欄選擇 "Pages"
3. Source 選擇 "main" branch
4. 點擊 "Save"
5. 等待 1-2 分鐘
6. 網址會顯示：https://你的帳號.github.io/belle-accounting/
```

**5. 重新命名 HTML（可選）**
```
將 Belle_5_0薰衣紫_完整修正版.html 改名為 index.html
這樣網址會更簡潔：
https://你的帳號.github.io/belle-accounting/
```

#### 選項 B：Netlify（更簡單）

```
1. 訪問 netlify.com
2. 點擊 "Sign up" (可用 GitHub 登入)
3. 點擊 "Add new site" → "Deploy manually"
4. 拖入所有文件
5. 完成！會得到一個網址
```

#### 選項 C：Vercel

```
1. 訪問 vercel.com
2. Sign up
3. Import Git Repository 或 直接拖入文件
4. Deploy
```

---

### 📱 Step 3：在手機上安裝

#### iOS (iPhone/iPad)

**1. 開啟 Safari 瀏覽器**
```
⚠️ 必須使用 Safari，Chrome 不支援！
```

**2. 訪問你的網址**
```
例如：https://你的帳號.github.io/belle-accounting/
```

**3. 添加到主畫面**
```
1. 點擊底部「分享」按鈕 📤
2. 滑動找到「加入主畫面」
3. 輸入名稱（例如：Belle記帳）
4. 點擊「新增」
```

**4. 打開 App**
```
1. 回到主畫面
2. 找到 Belle 記帳圖示
3. 點擊開啟
4. ✨ 像原生 App 一樣全螢幕顯示！
```

#### Android

**1. 開啟 Chrome 瀏覽器**

**2. 訪問你的網址**

**3. 安裝 App**
```
方法 1：自動提示
- 瀏覽器底部會彈出「加入主畫面」橫幅
- 點擊「安裝」

方法 2：手動安裝
- 點擊右上角 ⋮（更多）
- 選擇「加入主畫面」或「安裝應用程式」
- 點擊「安裝」
```

**4. 打開 App**
```
1. 回到主畫面或應用程式列表
2. 找到 Belle 記帳
3. 點擊開啟
```

---

## 🎯 PWA 的優勢

### ✨ 像原生 App 一樣

```
✓ 全螢幕顯示（無瀏覽器工具列）
✓ 有專屬圖示和名稱
✓ 出現在 App 列表中
✓ 可以從主畫面啟動
✓ 離線可用（Service Worker）
✓ 開啟速度快（緩存）
```

### 💾 離線功能

```
✓ 首次載入後，即使沒網路也能用
✓ 資料儲存在 localStorage（不會丟失）
✓ Service Worker 自動緩存資源
```

### 🔄 自動更新

```
✓ 每次開啟時檢查更新
✓ 有新版本時自動下載
✓ 下次開啟時自動套用
```

---

## 🛠️ 方案 2：Capacitor 打包（進階）

### 如果想上架 App Store/Google Play

#### 準備工作

**macOS 必備：**
```
✓ Xcode（從 Mac App Store 免費下載）
✓ Node.js（從 nodejs.org 下載）
✓ iOS 開發者帳號（$99/年）
```

**Windows/macOS/Linux：**
```
✓ Android Studio（免費）
✓ Node.js
✓ Google Play 開發者帳號（$25 一次性）
```

#### 步驟

**1. 安裝 Capacitor**
```bash
npm install -g @capacitor/cli
```

**2. 初始化專案**
```bash
mkdir belle-app
cd belle-app
npm init -y
npm install @capacitor/core @capacitor/cli
npx cap init
```

**3. 配置**
```
App name: Belle記帳本
App ID: com.yourdomain.belle
```

**4. 添加平台**
```bash
# iOS
npx cap add ios

# Android
npx cap add android
```

**5. 複製網頁文件**
```bash
# 將所有 HTML/JS/CSS 放到 www 資料夾
cp Belle_5_0薰衣紫_完整修正版.html www/index.html
cp manifest.json www/
cp service-worker.js www/
cp icon-*.png www/
```

**6. 同步並打開**
```bash
# iOS
npx cap sync ios
npx cap open ios
→ 在 Xcode 中編譯和上架

# Android  
npx cap sync android
npx cap open android
→ 在 Android Studio 中編譯和上架
```

---

## 🎨 方案 3：使用 WebView 框架

### iOS - WKWebView

**使用現成工具：**

**選項 A：WebViewGold**
```
✓ 購買：$79（一次性）
✓ 拖放式介面
✓ 自動生成 iOS App
✓ 包含上架指南
```

**選項 B：AppPresser**
```
✓ 線上服務
✓ 每月訂閱
✓ 自動生成 App
```

### Android - WebView

**使用 Android Studio：**

**1. 創建新專案**
```
1. 開啟 Android Studio
2. New Project → Empty Activity
3. 語言選擇：Kotlin
```

**2. 修改 MainActivity.kt**
```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        val webView = WebView(this)
        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        webView.loadUrl("https://你的網址.com")
        
        setContentView(webView)
    }
}
```

**3. 編譯 APK**
```
Build → Build Bundle(s) / APK(s) → Build APK(s)
```

---

## 📊 方案選擇建議

### 適合 PWA 的情況 ✅
```
✓ 不需要上架 App Store/Play Store
✓ 想要快速部署
✓ 跨平台使用（iOS + Android）
✓ 不需要原生功能（相機、推播等）
✓ 免費方案
```

### 需要原生 App 的情況 🔧
```
✓ 需要上架應用商店
✓ 需要使用相機、GPS 等原生功能
✓ 需要推播通知
✓ 願意付費（開發者帳號）
✓ 有技術能力或預算
```

---

## 🎯 推薦流程（最簡單）

### 第 1 步：創建圖示
```
1. 用 Canva 或任何工具
2. 創建 512x512 的圖示
3. 調整為 192x192
```

### 第 2 步：上傳到 GitHub Pages
```
1. 註冊 GitHub
2. 創建 Repository
3. 上傳所有文件
4. 啟用 Pages
```

### 第 3 步：安裝到手機
```
iOS: Safari → 分享 → 加入主畫面
Android: Chrome → 更多 → 加入主畫面
```

### 完成！🎉
```
現在你有一個：
✓ 像原生 App 的記帳本
✓ 可以離線使用
✓ 有專屬圖示
✓ 完全免費
```

---

## 💡 常見問題

### Q: PWA 和原生 App 有什麼差別？

**PWA：**
- ✅ 通過瀏覽器安裝
- ✅ 跨平台
- ✅ 自動更新
- ❌ 不在 App Store 裡
- ❌ 功能較少

**原生 App：**
- ✅ 在 App Store 裡
- ✅ 功能完整
- ✅ 更好的性能
- ❌ 需要審核
- ❌ 需要付費帳號

### Q: 資料會不會丟失？

**不會！**
```
✓ 使用 localStorage 儲存在手機
✓ 即使刪除 App 再安裝，資料還在
✓ 除非清除瀏覽器資料
```

### Q: 可以更新嗎？

**可以！**
```
1. 修改 HTML 文件
2. 上傳到伺服器
3. 手機開啟 App
4. Service Worker 自動下載更新
5. 關閉再開啟，就是新版本
```

### Q: 需要伺服器嗎？

**需要！但免費的就夠用：**
```
✓ GitHub Pages（免費）
✓ Netlify（免費）
✓ Vercel（免費）
```

### Q: 可以分享給別人嗎？

**可以！**
```
1. 把網址傳給對方
2. 對方用瀏覽器開啟
3. 對方安裝到主畫面
4. 完成！
```

---

## 📝 檢查清單

### 文件準備
- [ ] Belle_5_0薰衣紫_完整修正版.html
- [ ] manifest.json
- [ ] service-worker.js
- [ ] icon-192.png
- [ ] icon-512.png

### 上傳到伺服器
- [ ] 註冊 GitHub/Netlify/Vercel
- [ ] 上傳所有文件
- [ ] 測試網址可以訪問

### 手機安裝
- [ ] iOS：Safari 安裝
- [ ] Android：Chrome 安裝
- [ ] 測試離線功能
- [ ] 測試記帳功能

### 完成！🎊
- [ ] App 圖示出現在主畫面
- [ ] 點擊開啟是全螢幕
- [ ] 功能正常運作

---

## 🚀 開始行動

**最快 10 分鐘完成：**

```
1. [5 min] 創建圖示（Canva）
2. [3 min] 上傳到 GitHub Pages
3. [2 min] 手機安裝

總共：10 分鐘
花費：$0
```

**開始吧！** 💪✨
